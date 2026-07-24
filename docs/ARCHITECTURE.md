# アーキテクチャ

## 全体像

```text
コースサイト
  ├─ 20 Days / 60 Hours のロードマップ
  ├─ 動画・公式資料・クイズ
  ├─ AIプロンプト・実装手順・完了条件
  └─ 端末内の進捗
          ↓
受講者リポジトリ
  ├─ Codespaces / VS Code
  ├─ training/day-* ブランチ
  ├─ learning-log / starter-kits
  ├─ Pull Request
  └─ GitHub Actions
          ↓
調査記録・実装・テスト・ロールバックを説明できる実務PR
```

## 主要ディレクトリ

- `app/`: コースサイト
- `app/data/lessons.ts`: レッスンの構造化データ
- `exercises/`: 20日分の演習一覧と受講者向けスターターコード
- `learning-log/templates/`: 調査・AI利用・権限監査の記録テンプレート
- `starter-kits/`: Claude Code / Codex Skills / Pluginsの最小構成
- `.devcontainer/`: Codespaces環境
- `.github/`: 自動チェックと提出テンプレート
- `docs/`: 運営・制作ガイド
- `tests/`: サイトの表示・構造テスト

## 進捗データ

MVPではブラウザの`localStorage`に保存します。ログイン不要で試せる一方、端末間では同期されません。正式運用で必要になった場合のみ、GitHubのIssue・PR状態または認証付きデータベースへ移行します。

## コンテンツの単一ソース

現在は`app/data/lessons.ts`がWeb表示の単一ソースです。20日分の説明、動画、資料、時間割、実装、クイズ、提出物、完了条件をここから生成します。自動採点を拡張するときはYAMLまたはMDXへ移し、サイト表示と採点設定を同じデータから生成します。
