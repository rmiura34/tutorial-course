# Day 01 — Repository Map（短い記入例）

## 1. 現在地

- `pwd`の結果: `/workspaces/tutorial-course`
- 現在のBranch: `training/day-01-environment`
- 調査日: 2026-07-24

## 2. このRepositoryは何をするものか

初心者が20日間でCLI、Git、Web、Laravel、Scraping、AI Agentを学ぶ教材です。受講者は公開教材をブラウザで読み、クローンしたRepositoryをVS CodeまたはCursorで操作します。

## 3. 主要File・Directory

| Path | 役割 | そう判断した根拠 |
|---|---|---|
| `package.json` | 起動・Build・Test Commandを定義 | `scripts`欄に`learner:start`と`test`がある |
| `app/` | 教材サイトの画面とData | `page.tsx`と`lessons/`がある |
| `course/tasks/` | 20日分の機械可読Task | `day-01.md`から`day-20.md`がある |
| `training-lab/` | Laravelの実習Application | `artisan`と`composer.json`がある |
| `tests/` | 教材サイトの自動Test | `rendered-html.test.mjs`がある |

## 4. 起動とTest

| 目的 | Command | 実行結果 |
|---|---|---|
| Day 1の課題を表示 | `npm run course -- show 1` | Goal、Branch、Task fileを確認 |
| Day 1のBranchと学習Logを準備 | `npm run course -- start 1` | `training/day-01-environment`と`learning-log/day-01`を確認 |
| 教材を検査 | `npm test` | PASS |

## 5. AIの説明を照合した結果

- 正しかった説明: Next.jsの教材サイト。根拠は`package.json`の`next`。
- 誤っていた説明: MySQLを使うという説明。Labの`.env.example`ではSQLite。
- 未確認: 本番のHosting構成。Repository内だけでは断定できない。

> この例をそのまま提出せず、自分が実際に確認した結果へ置き換えます。
