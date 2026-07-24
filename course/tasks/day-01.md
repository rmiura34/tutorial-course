---
schema_version: 1
day: 1
week: 1
branch: training/day-01-environment
workspace: repository root
duration_minutes: 180
---

# Day 01 — ターミナル・ファイル・開発環境

## Goal

既存リポジトリを変更せずに調査し、repository-map.mdへ構造と根拠をまとめられる

## Start command

```bash
npm run course -- start 1
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-01.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-01-environment and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-01/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 動画:** VS Codeの画面、Explorer、検索、Terminalを確認
- **0:25–1:05 公式資料:** Claude Codeの概要・設定場所を順番に読む
- **1:05–2:25 ハンズオン:** CLIでリポジトリを探索し、AIの説明と照合
- **2:25–3:00 提出:** repository-map.md、クイズ、振り返り

## Objectives

- [ ] 絶対パスと相対パスを説明する
- [ ] VS Codeとターミナルを行き来する
- [ ] .envと依存関係の役割を説明する

## Tasks

1. **現在地とファイルを調べる** — pwd、ls、findを使い、リポジトリの入口と主要ディレクトリを確認します。

```text
pwd
ls -la
find . -maxdepth 2 -type f | sort
```

2. **技術スタックの根拠を探す** — composer.json、package.json、.env.example、routes、app、testsを探し、推測ではなくファイル名を根拠にします。

3. **AIへ読み取り専用で依頼する** — 変更禁止、根拠ファイル必須、不明点は不明と書く、という条件を付けて構造説明を依頼します。

4. **人間が照合して地図を作る** — AIが挙げたパスを自分で開き、正しい説明だけをrepository-map.mdに残します。

## Practice prompt

```text
このリポジトリは変更しないでください。技術スタック、主要ディレクトリ、起動方法、テスト方法を調査し、根拠ファイルのパスを示してください。確認できない項目は推測せず「未確認」と書いてください。
```

## Required deliverables

- [ ] learning-log/day-01/repository-map.md
- [ ] 確認したコマンドと結果
- [ ] AIの説明で誤っていた点または未確認だった点

## Done when

- [ ] 主要ディレクトリを5つ以上説明した
- [ ] すべての説明に根拠パスがある
- [ ] 秘密情報を記録していない
- [ ] リポジトリのファイルを変更せず調査した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
