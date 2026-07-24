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

## Why this matters

Testは完成後の採点ではなく、変更してよい範囲を示す安全網です。正常系だけでなく失敗条件を先に固定します。

## Before you start

- [ ] 対象処理を手動で一度再現
- [ ] 期待する入力と出力を文章化
- [ ] Test Commandを確認

## Three words for today

- **Unit Test:** 小さな関数やClassを単独で確かめるTest
- **Feature Test:** 複数部品を通した振る舞いを確かめるTest
- **Regression:** 直した不具合が再発すること

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

## Success looks like this

- [ ] 変更前に失敗する再現Testがある
- [ ] 修正後に同じTestが成功する
- [ ] 正常・境界・失敗の3種類を含む

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Testが実装前から成功する | 不具合を再現できていない | 期待値を見直し、壊れている入力で本当に失敗することを先に確認する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 2ページ目を取得できない入力でRED、修正後GREEN、1ページだけの既存動作もGREEN。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

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
