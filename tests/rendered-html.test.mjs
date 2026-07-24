import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the course homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Tutorial Course/);
  assert.match(html, /手を動かして、つくる。/);
  assert.match(html, /実務PRまで、20日・60時間。/);
  assert.match(html, /受講準備から始める/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("renders a complete lesson page with resources, practice, and quizzes", async () => {
  const response = await render("/lessons/terminal-environment");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ターミナル・ファイル・開発環境/);
  assert.match(html, /Introductory Videos for VS Code/);
  assert.match(html, /公式資料をこの順番で読む/);
  assert.match(html, /そのまま使える練習Prompt/);
  assert.match(html, /理解確認クイズ/);
  assert.match(html, /自分のBranchで提出物を作る/);
  assert.match(html, /完了チェック/);
  assert.match(html, /始める前に、ここだけ確認/);
  assert.match(html, /なぜ、今日これを学ぶのか/);
  assert.match(html, /成功すると、こうなります/);
  assert.match(html, /よくあるつまずきと戻り方/);
  assert.match(html, /提出物の書き方/);
  assert.match(html, /repository-map\.example\.md/);
  assert.doesNotMatch(html, /git switch -c training\/day-01-environment/);
  assert.doesNotMatch(html, /Claude Code overview/);
  assert.doesNotMatch(html, /動画をここに埋め込みます/);
});

test("renders the learner onboarding route with accounts and exact startup commands", async () => {
  const response = await render("/start");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /入口は、ここ一つ。/);
  assert.match(html, /BEFORE YOU START/);
  assert.match(html, /GitHub/);
  assert.match(html, /Codex \/ ChatGPT/);
  assert.match(html, /npm run learner:start/);
  assert.match(html, /npm run course -- start 1/);
  assert.match(html, /PORT 3000/);
  assert.match(html, /PORT 8000/);
  assert.match(html, /Codex用Promptをコピー/);
  assert.match(html, /You’re almost in/);
  assert.match(html, /Create codespace on main/);
  assert.match(html, /command not found: npm/);
  assert.match(html, /Day 01からCoachとして利用/);
  assert.doesNotMatch(html, /Day 05以降/);
});

test("renders a searchable plain-Japanese glossary", async () => {
  const response = await render("/glossary");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /分からない言葉を/);
  assert.match(html, /Repository/);
  assert.match(html, /Pull Request/);
  assert.match(html, /AGENTS\.md/);
  assert.match(html, /Secret/);
});

test("renders all 20 days with the complete learning flow", async () => {
  const lessonData = await readFile(
    new URL("../app/data/lessons.ts", import.meta.url),
    "utf8",
  );
  const slugs = [...lessonData.matchAll(/^\s+slug: "([^"]+)",$/gm)].map(
    ([, slug]) => slug,
  );
  assert.equal(slugs.length, 20);

  for (const slug of slugs) {
    const response = await render(`/lessons/${slug}`);
    assert.equal(response.status, 200, `${slug} should render`);
    const html = await response.text();
    assert.match(html, /VIDEO|youtube-nocookie\.com\/embed/);
    assert.match(html, /公式資料をこの順番で読む/);
    assert.match(html, /そのまま使える練習Prompt/);
    assert.match(html, /理解確認クイズ/);
    assert.match(html, /必須提出物/);
    assert.match(html, /完了チェック/);
    assert.match(html, /始める前に、ここだけ確認/);
    assert.match(html, /成功すると、こうなります/);
    assert.match(html, /よくあるつまずきと戻り方/);
    assert.match(html, /提出物の書き方/);
    assert.match(html, new RegExp(`npm run course -- start ${slugs.indexOf(slug) + 1}`));
    assert.match(html, new RegExp(`npm run course -- check ${slugs.indexOf(slug) + 1}`));
  }
});

test("keeps course infrastructure and agent starters in the repository", async () => {
  await Promise.all([
    access(new URL("../AGENTS.md", import.meta.url)),
    access(new URL("../START-HERE.md", import.meta.url)),
    access(new URL("../.devcontainer/devcontainer.json", import.meta.url)),
    access(new URL("../.github/workflows/ci.yml", import.meta.url)),
    access(new URL("../course/tasks/day-01.md", import.meta.url)),
    access(new URL("../course/tasks/day-20.md", import.meta.url)),
    access(new URL("../exercises/01-profile-card/index.html", import.meta.url)),
    access(new URL("../docs/AUTHORING.md", import.meta.url)),
    access(new URL("../docs/GLOSSARY.md", import.meta.url)),
    access(new URL("../learning-log/templates/repository-map.md", import.meta.url)),
    access(new URL("../learning-log/examples/day-01-repository-map.example.md", import.meta.url)),
    access(new URL("../training-lab/artisan", import.meta.url)),
    access(
      new URL(
        "../training-lab/app/Services/CompanyImportService.php",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../practice/python-scraper/src/company_scraper.py",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../starter-kits/claude-code/.claude/skills/trace-laravel-flow/SKILL.md",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../starter-kits/codex/.agents/skills/trace-laravel-flow/SKILL.md",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../starter-kits/plugins/laravel-maintenance/.codex-plugin/plugin.json",
        import.meta.url,
      ),
    ),
  ]);

  const [packageJson, layout, lessonData, taskIndex] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/lessons.ts", import.meta.url), "utf8"),
    readFile(new URL("../course/tasks/index.json", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /lang="ja"/);
  assert.match(lessonData, /training\/day-15-plugin-mcp/);
  assert.equal((lessonData.match(/id: "lesson-\d+"/g) ?? []).length, 20);
  assert.equal((lessonData.match(/quizzes: \[/g) ?? []).length, 20);
  assert.doesNotMatch(lessonData, /git switch -c training\/day-/);
  const taskData = JSON.parse(taskIndex);
  assert.equal(taskData.tasks.length, 20);
  assert.equal(taskData.tasks[0].taskFile, "course/tasks/day-01.md");
  assert.equal(taskData.tasks[19].branch, "exam/final-capstone");
  for (const task of taskData.tasks) {
    assert.ok(task.prerequisites.length >= 3);
    assert.ok(task.terms.length >= 3);
    assert.ok(task.expectedResults.length >= 3);
    assert.ok(task.commonMistakes.length >= 2);
    assert.ok(task.submissionGuide.length >= 2);
  }
});
