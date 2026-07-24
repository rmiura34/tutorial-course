# アーキテクチャ

## 全体像

```text
コースサイト
  ├─ レッスン・動画枠・クイズ
  ├─ ロードマップ・端末内進捗
  └─ 実装課題への案内
          ↓
受講者リポジトリ
  ├─ Codespaces / VS Code
  ├─ lesson/* ブランチ
  ├─ Pull Request
  └─ GitHub Actions
          ↓
公開されたプロフィールページ
```

## 主要ディレクトリ

- `app/`: コースサイト
- `app/data/lessons.ts`: レッスンの構造化データ
- `exercises/`: 受講者向けスターターコード
- `.devcontainer/`: Codespaces環境
- `.github/`: 自動チェックと提出テンプレート
- `docs/`: 運営・制作ガイド
- `tests/`: サイトの表示・構造テスト

## 進捗データ

MVPではブラウザの`localStorage`に保存します。ログイン不要で試せる一方、端末間では同期されません。正式運用で必要になった場合のみ、GitHubのIssue・PR状態または認証付きデータベースへ移行します。

## コンテンツの単一ソース

現在は`app/data/lessons.ts`がWeb表示の単一ソースです。レッスン数が増えたら、YAMLまたはMDXへ移し、サイト表示と採点設定を同じデータから生成します。
