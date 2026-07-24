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
