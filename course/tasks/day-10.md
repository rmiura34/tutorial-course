---
schema_version: 1
day: 10
week: 2
branch: training/day-10-database
workspace: training-lab
duration_minutes: 180
---

# Day 10 — SQL・Migration・Eloquent

## Goal

対象QueryのSQL、Eloquent、Schema、件数、性能リスクを説明できる

## Why this matters

Database変更は画面より戻しにくいため、読む・試す・戻す手順を先に身につけます。MigrationとTestで安全網を作ります。

## Before you start

- [ ] ModelからTable名を確認できる
- [ ] LabのSQLite fileを確認できる
- [ ] Test用Databaseと学習用Databaseを区別する

## Three words for today

- **Database:** 構造化したDataを保存する仕組み
- **Migration:** Table構造の変更をCodeで記録する仕組み
- **Transaction:** 複数処理を全部成功か全部取消にする単位

## Start command

```bash
npm run course -- start 10
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-10.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-10-database and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-10/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 動画:** Laravel公式のDatabaseとModel章を視聴
- **0:35–1:20 SQLBolt:** SELECT、JOIN、Aggregate、INSERT/UPDATE/DELETE
- **1:20–2:30 Laravel演習:** Eloquent、Relation、Migration、N+1
- **2:30–3:00 検証:** Query logとTest結果を提出

## Objectives

- [ ] SELECTとJOINを読む
- [ ] MigrationとSchemaを対応させる
- [ ] N+1を検出し修正案を作る

## Tasks

1. **SQLで期待結果を作る** — 対象のSELECT、WHERE、ORDER、JOINをSQLBoltまたは開発DBで確認します。

2. **Eloquentへ対応付ける** — Model、Relation、Scope、Query Builderの各部分がSQLのどこに相当するか書きます。

3. **Query回数を確認** — 一覧件数を増やし、N+1の有無とEager loading後のQuery回数を比較します。

4. **Migrationを往復** — 開発用DBでupとrollbackを実行し、既存Dataへの影響を記録します。

## Practice prompt

```text
このEloquent Queryが発行するSQL、使用するTable/Column/Index、Relation、N+1の可能性、件数増加時のRiskを説明してください。修正案はSQLとTest方法を併記してください。
```

## Required deliverables

- [ ] learning-log/day-10/database-analysis.md
- [ ] SQLとEloquentの対応表
- [ ] Query回数の変更前後
- [ ] Migration rollback結果

## Success looks like this

- [ ] Table・Column・制約を説明できる
- [ ] Migrationのup/downを確認できる
- [ ] 重複やNullのTest結果を残せる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Table already existsでMigration失敗 | 同じMigrationを別状態のDBへ実行 | 使用中Environmentを確認し、履歴を見てから講師指定のreset手順を使う |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: companies.nameは必須、external_idはunique。重複時にどのErrorになるかTestする。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 本番DBへ接続していない
- [ ] SELECT結果の件数を確認した
- [ ] N+1をQuery回数で検証した
- [ ] Migrationのdownを実行した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
