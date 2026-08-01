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

## Why this matters

AIツールは同じではありません。調査・計画・実装・Reviewの得意分野と権限を比較し、目的に合う道具を選びます。

## Before you start

- [ ] GitHub RepositoryをCodexから開ける
- [ ] 利用するAIごとの送信データ規約を確認
- [ ] 秘密情報をContextへ入れない

## 先に調べる用語

- **Agent:** 目標に向けて検索・編集・実行を組み合わせるAI
- **Prompt:** AIへ渡す目的・条件・出力形式
- **AGENTS.md:** CodexがProjectで読む継続指示

## Start command

```bash
npm run course -- start 5
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-05.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-05-agent-comparison and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-05/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 任意動画／Tool確認:** 画面操作が未知のToolだけ公式動画を見る。両方を操作できる人は比較演習の準備へ進む
- **0:35–1:15 公式資料:** Overview、Best practices、Codex CLI、Skillsを読む
- **1:15–2:30 比較演習:** 同一Issueを調査・計画・レビューへ分業
- **2:30–3:00 評価:** 8観点の比較表を提出

## Learning resources

### 必修

- **Claude Code best practices（英語）**（英語・15分）— Context取得、計画、検証、Session管理。日本語公式版がないため英語です。 [開く](https://code.claude.com/docs/en/best-practices)
- **Codex CLI（英語）**（英語・10分）— Codex CLIの起動、承認、Local作業の基本。日本語公式版がないため英語です。 [開く](https://developers.openai.com/codex/cli)

### 任意・困ったときだけ

- **Claude Code公式動画一覧**（英語・15分）— Anthropic公式チャンネルからClaude Codeの基本デモを1本選び、操作と権限確認を記録します。 [必要なときだけ開く](https://www.youtube.com/@AnthropicAI/search?query=Claude%20Code)
- **Codex公式動画一覧**（英語・15分）— OpenAI公式チャンネルからCodexのCLIまたはアプリのデモを1本選び、Claude Codeとの差を記録します。 [必要なときだけ開く](https://www.youtube.com/@OpenAI/search?query=Codex)
- **Claude Code overview**（英語・8分）— Claude Codeの基本能力と開発フロー。 [必要なときだけ開く](https://code.claude.com/docs/en/overview)
- **Claude Code settings**（英語・8分）— 権限とプロジェクト設定。 [必要なときだけ開く](https://code.claude.com/docs/en/settings)
- **Build skills for Codex**（英語・10分）— 再利用可能なSkillの構造と呼び出し方。 [必要なときだけ開く](https://developers.openai.com/codex/build-skills)
- **OpenAI Codex repository**（英語・8分）— CLIのREADMEとリリースを確認します。 [必要なときだけ開く](https://github.com/openai/codex)

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

## Success looks like this

- [ ] 同じ質問への3ツールの違いを表で比較できる
- [ ] 各回答の根拠を実ファイルで確認できる
- [ ] 採用・不採用理由が残る

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| AIの説明がもっともらしいが根拠がない | 確認対象を指定していない | ファイルパスと検証Commandを要求し、自分で開いて照合する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: Codex案を採用: testsまで確認したため。別案を不採用: 存在しないServiceを前提にしていたため。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

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
