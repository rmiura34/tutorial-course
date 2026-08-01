---
schema_version: 1
day: 7
week: 2
branch: training/day-07-frontend-reading
workspace: training-lab
duration_minutes: 180
---

# Day 07 — HTML・JavaScript・TypeScript・React読解

## Goal

既存TSXの入力・状態・通信・描画・エラー処理を日本語で説明できる

## Why this matters

HTTPのRequestとResponseが分かると、画面の不具合をBrowser・Server・Databaseのどこから調べるか判断できます。

## Before you start

- [ ] 教材とLabを起動できる
- [ ] BrowserのDeveloper Toolsを開ける
- [ ] URLをAddress barへ入力できる

## 先に調べる用語

- **HTTP:** BrowserとServerが情報を交換する約束
- **Request:** BrowserからServerへの依頼
- **Response:** Serverが返すStatus・Header・Body

## Start command

```bash
npm run course -- start 7
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-07.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-07-frontend-reading and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-07/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 任意動画／基礎確認:** JavaScriptの変数・配列・Functionが不安な人だけ必要な章を見る。読める人は既存TSXへ進む
- **0:35–1:20 公式資料:** HTML → JS → TS → Reactの指定範囲を読む
- **1:20–2:30 TSX読解:** ComponentからAPIとDOMまで線でつなぐ
- **2:30–3:00 小変更:** 表示文言またはValidationだけを安全に変更

## Learning resources

### 必修

- **Fetch APIの使用**（日本語・10分）— Promise、async/await、Response、Error処理。 [開く](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
- **Reactをはじめる**（日本語・15分）— Component、JSX、Props、Stateの日本語入門。既存TSXを読む前に必修範囲を確認します。 [開く](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)

### 任意・困ったときだけ

- **Learn JavaScript - Full Course for Beginners**（英語・35分）— 変数、配列、Object、Function、Conditionを必要な章だけ視聴します。 [必要なときだけ開く](https://www.youtube.com/watch?v=PkZNo7MFNFg)
- **HTMLによるコンテンツの構造化**（日本語・必要時12分）— 見出し、Form、Buttonなど、実際に出てくる要素だけ確認します。 [必要なときだけ開く](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Structuring_content)
- **JavaScriptガイド**（日本語・必要時15分）— 変数、Function、Array、Object、Control flow。既存TSXで分からない構文の章だけ読みます。 [必要なときだけ開く](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide)
- **TypeScript Handbook（英語・補助）**（英語・必要時18分）— 型を追えない場合だけ該当章を参照します。日本語公式版がないため英語です。 [必要なときだけ開く](https://www.typescriptlang.org/docs/handbook/intro.html)

## Objectives

- [ ] HTMLの意味構造を読む
- [ ] async/awaitとFetchを追う
- [ ] PropsとStateを区別する

## Tasks

1. **Component境界を探す** — export、Function、return JSXから1つのComponentの入力と出力を特定します。

2. **PropsとStateを表にする** — 親から渡る値、Component内で変化する値、計算で得られる値を分けます。

3. **EventからAPIまで追う** — Button → handler → validation → fetch → response → state更新の順でファイルと行を記録します。

4. **描画状態を説明する** — Loading、Success、Empty、Errorの各条件とDOMへ描画される内容を説明します。

## Practice prompt

```text
このTSXを変更せず、Component、Props、State、Event handler、API call、Loading、Error、最終的にDOMへ描画される要素を、ファイルと行を根拠に説明してください。
```

## Required deliverables

- [ ] learning-log/day-07/frontend-flow.md
- [ ] Props/State/Event/APIの対応表
- [ ] 最小の文言またはValidation変更
- [ ] 変更前後の画面確認

## Success looks like this

- [ ] Network panelで1件の通信を選べる
- [ ] Method・Status・URL・Responseを記録できる
- [ ] 404と500の調査開始点を説明できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Network panelに何も出ない | 記録開始前に通信が終わった | Networkを開いたままページを再読み込みし、AllまたはFetch/XHRを選ぶ |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: GET /companies → 200。ResponseはHTML。404ならRoute、500ならServer logから確認する。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] PropsとStateを正しく分離した
- [ ] EventからAPIまで根拠行を記録した
- [ ] LoadingとErrorを確認した
- [ ] 新規Reactアプリへ作り替えていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
