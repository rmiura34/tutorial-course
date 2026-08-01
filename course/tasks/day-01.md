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

tutorial-course直下を自分で確認し、既存Codeを変えずにRepositoryの構造と根拠をrepository-map.mdへまとめられる

## Why this matters

VS CodeやCursorは、いま開いているFolderを基準にExplorerとTerminalを動かします。tutorial-courseではなくtraining-labだけを開くと、教材Commandや学習Logを見つけられません。AIへ調査を頼む前に、人がRepositoryのroot、現在地、Branchを確認できることが安全な開発の出発点です。

## Before you start

- [ ] tutorial-course RepositoryをローカルPCへcloneまたはダウンロード済み
- [ ] VS CodeまたはCursorを起動できる
- [ ] 用語集で『CLI』『Terminal』『VS Code』『Repository』『Path』を一度読んだ
- [ ] node -vとnpm -vでVersion番号が表示される。command not foundならStart Guide（/start）の環境準備へ戻る

## 先に調べる用語

- **CLI:** Command Line Interface。Buttonではなく文字のCommandでPCを操作する方法
- **Terminal:** CLI Commandを入力し、結果やErrorを読むための画面
- **VS Code:** Explorer・Editor・Terminalを一画面で使える開発用アプリ
- **Repository:** Code、教材、変更履歴をまとめたProjectの保管場所
- **Path:** ファイルやFolderの場所を表す住所。/から始まる絶対Pathと現在地基準の相対Pathがある

## Start command

```bash
npm run course -- start 1
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-01.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-01-environment and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-01/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:20 用語を確認:** CLI・Terminal・Editor・Repository・Pathの意味を用語集で読む
- **0:20–0:45 Projectを開く:** File → Open Folderでtutorial-courseを選び、Explorerの一番上を確認する
- **0:45–1:05 環境を確認:** Terminalを開き、現在地とNode・npmのVersionを確認する
- **1:05–1:35 Taskを開始:** show 1で内容を読み、安全確認後にstart 1を実行する
- **1:35–2:35 Repositoryを調査:** Explorerと読み取り専用Commandで主要FolderとFileを照合する
- **2:35–3:00 成果物を確認:** repository-map.mdを作り、差分とBranchを確認する

## Learning resources

### 必修

このDayに事前の必修資料はありません。Taskから開始してください。

### 任意・困ったときだけ

- **Visual Studio Codeを7分で学ぶ（任意）**（日本語・必要なら7分）— File → Open Folder、Explorer、Editorの位置が分からない場合だけ見ます。動画なしでも演習できます。 [必要なときだけ開く](https://learn.microsoft.com/ja-jp/shows/visual-studio-code/learn-visual-studio-code-in-7min-official-beginner-tutorial)
- **VS Code: フォルダーを開く入門（英語・補助）**（英語・必要時10分）— File → Open FolderとExplorerの見方を画像付きで確認できます。画面で迷った時だけ参照します。 [必要なときだけ開く](https://code.visualstudio.com/docs/editing/getting-started)
- **Cursor: インストール（英語・補助）**（英語・必要時5分）— Cursorを選ぶ人向けの導入資料です。すでにVS Codeを使える場合は読む必要がありません。 [必要なときだけ開く](https://docs.cursor.com/get-started/installation)
- **VS Code: Terminal入門（英語・補助）**（英語・必要時8分）— 統合Terminalの開き方が分からない場合だけ参照します。 [必要なときだけ開く](https://code.visualstudio.com/docs/terminal/getting-started)

## Objectives

- [ ] CLI・Terminal・Editor・Repositoryの違いを説明する
- [ ] VS CodeまたはCursorで正しいProject Folderを開く
- [ ] ExplorerでRepository直下と主要Fileを見つける
- [ ] show 1とstart 1の違いを説明する
- [ ] Pathと秘密情報を安全に確認する

## Tasks

1. **tutorial-course Folderを開く** — VS CodeまたはCursorで File → Open Folder を選び、ダウンロードまたはclone済みのtutorial-course Folderを選びます。training-labだけや、その一つ上のDocuments全体は選びません。成功: Window上部またはExplorer最上部にtutorial-courseが表示されます。

2. **ExplorerでRepository直下を確認する** — 左端のExplorerアイコンを押し、tutorial-course左の山形を開きます。直下にpackage.json、app、course、learning-log、training-labが並べば正しいrootです。training-labしか見えない場合は File → Open Folder へ戻り、その親のtutorial-courseを開き直します。

3. **TerminalとNode・npmを確認する** — Terminal → New Terminalを選び、3行を1行ずつ実行します。pwdの末尾がtutorial-courseで、nodeとnpmのVersion番号が表示されれば成功です。command not foundになったら先へ進まず、Start Guide（/start）の環境準備へ戻ります。

```text
pwd
node -v
npm -v
```

4. **show 1でTaskを読む** — show 1は読み取り専用です。FileやBranchを変更せず、Day 01の課題、目的、予定Branch、AIへ渡すPromptをTerminalへ表示します。成功: DAY 01、Goal、training/day-01-environment、Promptを確認できます。

```text
npm run course -- show 1
```

5. **安全を確認してstart 1を実行する** — 最初にgit status -sbを読み、残したい未Commit変更がないことを確認します。その後start 1を実行します。startは学習Branchとlearning-log/day-01を準備し、危険な未Commit変更があれば停止します。

```text
git status -sb
npm run course -- start 1
```

6. **Branchと学習Logを確認する** — 成功: Branch名がtraining/day-01-environmentになり、Explorerでlearning-log/day-01 Folderを展開できます。別のBranchなら作業を止め、startのErrorを読み直します。

```text
git branch --show-current
ls -la learning-log/day-01
```

7. **Repositoryを読み取り専用で探索する** — lsで直下、findで深さ2までを表示します。Explorerのpackage.json、training-lab、app、course、testsと照合します。ここでは削除・移動・編集をしません。

```text
ls -la
find . -maxdepth 2 -type f | sort
```

8. **主要Fileを開いて役割を確認する** — Explorerでpackage.json、training-lab/composer.json、.env.exampleを一つずつ開きます。package.jsonは教材側、training-labはLaravel側です。.env.exampleは変数名だけ見て、TokenやPasswordを記録しません。

9. **AIへ読み取り専用の調査を頼む** — 下のAIへの依頼文を使います。返答に出たPathはExplorerで実在を確認し、見つからないものは『未確認』として残します。AIの説明だけで成果物を確定しません。

10. **Repository地図を作って検証する** — Templateをday-01へコピーして記入します。成功: repository-map.mdだけが意図した差分として表示され、主要Fileを5つ以上、根拠Path付きで説明できています。

```text
cp learning-log/templates/repository-map.md learning-log/day-01/repository-map.md
git diff -- learning-log/day-01/repository-map.md
git status -sb
```

## Practice prompt

```text
このリポジトリは変更しないでください。技術スタック、主要ディレクトリ、起動方法、テスト方法を調査し、根拠ファイルのパスを示してください。確認できない項目は推測せず「未確認」と書いてください。
```

## Required deliverables

- [ ] learning-log/day-01/repository-map.md
- [ ] 同ファイル内の『実行したCommandと結果』欄
- [ ] 同ファイル内の『AIの誤り・未確認事項』欄
- [ ] git status -sbの最終結果

## Success looks like this

- [ ] Explorer最上部がtutorial-courseで、直下にpackage.jsonとtraining-labが見える
- [ ] show 1の前後でBranchとFileが変わらず、課題・目的・予定Branch・Promptが表示される
- [ ] start 1の後にtraining/day-01-environmentとlearning-log/day-01を確認できる
- [ ] 主要Fileを5つ以上、役割と根拠Path付きで記録できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Explorerにtraining-labしか見えない、またはpwdの末尾がtutorial-courseではない | Repository全体ではなく子Folder、または広すぎる親Folderを開いている | File → Open Folderへ戻り、package.jsonとtraining-labの両方を含むtutorial-course Folderを選び直す |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: package.json — tutorial-course直下にあり、教材サイトのCommandとJavaScript依存関係を定義している。確認: scripts欄。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] VS CodeまたはCursorでtutorial-course Folderを開いている
- [ ] Explorer直下にpackage.jsonとtraining-labが見える
- [ ] show 1が読み取り専用、start 1がBranchと学習Logの準備だと説明できる
- [ ] 現在地とBranchが指定どおりである
- [ ] 主要ディレクトリを5つ以上説明した
- [ ] すべての説明に根拠Pathがある
- [ ] 秘密情報を記録していない
- [ ] 成果物以外のファイルを変更していない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
