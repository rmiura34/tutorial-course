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
  ├─ DayごとのBranch
  ├─ course/tasks/day-*.md
  ├─ training-lab / practice
  ├─ learning-log / starter-kits
  ├─ Pull Request
  └─ GitHub Actions
          ↓
調査記録・実装・テスト・ロールバックを説明できる実務PR
```

## 主要ディレクトリ

- `app/`: コースサイト
- `app/data/lessons.ts`: レッスンの構造化データ
- `course/tasks/`: Course Dataから生成する20日分の実行Task
- `scripts/course.mjs`: Task表示、Branch作成、計画File作成
- `training-lab/`: PHP 8.3 / Laravel 13 / SQLiteの演習Application
- `practice/python-scraper/`: 外部Siteへ負荷を掛けずに使えるScraper演習
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

現在は`app/data/lessons.ts`がWeb表示とTask生成の単一ソースです。20日分の説明、動画、資料、時間割、実装、クイズ、提出物、完了条件をWebへ表示し、`npm run course:generate`で`course/tasks/`へ変換します。受講者とCodexは同じTask Fileを読むため、画面上の指示と作業計画がずれません。
