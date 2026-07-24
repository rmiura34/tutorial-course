---
schema_version: 1
day: 17
week: 4
branch: training/day-17-refactoring-plan
workspace: training-lab
duration_minutes: 180
---

# Day 17 — Refactoring計画と承認

## Goal

講師が実装可否を判断できるRefactoring Planを作り、承認後の作業単位へ分割できる

## Start command

```bash
npm run course -- start 17
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-17.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-17-refactoring-plan and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-17/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 動画:** RefactoringとTest safety netの解説を視聴
- **0:25–0:50 Issue分析:** 現状・期待・制約・非Goal
- **0:50–2:20 計画作成:** 影響、DB、外部通信、Test、Rollback
- **2:20–3:00 Design review:** 講師と別Agentの反証を反映

## Objectives

- [ ] 症状とRoot causeを分ける
- [ ] 変更しない仕様を明記する
- [ ] Rollback可能な実装順へ分解する

## Tasks

1. **現状と問題を分ける** — 観測事実、症状、Root cause、仮説を別欄へ書きます。

2. **変更しない仕様を固定** — Response、DB、外部API、UI、Performanceなど維持する契約を列挙します。

3. **影響と安全策を設計** — 依存関係、DB、外部通信、互換性、Test、Monitoring、Rollbackを埋めます。

4. **実装順を小さく分割** — 各Stepが独立してTest/Commit/Revertできる順に並べ、承認前は実装しません。

## Practice prompt

```text
実装はまだ行わず、Refactoring Planを作ってください。現状、問題、変更しない仕様、変更対象、依存、DB影響、外部通信、Test、Rollback、実装順、不明点を必須にしてください。
```

## Required deliverables

- [ ] learning-log/day-17/refactoring-plan.md
- [ ] 変更しない仕様一覧
- [ ] Test matrix
- [ ] 講師の承認記録

## Done when

- [ ] 計画承認前にCodeを変更していない
- [ ] Root causeに根拠がある
- [ ] Rollback方法が実行可能
- [ ] 各Stepを小さなCommitにできる

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
