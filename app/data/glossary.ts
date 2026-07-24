export type GlossaryTerm = {
  term: string;
  japanese: string;
  category: "はじめの一歩" | "Git / GitHub" | "Web / App" | "AI開発" | "安全と検証";
  meaning: string;
  example: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Account", japanese: "アカウント", category: "はじめの一歩", meaning: "Serviceを自分として利用するための登録情報。教材、GitHub、ChatGPTはそれぞれ別のAccountです。", example: "GitHubへ入れても、教材サイトへ自動では入れません。" },
  { term: "Application", japanese: "アプリケーション", category: "はじめの一歩", meaning: "目的のために動くSoftware。このコースでは教材サイトとCompany Import Labの2つを起動します。", example: "Port 3000が教材、Port 8000がLabです。" },
  { term: "Repository", japanese: "リポジトリ", category: "はじめの一歩", meaning: "Code、資料、変更履歴をまとめて管理するProjectの入れ物。略してRepoとも呼びます。", example: "tutorial-course Repositoryを自分のGitHubへ作ります。" },
  { term: "Template", japanese: "テンプレート", category: "はじめの一歩", meaning: "元の履歴を引き継がず、同じファイル構成から新しいRepositoryを作る雛形。", example: "Use this templateから自分用Repoを作ります。" },
  { term: "Fork", japanese: "フォーク", category: "はじめの一歩", meaning: "元Repositoryとの関係を残して、自分のAccountへ複製するGitHubの機能。", example: "講師がForkを指定した場合だけ使います。" },
  { term: "Codespaces", japanese: "コードスペーシズ", category: "はじめの一歩", meaning: "GitHub上のRepositoryを、設定済みのBrowser開発環境で開く機能。", example: "PCへPHPを個別Installせず演習できます。" },
  { term: "VS Code", japanese: "ブイエスコード", category: "はじめの一歩", meaning: "File編集、検索、Terminal、Git操作を一つの画面で行うEditor。", example: "左のExplorerでFileを開き、下のTerminalでCommandを実行します。" },
  { term: "Explorer", japanese: "エクスプローラー", category: "はじめの一歩", meaning: "VS Code左側にあるFileとFolderの一覧。", example: "package.jsonをExplorerから開きます。" },
  { term: "Terminal", japanese: "ターミナル", category: "はじめの一歩", meaning: "文字のCommandでComputerへ指示し、結果を読む画面。", example: "VS Code上部のTerminal → New Terminalで開きます。" },
  { term: "CLI", japanese: "シーエルアイ", category: "はじめの一歩", meaning: "Command Line Interfaceの略。文字でSoftwareを操作する方式。", example: "git statusやnpm run learner:startはCLIのCommandです。" },
  { term: "Command", japanese: "コマンド", category: "はじめの一歩", meaning: "Terminalへ入力する一つの命令。空白でCommand名・選択肢・対象を分けます。", example: "git status -sbではgitが道具、statusが操作、-sbが表示Optionです。" },
  { term: "Path", japanese: "パス", category: "はじめの一歩", meaning: "FileやFolderの住所。/から始まる絶対Pathと、現在地から書く相対Pathがあります。", example: "learning-log/day-01/repository-map.mdは相対Pathです。" },
  { term: "Directory", japanese: "ディレクトリ／フォルダ", category: "はじめの一歩", meaning: "Fileをまとめる入れ物。TerminalではDirectory、画面ではFolderと呼ばれることが多いです。", example: "app Directoryの中に画面のCodeがあります。" },
  { term: "Port", japanese: "ポート", category: "Web / App", meaning: "1台のComputer内で複数Applicationの通信先を区別する番号。", example: "localhost:3000とlocalhost:8000は別Applicationです。" },
  { term: "localhost", japanese: "ローカルホスト", category: "Web / App", meaning: "いま使っている開発環境自身を示す名前。Internet上の公開URLとは違います。", example: "http://localhost:3000をBrowserで開きます。" },
  { term: "Dependency", japanese: "依存関係", category: "はじめの一歩", meaning: "Applicationが動くために必要な別のLibraryやPackage。", example: "package.jsonとcomposer.jsonに依存関係が書かれます。" },
  { term: "Node.js", japanese: "ノード・ジェイエス", category: "Web / App", meaning: "Browser外でJavaScriptを動かす実行環境。教材サイトの起動やBuildに使います。", example: "node -vでVersionを確認します。" },
  { term: "npm", japanese: "エヌピーエム", category: "Web / App", meaning: "JavaScriptのPackageとProject Commandを扱う道具。", example: "npm run learner:startはpackage.jsonに定義された起動処理を呼びます。" },
  { term: "PHP", japanese: "ピーエイチピー", category: "Web / App", meaning: "Server側で動くProgramming言語。LaravelはPHPで作られています。", example: "php -vでVersionを確認します。" },
  { term: "Composer", japanese: "コンポーザー", category: "Web / App", meaning: "PHPのPackageを管理する道具。", example: "composer installでcomposer.lockどおりに依存関係を準備します。" },
  { term: "Git", japanese: "ギット", category: "Git / GitHub", meaning: "Fileの変更履歴を手元で記録・比較・復元する道具。GitHubとは別物です。", example: "git diffでまだCommitしていない差分を見ます。" },
  { term: "GitHub", japanese: "ギットハブ", category: "Git / GitHub", meaning: "Git Repositoryを共有し、Issue・PR・Review・CIを行うWeb Service。", example: "自分のBranchをPushし、GitHub上でPRを作ります。" },
  { term: "Branch", japanese: "ブランチ", category: "Git / GitHub", meaning: "mainから分かれた独立した変更の流れ。安全に作業を分離します。", example: "training/day-01-environmentでDay 01を進めます。" },
  { term: "main", japanese: "メイン", category: "Git / GitHub", meaning: "通常、完成した変更が集まる基準Branch。このコースでは直接作業しません。", example: "課題BranchからmainへPRを出します。" },
  { term: "Stage", japanese: "ステージ", category: "Git / GitHub", meaning: "次のCommitへ含める変更だけを選んで置く場所。", example: "git add README.mdの後、git diff --stagedで確認します。" },
  { term: "Commit", japanese: "コミット", category: "Git / GitHub", meaning: "選んだ変更を、目的を示すMessage付きで履歴へ保存した区切り。", example: "1 Commitには1つの目的だけを入れます。" },
  { term: "Push", japanese: "プッシュ", category: "Git / GitHub", meaning: "手元のCommitをGitHub側のRepositoryへ送る操作。", example: "git push -u origin training/day-03-pull-request" },
  { term: "Pull Request", japanese: "プルリクエスト／PR", category: "Git / GitHub", meaning: "Branchの変更を別Branchへ取り込むための提案・説明・Review画面。", example: "目的、確認方法、Risk、Rollbackを書きます。" },
  { term: "Diff", japanese: "差分", category: "Git / GitHub", meaning: "変更前と変更後の違い。追加は+、削除は-で表示されます。", example: "Commit前とPR提出前に全行を読みます。" },
  { term: "Issue", japanese: "イシュー", category: "Git / GitHub", meaning: "不具合、要望、作業目的、完了条件を共有するGitHub上の記録。", example: "現状・期待・再現手順・Done whenを書きます。" },
  { term: "HTML", japanese: "エイチティーエムエル", category: "Web / App", meaning: "Webページの見出し・段落・Linkなど、内容と構造を表す言語。", example: "<h1>はページの主見出しです。" },
  { term: "CSS", japanese: "シーエスエス", category: "Web / App", meaning: "HTML要素の色・大きさ・余白・配置を指定する言語。", example: "paddingは要素の内側の余白です。" },
  { term: "HTTP", japanese: "エイチティーティーピー", category: "Web / App", meaning: "BrowserとServerがRequestとResponseを交換する約束。", example: "GET /companiesへServerが200を返します。" },
  { term: "API", japanese: "エーピーアイ", category: "Web / App", meaning: "Application同士が決められた形式でDataや操作をやり取りする入口。", example: "JSONを返すHTTP APIを呼びます。" },
  { term: "Route", japanese: "ルート", category: "Web / App", meaning: "URLとHTTP Methodを、実際の処理へ結びつける定義。", example: "GET /companiesをCompanyController@indexへ結びます。" },
  { term: "Database", japanese: "データベース／DB", category: "Web / App", meaning: "検索・更新しやすい形でDataを保存する仕組み。", example: "SQLiteのcompanies Tableへ会社情報を保存します。" },
  { term: "Scraping", japanese: "スクレイピング", category: "Web / App", meaning: "Webページから必要なDataを規則に沿って取得する処理。規約と負荷への配慮が必要です。", example: "練習サイトから会社名とURLだけを取得します。" },
  { term: "Codex", japanese: "コーデックス", category: "AI開発", meaning: "Repositoryを読み、調査・編集・Command実行・検証を支援するCoding Agent。", example: "Day 01からCoachとして使い、正式なツール比較はDay 05で行います。" },
  { term: "Agent", japanese: "エージェント", category: "AI開発", meaning: "目標と制約を受け、検索・編集・Tool実行を組み合わせてTaskを進めるAI。", example: "最初は変更禁止で調査だけを依頼します。" },
  { term: "Prompt", japanese: "プロンプト", category: "AI開発", meaning: "AIへ渡す依頼。目的、Context、禁止事項、完了条件を含めると確認しやすくなります。", example: "変更せず、根拠Path付きで調査し、不明は未確認と書く。" },
  { term: "Context", japanese: "コンテキスト", category: "AI開発", meaning: "AIが判断に使える会話、File、選択範囲、規約などの情報。", example: "対象FileとIssueだけを渡し、Secretは渡しません。" },
  { term: "AGENTS.md", japanese: "エージェンツ・マークダウン", category: "AI開発", meaning: "CodexがRepository内で読むProject固有の継続Instruction。", example: "Test、禁止事項、Taskの読み順を定義します。" },
  { term: "Skill", japanese: "スキル", category: "AI開発", meaning: "特定Taskの知識・手順・Tool利用を再利用できる形へまとめたもの。", example: "LaravelのRequest flow調査Skillを作ります。" },
  { term: "Plugin", japanese: "プラグイン", category: "AI開発", meaning: "SkillやToolなどの拡張機能をまとめて配布・導入するPackage。", example: "ManifestとREADMEを持つ練習Pluginを作ります。" },
  { term: "MCP", japanese: "エムシーピー", category: "AI開発", meaning: "AI Applicationと外部Tool・Data Sourceを接続するための共通方式。", example: "まず読み取り専用のMock Toolで権限を学びます。" },
  { term: "Test", japanese: "テスト", category: "安全と検証", meaning: "期待する入力と出力を決め、変更後も振る舞いが正しいか繰り返し確かめるCode。", example: "不具合を再現するTestを先に失敗させます。" },
  { term: "CI", japanese: "シーアイ", category: "安全と検証", meaning: "PushやPRのたびにBuild・Test・検査を自動実行する仕組み。", example: "GitHub ActionsのCheckがGreenか確認します。" },
  { term: ".env", japanese: "ドットエンブ", category: "安全と検証", meaning: "環境ごとの設定値を置くFile。TokenやPasswordを含むことがあり、原則Commitしません。", example: ".env.exampleは名前の見本、.envは実値です。" },
  { term: "Secret", japanese: "シークレット", category: "安全と検証", meaning: "Password、Token、API Key、Cookieなど、他人へ見せてはいけない情報。", example: "画面共有、Prompt、Issue、Commitへ貼りません。" },
  { term: "Rollback", japanese: "ロールバック", category: "安全と検証", meaning: "変更で問題が起きたとき、安全な以前の状態へ戻す手順。", example: "CodeのrevertとMigrationのdownを事前に確認します。" },
];

export const glossaryCategories = [
  "すべて",
  "はじめの一歩",
  "Git / GitHub",
  "Web / App",
  "AI開発",
  "安全と検証",
] as const;
