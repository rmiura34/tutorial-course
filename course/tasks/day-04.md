---
schema_version: 1
day: 4
week: 1
branch: training/day-04-cursor
workspace: repository root
duration_minutes: 180
---

# Day 04 — Cursorの基本運用とContext設計

## Goal

既存Laravelコードを変更せずに調査し、根拠パス付きのCursor調査レポートを作れる

## Start command

```bash
npm run course -- start 4
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-04.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-04-cursor and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-04/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:30 公式デモ:** Cursor LearnでAgent・Rules・Contextを確認
- **0:30–1:10 公式資料:** QuickstartからPrivacyまで順番に読む
- **1:10–2:30 調査演習:** Laravel versionとユーザー一覧の処理経路を追う
- **2:30–3:00 小変更:** 文言だけ変更しDiffを人間が承認

## Objectives

- [ ] ChatとAgentの権限差を説明する
- [ ] Contextへ必要なファイルだけを渡す
- [ ] Diff承認前に不要変更を検出する

## Tasks

1. **変更禁止で技術情報を調査** — Laravel/PHP versionを根拠ファイル付きで確認します。

2. **1画面の処理経路を追う** — Route、Controller、Service、Model、Viewの候補をファイルと行で示させます。

3. **不明点と推測を分離** — 実ファイルで確認できない推論をレポートの「未確認」欄へ移します。

4. **Project Ruleを作る** — 変更前計画、根拠パス、テスト、Secret禁止を.cursor/rules/project.mdcへ定義します。

## Practice prompt

```text
1. このリポジトリは変更しないでください。2. LaravelとPHPのversionを調べてください。3. ユーザー一覧画面の処理経路を調べてください。4. 根拠ファイルと行を示してください。5. 不明な点は推測せず未確認と書いてください。
```

## Required deliverables

- [ ] .cursor/rules/project.mdc
- [ ] learning-log/day-04/cursor-investigation.md
- [ ] 承認した小変更のDiff

## Done when

- [ ] Rulesに変更前計画とテストが含まれる
- [ ] 調査レポートに根拠パスがある
- [ ] Agentの変更を一括承認していない
- [ ] Ignore対象へSecretを含めた

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
