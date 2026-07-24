# レッスン追加ガイド

## 1. 学習目標を決める

「理解する」ではなく、レッスン後に観察できる行動で書きます。

良い例:

- `h1`と`p`を使って自己紹介を書ける
- 課題用ブランチを作ってPushできる

## 2. `app/data/lessons.ts`へ追加する

最低限、次を定義します。

- `slug`: URL
- `category`: BUILD / GIT / SHIP
- `outcome`: 完了後にできること
- `objectives`: 3つ程度
- `steps`: 4ステップ程度
- `checks`: 自動または目視で確認できる条件
- `quiz`: 1問と解説

## 3. 動画を作る

動画は3〜7分を基本とし、完成形、操作、失敗例、再成功の順で構成します。詳細は [VIDEO-GUIDE.md](./VIDEO-GUIDE.md) を参照してください。

## 4. 演習を作る

`exercises/<番号>-<課題名>/`にスターターコードとREADMEを置きます。完成コードを最初から含めず、TODOと確認条件を明確にします。

## 5. テストする

```bash
npm run lint
npm run build
npm test
```

新しい重要画面や導線を追加した場合は、`tests/rendered-html.test.mjs`へ表示テストを追加します。
