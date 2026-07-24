---
schema_version: 1
day: 2
week: 1
branch: training/day-02-git-basics
workspace: repository root
duration_minutes: 180
---

# Day 02 — Gitの基本と安全な変更管理

## Goal

変更を確認して小さくCommitし、不要な変更だけを安全に戻せる

## Start command

```bash
npm run course -- start 2
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-02.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-02-git-basics and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-02/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 動画:** Gitの履歴・Branch・Remoteの全体像を確認
- **0:35–1:15 公式資料:** Pro Gitを指定順で読む
- **1:15–2:30 ハンズオン:** 変更、差分確認、Commit、復元、Branch、Push
- **2:30–3:00 説明試験:** Gitの5領域を自分の言葉で説明

## Objectives

- [ ] git statusとgit diffを読む
- [ ] ステージとCommitを区別する
- [ ] restoreとstashを使い分ける

## Tasks

1. **変更前の基準点を確認** — 現在のBranch、未Commit差分、直近履歴を確認します。

```text
git branch --show-current
git status -sb
git log --oneline -5
```

2. **READMEを1行変更** — 変更後にgit diffを読み、追加行と削除行を説明します。

3. **対象だけをCommit** — ファイルを明示してステージし、目的が分かるメッセージでCommitします。

```text
git add README.md
git diff --staged
git commit -m "学習目標を追記"
```

4. **未Commit変更を戻す** — 別の一時変更を作り、git diffを確認した後にgit restoreで戻します。

## Practice prompt

```text
変更はまだ行わず、git status、git diff、直近5件のlogから現在の状態を説明してください。次に安全なCommit手順を提案し、各コマンドが何を変えるかも説明してください。
```

## Required deliverables

- [ ] 2つ以上の小さなCommit
- [ ] git-before-after.md
- [ ] Working treeからRemoteまでの状態図

## Done when

- [ ] Commit前にgit diff --stagedを確認した
- [ ] Commitに無関係なファイルが入っていない
- [ ] 復元前に失われる差分を確認した
- [ ] mainへ直接作業していない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
