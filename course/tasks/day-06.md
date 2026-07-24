---
schema_version: 1
day: 6
week: 2
branch: training/day-06-web-devtools
workspace: training-lab
duration_minutes: 180
---

# Day 06 — Web・HTTP・Chrome DevTools

## Goal

1回の画面操作についてRequestとResponse、DOM、Cookieをbrowser-request-analysis.mdへ記録できる

## Why this matters

HTMLは画面の意味と骨組み、CSSは見た目を担当します。役割を分けると、AIが生成した画面も直す場所を自分で特定できます。

## Before you start

- [ ] exercises/01-profile-cardを開く
- [ ] Browser PreviewまたはPortを開ける
- [ ] HTMLファイルとCSSファイルを見分けられる

## Three words for today

- **HTML:** Webページの内容と構造を表す言語
- **CSS:** 色・余白・配置を指定する言語
- **要素:** 見出し、段落、リンクなどHTMLの部品

## Start command

```bash
npm run course -- start 6
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-06.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-06-web-devtools and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-06/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:25 公式動画:** DevToolsの6つの基本機能を確認
- **0:25–1:15 公式資料:** HTTP → JSON → DOM → Selectorの順で読む
- **1:15–2:30 ブラウザ演習:** Elements、Console、Network、Applicationを観察
- **2:30–3:00 提出:** Request分析とクイズ

## Objectives

- [ ] MethodとStatusを説明する
- [ ] NetworkからFetch/XHRを見つける
- [ ] DOMとCSS Selectorを対応させる

## Tasks

1. **画面操作を1つ固定** — ログイン、検索、保存など、観察対象の操作と期待結果を先に書きます。

2. **Networkを記録** — URL、Method、Status、Request headers、Payload、Response bodyを記録します。

3. **DOMを特定** — 操作した要素をElementsで選び、役割、属性、安定したSelectorを書きます。

4. **CookieとStorageを確認** — 認証や状態に関係するCookie/Storageの名前と役割だけを記録し、値やTokenは残しません。

## Practice prompt

```text
このNetwork記録から、画面操作がどのHTTP Requestを発生させ、ResponseがどのDOM更新につながるか説明してください。認証情報やCookie値は出力せず、確認できない因果関係は未確認としてください。
```

## Required deliverables

- [ ] learning-log/day-06/browser-request-analysis.md
- [ ] Request/Responseの表
- [ ] 対象DOM要素とSelector
- [ ] Secretを除いた観察ログ

## Success looks like this

- [ ] 名前・説明・リンクを持つProfile cardが表示される
- [ ] 画面幅を変えても文字がはみ出さない
- [ ] HTMLとCSSの変更理由を説明できる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 変更したのに画面が変わらない | 別ファイルを開いたかBrowser cache | 開いているURLと保存済みファイルを確認し、再読み込みする |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: h1はページの主題、pは説明、aは外部リンク。見た目だけでなく意味を選んだ。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] URL・Method・Statusを記録した
- [ ] RequestとResponseを混同していない
- [ ] Selectorが対象を一意に示す
- [ ] CookieやTokenの値を提出物へ含めていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
