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

## Why this matters

最終課題では、Codeを書く速さではなく、未知の問題を安全に調査し、判断と検証を説明できるかを確認します。

## Before you start

- [ ] Day 01–19の提出物が揃う
- [ ] 試験用Branch以外はClean
- [ ] 禁止事項と採点表を読む

## Three words for today

- **Root cause:** 症状を生む根本原因
- **Capstone:** 学んだ内容を統合する最終課題
- **Audit trail:** 誰が何を判断・実行したかの記録

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

## Success looks like this

- [ ] 再現→原因→計画→実装→Test→PRがつながる
- [ ] AI利用と人間の判断が区別される
- [ ] 第三者がRollbackまで再現できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 時間が足りず検証前に提出しそう | 実装範囲を広げすぎた | 非Goalを増やし、再現する最小修正とRegression Testへ絞る |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: AIは原因候補列挙に使用。採用案は実Fileと失敗Testで確認。残Riskと戻し方も記載。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

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
