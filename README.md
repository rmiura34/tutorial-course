# Tutorial Course

非プログラマーが、AIを使って既存PHP / Laravel Systemを安全に調査・変更・Test・Reviewし、Pull Requestへ変換するための20日・60時間の実践研修です。

## 研修の完成状態

受講者は最終日に、未知のIssueに対して次を3時間で行います。

1. 再現手順とRoot causeを作る
2. 変更計画、影響範囲、Test、Rollbackを作る
3. 作業Branchで小さく実装する
4. PHP / Laravel / Scraper / PlaywrightのTestを実行する
5. Cursor、Claude Code、Codexの出力を人間が検証する
6. Diffを全行ReviewしてPull Requestを提出する
7. AIの採用・不採用と残Riskを説明する

AIにCodeを書かせられることではなく、AIが作った変更をCode、Database、Test、Gitの観点から検証できることを修了条件にします。

## 含まれる教材

- 20日すべての動画または公式動画CourseへのLink
- 公式資料を読む順番、読む目的、目安時間
- 1日180分の時間割
- Hands-on手順、実行Command、練習Prompt
- 各日2問の理解確認Quiz
- Branch名、必須提出物、完了条件
- CLI、Git、GitHub、Cursor、Claude Code、Codex
- HTTP、DevTools、HTML、JavaScript、TypeScript、React読解
- PHP、Laravel、SQL、Eloquent、Migration
- Python、Requests、Beautiful Soup、Playwright
- Test、Debug、Log、Refactoring、PR Review
- Claude Code Skills / Hooks / Subagentsのstarter
- Codex Skills / Plugin / Marketplaceのstarter
- MCP権限監査とAI利用記録のTemplate

## 4週間の構成

| Week | Day | 内容 | 到達点 |
|---|---:|---|---|
| 1 | 1–5 | CLI、Git、GitHub、Cursor、Claude Code、Codex | AIへ調査・計画・Reviewを分担できる |
| 2 | 6–10 | Web、DevTools、Frontend読解、PHP、Laravel、DB | 画面からDatabaseまで処理を追える |
| 3 | 11–15 | Python Scraping、Playwright、Test、Skills、Hooks、MCP、Plugins | 自動化とAI向けProject設定を実装できる |
| 4 | 16–20 | System調査、計画、実装、Review、最終試験 | 未知のIssueを安全なPRへ変換できる |

詳しい設計は[COURSE.md](./COURSE.md)、演習一覧は[exercises/README.md](./exercises/README.md)を参照してください。

## 受講者の始め方

1. このRepositoryを自分のGitHub AccountへTemplateまたはForkで複製する
2. `Code` → `Codespaces` → `Create codespace on main`を選ぶ
3. 教材SiteのDay 01を開く
4. 指定動画と公式資料を順番に読む
5. 指定された`training/day-XX-*` Branchを作る
6. `learning-log/day-XX/`へ提出物を保存する
7. Test、Commit、Push、Pull Requestの順に提出する

> Repository ownerはGitHub SettingsでTemplate repositoryを有効にしてください。

## Starter kit

- `starter-kits/claude-code/`: Laravel調査Skill、安全Refactor Skill、Reviewer、Hook設定例
- `starter-kits/codex/`: Repository scopeのCodex Skill
- `starter-kits/plugins/`: 配布可能なCodex Plugin例
- `learning-log/templates/`: 調査、計画、AI利用、MCP権限監査Template

Starterはそのまま本番へ入れず、演習ProjectのCommand、Directory、Testへ合わせて調整してください。

## 開発と検証

Node.js 22以上を使用します。

```bash
npm ci
npm run dev
npm run lint
npm run build
npm test
```

## 安全ルール

- Secret、Cookie、Token、`.env`をCommitしない
- `main`へ直接Pushしない
- Test未実行、Diff未確認の変更を提出しない
- Database破壊操作を無確認で実行しない
- Scraping前に利用規約、robots.txt、負荷を確認する
- Laravel Docsは演習Projectと同じVersionを使う
