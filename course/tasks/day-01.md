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

AIに正しく調査を頼むには、まず自分が「いまどのフォルダにいて、どのファイルを見ているか」を確認できる必要があります。ここが曖昧だと、別Projectを編集したり、存在しない設定を信じたりします。

## Before you start

- [ ] START HEREの完了チェックが5つともON
- [ ] 教材サイト（Port 3000）とLab（Port 8000）が開く
- [ ] VS CodeのExplorerとTerminalを表示できる

## Three words for today

- **パス:** ファイルやフォルダの住所
- **ターミナル:** 文字でPCへ命令する画面
- **Repository:** Codeと変更履歴をまとめたProjectフォルダ

## Start command

```bash
npm run course -- start 1
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-01.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-01-environment and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-01/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 動画:** VS Codeの画面、Explorer、検索、Terminalを確認
- **0:25–1:05 公式資料:** VS Code・Terminal・Codespacesの基本を順番に読む
- **1:05–2:25 ハンズオン:** CLIでリポジトリを探索し、AIの説明と照合
- **2:25–3:00 提出:** repository-map.md、クイズ、振り返り

## Objectives

- [ ] 絶対パスと相対パスを説明する
- [ ] VS Codeとターミナルを行き来する
- [ ] .envと依存関係の役割を説明する

## Tasks

1. **現在地とファイルを調べる** — 1行目のpwdは現在のFolder、2行目のlsは-aで隠しFileも含め-lで詳細表示、3行目のfindは「現在地.から深さ2までのFileだけ」を探し、sortで名前順にします。$記号は入力しません。

```text
pwd
ls -la
find . -maxdepth 2 -type f | sort
```

2. **技術スタックの根拠を探す** — composer.json、package.json、.env.example、routes、app、testsを探し、推測ではなくファイル名を根拠にします。

3. **AIへ読み取り専用で依頼する** — 変更禁止、根拠ファイル必須、不明点は不明と書く、という条件を付けて構造説明を依頼します。

4. **人間が照合して地図を作る** — learning-log/templates/repository-map.mdを見本にし、AIが挙げたPathを自分で開きます。正しい説明だけをrepository-map.mdへ残し、書き方はlearning-log/examples/day-01-repository-map.example.mdで確認します。

## Practice prompt

```text
このリポジトリは変更しないでください。技術スタック、主要ディレクトリ、起動方法、テスト方法を調査し、根拠ファイルのパスを示してください。確認できない項目は推測せず「未確認」と書いてください。
```

## Required deliverables

- [ ] learning-log/day-01/repository-map.md
- [ ] 確認したコマンドと結果
- [ ] AIの説明で誤っていた点または未確認だった点

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

- [ ] 主要ディレクトリを5つ以上説明した
- [ ] すべての説明に根拠パスがある
- [ ] 秘密情報を記録していない
- [ ] リポジトリのファイルを変更せず調査した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
