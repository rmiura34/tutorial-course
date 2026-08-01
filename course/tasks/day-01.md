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

## Why this matters

CLIは文字でPCへ命令する方法、VS Codeはファイルを見て編集する開発用アプリです。AIに正しく調査を頼むには、自分でも『いまどのRepositoryの、どの場所を見ているか』を確認できる必要があります。ここが曖昧だと別Projectを編集したり、存在しない設定を信じたりします。

## Before you start

- [ ] START HEREの完了チェックが5つともON
- [ ] 用語集で『CLI』『Terminal』『VS Code』『Repository』『Path』を検索し、意味を一度読んだ
- [ ] GitHubへログインし、自分のtutorial-course Repositoryの Code ボタンが見える
- [ ] CodespacesでBrowser版VS Codeを開ける（ローカル受講ならVS CodeでRepository Folderを開ける）

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

- **0:00–0:20 用語と画面を確認:** 用語集でCLI・Terminal・VS Code・Repository・Pathを調べ、GitHubとVS Codeの役割を区別する
- **0:20–0:40 Codespacesを開く:** GitHubのRepositoryページで Code → Codespaces → Create codespace on main を選び、Browser版VS Codeが開くまで待つ
- **0:40–1:00 任意の操作デモ:** 画面操作が不安な人だけVS Code公式動画を見る。操作できる人は演習へ進む
- **1:00–2:25 Terminal演習:** Repository rootで指定Commandを1ブロックずつ実行し、表示結果とExplorer上のファイルを照合する
- **2:25–3:00 成果物と完了確認:** learning-log/day-01/repository-map.mdを作成し、git diffとgit statusで意図しない変更がないことを確認する

## Learning resources

### 必修

- **GitHub Codespacesのクイックスタート**（日本語・8分）— GitHubからBrowser版VS Codeを開く手順です。『Codespaceを作成する』までを必ず確認します。 [開く](https://docs.github.com/ja/codespaces/quickstart)

### 任意・困ったときだけ

- **VS Code入門動画（任意・英語）**（英語・必要な章だけ・約20分）— Explorer、検索、統合Terminalの場所が分からない場合だけ視聴します。動画を見なくても演習は完了できます。 [必要なときだけ開く](https://code.visualstudio.com/docs/getstarted/introvideos)
- **VS Code: Getting Started（英語・補助）**（英語・必要時10分）— Explorer、編集、保存の場所が分からないときだけ参照します。日本語公式版がないため英語です。 [必要なときだけ開く](https://code.visualstudio.com/docs/getstarted/getting-started)
- **VS Code: Terminal入門（英語・補助）**（英語・必要時8分）— 統合Terminalの開き方が分からないときだけ参照します。日本語公式版がないため英語です。 [必要なときだけ開く](https://code.visualstudio.com/docs/terminal/getting-started)

## Objectives

- [ ] CLI・Terminal・VS Code・Repositoryの違いを説明する
- [ ] GitHubからCodespacesを開き、ExplorerとTerminalを行き来する
- [ ] 絶対パスと相対パスを説明する
- [ ] .envと依存関係を秘密情報を開示せず確認する

## Tasks

1. **GitHubで教材を開く** — GitHubのtutorial-course Repositoryを開き、緑色の Code ボタン → Codespaces タブ → Create codespace on main をクリックします。すでに自分のTemplate Repositoryを作成済みなら、そのRepositoryからCodespaceを開きます。

2. **VS Codeの3か所を見つける** — 左のExplorerはファイル一覧、中央のEditorはファイル内容、下のTerminalは文字でCommandを実行する場所です。メニュー Terminal → New Terminal を選び、入力欄の末尾にカーソルがあることを確認します。

3. **Taskと作業Branchを準備する** — Terminalで次の2行を上から1行ずつ実行します。showは課題を表示するだけ、startはtraining/day-01-environment Branchとlearning-log/day-01を準備します。

```text
npm run course -- show 1
npm run course -- start 1
```

4. **現在地とBranchを確認する** — pwdの末尾がtutorial-course、git branch --show-currentがtraining/day-01-environmentになっていることを確認します。違う場合は先へ進まず、Terminalを開き直します。

```text
pwd
git branch --show-current
git status -sb
```

5. **Repositoryを読み取り専用で探索する** — lsは直下、findは深さ2までのファイルを表示します。表示が多くてもErrorではありません。$記号は入力しません。ここではファイルを削除・移動・編集しません。

```text
ls -la
find . -maxdepth 2 -type f | sort
```

6. **技術スタックの根拠を開く** — Explorerからpackage.json、training-lab/composer.json、.env.example、app、course/tasks、testsを順に開きます。.env.exampleは変数名だけ確認し、値・Token・Passwordを学習ログへ貼りません。

7. **AIへ調査だけを依頼する** — 下のPractice PromptをCodexへ貼り、変更禁止・根拠Path必須・不明は未確認という条件を守らせます。返答にあるPathをExplorerで実際に開き、存在しないPathは採用しません。

8. **Repository地図を作って検証する** — learning-log/templates/repository-map.mdをlearning-log/day-01/repository-map.mdへコピーし、learning-log/examples/day-01-repository-map.example.mdを完成見本として記入します。最後にgit diffで内容を読み、git status -sbでこの成果物以外の意図しない変更がないことを確認します。

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

- [ ] pwdの結果がRepositoryの場所を指す
- [ ] 主要ファイルを5つ以上、役割と根拠付きで記録できる
- [ ] 調査だけを行い、git statusに意図しない変更がない

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| pwdが想定外の場所を表示する | Terminalで別フォルダを開いている | Explorerでtutorial-courseを右クリックし「Open in Integrated Terminal」を選ぶ |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: package.json — 教材サイトの起動CommandとJavaScript依存関係を定義している。確認: scripts欄。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] GitHub・VS Code・Terminalの役割を自分の言葉で説明できる
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
