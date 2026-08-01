---
schema_version: 1
day: 3
week: 1
branch: training/day-03-pull-request
workspace: repository root
duration_minutes: 180
---

# Day 03 — GitHub・Issue・Pull Request

## Goal

目的・影響範囲・確認方法・リスクを説明したPull Requestを作成できる

## Why this matters

Pull Requestは単なる提出ボタンではなく、「なぜ変えたか・どう確かめたか」を他の人が判断するための説明書です。

## Before you start

- [ ] GitHubへログイン済み
- [ ] 自分のRepositoryへPushできる
- [ ] Day 02でCommitとBranchを区別できた

## 先に調べる用語

- **Issue:** 問題や作業目的を記録する場所
- **Pull Request:** Branchの変更を取り込んでもらう提案
- **base / compare:** 取込先 / 変更を持つBranch

## Start command

```bash
npm run course -- start 3
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-03.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-03-pull-request and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-03/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 任意動画／前Day復習:** BranchとPRの画面操作が不安な人だけ視聴。理解済みならIssue作成へ進む
- **0:25–1:05 公式資料:** Branch → Flow → PR → Reviewの順で読む
- **1:05–2:35 実務フロー:** Issue、Branch、2 Commit、PR、Review、修正
- **2:35–3:00 振り返り:** Merge可能性と残リスクを説明

## Learning resources

### 必修

- **GitHub Flow**（日本語・8分）— Branch、Commit、Pull Request、Review、Mergeの標準フロー。 [開く](https://docs.github.com/ja/get-started/using-github/github-flow)

### 任意・困ったときだけ

- **GitHub Flow部分を視聴**（英語・25分）— BranchをPushし、GitHub上でPull Requestへ変える部分を視聴します。 [必要なときだけ開く](https://www.youtube.com/watch?v=RGOj5yH7evk&t=3528s)
- **Pull Requestについて**（日本語・8分）— Pull Requestが変更の提案・議論・Review単位である理由。 [必要なときだけ開く](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- **Pull Requestを作成する**（日本語・必要時8分）— baseとcompareの操作で迷った場合だけ参照します。 [必要なときだけ開く](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- **GitHub Skills: Review Pull Requests（英語・補助）**（英語・任意30分）— Review操作を追加練習したい場合の公式ハンズオンです。 [必要なときだけ開く](https://github.com/skills/review-pull-requests)

## Objectives

- [ ] baseとcompareを区別する
- [ ] Files changedから差分を読む
- [ ] レビュー指摘へ根拠付きで回答する

## Tasks

1. **Issueを作る** — 現状、期待結果、完了条件、確認方法を記述し、Issue番号を確定します。

2. **Issue用Branchで2 Commit作る** — Course runnerが作成したBranch名を確認します。新しいBranchは作り直しません。1つ目は実装、2つ目はTestまたは説明更新に分け、GitHubへ送ります。

```text
git branch --show-current
git push -u origin training/day-03-pull-request
```

3. **PRテンプレートを埋める** — 変更目的、内容、影響範囲、確認方法、DB変更、リスク、AI利用範囲を空欄なく書きます。

4. **レビューへ対応する** — 指摘を再現し、採用・不採用の理由を書き、必要な修正Commitを追加します。

## Practice prompt

```text
このPRのレビュアーとして、仕様適合、不要変更、テスト不足、互換性、Secret、Rollbackの観点からレビューしてください。指摘には対象ファイルと根拠を付け、推測は明示してください。
```

## Required deliverables

- [ ] Issue
- [ ] 2 Commit以上のBranch
- [ ] テンプレートが埋まったPR
- [ ] レビューコメントへの回答

## Success looks like this

- [ ] IssueとPRが相互に参照される
- [ ] baseがmain、compareが課題Branch
- [ ] 第三者が手順どおりに確認できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| PRのFiles changedが空 | 同じBranch同士を比較しているかPush前 | compareを課題Branchへ直し、git push -u origin <branch>を確認する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 目的: 学習手順を明確化。確認: npm test。Risk: 文書のみ。Rollback: Commitをrevert。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] baseがmain、compareが課題Branchになっている
- [ ] Files changedを全行確認した
- [ ] CIが成功した
- [ ] Merge前に未解決コメントがない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
