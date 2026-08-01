---
schema_version: 1
day: 11
week: 3
branch: training/day-11-python-scraper
workspace: practice/python-scraper
duration_minutes: 180
---

# Day 11 — Python・Requests・Beautiful Soup

## Goal

利用規約と負荷へ配慮した再実行可能な静的Scraperを作れる

## Why this matters

Scrapingは取得できれば終わりではありません。相手サイトへの負荷、利用条件、失敗時の停止、Data品質まで設計します。

## Before you start

- [ ] 対象サイトの利用規約とrobots.txtを確認
- [ ] 練習用URLだけを使う
- [ ] Request回数の上限を決める

## 先に調べる用語

- **Scraping:** Webページから必要な情報を規則的に取得する処理
- **Selector:** HTMLから対象要素を選ぶ指定
- **robots.txt:** Crawler向けのアクセス方針を示すファイル

## Start command

```bash
npm run course -- start 11
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-11.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-11-python-scraper and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-11/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:30 任意動画／安全確認:** PythonまたはScraping未経験者だけ実装例を見る。経験者はrobots.txt・回数上限・Fixtureを確認する
- **0:30–1:10 公式資料:** Python → Requests → Beautiful Soupの順で読む
- **1:10–2:35 Scraper実装:** 取得、解析、正規化、CSV、Log
- **2:35–3:00 失敗試験:** Timeout、404、Selector変更を再現

## Learning resources

### 必修

- **Pythonチュートリアル**（日本語・20分）— Data structure、制御フロー、Function、Module、例外、File I/O。演習で使う章だけ読みます。 [開く](https://docs.python.org/ja/3/tutorial/)

### 任意・困ったときだけ

- **Web scraping videos**（英語・約25分）— RequestsとBeautiful Soupを使う動画を1本選び、取得・解析・保存の責務分離を確認します。 [必要なときだけ開く](https://www.youtube.com/@realpython/search?query=web%20scraping)
- **Requests Quickstart**（英語・15分）— Request、Response、JSON、Header、Timeout、Error。 [必要なときだけ開く](https://requests.readthedocs.io/en/latest/user/quickstart/)
- **Beautiful Soup documentation**（英語・20分）— Quick Start、Tree navigation、Search、CSS selectors、Encoding。 [必要なときだけ開く](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- **Robots.txt specification**（英語・10分）— robots.txtの読み方とCrawlerの境界。 [必要なときだけ開く](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- **Automate the Boring Stuff**（英語・辞書）— Python自動化の無料補助教材。 [必要なときだけ開く](https://automatetheboringstuff.com/)

## Objectives

- [ ] Timeoutとraise_for_statusを使う
- [ ] Selector失敗を検出する
- [ ] 重複を除去し失敗をLogへ残す

## Tasks

1. **取得条件を決める** — 利用規約、robots.txt、対象URL、間隔、最大Page数、User-Agentを先に記録します。

2. **安全にHTTP取得** — Timeout、raise_for_status、Retry上限を設定し、無限Retryを禁止します。

```text
response = requests.get(url, timeout=15)
response.raise_for_status()
```

3. **HTMLを解析** — Selectorごとに必須/任意を決め、0件なら正常終了せず失敗として記録します。

4. **正規化して保存** — URLやIDで重複を除去し、CSV列順を固定し、失敗URLと理由を別Logへ保存します。

## Practice prompt

```text
このScraperを、利用規約・robots.txt・負荷・Timeout・Retry上限・Status・Selector変更・重複・文字コード・失敗Logの観点でレビューしてください。無制限巡回や無限Retryは提案しないでください。
```

## Required deliverables

- [ ] scraper.py
- [ ] output/sample.csv
- [ ] output/errors.csv
- [ ] learning-log/day-11/scraper-design.md

## Success looks like this

- [ ] 名前とURLを構造化して取得できる
- [ ] Timeoutと待機時間がある
- [ ] 失敗URLと理由をLogへ残せる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Selectorが0件になる | HTML構造が想定と違う | 取得HTMLを保存して対象文字を探し、最小のSelectorから組み直す |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 成功3件、失敗1件。失敗URL・Status・時刻を記録し、無限再試行しない。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 利用規約とrobots.txtを確認した
- [ ] TimeoutとRetry上限がある
- [ ] 0件取得を検出する
- [ ] 重複除去と失敗Logがある

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
