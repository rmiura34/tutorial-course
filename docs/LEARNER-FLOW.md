# 受講者導線と運営チェック

## 受講者が触るもの

| Surface | 受講者の用途 | 運営者の責任 |
|---|---|---|
| 教材サイト | 動画、公式資料、Quiz、Task確認 | 公開Linkを案内する |
| GitHub Repository | Code、Branch、Commit、PR | TemplateまたはFork方式を決める |
| Codespaces | 開発環境 | Dev Containerが完了することを定期確認する |
| Laravel Lab | 実装・Debug・Test | Migration、Seeder、既知Scenarioを保守する |
| Codex等のAgent | 調査・計画・Review支援 | Account条件と安全Ruleを案内する |

## 公開Self-studyとして運営する

- 教材サイトをPublicにする
- GitHub RepositoryをPublicかつTemplateにする
- 解答と採点情報は別のPrivate Repositoryへ置く
- 受講者は招待なしで教材とRepositoryを閲覧できる
- PRへの講師Reviewが必要な開催回だけ、提出方法を別途案内する

## 開催前Smoke Test

講師権限を持たないテスト用Accountで確認します。

1. 案内URLから教材サイトへ入れる
2. GitHub Repositoryを開ける
3. TemplateまたはForkを作成できる
4. Codespaceを作成できる
5. `postCreateCommand`が成功する
6. Port 3000と8000を開ける
7. `npm run lab:test`が成功する
8. `npm run course -- start 1`でBranchとLogが作られる
9. Codexが`AGENTS.md`とDay Taskを読み取る
10. PR TemplateにDay、検証、AI利用、Risk、Rollbackを記入できる

## Taskの単一Source

Web表示のSourceは`app/data/lessons.ts`です。`npm run course:generate`により次を生成します。

- `course/tasks/index.json`: 外部Toolが読み取る機械可読Task
- `course/tasks/day-XX.md`: 人間とCodexが読むDay Task

生成後は必ず差分をReviewします。Task fileを直接編集しても、次回生成で上書きされます。
