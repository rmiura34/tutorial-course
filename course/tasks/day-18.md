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

## Why this matters

承認済み計画を小さく実装すると、失敗原因・Review範囲・戻す単位を限定できます。AIの生成量より検証可能性を優先します。

## Before you start

- [ ] Day 17の計画が承認済み
- [ ] 変更前Test結果を保存
- [ ] Rollback Commandを確認

## 先に調べる用語

- **Baseline:** 変更前の比較基準
- **Static analysis:** 実行せずCode上の問題を調べる検査
- **Timeout / Retry:** 待つ上限 / 条件付き再試行

## Start command

```bash
npm run course -- start 18
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-18.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-18-implementation and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-18/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:20 任意動画／Baseline:** Test Commandが分からない場合だけ復習。分かる場合はBaseline保存へ進む
- **0:20–0:40 Baseline:** Branch、既存Test、再現結果を保存
- **0:40–2:20 実装:** 小Commit、Test、Diff reviewを反復
- **2:20–3:00 Regression:** 全Test、Rollback、Static analysis

## Learning resources

### 必修

- **Laravel Testing（英語）**（英語・8分）— Test実行とEnvironment。日本語公式版がないため英語です。 [開く](https://laravel.com/docs/13.x/testing)
- **Status Checkについて**（日本語・8分）— CI結果をMerge gateとして読む方法。 [開く](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)

### 任意・困ったときだけ

- **Laravel Learn: database and CRUD chapters**（英語・20分）— Database、Model、Validation、CRUD章を再確認し、変更とTest対象を対応させます。 [必要なときだけ開く](https://laravel.com/learn/getting-started-with-laravel)
- **Database Testing**（英語・10分）— Database状態とFactory。 [必要なときだけ開く](https://laravel.com/docs/13.x/database-testing)
- **HTTP Client**（英語・12分）— Timeout、Retry、Error、Fake。 [必要なときだけ開く](https://laravel.com/docs/13.x/http-client)
- **Migrations**（英語・10分）— up/downとSchema変更。 [必要なときだけ開く](https://laravel.com/docs/13.x/migrations)

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

## Success looks like this

- [ ] 1 Commit 1目的で履歴が並ぶ
- [ ] 変更前後のTest結果を比較できる
- [ ] 失敗経路とRollbackを実行できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 多数のTestが同時に失敗する | 変更単位が大きすぎる | 直前の小Commitまで戻して最初の失敗1件から調べる |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: Step 1: 再現Test。Step 2: 重複Key修正。各Stepで対象Test→Diff→Commit。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

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
