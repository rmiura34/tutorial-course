---
schema_version: 1
day: 20
week: 4
branch: exam/final-capstone
workspace: training-lab
duration_minutes: 180
---

# Day 20 — 最終実技試験

## Goal

Paginationと重複登録の不具合を最小修正し、第三者が再現・検証・Rollbackできる実務Pull Requestを完成する

## Why this matters

最終課題では、Codeを書く速さではなく、未知の問題を安全に調査し、判断と検証を説明できるかを確認します。

## Before you start

- [ ] Day 01–19の提出物が揃う
- [ ] npm run course -- show 20で課題全文を読んだ
- [ ] git status -sbがCleanで、試験用Branch exam/final-capstoneへ移動した
- [ ] 禁止事項・成果物・10項目の完了条件を声に出して確認した

## 先に調べる用語

- **Root cause:** 症状を生む根本原因
- **Capstone:** 学んだ内容を統合する最終課題
- **Audit trail:** 誰が何を判断・実行したかの記録

## Start command

```bash
npm run course -- start 20
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-20.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is exam/final-capstone and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-20/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:15 課題を読みBranchを固定:** Scenario、禁止事項、成果物、採点可能な10項目を読み、exam/final-capstoneとCleanな開始状態を記録する
- **0:15–0:45 Regression Testを再現:** skipを外し、『2ページ目欠落』『ページ間website重複』による期待値との差を保存する
- **0:45–1:05 原因と計画を承認:** Pagination、停止条件、一意Key、保存処理を追跡し、根拠Path・非Goal・Test・Rollbackをplan.mdへ書く。実装前に一度停止する
- **1:05–2:05 Testから最小実装:** 再現TestをREDにし、Paginationと重複排除を別Commitで直す。各Commit後に対象TestとDiffを確認する
- **2:05–2:35 全体検証とReview:** 対象Regression Test・Laravel全Test・Lint・Secret scan・AI Reviewを実行し、指摘の採否を記録する
- **2:35–3:00 Pull Requestを提出:** 再現、原因、変更、検証結果、AI利用、残Risk、Rollbackを埋め、成果物と完了条件を最終照合する

## Learning resources

### 必修

このDayに事前の必修資料はありません。Taskから開始してください。

### 任意・困ったときだけ

- **GitHub Flow**（日本語・必要時5分）— Branch・Commit・Pull Requestの操作を忘れた場合だけ参照します。最終課題の必修学習ではありません。 [必要なときだけ開く](https://docs.github.com/ja/get-started/using-github/github-flow)
- **Laravel Testing（英語・補助）**（英語・必要時5分）— Test環境の挙動を確認する必要がある場合だけ、ProjectのLaravel版と合わせて参照します。 [必要なときだけ開く](https://laravel.com/docs/13.x/testing)

## Objectives

- [ ] 固定Fixtureで2つの症状を再現する
- [ ] Root causeを実ファイルと失敗Testで証明する
- [ ] 最小修正とRegression Testを小Commitで作る
- [ ] AI利用・残Risk・Rollbackを第三者へ説明する

## Tasks

1. **Scenarioを自分の言葉で書く** — 課題は『training-lab/app/Services/CompanyImportService.php がDemoCompanySourceの1ページ目だけを取得し、Company::createで同じwebsiteを重複保存する』です。training-lab内のDemo Dataだけを使い、本番サイト・本番DB・実在顧客Dataは使いません。learning-log/day-20/issue-understanding.mdに現状、期待結果、影響、非Goalを書きます。

2. **開始状態を保存する** — Repository rootでBranchと差分を確認し、既存TestをBaselineとして保存します。mainなら作業を止め、指定Branchを開始します。

```text
npm run course -- start 20
git branch --show-current
git status -sb
npm run lab:test
```

3. **Skipを外して症状を再現する** — training-lab/tests/Feature/CompanyImportRegressionTest.php のmarkTestSkippedだけを削除し、対象Testを実行します。期待値はcompanies=3、Globexあり、crawl_runsのpages_visited=2・companies_seen=4・companies_saved=3です。修正前に失敗する出力をlearning-log/day-20/reproduction.mdへ保存します。

```text
php training-lab/artisan test --filter=CompanyImportRegressionTest
```

4. **Root causeを証拠で特定する** — training-lab/app/Services/CompanyImportService.php と DemoCompanySource.php を読み、fetchPage(1)固定、2ページ目のGlobex、websiteが同じAcme 2件、Company::create、固定集計値を根拠として記録します。『たぶん』だけの説明はRoot causeにしません。

5. **実装前の計画を承認する** — learning-log/day-20/plan.mdへ変更対象、変更しない範囲、Commit分割、Test、失敗時のRollbackを書きます。ここで一度実装を止め、自分またはReviewerが計画を読み直してからIMPLEMENTへ進みます。

6. **Regression Testを先にREDにする** — 用意済みTestのskip解除を最初のTest変更とし、companies=3、Globexあり、pages_visited=2、seen=4、saved=3のうちどれが失敗するか確認します。Testの期待値を実装に合わせて弱めたり、再度skipしたりしてはいけません。

7. **最小修正を2つのCommitに分ける** — Commit 1は空配列になるまでPage番号を進めるPaginationと集計、Commit 2はwebsiteを一意Keyにした重複排除に分けます。無関係なUI刷新、Package更新、全面Refactor、Test削除・skipは禁止です。各Commit前にgit diff --stagedを全行読みます。

8. **検証と安全監査を行う** — 対象Regression Test、Laravel全Test、Lintを実行します。Test結果がcompanies=3、pages_visited=2、seen=4、saved=3を証明し、.env・Token・Cookie・個人情報がDiffにないことを確認します。

```text
php training-lab/artisan test --filter=CompanyImportRegressionTest
npm run lab:test
npm run lab:lint
git diff --check
git status -sb
```

9. **AI利用記録とSelf Reviewを残す** — learning-log/day-20/ai-usage.mdへ、依頼内容、採用した案、不採用の案と理由、人間が確認したPath・Testを書きます。さらにFiles changedを全行読み、仕様・不要変更・DB・Timeout・Retry・Secret・Rollbackを点検します。

10. **採点可能なPull Requestを提出する** — PRへIssue理解、再現手順、Root causeと根拠、変更概要、Commit、Test Commandと結果、AI利用、残Risk、Rollbackを記載します。Reviewerが新しい環境で手順をコピーして再現できる文章にします。

## Practice prompt

```text
最終課題をCOACHモードで開始します。AGENTS.md、START-HERE.md、course/tasks/day-20.mdを読んでください。まだ実装しないでください。CompanyImportRegressionTestのskipを外して『2ページ目を取得できない』『ページをまたぐ同一websiteが重複保存される』を再現する方法、Root cause候補と確認Path、変更しない範囲、Regression Test、Commit分割、Risk、Rollback、不明点をlearning-log/day-20/plan.md用Checklistとして提案し、実装開始前に停止してください。
```

## Required deliverables

- [ ] learning-log/day-20/issue-understanding.md（現状・期待・影響・非Goal）
- [ ] learning-log/day-20/reproduction.md（2症状のCommand・期待値・実際値）
- [ ] learning-log/day-20/plan.md（根拠Path・変更範囲・Test・Rollback）
- [ ] PaginationのRegression Testと最小修正Commit
- [ ] 重複排除のRegression Testと最小修正Commit
- [ ] 全Test・Lint・git diff --checkの結果
- [ ] learning-log/day-20/ai-usage.md（依頼・採用/不採用・人間の検証）
- [ ] Pull Request（再現・原因・変更・検証・Risk・Rollback）

## Success looks like this

- [ ] 再現→原因→計画→実装→Test→PRが一つの証拠でつながる
- [ ] 同じwebsiteの企業が複数ページに出てもDBには1件だけ保存される
- [ ] 2ページ目まで取得され、companies=3・pages_visited=2・seen=4・saved=3をTestで証明できる
- [ ] AI利用と人間の判断が区別され、第三者がRollbackまで再現できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 時間が足りず検証前に提出しそう | 実装範囲を広げすぎた | 非Goalを増やし、再現する最小修正とRegression Testへ絞る |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: AIは原因候補列挙に使用。採用案は実Fileと失敗Testで確認。残Riskと戻し方も記載。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 1. exam/final-capstoneで作業しmainへ直接Pushしていない
- [ ] 2. markTestSkippedを削除し、修正前の失敗出力を保存した
- [ ] 3. Root causeにCompanyImportService.php・DemoCompanySource.php・失敗Testの根拠がある
- [ ] 4. Regression Testがcompanies=3とGlobexの保存を証明してPASSする
- [ ] 5. Regression Testがpages_visited=2・companies_seen=4・companies_saved=3を証明してPASSする
- [ ] 6. websiteが同じAcmeを1社として保存し、Testを削除・skip・弱体化していない
- [ ] 7. Laravel全Test・Lint・git diff --checkがPASSする
- [ ] 8. Secret・.env値・Cookie・個人情報をCommitしていない
- [ ] 9. Files changedを全行読み、AI案の採用/不採用理由を記録した
- [ ] 10. PRに第三者が実行できるRollback手順と残Riskがある

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
