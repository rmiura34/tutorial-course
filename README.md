# Tutorial Course

初心者が「見る」だけで終わらず、実際にコードを書き、ブランチを作り、Pull Requestを通してWebページを公開するための実践型コースです。

## コースの特徴

- 3〜7分の短い動画を置けるレッスン画面
- 学習目標、手順、クイズ、実装課題を1ページに集約
- 全8レッスンのロードマップと端末内の進捗記録
- Codespaces / Dev Containerによる統一された環境
- 課題ごとのブランチとPull Request
- GitHub ActionsによるLint、ビルド、表示テスト
- AI利用を隠さず振り返るPull Requestテンプレート

## 受講者の始め方

1. このリポジトリの `Use this template` から自分のリポジトリを作る
2. `Code` → `Codespaces` → `Create codespace on main` を選ぶ
3. サイト内のLesson 01から進める
4. 各レッスンで指定されたブランチを作る
5. 実装、コミット、Push、Pull Requestの順に提出する

> Repository ownerは、GitHubのSettingsでこのリポジトリをTemplate repositoryに設定してください。

## 開発

必要環境はNode.js 22.13.0以上です。

```bash
npm ci
npm run dev
```

## ターミナルで教材を読む

リポジトリのルート（`package.json` があるフォルダ）で実行します。
Day 01として案内されている内容は、このリポジトリのLesson 01に対応します。

```bash
npm run course -- show 1
npm run course -- list
npm run course -- show 2
```

`show` は1〜8の番号に対応し、`01` のような表記も利用できます。
学習目標、手順、完了チェック、クイズを表示します。コマンドは課題の変更や自動採点を行いません。
クイズの回答・解説と進捗記録を利用する場合は `npm run dev` でWeb画面を開いてください。

`Missing script: "course"` が出る場合は、実行場所を確認し、この修正を含む最新版を取得してください。
`package.json` へのスクリプト追加だけでは実行できず、`course/index.js` も必要です。

CLIだけの検証は `npm run test:course` で実行できます（ビルド不要）。

## 検証

検証:

```bash
npm run lint
npm run build
npm test
```

## コース構成

| Lesson | テーマ | 成果 |
|---|---|---|
| 01 | VS Code / Codespaces | 作業場所を開ける |
| 02 | HTML | プロフィールの骨組みを作れる |
| 03 | CSS | 読みやすい見た目を作れる |
| 04 | JavaScript | クリックで表示を変えられる |
| 05 | Git Commit | 変更を履歴に残せる |
| 06 | Git Branch | 安全な作業ブランチを作れる |
| 07 | Pull Request | 変更を説明・提出できる |
| 08 | Deploy | 公開URLを共有できる |

詳しい運営設計は [COURSE.md](./COURSE.md)、レッスン追加方法は [docs/AUTHORING.md](./docs/AUTHORING.md) を参照してください。

## ライセンス

教材本文とソースコードの利用条件は、運営方針を確定したうえで `LICENSE` を追加してください。
