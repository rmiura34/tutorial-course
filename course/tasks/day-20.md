---
schema_version: 1
day: 20
week: 4
branch: exam/final-capstone
workspace: training-lab
duration_minutes: 180
---

# Day 20 — 最終実技試験

## Goal

AIを使いながらも、自分で安全性と正しさを説明できる実務PRを完成する

## Start command

```bash
npm run course -- start 20
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-20.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is exam/final-capstone and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-20/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:15 試験説明:** 課題、禁止事項、提出物、採点を確認
- **0:15–0:50 調査:** 再現、Root cause、計画
- **0:50–2:10 実装:** 小Commit、Test、Diff review
- **2:10–2:40 Review:** AI Review、修正、全Test
- **2:40–3:00 提出:** PR、Risk、Rollback、AI利用記録

## Objectives

- [ ] 未知のIssueを再現する
- [ ] 最小修正とRegression Testを作る
- [ ] AI利用と残Riskを説明する

## Tasks

1. **Issueを再現** — 例: 会社情報Scraperで2Page目以降が取れず、一部企業が重複登録される。入力と結果を固定します。

2. **Root causeと計画** — Pagination停止条件、重複Key、Laravel再実行Buttonの経路を調べ、最小計画を作ります。

3. **実装とTest** — Branch、小Commit、Regression Test、Timeout/Retry、重複除去、DB整合性を確認します。

4. **PRを提出** — Issue理解、再現、Root cause、計画、Code、Test、AI利用、Risk、Rollback、Review対応を空欄なく提出します。

## Practice prompt

```text
この最終課題について、最初は調査だけ行ってください。Issue理解、再現手順、Root cause候補、変更計画、影響範囲、Test、Risk、Rollback、不明点を作り、実装開始前に停止してください。
```

## Required deliverables

- [ ] Issue理解
- [ ] 再現手順
- [ ] Root cause
- [ ] 変更計画
- [ ] BranchとCode
- [ ] Testと実行結果
- [ ] Pull Request
- [ ] AI利用記録
- [ ] RiskとRollback
- [ ] Review対応

## Done when

- [ ] SecretをCommitしていない
- [ ] Testを実行した
- [ ] Diffを全行確認した
- [ ] mainへ直接Pushしていない
- [ ] DB破壊操作を無確認で行っていない
- [ ] Scrapingの規約・負荷・robots.txtを確認した
- [ ] AI出力を自分の言葉で説明できる

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
