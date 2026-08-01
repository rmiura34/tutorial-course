---
schema_version: 1
day: 14
week: 3
branch: training/day-14-claude-skills
workspace: starter-kits
duration_minutes: 180
---

# Day 14 — Claude Code Skills・Hooks・Subagents

## Goal

実際に呼び出せるSkill、専門Subagent、4種類の安全Hookを作成できる

## Why this matters

SkillとHookはAIの作業手順を再利用可能にし、危険な操作を機械的に止めます。指示を長くするより、発動条件と検証を明確にします。

## Before you start

- [ ] Day 05でAgentとPromptを区別できる
- [ ] 安全にTestできる専用Branch
- [ ] 禁止したいCommandを具体化

## 先に調べる用語

- **Skill:** 特定作業の手順・知識・Tool利用をまとめた再利用部品
- **Hook:** 決まったEventの前後で自動実行する処理
- **Trigger:** SkillやHookが動く条件

## Start command

```bash
npm run course -- start 14
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-14.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-14-claude-skills and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-14/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 任意動画／Starter確認:** SkillとHookを見たことがない人だけデモを見る。経験者はstarter-kitsを開く
- **0:25–1:05 公式資料:** Skills → Hooks → Subagents → Settings
- **1:05–2:35 実装:** Laravel調査Skill、安全Refactor Skill、Hook
- **2:35–3:00 実行試験:** Trigger、誤Trigger、危険操作Blockを検証

## Learning resources

### 必修

- **Agent Skills（英語）**（英語・15分）— Skill配置、SKILL.md、Project/User scope、Trigger。日本語公式版がないため英語です。 [開く](https://code.claude.com/docs/en/skills)

### 任意・困ったときだけ

- **Claude Code Skills / Hooks videos**（英語・20分）— 公式チャンネルからSkillsまたはHooksのデモを選び、設定と実行結果を確認します。 [必要なときだけ開く](https://www.youtube.com/@AnthropicAI/search?query=Claude%20Code%20skills%20hooks)
- **Hooks**（英語・15分）— Lifecycle eventでCommand、HTTP、Promptを実行する仕組み。 [必要なときだけ開く](https://code.claude.com/docs/en/hooks)
- **Subagents**（英語・15分）— 専門Prompt、Tool制限、権限、Skills、Hooks。 [必要なときだけ開く](https://code.claude.com/docs/en/sub-agents)
- **Settings**（英語・10分）— Skills、Agents、Hooks、MCPの設定場所。 [必要なときだけ開く](https://code.claude.com/docs/en/settings)
- **Steering Claude Code**（英語・15分）— CLAUDE.md、Skills、Hooks、Rules、Subagentsの使い分け。 [必要なときだけ開く](https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)

## Objectives

- [ ] SkillのTriggerと出力契約を書く
- [ ] Hookの実行時点と失敗動作を決める
- [ ] Subagentへ最小権限を与える

## Tasks

1. **Laravel調査Skillを作る** — Route、Middleware、Controller、Service、Model、Migration、Testを順に探し、事実と推測を分けるSkillを作ります。

2. **安全なRefactor Skillを作る** — 現状、問題、計画、影響、互換性、DB、Test、Rollback、Diffを必須出力にします。

3. **Laravel Reviewer Subagentを作る** — read-onlyを基本にし、Security、DB、Test、互換性だけをレビューする役割へ限定します。

4. **安全Hookを作る** — PHP変更後のFormatter、Commit前Test、危険Command block、.env/Secret警告を設定します。

## Practice prompt

```text
LaravelのRequest flow調査を毎回同じ品質で行うSkillを設計してください。Trigger、対象外、入力、手順、必須出力、事実/推測の分離、失敗時の停止条件を含めてください。
```

## Required deliverables

- [ ] .claude/skills/trace-laravel-flow/SKILL.md
- [ ] .claude/skills/safe-refactor/SKILL.md
- [ ] .claude/agents/laravel-reviewer.md
- [ ] .claude/settings.jsonまたはHooks設定

## Success looks like this

- [ ] Skillの使用条件と手順が文書化される
- [ ] Hookが安全なCommandを通し危険例を止める
- [ ] 発動・非発動のTest記録がある

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Skillが関係ない依頼でも使われる | 説明が広すぎてTriggerが曖昧 | 対象Task・入力・使わない条件をdescriptionへ具体的に書く |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: Laravel処理経路調査の時だけ発動。実装依頼や一般質問では使わない。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 各SkillにTriggerと対象外がある
- [ ] Skillが根拠パスを必須にする
- [ ] SubagentのTool権限が必要最小限
- [ ] 危険CommandとSecretをHookで検出した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
