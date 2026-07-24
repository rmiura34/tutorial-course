---
schema_version: 1
day: 5
week: 1
branch: training/day-05-agent-comparison
workspace: repository root
duration_minutes: 180
---

# Day 05 — Claude CodeとCodexの基礎

## Goal

3つのAIツールを目的別に使い分け、出力の根拠と不確実性を比較できる

## Start command

```bash
npm run course -- start 5
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-05.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-05-agent-comparison and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-05/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 公式動画:** Claude CodeとCodexの公式動画を選んで視聴
- **0:35–1:15 公式資料:** Overview、Best practices、Codex CLI、Skillsを読む
- **1:15–2:30 比較演習:** 同一Issueを調査・計画・レビューへ分業
- **2:30–3:00 評価:** 8観点の比較表を提出

## Objectives

- [ ] Agent loopとContextの関係を説明する
- [ ] 変更前に計画を作らせる
- [ ] 別Agentで反証レビューする

## Tasks

1. **同一Issueを用意** — 入力、期待結果、制約、完了条件が同じ課題文を作ります。

2. **Cursorで局所調査** — 関連ファイルと処理経路だけを調べ、変更はさせません。

3. **Claude Codeで計画** — 影響範囲、テスト、Rollbackを含む実装計画を作ります。

4. **Codexで独立レビュー** — 計画の見落とし、不要変更、テスト不足を反証し、比較表へまとめます。

## Practice prompt

```text
このIssueをまだ実装せず、現状、Root cause候補、変更計画、影響範囲、テスト計画、Rollback、不明点を作ってください。確認済み事実と推測を分け、根拠ファイルを示してください。
```

## Required deliverables

- [ ] learning-log/day-05/agent-comparison.md
- [ ] 3ツールのプロンプト記録
- [ ] 採用した提案・却下した提案と理由

## Done when

- [ ] 3ツールへ同じ前提を渡した
- [ ] 調査の深さ・根拠・不要変更・テストなど8観点で比較した
- [ ] AIの結論を公式資料またはコードで裏取りした
- [ ] 最終判断を人間が書いた

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
