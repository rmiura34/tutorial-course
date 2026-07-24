# Day追加・更新ガイド

## 1. 学習目標を決める

「理解する」ではなく、レッスン後に観察できる行動で書きます。

良い例:

- `h1`と`p`を使って自己紹介を書ける
- 課題用ブランチを作ってPushできる

## 2. `app/data/lessons.ts`へ追加する

1 Dayは3時間で完結し、次をすべて定義します。

- `day` / `week` / `slug`: 日数、週、URL
- `category`: FOUNDATION / WEB & LARAVEL / AUTOMATION / CAPSTONE
- `description`: なぜ学ぶかを含む説明
- `outcome`: 完了後にできること
- `schedule`: 合計180分の学習順序
- `videos`: 視聴先、提供元、見る理由、所要時間、任意の埋め込みURL
- `readings`: 公式資料の順番、説明、所要時間、必須区分
- `objectives`: 観察可能な目標を3つ程度
- `steps`: 実装または調査を4ステップ程度
- `prompt`: そのまま使えて、制約と検証条件を含むAIプロンプト
- `deliverables`: Gitへ残す成果物
- `checks`: 自動または目視で確認できる条件
- `quizzes`: 2問以上。選択肢、正答、解説を含める

URLは原則として公式ドキュメントまたは提供元の一次資料を使います。バージョン更新の影響を受ける内容には、受講時点で公式資料を再確認する注意書きを添えます。

## 3. 動画を選ぶ・作る

既存の公式動画・公式コースを優先し、視聴範囲と見るべき点を日本語で説明します。適切な動画がない場合だけ3〜7分の補助動画を制作します。詳細は [VIDEO-GUIDE.md](./VIDEO-GUIDE.md) を参照してください。

## 4. 演習とテンプレートを作る

`exercises/`には課題の目的と提出物を、`learning-log/templates/`には調査記録やAI利用記録の型を置きます。Skills・Agents・Pluginsを扱うDayでは、動く最小構成を`starter-kits/`にも追加します。完成コードを丸ごと渡すのではなく、受講者が判断する箇所と確認条件を明確にします。

## 5. テストする

```bash
pnpm run lint
pnpm run build
pnpm test
```

新しい重要画面や導線を追加した場合は、`tests/rendered-html.test.mjs`へ表示テストを追加します。公開前には動画・資料リンクを開き、タイトル、提供元、説明が一致することも確認します。
