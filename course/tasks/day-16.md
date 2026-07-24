---
schema_version: 1
day: 16
week: 4
branch: training/day-16-system-investigation
workspace: training-lab
duration_minutes: 180
---

# Day 16 — 既存Systemを変更せず調査

## Goal

別の開発者が変更計画を作れる水準のsystem-investigation.mdを提出できる

## Why this matters

未知のSystemでは、すぐ直すより先に地図を作る方が速く安全です。確認済み事実と仮説を分離して調査します。

## Before you start

- [ ] 変更禁止の調査Branch
- [ ] 起動・Test Commandを確認
- [ ] 本番Secretへアクセスしない

## Three words for today

- **System map:** 主要部品とDataの流れを表す地図
- **依存関係:** ある部品が別の部品を必要とする関係
- **Risk register:** 危険・影響・確認方法を並べた表

## Start command

```bash
npm run course -- start 16
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-16.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-16-system-investigation and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-16/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:20 動画復習:** Laravel Courseの全体構造を再確認
- **0:20–0:40 調査設計:** 質問、対象、時間配分、変更禁止
- **0:40–2:20 並行調査:** Stack、Flow、DB、External、Queue、Test、Scraper
- **2:20–3:00 反証:** Codexで調査結果を独立レビュー

## Objectives

- [ ] 調査範囲と変更禁止を守る
- [ ] 確認済み事実と不明点を分離する
- [ ] 高Risk箇所へ根拠を付ける

## Tasks

1. **調査の質問を固定** — 何を変更する可能性があるか、何を知らないか、変更禁止の範囲を明記します。

2. **技術Stackと起動経路** — Laravel/PHP/Node/DB version、Container、Entry point、Build、Testを根拠付きで記録します。

3. **System mapを作る** — 主要Request、DB Schema、External service、Queue/Scheduler、Scraper、Testを一枚へまとめます。

4. **Riskと不明点を反証** — 別Agentへ調査結果の見落としを探させ、実ファイルで確認できた指摘だけ反映します。

## Practice prompt

```text
このSystemを変更せず調査してください。技術Stack、Laravel/PHP version、主要Directory、Request flow、DB schema、External services、Queue/Scheduler、Test、Scraper、Risk、不明点を、根拠ファイル付きで出してください。
```

## Required deliverables

- [ ] learning-log/day-16/system-investigation.md
- [ ] System map
- [ ] Risk register
- [ ] 不明点と追加質問

## Success looks like this

- [ ] Request・DB・外部通信の地図がある
- [ ] 各事実に根拠ファイルがある
- [ ] 不明点と次の質問が残る

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 調査中にAIがCodeを整形した | 変更禁止を明示していない | git diffを保存し、不要変更を確認してから調査Promptへ禁止条件を追加する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 事実: Scheduler登録あり（routes/console.php）。仮説: 本番で毎時実行。設定未確認。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 変更を1つも加えていない
- [ ] 各事実に根拠がある
- [ ] Secret値を記録していない
- [ ] 不明点を推測で埋めていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
