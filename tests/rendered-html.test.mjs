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
  assert.match(html, /最初の公開まで、8レッスン。/);
  assert.match(html, /Lesson 01から始める/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("renders a lesson page with practice and quiz", async () => {
  const response = await render("/lessons/html");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /HTMLで自己紹介を書こう/);
  assert.match(html, /3分チェック/);
  assert.match(html, /自分のブランチで実装しよう/);
  assert.match(html, /完了チェック/);
});

test("keeps course infrastructure in the repository", async () => {
  await Promise.all([
    access(new URL("../.devcontainer/devcontainer.json", import.meta.url)),
    access(new URL("../.github/workflows/ci.yml", import.meta.url)),
    access(new URL("../exercises/01-profile-card/index.html", import.meta.url)),
    access(new URL("../docs/AUTHORING.md", import.meta.url)),
  ]);

  const [packageJson, layout, lessonData] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/lessons.ts", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /lang="ja"/);
  assert.match(lessonData, /lesson\/02-html/);
});
