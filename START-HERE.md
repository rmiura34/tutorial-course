# START HERE — 受講開始ガイド

このファイルは受講者が最初に読む唯一の入口です。上から順番に進めてください。

## 0. 何にログインするのか

教材サイト、GitHub、Codexは別のサービスです。1つのアカウントですべてへ自動的に入れるわけではありません。

| サービス | 必要になる時期 | 用途 |
|---|---|---|
| 教材サイト | 最初から | 動画、公式資料、クイズ、Taskの確認 |
| GitHub | Day 1から必須 | 自分のRepository、Codespaces、Branch、Commit、PR |
| Codex / ChatGPT | Day 5以降 | Repositoryを読み、計画、実装、Reviewを支援 |
| Cursor / Claude Code | 該当Day | Agent比較、Skills、Hooksの演習 |

- 招待制開催では、講師から案内されたメールアドレスで教材サイトとGitHubへアクセスします。
- ChatGPTへログインできても、GitHub Repositoryへの権限は付与されません。
- GitHubへログインできても、Codexの利用権限が自動で付与されるわけではありません。
- アクセスできない場合は、新しいアカウントを作る前に講師へ「どのメールアドレスを登録したか」を確認してください。

## 1. 推奨環境

初心者はGitHub Codespacesを使います。PHP、Node.js、Composer、SQLite、VS Code設定を自動で揃えられるためです。

必要なもの:

- GitHubアカウント
- Chrome、Edge、Safariなどのブラウザ
- 安定したインターネット接続
- 講師から案内されたRepositoryへのアクセス

ローカルPCで進める場合は、Git、Node.js 22以上、npm、PHP 8.4以上、Composer 2、SQLiteが必要です。

## 2. 自分のRepositoryを作る

開催方法によって、講師からどちらか一方が案内されます。

### A. Template方式

1. GitHubで教材Repositoryを開く
2. `Use this template`を押す
3. `Create a new repository`を選ぶ
4. Repository名を`tutorial-course-自分の名前`にする
5. Visibilityは講師の指示に合わせる
6. `Create repository`を押す

### B. 招待・Fork方式

1. 講師から届いたGitHub招待を承認する
2. 案内されたRepositoryを開く
3. `Fork`を押す
4. Ownerが自分のGitHubアカウントになっていることを確認する
5. `Create fork`を押す

以降は、必ず自分のRepositoryで作業します。元教材のRepositoryへ直接Pushしません。

## 3. Codespacesを起動する

1. 自分のRepositoryで緑色の`Code`ボタンを押す
2. `Codespaces`タブを選ぶ
3. `Create codespace on main`を押す
4. VS Codeの画面が開くまで待つ
5. Terminalに`Learner workspace is ready`と表示されることを確認する

初回は依存関係のDownloadに数分かかる場合があります。途中でブラウザを閉じないでください。

## 4. 2つのアプリを起動する

VS Code上部のメニューから`Terminal` → `New Terminal`を選び、次を実行します。

```bash
npm run learner:start
```

起動するもの:

- 教材サイト: Port `3000`
- Laravel Training Lab: Port `8000`

Codespaces右下に通知が出たら`Open in Browser`を押します。通知を閉じた場合は、VS Code下部の`PORTS`タブを開き、Port 3000または8000の地球アイコンを押します。

## 5. 正常起動を確認する

次の6項目を確認します。

- [ ] Port 3000でTutorial Courseが表示される
- [ ] Port 8000でCompany Import Monitorが表示される
- [ ] Company Import Monitorに3社表示される
- [ ] `Run demo import`を押すと会社が追加される
- [ ] `npm run lab:test`が成功する
- [ ] `git status -sb`で予期しない変更が出ていない

起動できない場合:

```bash
npm run learner:setup
npm run lab:test
```

それでも失敗する場合は、エラー全文、実行したコマンド、現在のBranchを講師へ送ります。Secretや`.env`の中身は送らないでください。

## 6. Day 01のTaskを開始する

Taskを表示します。

```bash
npm run course -- show 1
```

作業Branchと学習Logを作ります。

```bash
npm run course -- start 1
```

このコマンドは未Commit変更がある場合には停止します。既存の作業を勝手に失わないためです。

## 7. Codexへ最初に渡す指示

CodexでこのRepositoryを開き、次を貼り付けます。

```text
COACHモードで進めてください。
まずAGENTS.md、START-HERE.md、course/tasks/day-01.mdを読んでください。
まだ実装ファイルは変更しないでください。
現在のBranchとgit statusを確認し、今日のGoal、Context、Constraints、Done whenを整理してください。
その後、learning-log/day-01/plan.mdに実行Taskをチェックリストで作成し、最初の1項目だけ説明して待ってください。
```

Codexは`AGENTS.md`を自動的に読みますが、最初の演習では読み込んだファイルと理解した条件を言葉で確認します。

## 8. 毎日の提出Flow

```text
Taskを読む
  → Branchを作る
  → 計画を作る
  → 調査の根拠を残す
  → 小さく実装する
  → Testする
  → Diffを全行読む
  → Commitする
  → Pushする
  → Pull Requestを作る
```

現在のTask確認:

```bash
npm run course -- check 1
```

Day番号は受講日に合わせて変更してください。
