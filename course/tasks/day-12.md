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

## Start command

```bash
npm run course -- start 12
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-12.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-12-playwright and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-12/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:45 公式動画:** Microsoft LearnのPlaywright入門Seriesを視聴
- **0:45–1:25 公式資料:** Locator、Auto-wait、Auth、Network、Debug
- **1:25–2:35 自動化演習:** Login、一覧、Pagination、Download
- **2:35–3:00 比較:** UI操作とAPI取得の選択理由を提出

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
