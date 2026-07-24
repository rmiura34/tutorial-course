---
schema_version: 1
day: 13
week: 3
branch: training/day-13-bugfix
workspace: starter-kits
duration_minutes: 180
---

# Day 13 — テスト・Debug・Log

## Goal

講師が用意したBugを再現し、失敗Testから最小修正と回帰確認まで完了できる

## Start command

```bash
npm run course -- start 13
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-13.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-13-bugfix and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-13/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:30 動画:** Playwright DebuggingとLaravel Testingの動画
- **0:30–1:10 公式資料:** HTTP Tests、Database Testing、Logging
- **1:10–2:35 Bug修正:** 再現 → Test → Root cause → 最小修正
- **2:35–3:00 回帰確認:** 全TestとDiffを提出

## Objectives

- [ ] Unit/Feature/E2Eを使い分ける
- [ ] 失敗を再現するTestを先に作る
- [ ] LogへContextを残しSecretを除く

## Tasks

1. **再現条件を固定** — 入力、初期Data、操作、期待結果、実際の結果を文章にします。

2. **失敗Testを作る** — Bugを再現し、修正前に赤くなる最小のFeature/Unit/E2E Testを追加します。

3. **Root causeを限定** — Stack traceとLogから関連範囲を絞り、仮説ごとに確認方法を書きます。

4. **最小修正と回帰** — Testを緑にし、関連Suiteと全Suiteを実行し、不要Diffがないか確認します。

## Practice prompt

```text
次のBugについて、まだ修正せず、再現条件、期待結果、実際の結果、Stack traceの読み方、Root cause候補、各仮説の確認方法、最小Testを提案してください。
```

## Required deliverables

- [ ] 再現手順
- [ ] 修正前に失敗するTest
- [ ] Root cause説明
- [ ] 修正前後のTest結果

## Done when

- [ ] 修正前にTestが失敗した
- [ ] Root causeと症状を区別した
- [ ] 関連Testと全Testを実行した
- [ ] LogへSecretや個人情報を出していない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
