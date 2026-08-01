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

## Why this matters

Refactoringの失敗は、Codeより「変えてはいけない振る舞い」の認識不足から起きます。実装前に範囲とRollbackを合意します。

## Before you start

- [ ] Day 16のSystem mapが承認済み
- [ ] 症状を再現できる
- [ ] このDayでは承認前に実装しない

## 先に調べる用語

- **Refactoring:** 外から見える動作を保ち内部構造を改善すること
- **非Goal:** 今回あえて行わないこと
- **Rollback:** 問題時に安全な以前の状態へ戻す手順

## Start command

```bash
npm run course -- start 17
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-17.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-17-refactoring-plan and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-17/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 任意動画／Issue確認:** Refactoringが初めてなら解説を見る。Day 13のTest-firstを説明できればIssue分析へ進む
- **0:25–0:50 Issue分析:** 現状・期待・制約・非Goal
- **0:50–2:20 計画作成:** 影響、DB、外部通信、Test、Rollback
- **2:20–3:00 Design review:** 講師と別Agentの反証を反映

## Learning resources

### 必修

- **Pull RequestをIssueにリンクする**（日本語・6分）— Issue、計画、Pull Requestを一つの変更目的へ結び付けます。 [開く](https://docs.github.com/ja/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

### 任意・困ったときだけ

- **Refactoring videos**（英語・約20分）— Laravel/PHPのRefactoringとTestを扱う動画を1本選び、変更単位とSafety netを確認します。 [必要なときだけ開く](https://www.youtube.com/@Laracasts/search?query=refactoring)
- **Refactoring**（英語・10分）— 既存動作を保ちながら内部構造を改善する定義とCode smell。 [必要なときだけ開く](https://martinfowler.com/books/refactoring.html)
- **Laravel Service Container**（英語・10分）— 責務分割時のDependency設計。 [必要なときだけ開く](https://laravel.com/docs/13.x/container)
- **Database Transactions**（英語・8分）— 複数更新の原子性とRetry。 [必要なときだけ開く](https://laravel.com/docs/13.x/database#database-transactions)
- **HTTP Tests**（英語・10分）— 変更しない振る舞いを固定するFeature Test。 [必要なときだけ開く](https://laravel.com/docs/13.x/http-tests)

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

## Success looks like this

- [ ] 現状・原因仮説・変更しない仕様が分離
- [ ] 実装StepごとにTestとRollbackがある
- [ ] 講師の承認記録が残る

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 計画が「きれいにする」だけ | 問題と完了条件が測定不能 | 対象File、守るResponse、Test、変更しない範囲を具体化する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 維持: APIのJSON keyとStatus。変更: 重複排除Service。非Goal: UI刷新。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

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
