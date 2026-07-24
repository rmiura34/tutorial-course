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

## Start command

```bash
npm run course -- start 15
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-15.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-15-plugin-mcp and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-15/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 公式動画:** CodexとMCPの公式動画を選択
- **0:25–1:10 公式資料:** Claude Plugins、MCP、Codex Skills、Codex Plugins
- **1:10–2:35 実装:** Claude Plugin starterとCodex Skill/Plugin
- **2:35–3:00 権限監査:** 読み取り・変更・破壊操作を分類

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
