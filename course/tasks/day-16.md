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
