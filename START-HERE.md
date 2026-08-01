# START HERE — 受講開始ガイド

このファイルは受講者が最初に読む入口です。実際に演習する人は、上から順番に進めてください。

## 0. 教材を見るだけならLoginもInstallも不要

教材サイトとGitHub Repositoryは公開されています。閲覧だけならGitHub Account、ChatGPT Account、招待は不要です。

実際にCodeを書いて演習する場合は、次のものを使います。

| 必要なもの | 用途 |
|---|---|
| GitHub Account | 自分用Repository、Branch、Commit、Pull Request |
| VS CodeまたはCursor | PC上でFolder、File、Terminalを扱うEditor。どちらか1つでよい |
| Node.js LTSとnpm | 教材のCommandとWeb Applicationを実行。npmはNode.jsと一緒に入る |
| Git | GitHubからcloneし、変更履歴とBranchを管理 |
| Codex / ChatGPT（任意） | 調査・計画・ReviewのCoach。GitHubとは別Account |

知らない言葉は[初心者用語集](./docs/GLOSSARY.md)で確認できます。暗記は不要です。

## 1. EditorをInstallする

ブラウザ版VS Codeではなく、PCへApplicationとしてInstallしたEditorを推奨します。VS CodeとCursorは同じ役割なので、両方は不要です。

- 初めてなら[VS Code公式Download](https://code.visualstudio.com/download)
- AI統合Editorを使いたいなら[Cursor公式Download](https://cursor.com/download)

会社や学校のPCでInstall権限がない場合だけ、後述のCodespacesを代替として使います。

## 2. Node.js LTS・npm・GitをInstallする

### Node.jsとnpm

[Node.js公式Download](https://nodejs.org/en/download)で`LTS`と書かれた版を選びます。npmはNode.jsと一緒にInstallされるため、非公式Siteからnpm単体をDownloadしません。公式説明は[Node.jsとnpmのInstallガイド](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)です。

macOS初心者は公式の`.pkg` Installer、Windows初心者は公式の`.msi` Installerを使います。

Homebrewをすでに使っているmacOS利用者は、次でもInstallできます。

```bash
brew install node
```

Homebrewを知らない場合は、この教材のために新規導入せず公式Installerを選びます。公式Siteは[brew.sh](https://brew.sh/)です。

Windowsでwingetを使える場合はPowerShellで次を実行できます。

```powershell
winget install OpenJS.NodeJS.LTS
```

winget自体が分からない場合はNode.js公式Installerを使います。詳細は[Microsoft公式winget手順](https://learn.microsoft.com/windows/package-manager/winget/install)を参照してください。

### Git

まず`git --version`を実行し、見つからなければ[Git公式Download](https://git-scm.com/downloads)からInstallします。

Install後はVS CodeまたはCursorを完全に閉じ、開き直してから新しいTerminalで確認します。

```bash
node -v
npm -v
git --version
```

3行ともVersion番号が表示されれば成功です。

## 3. 自分用Repositoryを作る

1. [元の教材Repository](https://github.com/rmiura34/tutorial-course)を開く
2. `Use this template`を押す
3. `Create a new repository`を選ぶ
4. Ownerが自分のGitHub名になっていることを確認する
5. Repository名を`tutorial-course`にして作成する

以降は自分のRepositoryで作業し、元教材へ直接Pushしません。Templateボタンが利用できない場合はForkを使います。

## 4. PCへcloneしてEditorで開く

1. 自分のRepositoryで`Code` → `Local` → `HTTPS`を選びURLをコピーする
2. macOSはTerminal、WindowsはPowerShellを開く
3. Repositoryを保存したいFolderで次を実行する

```bash
git clone https://github.com/YOUR_GITHUB_NAME/tutorial-course.git
cd tutorial-course
```

`YOUR_GITHUB_NAME`はそのまま入力せず、自分のRepositoryからコピーしたURLを使います。

続いてVS CodeまたはCursorで`File` → `Open Folder`を選び、cloneした`tutorial-course` Folderを開きます。

- 左のExplorer最上部に`tutorial-course`が表示される
- `app`、`course`、`package.json`が見える
- `Terminal` → `New Terminal`でTerminalを開ける
- `pwd`の結果が`tutorial-course` Folderを指す

以上を確認してください。ExplorerはCodeとFileを見る場所、Browserは起動したApplication画面を見る場所です。

## 5. Day 01で使う2つの画面を分ける

Day 01ではApplicationをlocalhostで起動しません。次の2つだけを使います。

| 画面 | 用途 | 最初の操作 |
|---|---|---|
| Browserの公開教材 | 次にやる操作、Command、成功条件を読む | Day 01ページを開いたままにする |
| VS CodeまたはCursor | Folder、File、Terminalを操作する | `File` → `Open Folder`でtutorial-courseを開く |

CommandはBrowserのAddress barやGitHub画面ではなく、VS Code / Cursorの`Terminal` → `New Terminal`で開いた欄へ入力します。

- `localhost:3000`: 教材サイト自体を編集する運営者向け。通常受講では不要
- `localhost:8000`: Laravel演習用Company Import Lab。使用するDayの指示が出るまで不要
- `training-lab`: Day 01では開かない

## 6. Day 01のTaskを読む・開始する

まず内容だけを表示します。

```bash
npm run course -- show 1
```

このCommandは`Day 01のTaskを見せて`という意味です。BranchやFileを変更しないため、何度実行しても構いません。

実行すると、次の項目がTerminalに表示されます。

```text
Day 01: ターミナル・ファイル・開発環境
Branch: training/day-01-environment
Workspace: repository root
Goal: tutorial-course直下を自分で確認し、既存Codeを変えずにRepositoryの構造と根拠をrepository-map.mdへまとめられる
Task file: course/tasks/day-01.md

Start:
  npm run course -- start 1

Codex kickoff:
Read AGENTS.md, START-HERE.md, and course/tasks/day-01.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-01-environment and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-01/plan.md as a checklist, explain only the first task, and wait.
```

Terminalの要約だけで終わらず、Explorerで`course` → `tasks` → `day-01.md`を開いて全文を読みます。今日作る成果物は`learning-log/day-01/repository-map.md`です。

- `npm`: Node.jsと一緒に入る実行Tool
- `run`: `package.json`に登録された処理を呼ぶ
- `course`: この教材のTask runner
- `--`: ここから後ろをcourseへ渡す区切り
- `show 1`: Day 01を読む

内容を理解したら1回だけ開始します。

```bash
npm run course -- start 1
```

`start 1`は安全確認後に`training/day-01-environment` Branchへ移動し、`learning-log/day-01/plan.md`を作ります。未Commit変更があると停止し、既存の作業を勝手に失いません。

## 7. Codexへ最初に渡す指示

CodexでこのRepositoryを開き、次を貼り付けます。

```text
COACHモードで進めてください。
まずAGENTS.md、START-HERE.md、course/tasks/day-01.mdを読んでください。
まだ実装ファイルは変更しないでください。
現在のBranchとgit statusを確認し、今日のGoal、Context、Constraints、Done whenを整理してください。
その後、learning-log/day-01/plan.mdに実行Taskをチェックリストで作成し、最初の1項目だけ説明して待ってください。
```

## 8. よくあるErrorと戻り方

| Error・症状 | 原因 | 戻り方 |
|---|---|---|
| `command not found: node / npm` | Node.js未Install、またはEditorを再起動していない | Node.js LTSをInstallしEditorを完全に開き直す |
| `command not found: git` | Git未Install | Git公式SiteからInstallしEditorを開き直す |
| `Repository not found / 404` | clone URLのOwnerや綴りが違う | 自分のRepositoryの`Code` → `Local` → `HTTPS`から再コピー |
| `package.json not found` | Terminalの現在地が違う | `pwd`を確認し`tutorial-course`へ`cd`する |
| `Working tree is not clean` | 未Commit変更がある | `git status -sb`を確認。削除やresetをせずCommitまたは講師へ相談 |
| `EADDRINUSE` | 同じPortですでにApplicationが起動中 | 前のTerminalで`Control + C`を押してから再実行 |

相談するときは、Error全文、OS、実行したCommand、次の結果を共有します。ただし`.env`、Token、Password、認証Codeは共有しません。

```bash
pwd
node -v
npm -v
git --version
git status -sb
```

## 9. CodespacesはInstallできない場合の代替

会社・学校の制限などでPCへApplicationをInstallできない場合のみ、自分のRepositoryで`Code` → `Codespaces` → `Create codespace on main`を使えます。この場合はBrowser版VS Codeと`PORTS` Tabを使いますが、通常の推奨RouteはローカルのVS CodeまたはCursorです。
