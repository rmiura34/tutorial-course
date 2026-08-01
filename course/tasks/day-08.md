---
schema_version: 1
day: 8
week: 2
branch: training/day-08-php-reading
workspace: training-lab
duration_minutes: 180
---

# Day 08 — PHPコードリーディング

## Goal

既存PHP Classの入力、依存、分岐、例外、戻り値を自分の言葉で説明できる

## Why this matters

PHPの配列・条件分岐・関数はLaravelのControllerやServiceを読む土台です。文法暗記より、入力がどの出力へ変わるかを追います。

## Before you start

- [ ] training-labでphp -vが実行できる
- [ ] 変数と文字列の違いを説明できる
- [ ] TerminalでTestを実行できる

## 先に調べる用語

- **変数:** 値へ名前を付けたもの
- **関数:** 入力を受け処理し結果を返すまとまり
- **配列:** 複数の値を順序やKeyで持つ入れ物

## Start command

```bash
npm run course -- start 8
```

## Codex kickoff

```text
Read AGENTS.md, START-HERE.md, and course/tasks/day-08.md. Use COACH mode. Do not edit implementation files yet. Confirm that the current branch is training/day-08-php-reading and inspect git status. Summarize Goal, Context, Constraints, and Done when. Create learning-log/day-08/plan.md as a checklist, explain only the first task, and wait.
```

## 180-minute schedule

- **0:00–1:15 任意動画／PHP基礎演習:** PHP未経験者は必要な章だけ視聴。変数・配列・Functionを読める人はManualとClass読解へ進む
- **1:15–1:45 Manual:** OOP、Namespace、Exceptionを確認
- **1:45–2:35 読解演習:** Laravel Classを日本語へ翻訳
- **2:35–3:00 確認:** 小さなUnit Testとクイズ

## Learning resources

### 必修

- **クラスとオブジェクト**（日本語・12分）— Class、Property、Method、Visibility、Inheritance。 [開く](https://www.php.net/manual/ja/language.oop5.php)
- **名前空間**（日本語・8分）— Namespace宣言とuseによるImport。 [開く](https://www.php.net/manual/ja/language.namespaces.php)

### 任意・困ったときだけ

- **PHP Fundamentals**（英語・71分）— Variables、Arrays、Functions、Loops、Classes、Modern PHP、Composerを10本・71分で学ぶ公式動画コースです。 [必要なときだけ開く](https://laravel.com/learn/php-fundamentals)
- **PHP言語リファレンス**（日本語・必要時15分）— 構文、型、変数、制御構造、Function、配列。分からない構文だけ参照します。 [必要なときだけ開く](https://www.php.net/manual/ja/langref.php)
- **例外**（日本語・補助8分）— throw、try/catch/finally、Exceptionの伝播。 [必要なときだけ開く](https://www.php.net/manual/ja/language.exceptions.php)
- **PHP The Right Way**（英語・15分）— Code style、Dependency management、Testing、Securityの補助資料。 [必要なときだけ開く](https://phptherightway.com/)

## Objectives

- [ ] Namespaceとuseを読む
- [ ] Dependency injectionを見つける
- [ ] Exceptionの発生と処理を追う

## Tasks

1. **Classの外形を読む** — Namespace、use、Class、Interface、Trait、Constructorを特定します。

2. **Method契約を読む** — Parameter type、Return type、nullable、例外を表へまとめます。

3. **依存関係を追う** — Constructor injectionされたInterfaceが、どの実装へBindingされるか探します。

4. **処理を日本語へ翻訳** — 分岐、Collection操作、例外、戻り値を1行ずつ説明し、AIの全面書き換えは行いません。

## Practice prompt

```text
このPHP Classを変更せず、Namespace、use、Class、Method、Parameter、Return type、Dependency injection、Interface、Trait、Exception、Collectionを特定し、処理順を日本語で説明してください。
```

## Required deliverables

- [ ] learning-log/day-08/php-class-reading.md
- [ ] Method契約表
- [ ] 1つのUnit Test
- [ ] 未理解の構文一覧

## Success looks like this

- [ ] 小さなPHP関数を実行できる
- [ ] 正常・空・不正入力をTestできる
- [ ] Errorの行番号から原因箇所を開ける

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
| Parse errorが表示される | 括弧・セミコロン・引用符の不足 | 最初のError行を開き、直前の記号を1つずつ確認する |
| 途中で現在地やBranchが分からなくなった | 複数のTerminalやTaskを同時に進めた | 作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める |

## How to write the submission

### 事実と根拠

- 含めるもの: 何を確認し、どのファイル・Command・画面を根拠にしたか
- 記入例: 入力['name' => 'A社']を受け、空ならError、値があれば整形した名前を返す。

### 検証と振り返り

- 含めるもの: 実行したTest、結果、AI案の採否、残っている不明点
- 記入例: 確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。

## Done when

- [ ] 入力と戻り値を型付きで説明した
- [ ] 依存Interfaceの実装候補を確認した
- [ ] 例外経路を記録した
- [ ] AIに全面書き換えさせていない

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or `.env` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
