---
schema_version: 1
day: 15
week: 3
branch: training/day-15-plugin-mcp
workspace: starter-kits
duration_minutes: 180
---

# Day 15 — Plugins・MCP・Codex Skills

## Goal

Codexで読み込めるSkillとPlugin starterを作り、MCPのRead/Write権限を説明できる

## Why this matters

PluginとMCPはAIが触れられる外部機能を増やします。便利さと同時に権限・入力検証・失敗時の境界を設計する必要があります。

## Before you start

- [ ] Day 14のSkillがTest済み
- [ ] 外部接続なしのMockから始める
- [ ] 許可する操作と禁止操作を列挙

## 先に調べる用語

- **Plugin:** SkillやToolなどを配布できるPackage
- **MCP:** AIと外部Tool・Dataを接続する共通方式
- **権限:** 読み取り・変更など許可された操作範囲

## Start command

```bash
npm run course -- start 15
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-15.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-15-plugin-mcp and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-15/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 任意動画／構成確認:** MCPのClient・Server・Toolが未知なら1本だけ見る。理解済みならManifest確認へ進む
- **0:25–1:10 公式資料:** Claude Plugins、MCP、Codex Skills、Codex Plugins
- **1:10–2:35 実装:** Claude Plugin starterとCodex Skill/Plugin
- **2:35–3:00 権限監査:** 読み取り・変更・破壊操作を分類

## Learning resources

### 必修

- **Model Context Protocol入門（英語）**（英語・15分）— Client、Server、Tools、Resources、Prompts、Transport。日本語公式版がないため英語です。 [開く](https://modelcontextprotocol.io/docs/getting-started/intro)

### 任意・困ったときだけ

- **Model Context Protocol videos**（英語・15分）— MCPのClient、Server、Toolと外部Data接続を扱う公式動画を1本視聴します。 [必要なときだけ開く](https://www.youtube.com/@AnthropicAI/search?query=Model%20Context%20Protocol)
- **Codex videos**（英語・10分）— CodexのSkillやAgent workflowに近い公式デモを1本視聴します。 [必要なときだけ開く](https://www.youtube.com/@OpenAI/search?query=Codex%20skills)
- **Claude Code plugins**（英語・15分）— Skills、Agents、Hooks、MCP serversを配布単位へまとめる方法。 [必要なときだけ開く](https://code.claude.com/docs/en/plugins)
- **Plugins reference**（英語・15分）— Manifest、Directory、Marketplace、Component。 [必要なときだけ開く](https://code.claude.com/docs/en/plugins-reference)
- **Build Skills for Codex**（英語・15分）— SKILL.md、Trigger、Progressive disclosure、References、Scripts。 [必要なときだけ開く](https://developers.openai.com/codex/build-skills)
- **Build plugins**（英語・15分）— .codex-plugin/plugin.json、skills、hooks、MCP、marketplace。 [必要なときだけ開く](https://learn.chatgpt.com/docs/build-plugins)
- **Codex CLI**（英語・10分）— CLI、承認、Sandbox、Project作業の基本。 [必要なときだけ開く](https://developers.openai.com/codex/cli)

## Objectives

- [ ] SkillとPluginの用途を区別する
- [ ] MCPのTool/Resource/Promptを区別する
- [ ] 外部接続の信頼境界を説明する

## Tasks

1. **Claude Plugin starterを作る** — .claude-plugin/plugin.json、skills、agents、hooksを一つの配布Directoryへまとめます。

2. **Codex Skillへ移植** — 同じ目的を.agents/skills/trace-laravel-flow/SKILL.mdとして作り、Triggerと出力を比較します。

3. **Codex Pluginを作る** — .codex-plugin/plugin.jsonを入口にskillsとhooksを参照する最小Pluginを作ります。

4. **MCP権限を監査** — 各Toolが読めるData、変更できるData、外部送信、Secret、破壊性、承認要否を表にします。

## Practice prompt

```text
このMCP Server/Pluginについて、Tool、Resource、Prompt、認証、読取範囲、変更範囲、外部送信、Secret、破壊操作、必要な承認を表にしてください。Documentにない権限は推測しないでください。
```

## Required deliverables

- [ ] examples/laravel-maintenance-plugin
- [ ] .agents/skills/trace-laravel-flow/SKILL.md
- [ ] plugins/laravel-maintenance-codex
- [ ] learning-log/day-15/mcp-permission-audit.md

## Success looks like this

- [ ] Manifestが検証を通る
- [ ] Tool入力のValidationとErrorがある
- [ ] 権限とSecurity注意点がREADMEにある

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Pluginを読めるがToolが見つからない | Manifestのpath/name不一致 | validatorを実行し、実ファイル名とmanifestを1項目ずつ照合する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 入力はcompany_idのみ、読み取り専用。存在しないIDは明示Error。Tokenは受け取らない。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] Plugin manifestがSkill directoryを正しく参照する
- [ ] Codex Skillにnameとdescriptionがある
- [ ] MCPのRead/Write/Destructiveを分類した
- [ ] SecretをManifestへ直接書いていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
