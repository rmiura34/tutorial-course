---
schema_version: 1
day: 19
week: 4
branch: training/day-19-pr-review
workspace: training-lab
duration_minutes: 180
---

# Day 19 — Pull RequestとReview対応

## Goal

仕様、互換性、DB、Security、Test、Rollbackを説明したMerge可能なPRを完成できる

## Start command

```bash
npm run course -- start 19
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-19.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-19-pr-review and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-19/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:20 動画:** GitHub公式のPR Review動画を選択
- **0:20–0:45 Self review:** Files changedを全行確認
- **0:45–2:10 3者Review:** Codex、Claude、人間で指摘を分類
- **2:10–3:00 対応:** 修正、再Test、コメント回答、Merge判定

## Objectives

- [ ] Review観点を体系化する
- [ ] 指摘の採用/不採用を説明する
- [ ] 修正後に再Testする

## Tasks

1. **Self review** — 仕様、不要変更、互換性、DB、Transaction、N+1、Null、Exception、Retry、Timeout、Secret、Validation、Test、Rollbackを確認します。

2. **AI Reviewを2系統で実行** — CodexとClaudeへ同じReview観点を渡し、指摘を重複・相違・誤検知へ分類します。

3. **人間が採否を決める** — 各指摘の根拠を再現し、採用・不採用・保留の理由を記録します。

4. **修正と回答** — 修正Commit、再Test、PRコメント回答、未解決Risk、Merge可否を更新します。

## Practice prompt

```text
このPRを、仕様適合、不要変更、互換性、DB整合性、Transaction、N+1、Null、Exception、Retry、Timeout、Secret、Validation、Test不足、可読性、Rollbackの観点でReviewしてください。
```

## Required deliverables

- [ ] 完成したPR
- [ ] review-comparison.md
- [ ] 指摘ごとの採用/不採用理由
- [ ] 修正後のTest結果

## Done when

- [ ] Files changedを全行確認した
- [ ] AI指摘を無条件採用していない
- [ ] 修正後に関連TestとCIが成功した
- [ ] 未解決RiskをPRへ明記した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
