# START HERE — 受講開始ガイド

このファイルは受講者が最初に読む唯一の入口です。上から順番に進めてください。

## 0. 教材は誰でも閲覧できます

教材サイトとGitHub Repositoryは公開されています。見るだけなら、ChatGPT AccountもGitHub Accountも招待も不要です。

実際に演習する場合だけ、自分のRepositoryとCodespacesを作るためのGitHub Accountを用意します。Codexを使う場合のChatGPT AccountはGitHubとは別です。Password、認証Code、Tokenは誰にも伝えません。

## 1. 何にログインするのか

教材サイト、GitHub、Codexは別のサービスです。教材を見るだけならLogin不要ですが、演習やAI支援にはそれぞれのAccountを使います。

| サービス | 必要になる時期 | 用途 |
|---|---|---|
| 教材サイト | Login不要 | 動画、公式資料、クイズ、Taskの確認 |
| GitHub | Day 1から必須 | 自分のRepository、Codespaces、Branch、Commit、PR |
| Codex / ChatGPT | Day 1からCoachとして利用 | Repositoryを読み、計画、実装、Reviewを支援。正式な比較学習はDay 5 |
| Cursor / Claude Code | 該当Day | Agent比較、Skills、Hooksの演習 |

- 教材サイトとGitHub Repositoryは、URLを知っていれば誰でも閲覧できます。
- GitHubへLoginしても、Codexの利用権限が自動で付与されるわけではありません。
- 教材が開かない場合は公開URLを再確認し、別Browserでも開かない場合だけ講師へURLと時刻を伝えてください。

知らない言葉は[docs/GLOSSARY.md](./docs/GLOSSARY.md)で確認できます。暗記する必要はありません。

## 2. 推奨環境

初心者はGitHub Codespacesを使います。PHP、Node.js、Composer、SQLite、VS Code設定を自動で揃えられるためです。

必要なもの:

- GitHubアカウント
- Chrome、Edge、Safariなどのブラウザ
- 安定したインターネット接続
- 公開されている教材RepositoryのURL

ローカルPCで進める場合は、Git、Node.js 22以上、npm、PHP 8.4以上、Composer 2、SQLiteが必要です。

## 3. 自分のRepositoryを作る

`Use this template`が表示される場合はTemplate方式を使います。表示されない場合はFork方式を使います。

### A. Template方式

1. GitHubで教材Repositoryを開く
2. `Use this template`を押す
3. `Create a new repository`を選ぶ
4. Repository名を`tutorial-course-自分の名前`にする
5. Visibilityは自分だけで練習するならPrivate、成果を公開するならPublicを選ぶ
6. `Create repository`を押す

### B. Fork方式

1. 公開Repositoryを開く
2. `Fork`を押す
3. Ownerが自分のGitHubアカウントになっていることを確認する
4. `Create fork`を押す

以降は、必ず自分のRepositoryで作業します。元教材のRepositoryへ直接Pushしません。

## 4. Codespacesを起動する

1. 自分のRepositoryで緑色の`Code`ボタンを押す
2. `Codespaces`タブを選ぶ
3. `Create codespace on main`を押す
4. VS Codeの画面が開くまで待つ
5. 左に`EXPLORER`、中央にEditor、下にTerminalが表示されることを確認する

初回は依存関係のDownloadに数分かかる場合があります。途中でブラウザを閉じないでください。

## 5. 初回準備と2つのアプリを起動する

VS Code上部のメニューから`Terminal` → `New Terminal`を選び、次を実行します。

```bash
npm run learner:setup
```

- `npm`: Repositoryに登録された処理を呼び出す道具
- `run`: `package.json`に定義された名前付き処理を実行
- `learner:setup`: 受講環境の依存関係とLabを準備する処理名
- 成功の見た目: 最後に`Learner setup completed`が表示され、赤いErrorが残らない

続けて次を実行します。

```bash
npm run learner:start
```

- このCommandは教材サイトとLaravel Labを同時に起動します。
- 起動中はこのTerminalを閉じません。
- 停止するときはTerminalを選び、`Control + C`を1回押します。

起動するもの:

- 教材サイト: Port `3000`
- Laravel Training Lab: Port `8000`

Codespaces右下に通知が出たら`Open in Browser`を押します。通知を閉じた場合は、VS Code下部の`PORTS`タブを開き、Port 3000または8000の地球アイコンを押します。

## 6. 正常起動を確認する

次の6項目を確認します。

- [ ] Port 3000でTutorial Courseが表示される
- [ ] Port 8000でCompany Import Labが表示される
- [ ] Company Import Monitorに3社表示される
- [ ] `Run demo import`を押すと会社が追加される
- [ ] `npm run lab:test`が成功する
- [ ] `git status -sb`で予期しない変更が出ていない

## 7. よくあるErrorと安全な戻り方

| Error・症状 | 主な原因 | 安全な戻り方 |
|---|---|---|
| `Repository not found` / 404 | GitHub URLの入力違い、通信Error | `https://github.com/rmiura34/tutorial-course`を直接開く。読むだけならLogin不要 |
| `command not found: npm` | Codespace準備中、別Terminal | CodespaceのSetup完了を待ち、VS Code内Terminalで`node -v`と`npm -v` |
| `EADDRINUSE` / Address already in use | 同じPortで前のAppが起動中 | 起動中Terminalで`Control + C`。不明ならCodespaceをStopして再開 |
| `Branch already exists` | 同じDayを開始済み | `git branch --show-current`を確認し、正しいBranchなら作り直さない |
| `Working tree is not clean` | 未Commit変更がある | `git status -sb`で対象を確認し、勝手に削除せずCommitまたは講師へ相談 |

講師へ送る前に次を実行します。

```bash
pwd
node -v
npm -v
git status -sb
```

`pwd`は現在のFolder、`-v`はVersion、`status -sb`は短い形式でBranchと変更を表示します。Error全文、実行Command、止まったStepと一緒に送ります。Secretや`.env`の中身は送りません。

## 8. Day 01のTaskを開始する

Taskを表示します。

```bash
npm run course -- show 1
```

`show 1`はDay 01のTaskを読むだけで、Fileを変更しません。

作業Branchと学習Logを作ります。

```bash
npm run course -- start 1
```

このコマンドは未Commit変更がある場合には停止します。既存の作業を勝手に失わないためです。
成功するとBranchは`training/day-01-environment`になります。この後で`git switch -c`をもう一度実行しません。

## 9. Codexへ最初に渡す指示

CodexでこのRepositoryを開き、次を貼り付けます。

```text
COACHモードで進めてください。
まずAGENTS.md、START-HERE.md、course/tasks/day-01.mdを読んでください。
まだ実装ファイルは変更しないでください。
現在のBranchとgit statusを確認し、今日のGoal、Context、Constraints、Done whenを整理してください。
その後、learning-log/day-01/plan.mdに実行Taskをチェックリストで作成し、最初の1項目だけ説明して待ってください。
```

Codexは`AGENTS.md`を自動的に読みますが、最初の演習では読み込んだファイルと理解した条件を言葉で確認します。

## 10. 毎日の提出Flow

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
