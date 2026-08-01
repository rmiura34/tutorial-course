---
schema_version: 1
day: 12
week: 3
branch: training/day-12-playwright
workspace: practice/python-scraper
duration_minutes: 180
---

# Day 12 — Playwright・認証・動的Scraping

## Goal

ログイン状態を安全に保存し、一覧とPaginationを巡回するPlaywright処理を作れる

## Why this matters

Paginationと重複除去は実務Scraperで頻出します。停止条件を誤ると無限Loopや同じDataの大量登録につながります。

## Before you start

- [ ] Day 11の1ページ取得が成功
- [ ] 一意にできるKey候補を確認
- [ ] 最大ページ数を安全な小さい値に設定

## 先に調べる用語

- **Pagination:** 結果を複数ページに分ける仕組み
- **重複排除:** 同じ対象を一度だけ残す処理
- **停止条件:** Loopを終了する明確な判断

## Start command

```bash
npm run course -- start 12
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-12.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-12-playwright and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-12/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:45 任意動画／Locator確認:** Playwright未経験者は日本語Seriesの必要な章を見る。経験者はLocator演習へ進む
- **0:45–1:25 公式資料:** Locator、Auto-wait、Auth、Network、Debug
- **1:25–2:35 自動化演習:** Login、一覧、Pagination、Download
- **2:35–3:00 比較:** UI操作とAPI取得の選択理由を提出

## Learning resources

### 必修

- **Microsoft Learn: PlaywrightでBuildする**（日本語・25分）— 最初のTest、Locator、Assertion、実行を日本語で学ぶ必修教材です。 [開く](https://learn.microsoft.com/ja-jp/training/modules/build-with-playwright/)

### 任意・困ったときだけ

- **Playwrightを使用したE2E Test入門（日本語字幕）**（日本語・必要な章だけ・約45分）— Playwrightが初めての人向けの公式動画Seriesです。Installation、実行、作成、Debugから必要な章だけ視聴します。 [必要なときだけ開く](https://learn.microsoft.com/ja-jp/shows/getting-started-with-end-to-end-testing-with-playwright/)
- **Locators（英語・補助）**（英語・必要時12分）— role、label、text、test idの詳細を確認するときだけ参照します。日本語公式版はありません。 [必要なときだけ開く](https://playwright.dev/docs/locators)
- **Auto-waiting（英語・補助）**（英語・必要時10分）— 待機の理由が分からない場合だけ参照します。 [必要なときだけ開く](https://playwright.dev/docs/actionability)
- **Authentication（英語・補助）**（英語・必要時12分）— Storage stateを使う演習時だけ参照し、Secret管理を確認します。 [必要なときだけ開く](https://playwright.dev/docs/auth)
- **Network（英語・補助）**（英語・必要時10分）— XHR/Fetchの観察やMockが必要な場合だけ参照します。 [必要なときだけ開く](https://playwright.dev/docs/network)

## Objectives

- [ ] role/label/test idを優先する
- [ ] Storage stateをSecretとして扱う
- [ ] UI操作とAPI直接取得を比較する

## Tasks

1. **Codegenで操作を記録** — ログインから一覧到達までを記録し、生成Codeをそのまま完成品にしません。

```text
npx playwright codegen https://example.test/login
```

2. **Locatorを作り直す** — role → label → text → test id → CSSの優先順位で、意味のあるLocatorへ変更します。

3. **認証状態を分離** — Storage stateをGit管理外へ保存し、期限切れ時の再生成手順を用意します。

4. **NetworkとPaginationを検証** — API Response、次Pageの停止条件、最大Page数、重複を確認します。

## Practice prompt

```text
このPlaywright処理を、Locatorの堅牢性、Auto-wait、認証情報、Pagination停止条件、最大Page数、Download、Network API利用、Retry、Debug可能性の観点でレビューしてください。
```

## Required deliverables

- [ ] tests/scraper.spec.ts
- [ ] playwright.config.ts
- [ ] 認証状態の生成手順
- [ ] learning-log/day-12/ui-vs-api.md

## Success looks like this

- [ ] 2ページ以上を順番に取得できる
- [ ] 同一Keyが1件にまとまる
- [ ] 最大件数・次リンクなし・Errorで安全に停止する

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 同じページを繰り返し取得する | next URLを更新していない | 各Loopでcurrent URLをLogし、同じURL再訪時に停止する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: external_idをKeyにdictへ保存。nextがない、既訪問URL、最大3ページのいずれかで停止。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] Storage stateをCommitしていない
- [ ] 固定sleepを主な待機方法にしていない
- [ ] Locatorの優先順位を説明できる
- [ ] Paginationに停止条件と上限がある

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
