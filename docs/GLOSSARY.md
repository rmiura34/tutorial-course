# 初心者用語集

この用語集は暗記用ではありません。Taskで知らない言葉が出たときに、「何のために使うか」と例を確認するために使います。

教材サイトを起動済みなら、検索できる `/glossary` 画面も利用できます。

## はじめの一歩

### Account（アカウント）

Serviceを自分として利用するための登録情報。教材、GitHub、ChatGPTはそれぞれ別のAccountです。

**例:** GitHubへ入れても、教材サイトへ自動では入れません。

### Application（アプリケーション）

目的のために動くSoftware。このコースでは教材サイトとCompany Import Labの2つを起動します。

**例:** Port 3000が教材、Port 8000がLabです。

### Repository（リポジトリ）

Code、資料、変更履歴をまとめて管理するProjectの入れ物。略してRepoとも呼びます。

**例:** tutorial-course Repositoryを自分のGitHubへ作ります。

### Template（テンプレート）

元の履歴を引き継がず、同じファイル構成から新しいRepositoryを作る雛形。

**例:** Use this templateから自分用Repoを作ります。

### Fork（フォーク）

元Repositoryとの関係を残して、自分のAccountへ複製するGitHubの機能。

**例:** 講師がForkを指定した場合だけ使います。

### Codespaces（コードスペーシズ）

GitHub上のRepositoryを、設定済みのBrowser開発環境で開く機能。

**例:** PCへPHPを個別Installせず演習できます。

### VS Code（ブイエスコード）

File編集、検索、Terminal、Git操作を一つの画面で行うEditor。

**例:** 左のExplorerでFileを開き、下のTerminalでCommandを実行します。

### Explorer（エクスプローラー）

VS Code左側にあるFileとFolderの一覧。

**例:** package.jsonをExplorerから開きます。

### Terminal（ターミナル）

文字のCommandでComputerへ指示し、結果を読む画面。

**例:** VS Code上部のTerminal → New Terminalで開きます。

### CLI（シーエルアイ）

Command Line Interfaceの略。文字でSoftwareを操作する方式。

**例:** git statusやnpm run learner:startはCLIのCommandです。

### Command（コマンド）

Terminalへ入力する一つの命令。空白でCommand名・選択肢・対象を分けます。

**例:** git status -sbではgitが道具、statusが操作、-sbが表示Optionです。

### Path（パス）

FileやFolderの住所。/から始まる絶対Pathと、現在地から書く相対Pathがあります。

**例:** learning-log/day-01/repository-map.mdは相対Pathです。

### Directory（ディレクトリ／フォルダ）

Fileをまとめる入れ物。TerminalではDirectory、画面ではFolderと呼ばれることが多いです。

**例:** app Directoryの中に画面のCodeがあります。

### Dependency（依存関係）

Applicationが動くために必要な別のLibraryやPackage。

**例:** package.jsonとcomposer.jsonに依存関係が書かれます。

## Web / App

### Port（ポート）

1台のComputer内で複数Applicationの通信先を区別する番号。

**例:** localhost:3000とlocalhost:8000は別Applicationです。

### localhost（ローカルホスト）

いま使っている開発環境自身を示す名前。Internet上の公開URLとは違います。

**例:** http://localhost:3000をBrowserで開きます。

### Node.js（ノード・ジェイエス）

Browser外でJavaScriptを動かす実行環境。教材サイトの起動やBuildに使います。

**例:** node -vでVersionを確認します。

### npm（エヌピーエム）

JavaScriptのPackageとProject Commandを扱う道具。

**例:** npm run learner:startはpackage.jsonに定義された起動処理を呼びます。

### PHP（ピーエイチピー）

Server側で動くProgramming言語。LaravelはPHPで作られています。

**例:** php -vでVersionを確認します。

### Composer（コンポーザー）

PHPのPackageを管理する道具。

**例:** composer installでcomposer.lockどおりに依存関係を準備します。

### HTML（エイチティーエムエル）

Webページの見出し・段落・Linkなど、内容と構造を表す言語。

**例:** <h1>はページの主見出しです。

### CSS（シーエスエス）

HTML要素の色・大きさ・余白・配置を指定する言語。

**例:** paddingは要素の内側の余白です。

### HTTP（エイチティーティーピー）

BrowserとServerがRequestとResponseを交換する約束。

**例:** GET /companiesへServerが200を返します。

### API（エーピーアイ）

Application同士が決められた形式でDataや操作をやり取りする入口。

**例:** JSONを返すHTTP APIを呼びます。

### Route（ルート）

URLとHTTP Methodを、実際の処理へ結びつける定義。

**例:** GET /companiesをCompanyController@indexへ結びます。

### Database（データベース／DB）

検索・更新しやすい形でDataを保存する仕組み。

**例:** SQLiteのcompanies Tableへ会社情報を保存します。

### Scraping（スクレイピング）

Webページから必要なDataを規則に沿って取得する処理。規約と負荷への配慮が必要です。

**例:** 練習サイトから会社名とURLだけを取得します。

## Git / GitHub

### Git（ギット）

Fileの変更履歴を手元で記録・比較・復元する道具。GitHubとは別物です。

**例:** git diffでまだCommitしていない差分を見ます。

### GitHub（ギットハブ）

Git Repositoryを共有し、Issue・PR・Review・CIを行うWeb Service。

**例:** 自分のBranchをPushし、GitHub上でPRを作ります。

### Branch（ブランチ）

mainから分かれた独立した変更の流れ。安全に作業を分離します。

**例:** training/day-01-environmentでDay 01を進めます。

### main（メイン）

通常、完成した変更が集まる基準Branch。このコースでは直接作業しません。

**例:** 課題BranchからmainへPRを出します。

### Stage（ステージ）

次のCommitへ含める変更だけを選んで置く場所。

**例:** git add README.mdの後、git diff --stagedで確認します。

### Commit（コミット）

選んだ変更を、目的を示すMessage付きで履歴へ保存した区切り。

**例:** 1 Commitには1つの目的だけを入れます。

### Push（プッシュ）

手元のCommitをGitHub側のRepositoryへ送る操作。

**例:** git push -u origin training/day-03-pull-request

### Pull Request（プルリクエスト／PR）

Branchの変更を別Branchへ取り込むための提案・説明・Review画面。

**例:** 目的、確認方法、Risk、Rollbackを書きます。

### Diff（差分）

変更前と変更後の違い。追加は+、削除は-で表示されます。

**例:** Commit前とPR提出前に全行を読みます。

### Issue（イシュー）

不具合、要望、作業目的、完了条件を共有するGitHub上の記録。

**例:** 現状・期待・再現手順・Done whenを書きます。

## AI開発

### Codex（コーデックス）

Repositoryを読み、調査・編集・Command実行・検証を支援するCoding Agent。

**例:** Day 01からCoachとして使い、正式なツール比較はDay 05で行います。

### Agent（エージェント）

目標と制約を受け、検索・編集・Tool実行を組み合わせてTaskを進めるAI。

**例:** 最初は変更禁止で調査だけを依頼します。

### Prompt（プロンプト）

AIへ渡す依頼。目的、Context、禁止事項、完了条件を含めると確認しやすくなります。

**例:** 変更せず、根拠Path付きで調査し、不明は未確認と書く。

### Context（コンテキスト）

AIが判断に使える会話、File、選択範囲、規約などの情報。

**例:** 対象FileとIssueだけを渡し、Secretは渡しません。

### AGENTS.md（エージェンツ・マークダウン）

CodexがRepository内で読むProject固有の継続Instruction。

**例:** Test、禁止事項、Taskの読み順を定義します。

### Skill（スキル）

特定Taskの知識・手順・Tool利用を再利用できる形へまとめたもの。

**例:** LaravelのRequest flow調査Skillを作ります。

### Plugin（プラグイン）

SkillやToolなどの拡張機能をまとめて配布・導入するPackage。

**例:** ManifestとREADMEを持つ練習Pluginを作ります。

### MCP（エムシーピー）

AI Applicationと外部Tool・Data Sourceを接続するための共通方式。

**例:** まず読み取り専用のMock Toolで権限を学びます。

## 安全と検証

### Test（テスト）

期待する入力と出力を決め、変更後も振る舞いが正しいか繰り返し確かめるCode。

**例:** 不具合を再現するTestを先に失敗させます。

### CI（シーアイ）

PushやPRのたびにBuild・Test・検査を自動実行する仕組み。

**例:** GitHub ActionsのCheckがGreenか確認します。

### .env（ドットエンブ）

環境ごとの設定値を置くFile。TokenやPasswordを含むことがあり、原則Commitしません。

**例:** .env.exampleは名前の見本、.envは実値です。

### Secret（シークレット）

Password、Token、API Key、Cookieなど、他人へ見せてはいけない情報。

**例:** 画面共有、Prompt、Issue、Commitへ貼りません。

### Rollback（ロールバック）

変更で問題が起きたとき、安全な以前の状態へ戻す手順。

**例:** CodeのrevertとMigrationのdownを事前に確認します。
