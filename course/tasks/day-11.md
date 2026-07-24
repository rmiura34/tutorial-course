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

## Start command

```bash
npm run course -- start 11
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-11.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-11-python-scraper and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-11/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:30 動画:** Python Web scrapingの実装例を視聴
- **0:30–1:10 公式資料:** Python → Requests → Beautiful Soupの順で読む
- **1:10–2:35 Scraper実装:** 取得、解析、正規化、CSV、Log
- **2:35–3:00 失敗試験:** Timeout、404、Selector変更を再現

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
