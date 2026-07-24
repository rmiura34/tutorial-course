# 20日間の演習一覧

各Dayでサイトに表示されるBranchを作り、提出物を`learning-log/day-XX/`へ保存します。
演習対象のLaravelリポジトリは、講師が指定したProjectとVersionを使用してください。

| Day | 演習 | 主な提出物 |
|---:|---|---|
| 01 | CLIで変更せずにリポジトリを調査 | `repository-map.md` |
| 02 | 差分、Stage、Commit、Restore | `git-before-after.md` |
| 03 | IssueからPRとReview対応 | Issue、PR、Review回答 |
| 04 | Cursor Rulesと根拠付き調査 | `project.mdc`、調査Report |
| 05 | Cursor・Claude Code・Codex比較 | `agent-comparison.md` |
| 06 | DevToolsでRequestを追跡 | `browser-request-analysis.md` |
| 07 | 既存TSXの処理経路を読解 | `frontend-flow.md` |
| 08 | PHP Classを日本語で説明 | `php-class-reading.md` |
| 09 | Laravel Request flowを追跡 | `request-flow.md` |
| 10 | SQL・Eloquent・N+1を分析 | `database-analysis.md` |
| 11 | 静的Scraperを実装 | `scraper.py`、CSV、Error log |
| 12 | Playwrightで動的画面を操作 | Test、認証生成手順 |
| 13 | BugをTestから修正 | 再現手順、Regression Test |
| 14 | Claude Skills・Hooks・Subagent | `.claude/`一式 |
| 15 | Codex Skill・Plugin・MCP監査 | Skill、Plugin、権限表 |
| 16 | 未知のSystemをRead-only調査 | `system-investigation.md` |
| 17 | Refactoring計画を作成 | `refactoring-plan.md` |
| 18 | 小Commitで実装とTest | Code、Test、Rollback結果 |
| 19 | 3者ReviewとPR対応 | `review-comparison.md` |
| 20 | 3時間の最終実技 | 実務Pull Request一式 |

## 共通ルール

1. `main`へ直接Pushしない
2. 変更前に既存Testを実行する
3. AIが作ったDiffを全行確認する
4. Secret、Cookie、Token、`.env`をCommitしない
5. Laravel Docsは演習Projectと同じVersionを使う
6. Scraping前に利用規約、robots.txt、負荷を確認する
7. AIの提案は採用・不採用と理由を記録する
