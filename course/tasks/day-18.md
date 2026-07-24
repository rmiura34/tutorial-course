---
schema_version: 1
day: 18
week: 4
branch: training/day-18-implementation
workspace: training-lab
duration_minutes: 180
---

# Day 18 — 小さな実装・Test・検証

## Goal

AI生成Diffを全行説明し、Test結果とRollbackを伴う安全な実装Branchを完成できる

## Start command

```bash
npm run course -- start 18
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-18.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-18-implementation and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-18/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:20 動画復習:** Laravel Test/DB章を確認
- **0:20–0:40 Baseline:** Branch、既存Test、再現結果を保存
- **0:40–2:20 実装:** 小Commit、Test、Diff reviewを反復
- **2:20–3:00 Regression:** 全Test、Rollback、Static analysis

## Objectives

- [ ] 実装前のTest基準を保存する
- [ ] AI生成Diffを全行Reviewする
- [ ] 外部通信とDB変更の失敗経路をTestする

## Tasks

1. **Baselineを保存** — 既存Test、再現手順、Query数、Responseを変更前結果として保存します。

2. **1 Stepずつ実装** — 計画の1 Stepを実装し、対象Test、Diff確認、Commitを繰り返します。

3. **失敗経路をTest** — Null、Validation、Transaction失敗、Timeout、Retry上限、外部Errorを確認します。

4. **全体検証** — 関連Test、全Test、Static analysis、Migration rollbackを実行し、結果をPRへ貼ります。

## Practice prompt

```text
承認済み計画の次の1 Stepだけを実装してください。対象外Fileは変更せず、変更理由、Diff、追加Test、実行Command、残Riskを示してください。完了後は次Stepへ進まず止まってください。
```

## Required deliverables

- [ ] 小さなCommit列
- [ ] 変更前後のTest結果
- [ ] Migration rollback結果
- [ ] 全行説明できるDiff

## Done when

- [ ] 既存Testを実装前に実行した
- [ ] 1 PR 1目的を守った
- [ ] Migration rollbackを確認した
- [ ] 外部通信にTimeoutとRetry上限がある
- [ ] AI生成Codeを無確認でCommitしていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
