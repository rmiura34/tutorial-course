# Company Import Training Lab

Tutorial Courseの受講者が、Laravel 13、SQLite、Blade、Service、Feature Testを実際に調査・変更するための練習アプリです。

通常はリポジトリのルートで次を実行します。

```bash
npm run learner:setup
npm run learner:start
```

- 教材サイト: `http://localhost:3000`
- Laravel Lab: `http://localhost:8000`

Labだけを確認する場合:

```bash
php artisan migrate:fresh --seed
php artisan serve
php artisan test
```

## 調査する処理経路

```text
POST /imports/demo
  → ImportController
  → CompanyImportService
  → DemoCompanySource
  → Company / CrawlRun
  → SQLite
  → GET /companies
```

Day 18–20では、ページ送りと重複保存に関する回帰シナリオを扱います。先に答えを探すのではなく、`course/tasks/`の指示に従って再現、原因調査、テスト、修正の順で進めてください。
