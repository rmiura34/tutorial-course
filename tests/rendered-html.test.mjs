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

test("renders the course homepage as a direct 20-day learning route", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Tutorial Course/);
  assert.match(
    html,
    /<a(?=[^>]*class="primary-button")(?=[^>]*href="\/lessons\/terminal-environment")[^>]*>[\s\S]*?Day\s*01から始める[\s\S]*?<\/a>/,
  );
  assert.match(html, /毎回同じ4ステップ\s*[×x]\s*20日/);

  const lessonCards = html.match(/class="lesson-card lesson-[^"]+"/g) ?? [];
  assert.equal(lessonCards.length, 20, "the homepage should render all 20 Day cards");

  assert.doesNotMatch(html, /YOUR PROGRESS/);
  assert.doesNotMatch(html, /進捗をリセット/);
  assert.doesNotMatch(html, /tutorial-course-progress/);
  assert.doesNotMatch(html, /完了にする|未完了にする/);

  assert.doesNotMatch(html, /START BEFORE DAY 01/);
  assert.doesNotMatch(html, /THE FINISH LINE/);
  assert.doesNotMatch(html, /受講準備から始める/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const homepageSource = await readFile(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(homepageSource, /START HERE|href="\/start"/);
});

test("renders a complete lesson page with resources, practice, and quizzes", async () => {
  const response = await render("/lessons/terminal-environment");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ターミナル・ファイル・開発環境/);
  assert.match(html, /このページは説明を見る場所/);
  assert.match(html, /localhost:3000[^<]*で同じ教材サイトを起動する必要はありません/);
  assert.match(html, /実際に作業する画面/);
  assert.match(html, /今日は開かないもの/);
  assert.match(html, /course\/tasks\/day-01\.md/);
  assert.match(html, /元のMarkdown全文/);
  assert.match(html, /ACTUAL TASK FILE/);
  assert.match(html, /Required deliverables/);
  assert.match(html, /今日やること/);
  assert.match(html, /今使う画面/);
  assert.match(html, /Task内容をTerminalに表示/);
  assert.match(html, /先に調べる用語/);
  assert.match(html, /用語集で意味・読み方・使用例を調べる/);
  assert.match(html, /AIへの依頼文/);
  assert.match(html, /理解確認クイズ/);
  assert.match(html, /自分のBranchで提出物を作る/);
  assert.match(html, /完了チェック/);
  assert.match(html, /始める前に、ここだけ確認/);
  assert.match(html, /なぜ、今日これを学ぶのか/);
  assert.match(html, /成功すると、こうなります/);
  assert.match(html, /よくあるつまずきと戻り方/);
  assert.match(html, /提出物の書き方/);
  assert.match(html, /作業する場所/);
  assert.match(html, /なぜやるか/);
  assert.match(html, /成功時の見え方/);
  assert.match(html, /提出方法/);
  assert.match(html, /learning-log\/day-01\/repository-map\.md/);
  assert.doesNotMatch(html, /git switch -c training\/day-01-environment/);
  assert.doesNotMatch(html, /Claude Code overview/);
  assert.doesNotMatch(html, /動画をここに埋め込みます/);
});

test("renders the learner onboarding route with accounts and exact startup commands", async () => {
  const response = await render("/start");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /自分のPCを/);
  assert.match(html, /BEFORE YOU START/);
  assert.match(html, /GitHub/);
  assert.match(html, /Codex \/ ChatGPT/);
  assert.match(html, /VS Code または Cursor/);
  assert.match(html, /https:\/\/code\.visualstudio\.com\/download/);
  assert.match(html, /https:\/\/cursor\.com\/download/);
  assert.match(html, /https:\/\/nodejs\.org\/en\/download/);
  assert.match(html, /Node\.jsをInstallすると一緒にInstallされます/);
  assert.match(html, /brew install node/);
  assert.match(html, /winget install OpenJS\.NodeJS\.LTS/);
  assert.match(html, /File → Open Folder/);
  assert.match(html, /git clone/);
  assert.match(html, /npm run course -- show 1/);
  assert.match(html, /npm run course -- start 1/);
  assert.match(html, /公開教材はそのまま見る/);
  assert.match(html, /Editor内のTerminal/);
  assert.match(html, /localhost:8000/);
  assert.doesNotMatch(html, /npm run learner:start/);
  assert.match(html, /localhostで教材サイトを起動しません/);
  assert.match(html, /Laravel Herd/);
  assert.match(html, /Login不要/);
  assert.match(html, /Create codespace on main/);
  assert.match(html, /command not found: node \/ npm/);
  assert.match(html, /代替手段で、推奨Routeではありません/);
  assert.doesNotMatch(html, /推奨環境はCodespaces|Browser版VS Codeを推奨/);
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
    assert.match(html, /今日やること/);
    assert.match(html, /今使う画面/);
    assert.match(html, /作業する場所/);
    assert.match(html, /Terminalに入力|Terminal入力なし/);
    assert.match(html, /なぜやるか/);
    assert.match(html, /成功時の見え方/);
    assert.match(html, /AIへの依頼文/);
    assert.match(html, /理解確認クイズ/);
    assert.match(html, /必須提出物|あなたが作る最終成果物/);
    assert.match(html, /完了チェック/);
    assert.match(html, /始める前に、ここだけ確認/);
    assert.match(html, /成功すると、こうなります/);
    assert.match(html, /よくあるつまずきと戻り方/);
    assert.match(html, /提出物の書き方/);
    assert.match(html, /提出方法/);
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
