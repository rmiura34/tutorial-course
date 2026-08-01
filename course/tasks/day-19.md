---
schema_version: 1
day: 19
week: 4
branch: training/day-19-pr-review
workspace: training-lab
duration_minutes: 180
---

# Day 19 — Pull RequestとReview対応

## Goal

仕様、互換性、DB、Security、Test、Rollbackを説明したMerge可能なPRを完成できる

## Why this matters

Reviewの目的はAIや人の意見へ従うことではなく、仕様と証拠に基づいてMerge可否を判断することです。

## Before you start

- [ ] Day 18の実装と全Testが完了
- [ ] PR説明欄を埋めた
- [ ] Files changedを自分で全行確認

## 先に調べる用語

- **Review:** 変更を第三者視点で検査すること
- **Status check:** CIなど自動検査の結果
- **Merge conflict:** 同じ箇所の変更を自動統合できない状態

## Start command

```bash
npm run course -- start 19
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-19.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-19-pr-review and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-19/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:20 任意動画／Self Review:** Files changedの操作が不安な場合だけ動画を見る。操作できる人は全行Reviewへ進む
- **0:20–0:45 Self review:** Files changedを全行確認
- **0:45–2:10 3者Review:** Codex、Claude、人間で指摘を分類
- **2:10–3:00 対応:** 修正、再Test、コメント回答、Merge判定

## Learning resources

### 必修

- **Pull Requestで提案された変更をReviewする**（日本語・10分）— Comment、Approve、Request changesの実際の操作。 [開く](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)

### 任意・困ったときだけ

- **GitHub pull request review videos**（英語・約15分）— GitHub公式チャンネルからPull Request reviewの操作動画を1本視聴します。 [必要なときだけ開く](https://www.youtube.com/@GitHub/search?query=pull%20request%20review)
- **Pull Request Reviewについて**（日本語・補助8分）— Review stateとBranch protection。 [必要なときだけ開く](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- **Merge Conflictに対処する**（日本語・必要時10分）— Conflictが実際に起きた場合だけ参照します。 [必要なときだけ開く](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- **保護されたBranchについて**（日本語・補助10分）— Required reviewとStatus checkの背景。 [必要なときだけ開く](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- **Secure coding practices**（英語・10分）— 認証、入力、SecretなどProject版DocsのSecurity項目を確認。 [必要なときだけ開く](https://laravel.com/docs/13.x/security)

## Objectives

- [ ] Review観点を体系化する
- [ ] 指摘の採用/不採用を説明する
- [ ] 修正後に再Testする

## Tasks

1. **Self review** — 仕様、不要変更、互換性、DB、Transaction、N+1、Null、Exception、Retry、Timeout、Secret、Validation、Test、Rollbackを確認します。

2. **AI Reviewを2系統で実行** — CodexとClaudeへ同じReview観点を渡し、指摘を重複・相違・誤検知へ分類します。

3. **人間が採否を決める** — 各指摘の根拠を再現し、採用・不採用・保留の理由を記録します。

4. **修正と回答** — 修正Commit、再Test、PRコメント回答、未解決Risk、Merge可否を更新します。

## Practice prompt

```text
このPRを、仕様適合、不要変更、互換性、DB整合性、Transaction、N+1、Null、Exception、Retry、Timeout、Secret、Validation、Test不足、可読性、Rollbackの観点でReviewしてください。
```

## Required deliverables

- [ ] 完成したPR
- [ ] review-comparison.md
- [ ] 指摘ごとの採用/不採用理由
- [ ] 修正後のTest結果

## Success looks like this

- [ ] 指摘を採用・不採用・保留に分類
- [ ] 全判断に根拠と再Test結果がある
- [ ] 未解決RiskがPRに明記される

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| AIの全指摘をそのまま修正した | 仕様と再現を確認していない | 各指摘を仮説へ戻し、対象行・仕様・Testで1件ずつ検証する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 指摘#2は不採用。理由: nullableはMigration仕様。根拠と該当TestをPRへ返信。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] Files changedを全行確認した
- [ ] AI指摘を無条件採用していない
- [ ] 修正後に関連TestとCIが成功した
- [ ] 未解決RiskをPRへ明記した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
