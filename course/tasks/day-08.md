---
schema_version: 1
day: 8
week: 2
branch: training/day-08-php-reading
workspace: training-lab
duration_minutes: 180
---

# Day 08 — PHPコードリーディング

## Goal

既存PHP Classの入力、依存、分岐、例外、戻り値を自分の言葉で説明できる

## Start command

```bash
npm run course -- start 8
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-08.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-08-php-reading and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-08/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–1:15 公式動画コース:** Laravel公式PHP Fundamentalsを通しで視聴
- **1:15–1:45 Manual:** OOP、Namespace、Exceptionを確認
- **1:45–2:35 読解演習:** Laravel Classを日本語へ翻訳
- **2:35–3:00 確認:** 小さなUnit Testとクイズ

## Objectives

- [ ] Namespaceとuseを読む
- [ ] Dependency injectionを見つける
- [ ] Exceptionの発生と処理を追う

## Tasks

1. **Classの外形を読む** — Namespace、use、Class、Interface、Trait、Constructorを特定します。

2. **Method契約を読む** — Parameter type、Return type、nullable、例外を表へまとめます。

3. **依存関係を追う** — Constructor injectionされたInterfaceが、どの実装へBindingされるか探します。

4. **処理を日本語へ翻訳** — 分岐、Collection操作、例外、戻り値を1行ずつ説明し、AIの全面書き換えは行いません。

## Practice prompt

```text
このPHP Classを変更せず、Namespace、use、Class、Method、Parameter、Return type、Dependency injection、Interface、Trait、Exception、Collectionを特定し、処理順を日本語で説明してください。
```

## Required deliverables

- [ ] learning-log/day-08/php-class-reading.md
- [ ] Method契約表
- [ ] 1つのUnit Test
- [ ] 未理解の構文一覧

## Done when

- [ ] 入力と戻り値を型付きで説明した
- [ ] 依存Interfaceの実装候補を確認した
- [ ] 例外経路を記録した
- [ ] AIに全面書き換えさせていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
