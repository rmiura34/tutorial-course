---
schema_version: 1
day: 3
week: 1
branch: training/day-03-pull-request
workspace: repository root
duration_minutes: 180
---

# Day 03 — GitHub・Issue・Pull Request

## Goal

目的・影響範囲・確認方法・リスクを説明したPull Requestを作成できる

## Start command

```bash
npm run course -- start 3
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-03.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-03-pull-request and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-03/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 動画復習:** GitHub上のBranchとPR部分を確認
- **0:25–1:05 公式資料:** Branch → Flow → PR → Reviewの順で読む
- **1:05–2:35 実務フロー:** Issue、Branch、2 Commit、PR、Review、修正
- **2:35–3:00 振り返り:** Merge可能性と残リスクを説明

## Objectives

- [ ] baseとcompareを区別する
- [ ] Files changedから差分を読む
- [ ] レビュー指摘へ根拠付きで回答する

## Tasks

1. **Issueを作る** — 現状、期待結果、完了条件、確認方法を記述し、Issue番号を確定します。

2. **Issue用Branchで2 Commit作る** — 1つ目は実装、2つ目はテストまたは説明更新に分けます。

```text
git switch -c training/day-03-pull-request
git push -u origin training/day-03-pull-request
```

3. **PRテンプレートを埋める** — 変更目的、内容、影響範囲、確認方法、DB変更、リスク、AI利用範囲を空欄なく書きます。

4. **レビューへ対応する** — 指摘を再現し、採用・不採用の理由を書き、必要な修正Commitを追加します。

## Practice prompt

```text
このPRのレビュアーとして、仕様適合、不要変更、テスト不足、互換性、Secret、Rollbackの観点からレビューしてください。指摘には対象ファイルと根拠を付け、推測は明示してください。
```

## Required deliverables

- [ ] Issue
- [ ] 2 Commit以上のBranch
- [ ] テンプレートが埋まったPR
- [ ] レビューコメントへの回答

## Done when

- [ ] baseがmain、compareが課題Branchになっている
- [ ] Files changedを全行確認した
- [ ] CIが成功した
- [ ] Merge前に未解決コメントがない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
