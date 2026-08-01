# Tutorial Course

非プログラマーが、AIを使って既存PHP / Laravel Systemを安全に調査・変更・Test・Reviewし、Pull Requestへ変換するための20日・60時間の実践研修です。

## 受講者はここから開始

**[START-HERE.md](./START-HERE.md)を上から順番に実行してください。**

知らない言葉は[初心者用語集](./docs/GLOSSARY.md)で日本語の説明と例を確認できます。

教材サイトとGitHub Repositoryは公開されており、閲覧だけならLogin不要です。演習する場合は、自分のRepositoryとCodespacesを作るためのGitHub Accountを用意します。Codexを使う場合のChatGPT AccountはGitHubとは別です。

Codespacesの初回Setupが完了したら、Terminalで次を実行します。

```bash
npm run learner:start
```

- Port 3000: 必要な教材、10問クイズ、実行手順、Taskを表示する教材サイト
- Port 8000: Laravel、SQLite、Scraping、Testを扱うCompany Import Training Lab

DayごとのTaskは`course/tasks/day-XX.md`にあります。

```bash
npm run course -- show 1
npm run course -- start 1
```

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

- 必要なDayだけに表示される任意動画と、必須／任意・日本語／英語を明記した公式資料
- 全Lessonの「始める前に」「なぜ学ぶか」「成功の見た目」「つまずき復旧」「提出記入例」
- 50語の検索可能な初心者用語集
- GitHub・Codespaces・VS Code・Portsの画面Label付きClick guide
- 公式資料を読む順番、読む目的、目安時間
- 1日180分の時間割
- Hands-on手順、実行Command、練習Prompt
- 各日10問、全200問の理解確認Quiz（採点・全問解説・再挑戦付き）
- Branch名、必須提出物、完了条件
- CLI、Git、GitHub、Cursor、Claude Code、Codex
- HTTP、DevTools、HTML、JavaScript、TypeScript、React読解
- PHP、Laravel、SQL、Eloquent、Migration
- Python、Requests、Beautiful Soup、Playwright
- Test、Debug、Log、Refactoring、PR Review
- Claude Code Skills / Hooks / Subagentsのstarter
- Codex Skills / Plugin / Marketplaceのstarter
- MCP権限監査とAI利用記録のTemplate
- Laravel 13 / SQLiteで動くCompany Import Training Lab
- Codexが自動で読むRepository-level `AGENTS.md`
- 20日分の機械可読TaskとTask runner
- Codespaces用の自動SetupとVS Code Task

## 4週間の構成

| Week | Day | 内容 | 到達点 |
|---|---:|---|---|
| 1 | 1–5 | CLI、Git、GitHub、Cursor、Claude Code、Codex | AIへ調査・計画・Reviewを分担できる |
| 2 | 6–10 | Web、DevTools、Frontend読解、PHP、Laravel、DB | 画面からDatabaseまで処理を追える |
| 3 | 11–15 | Python Scraping、Playwright、Test、Skills、Hooks、MCP、Plugins | 自動化とAI向けProject設定を実装できる |
| 4 | 16–20 | System調査、計画、実装、Review、最終試験 | 未知のIssueを安全なPRへ変換できる |

詳しい設計は[COURSE.md](./COURSE.md)、演習一覧は[exercises/README.md](./exercises/README.md)を参照してください。

## 受講者の毎日のFlow

1. `npm run course -- show <day>`でTaskを読む
2. `npm run course -- start <day>`で安全にBranchを作る
3. Codexへ`COACH`、`PLAN`、`IMPLEMENT`、`REVIEW`のModeを指定する
4. `learning-log/day-XX/plan.md`へTaskと調査根拠を残す
5. 教材Siteで必須資料だけを確認し、10問Quizを完了する（任意動画・補助資料は必要時のみ）
6. Training Labまたは指定WorkspaceでHands-onする
7. Test、Diff、AI利用記録を確認する
8. Commit、Push、Pull Requestの順に提出する

Task runnerは未Commit変更がある状態では新しいDayを開始しません。受講者の作業を消さないための安全装置です。

## Starter kit

- `starter-kits/claude-code/`: Laravel調査Skill、安全Refactor Skill、Reviewer、Hook設定例
- `starter-kits/codex/`: Repository scopeのCodex Skill
- `starter-kits/plugins/`: 配布可能なCodex Plugin例
- `learning-log/templates/`: 調査、計画、AI利用、MCP権限監査Template

Starterはそのまま本番へ入れず、演習ProjectのCommand、Directory、Testへ合わせて調整してください。

## Course運営者向けの開発と検証

Node.js 22以上を使用します。

```bash
npm ci
npm run dev
npm run lint
npm run build
npm test
npm run lab:lint
npm run lab:test
```

Laravel Training LabだけをSetupし直す場合は`npm run learner:setup`を実行します。Task仕様を更新した場合は`npm run course:generate`で`course/tasks/`を再生成します。

## 安全ルール

- Secret、Cookie、Token、`.env`をCommitしない
- `main`へ直接Pushしない
- Test未実行、Diff未確認の変更を提出しない
- Database破壊操作を無確認で実行しない
- Scraping前に利用規約、robots.txt、負荷を確認する
- Laravel Docsは演習Projectと同じVersionを使う
