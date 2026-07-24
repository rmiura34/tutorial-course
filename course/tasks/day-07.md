---
schema_version: 1
day: 7
week: 2
branch: training/day-07-frontend-reading
workspace: training-lab
duration_minutes: 180
---

# Day 07 — HTML・JavaScript・TypeScript・React読解

## Goal

既存TSXの入力・状態・通信・描画・エラー処理を日本語で説明できる

## Start command

```bash
npm run course -- start 7
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-07.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-07-frontend-reading and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-07/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 動画:** JavaScriptの基礎とDOM操作を復習
- **0:35–1:20 公式資料:** HTML → JS → TS → Reactの指定範囲を読む
- **1:20–2:30 TSX読解:** ComponentからAPIとDOMまで線でつなぐ
- **2:30–3:00 小変更:** 表示文言またはValidationだけを安全に変更

## Objectives

- [ ] HTMLの意味構造を読む
- [ ] async/awaitとFetchを追う
- [ ] PropsとStateを区別する

## Tasks

1. **Component境界を探す** — export、Function、return JSXから1つのComponentの入力と出力を特定します。

2. **PropsとStateを表にする** — 親から渡る値、Component内で変化する値、計算で得られる値を分けます。

3. **EventからAPIまで追う** — Button → handler → validation → fetch → response → state更新の順でファイルと行を記録します。

4. **描画状態を説明する** — Loading、Success、Empty、Errorの各条件とDOMへ描画される内容を説明します。

## Practice prompt

```text
このTSXを変更せず、Component、Props、State、Event handler、API call、Loading、Error、最終的にDOMへ描画される要素を、ファイルと行を根拠に説明してください。
```

## Required deliverables

- [ ] learning-log/day-07/frontend-flow.md
- [ ] Props/State/Event/APIの対応表
- [ ] 最小の文言またはValidation変更
- [ ] 変更前後の画面確認

## Done when

- [ ] PropsとStateを正しく分離した
- [ ] EventからAPIまで根拠行を記録した
- [ ] LoadingとErrorを確認した
- [ ] 新規Reactアプリへ作り替えていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
