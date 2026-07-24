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

## Start command

```bash
npm run course -- start 14
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-14.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-14-claude-skills and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-14/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 公式動画:** Skills・Hooks・Subagentsの公式デモを視聴
- **0:25–1:05 公式資料:** Skills → Hooks → Subagents → Settings
- **1:05–2:35 実装:** Laravel調査Skill、安全Refactor Skill、Hook
- **2:35–3:00 実行試験:** Trigger、誤Trigger、危険操作Blockを検証

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
