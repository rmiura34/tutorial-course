# 研修設計

## 目的

この研修は一般的なProgramming Schoolのように、言語文法から順に新規Applicationを作るCourseではありません。

目標は、AIを使って既存Systemを安全に変更できる人材を育てることです。

## 修了条件

受講者が次を一連のFlowとして遂行できることを確認します。

1. GitHubから既存PHP / Laravel Repositoryを取得する
2. CLI、Cursor、Claude Code、CodexでCodebaseを調査する
3. 画面、Route、Controller、Service、Model、DBの処理経路を説明する
4. Issueから変更計画と影響範囲を作る
5. Branchを作成し、AIを使って小さく修正する
6. Test、Debug、Log、Migration rollbackを確認する
7. Scraperの規約、負荷、Timeout、Retry、重複を検証する
8. Diffを人間がReviewし、問題を修正する
9. Commit、Push、Pull Request、Review対応まで行う
10. Project専用のSkill、Hook、Subagent、Pluginを作る

## 毎日の共通構造

1. 動画・公式Demo
2. 指定された公式資料を順番に読む
3. 今日の到達点と完了条件を確認
4. 既存ProjectでHands-on
5. AI用Promptを実行し、根拠を照合
6. 理解確認Quiz
7. 自分のBranchで提出物を作る
8. Test、Diff、PR、AI利用記録

学習20%、Hands-on 30%、実務課題50%を基本にします。

## 60時間の配分

| 領域 | 時間 |
|---|---:|
| Git・GitHub・CLI | 9時間 |
| Cursor・Claude Code・Codex基礎 | 6時間 |
| Web・Frontend読解 | 6時間 |
| PHP・Laravel | 9時間 |
| Database・SQL | 3時間 |
| Python・Scraping | 6時間 |
| Test・Debug | 3時間 |
| Skills・Hooks・MCP・Plugins | 6時間 |
| 最終実務演習 | 12時間 |
| 合計 | 60時間 |

## AIの標準Cycle

```text
仕様を読む
  ↓
Contextと根拠を集める
  ↓
変更前に計画を作る
  ↓
小さな単位で実装する
  ↓
別Agentで反証する
  ↓
公式資料・Test・Diffで検証する
  ↓
Pull Requestで説明する
```

Skill、Hook、Rules、Pluginは、このCycleを毎回再現するために使います。

## 最終試験

未知のIssueを3時間で渡します。

例:

> 特定Siteの会社情報Scrapingで2Page目以降が取得されず、一部企業が重複登録される。Laravel管理画面には再実行Buttonがある。原因を調査し、安全に修正してPRを提出する。

### 採点

| 項目 | 配点 |
|---|---:|
| Git / GitHub運用 | 15 |
| Code調査 | 15 |
| Laravel理解 | 15 |
| DB理解 | 10 |
| Scraping理解 | 10 |
| AIへの指示・Context設計 | 15 |
| Testと検証 | 15 |
| PRの説明品質 | 5 |

合格点は75点です。

次の行為は点数に関係なく不合格です。

- SecretをCommit
- Test未実行
- Diff未確認
- `main`へ直接Push
- DB破壊操作を無確認で実行
- 利用規約、robots.txt、負荷を無視したScraping
- AIの出力を理解せず、自分で説明できない

## 講師が研修前に用意するもの

- 演習対象のLaravel Repositoryと正確なVersion
- DockerまたはLaravel Sailで起動できる環境
- MySQLまたはPostgreSQL
- 意図的なBugを含むPHP / Scraper / Playwright Code
- Feature Test、Unit Test、CI
- 小規模なReactまたはBlade画面
- GitHub Organization、Branch protection、Issue/PR Template
- Claude Code、Cursor、Codexを使用できるAccount

外部DocumentのURLと画面名は研修開始前に確認します。特にCursor、Claude Code、Codex、Laravelは更新頻度が高いため、SiteのLinkだけでなくProject Versionとの整合を確認してください。
