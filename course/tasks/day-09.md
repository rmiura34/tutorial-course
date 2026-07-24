---
schema_version: 1
day: 9
week: 2
branch: training/day-09-laravel-flow
workspace: training-lab
duration_minutes: 180
---

# Day 09 — LaravelのRequest Lifecycle

## Goal

1画面の処理経路をrequest-flow.mdへファイル・Method名付きで記録できる

## Why this matters

LaravelではURLからResponseまでに複数の層があります。処理経路を追えると、AIへ修正場所を丸投げせず根拠付きで指定できます。

## Before you start

- [ ] Port 8000でLabが表示される
- [ ] PHPの関数と配列を読める
- [ ] repository-map.mdを開いている

## Three words for today

- **Route:** URLと処理の入口を結ぶ定義
- **Controller:** Requestを受け処理を組み立てる場所
- **Model:** DatabaseのDataを扱う部品

## Start command

```bash
npm run course -- start 9
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-09.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-09-laravel-flow and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-09/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–0:35 公式動画:** Route、MVC、Controllerの章を視聴
- **0:35–1:20 公式Docs:** StructureからService Providersまで順番に読む
- **1:20–2:35 Code trace:** 対象画面の全処理経路を埋める
- **2:35–3:00 説明試験:** 図を見ずに経路を説明

## Objectives

- [ ] RouteからControllerを探す
- [ ] MiddlewareとValidationの役割を説明する
- [ ] Service ContainerのBindingを追う

## Tasks

1. **URLとHTTP Methodを固定** — 対象画面またはAPIのURL、Method、期待Responseを記録します。

2. **RouteからControllerへ** — routesファイル、Middleware、Controller ClassとMethodを特定します。

```text
php artisan route:list
```

3. **Business処理とDBへ** — FormRequest、Service、Repository、Model、Relation、Queryを順に追います。

4. **Responseまで戻る** — Resource、View、Blade、JSON、RedirectのどれでResponseを返すか記録します。

## Practice prompt

```text
このURLの処理を Browser → Route → Middleware → Controller → FormRequest → Service → Model → Database → Resource/View → Response の順で追跡してください。各段階にファイルとMethod名を付け、存在しない層は「なし」と書いてください。
```

## Required deliverables

- [ ] learning-log/day-09/request-flow.md
- [ ] 処理経路図
- [ ] 関連Test一覧
- [ ] 未確認の外部依存一覧

## Success looks like this

- [ ] URLからRoute・Controller・Viewを線で結べる
- [ ] 各段階の入力と出力を書ける
- [ ] 根拠となるファイルパスを示せる

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| 検索結果が多すぎて経路を追えない | URL・Methodを固定していない | Browserで対象通信を1件選び、Route定義から順に追う |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: GET /companies → routes/web.php → CompanyController@index → companies/index.blade.php。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 実プロジェクトと同じLaravel versionのDocsを使用した
- [ ] RouteとController Methodを特定した
- [ ] Validationと認可を確認した
- [ ] Response形式まで追跡した

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
