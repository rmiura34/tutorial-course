export type LessonQuizItem = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

type QuizBlueprint = {
  title: string;
  goal: string;
  firstAction: string;
  command: string;
  commandPurpose: string;
  unsafeAction: string;
  safeAction: string;
  evidence: string;
  artifact: string;
  verification: string;
  done: string;
  recovery: string;
  aiBoundary: string;
};

const blueprints: Record<number, QuizBlueprint> = {
  1: {
    title: "ターミナル・ファイル・開発環境",
    goal: "現在地とファイル構成を、実在するパスを根拠に説明する",
    firstAction: "pwdとgit status -sbを実行し、現在地と作業状態を確認する",
    command: "find . -maxdepth 2 -type f | sort",
    commandPurpose: "現在地から深さ2までのファイルを、変更せず一覧にする",
    unsafeAction: ".envの秘密値を学習ログへ貼り付ける",
    safeAction: ".env.exampleでは変数名だけを確認し、実値は記録しない",
    evidence: "package.jsonやcomposer.jsonなど、説明を裏付けるファイルパス",
    artifact: "learning-log/day-01/repository-map.md",
    verification: "地図に書いた各説明と、実際に開いたファイルを照合する",
    done: "主要ディレクトリを5つ以上、根拠パス付きで説明できる",
    recovery: "pwdで現在地を確認し、存在するパスをlsで一段ずつたどる",
    aiBoundary: "変更禁止・根拠パス必須・未確認は未確認と書くよう依頼する",
  },
  2: {
    title: "Gitの基本と安全な変更管理",
    goal: "差分を確認し、目的に合う変更だけを小さくCommitする",
    firstAction: "git branch --show-currentとgit status -sbで基準点を確認する",
    command: "git diff --staged",
    commandPurpose: "次のCommitに実際に入る差分を確認する",
    unsafeAction: "内容を見ずにgit add .で全変更をStageする",
    safeAction: "対象ファイルを明示してgit addし、staged差分を読む",
    evidence: "git status、git diff、git logの実行結果",
    artifact: "目的ごとに分かれた2つ以上の小さなCommit",
    verification: "git statusとgit show --statで残差分とCommit内容を確認する",
    done: "無関係な変更を含めず、Commit前後の状態を説明できる",
    recovery: "戻す前にgit diffを保存・確認し、対象を限定してrestoreする",
    aiBoundary: "AIには先に読み取り専用の状態説明と安全な手順だけを求める",
  },
  3: {
    title: "GitHub・Issue・Pull Request",
    goal: "目的、影響範囲、確認方法、リスクが伝わるPRを作る",
    firstAction: "現状・期待結果・完了条件・確認方法を書いたIssueを作る",
    command: "git push -u origin training/day-03-pull-request",
    commandPurpose: "課題BranchをRemoteへ送り、以後のpush先を設定する",
    unsafeAction: "baseとcompareを確認せず、そのままMergeする",
    safeAction: "Files changed、CI、未解決コメントを確認してからMergeを判断する",
    evidence: "Issue、Commit差分、Test結果、レビューへの回答",
    artifact: "テンプレートの全項目を埋めたPull Request",
    verification: "baseがmain、compareが課題Branchであることを確認する",
    done: "CIが成功し、未解決コメントがなく、残るリスクを説明できる",
    recovery: "PRを閉じず、指摘の再現条件と根拠行を先に確認する",
    aiBoundary: "AIレビューも仕様、再現結果、対象ファイルで裏取りする",
  },
  4: {
    title: "Cursorの基本運用とContext設計",
    goal: "必要なContextだけを渡し、根拠パス付きで既存コードを調査する",
    firstAction: "調査対象と変更禁止を明記し、関連ファイルだけをContextへ追加する",
    command: "git diff --check",
    commandPurpose: "提案された変更に空白エラーなどがないか確認する",
    unsafeAction: "Agentが提案した複数ファイルの変更を読まずに一括承認する",
    safeAction: "対象、目的、差分をファイルごとに読み、不要変更を除外する",
    evidence: "参照したファイルパス、Method名、検索結果",
    artifact: "根拠パス付きのCursor調査レポート",
    verification: "レポートの処理経路を実ファイルで逆順にもたどる",
    done: "調査結果と未確認事項を分け、不要な実装差分が残っていない",
    recovery: "Contextを減らし、質問を1つの処理経路へ絞って再実行する",
    aiBoundary: "AskとAgentの権限差を理解し、編集・Terminal実行は都度確認する",
  },
  5: {
    title: "Claude CodeとCodexの基礎",
    goal: "AIツールを目的別に使い分け、根拠と不確実性を比較する",
    firstAction: "同じ読み取り専用の質問と出力条件を各ツールへ渡す",
    command: "git status --short",
    commandPurpose: "比較中に意図しないファイル変更が発生していないか確認する",
    unsafeAction: "もっとも自信ありげな回答を、根拠なしで正解とみなす",
    safeAction: "回答内のパスやコマンドを実物と公式資料で検証する",
    evidence: "各回答の引用箇所、根拠ファイル、検証結果",
    artifact: "3ツールの比較表とAI利用判断ログ",
    verification: "同じ観点で正確性、根拠、未確認事項を採点する",
    done: "用途別の選択理由と、採用しなかった提案の理由を説明できる",
    recovery: "質問を小さくし、期待する出力形式と確認範囲を明示する",
    aiBoundary: "秘密情報を渡さず、変更前に計画、変更後にDiffとTestを確認する",
  },
  6: {
    title: "Web・HTTP・Chrome DevTools",
    goal: "1回の画面操作をRequest、Response、DOM、Cookieに分けて説明する",
    firstAction: "DevToolsのNetworkを開いて記録を消し、対象操作を1回だけ行う",
    command: "curl -I http://localhost:3000",
    commandPurpose: "Response bodyを取得せず、StatusとHeaderを確認する",
    unsafeAction: "認証CookieやAuthorization Headerをそのまま提出物へ貼る",
    safeAction: "Secret値を伏せ、名前・役割・有無だけを記録する",
    evidence: "Request URL、Method、Status、主要Header、DOM変化",
    artifact: "browser-request-analysis.md",
    verification: "同じ操作を再現し、記録したStatusと画面変化が一致するか確認する",
    done: "ブラウザとServerの往復を、秘密値なしで時系列に説明できる",
    recovery: "NetworkをClearしてPreserve logを確認し、操作を一つずつ再現する",
    aiBoundary: "HARやScreenshotを渡す前にToken、Cookie、個人情報を削除する",
  },
  7: {
    title: "HTML・JavaScript・TypeScript・React読解",
    goal: "TSXの入力、状態、通信、描画、エラー処理を日本語で説明する",
    firstAction: "画面の入口Componentを見つけ、propsとuseStateから入力と状態を列挙する",
    command: "rg \"useState|fetch|return\" app",
    commandPurpose: "状態、通信、描画の手掛かりを対象ディレクトリから検索する",
    unsafeAction: "型エラーを消すため、理由なくanyへ置き換える",
    safeAction: "実データの形と利用箇所を確認して具体的な型を保つ",
    evidence: "Component名、props型、state、通信先、条件分岐の行",
    artifact: "frontend-flow.mdと小さなUI変更",
    verification: "正常・読込中・空・失敗の各状態を画面またはTestで確認する",
    done: "入力から描画までを追え、変更が既存状態を壊していない",
    recovery: "入口Componentへ戻り、値を一つ選んで定義元から利用先まで追う",
    aiBoundary: "生成コードの型、状態更新、エラー表示を全行説明してから採用する",
  },
  8: {
    title: "PHPコードリーディング",
    goal: "Classの入力、依存、分岐、例外、戻り値を説明する",
    firstAction: "対象Methodの引数と戻り値を確認し、呼び出し元を検索する",
    command: "php -l path/to/File.php",
    commandPurpose: "対象PHPファイルの構文エラーを検査する",
    unsafeAction: "型宣言や例外を読まず、Method名だけで動作を推測する",
    safeAction: "依存注入、分岐、例外、戻り値をコード順にたどる",
    evidence: "呼び出し元、型、条件式、throw、returnの該当箇所",
    artifact: "php-reading-notes.md",
    verification: "入力例を一つ決め、通る分岐と戻り値を手でトレースする",
    done: "正常系と例外系を、根拠となるClass・Method名付きで説明できる",
    recovery: "変数を一つ選び、代入元と参照先だけに範囲を絞る",
    aiBoundary: "AIの説明に存在しないMethodがないかrgで確認する",
  },
  9: {
    title: "LaravelのRequest Lifecycle",
    goal: "1画面の処理経路をRouteからResponseまでファイル名付きで追う",
    firstAction: "対象URLとHTTP Methodを決め、route:listで対応Routeを探す",
    command: "php artisan route:list",
    commandPurpose: "登録済みRoute、Method、URI、Controllerを一覧で確認する",
    unsafeAction: "Controllerだけを読み、MiddlewareやValidationを無視する",
    safeAction: "Route、Middleware、Request、Controller、Service、Viewの順に追う",
    evidence: "各段階のファイルパスとMethod名",
    artifact: "request-flow.md",
    verification: "BrowserまたはFeature Testの入力とResponseを処理経路に照合する",
    done: "正常系と拒否される経路を、時系列で説明できる",
    recovery: "Routeへ戻り、次に呼ばれるMethodを一段ずつ開く",
    aiBoundary: "Frameworkの一般論ではなく、このRepositoryの実パスを要求する",
  },
  10: {
    title: "SQL・Migration・Eloquent",
    goal: "Query、Schema、件数、性能リスクを説明する",
    firstAction: "MigrationでTableとIndexを確認してから、対象Queryを読む",
    command: "php artisan migrate:status",
    commandPurpose: "Migrationの適用状態を、変更せず確認する",
    unsafeAction: "本番相当データで確認せず、破壊的Migrationを即実行する",
    safeAction: "Backup・Rollback・件数・Lock影響を確認してから適用を判断する",
    evidence: "実行SQL、Schema、Index、件数、EXPLAIN結果",
    artifact: "query-analysis.mdと安全なMigration",
    verification: "Test DBでup、Query、downまたはRollback手順を確認する",
    done: "SQLとEloquentの対応、性能リスク、戻し方を説明できる",
    recovery: "対象Tableとwhere条件を絞り、Test DBでSELECTから確認する",
    aiBoundary: "AI生成Migrationを実行する前にデータ損失とRollback可能性を確認する",
  },
  11: {
    title: "Python・Requests・Beautiful Soup",
    goal: "規約と負荷に配慮した、再実行可能な静的Scraperを作る",
    firstAction: "利用規約、robots.txt、対象件数、許容頻度を確認する",
    command: "python3 -m unittest discover -s practice/python-scraper/tests -v",
    commandPurpose: "ScraperのUnit Testをまとめて実行する",
    unsafeAction: "待機・Timeout・上限なしで大量Requestを送る",
    safeAction: "Timeout、間隔、件数上限、識別可能なUser-Agentを設定する",
    evidence: "取得元URL、Status、抽出件数、失敗件数、実行時刻",
    artifact: "再実行可能なScraperと固定Schemaの出力",
    verification: "保存HTMLのFixtureで抽出Testを行い、再実行時の重複も確認する",
    done: "正常・欠損・通信失敗を扱い、同じ入力から同じSchemaを出せる",
    recovery: "通信と解析を分離し、保存済みHTMLでSelectorだけをDebugする",
    aiBoundary: "AIへサイトの利用条件を決めさせず、人間が許可範囲を確認する",
  },
  12: {
    title: "Playwright・認証・動的Scraping",
    goal: "認証情報を守り、一覧とPaginationを安全に巡回する",
    firstAction: "対象サイトの許可範囲と、認証状態の保存先・除外設定を確認する",
    command: "npx playwright test",
    commandPurpose: "Browser操作の自動Testを隔離環境で実行する",
    unsafeAction: "storageStateやCookieをGitへCommitする",
    safeAction: "認証状態をGit管理外へ保存し、期限と権限を最小化する",
    evidence: "巡回URL、Page番号、取得件数、終了条件、失敗Screenshot",
    artifact: "上限と再開条件を持つPlaywright処理",
    verification: "最終Page、空Page、再試行、重複をTestする",
    done: "Secretを残さず、無限巡回せず、途中失敗から再開できる",
    recovery: "失敗時のScreenshotとTraceを確認し、待機条件を要素単位に直す",
    aiBoundary: "認証突破や規約回避を依頼せず、許可済み操作だけを自動化する",
  },
  13: {
    title: "テスト・Debug・Log",
    goal: "Bugを再現する失敗Testから最小修正と回帰確認まで行う",
    firstAction: "症状、入力、期待結果を固定し、修正前に失敗するTestを作る",
    command: "npm test",
    commandPurpose: "定義済みのTest suiteを実行して結果を確認する",
    unsafeAction: "Testを通すために期待値やTest自体を都合よく削る",
    safeAction: "仕様を表す期待値を保ち、原因箇所を最小限修正する",
    evidence: "修正前の失敗、Stack trace、原因行、修正後の成功",
    artifact: "回帰Test、最小の修正Diff、debug-log.md",
    verification: "対象Testと全Testを実行し、関連機能の回帰を確認する",
    done: "再現→原因→修正→回帰確認を証拠付きで説明できる",
    recovery: "最後に分かった事実と仮説を分け、入力を最小ケースへ縮める",
    aiBoundary: "AIの原因仮説はTestまたはLogで反証可能にしてから採用する",
  },
  14: {
    title: "Claude Code Skills・Hooks・Subagents",
    goal: "再利用できるSkill、専門Subagent、安全Hookを作る",
    firstAction: "自動化する作業の入力、出力、禁止事項、完了条件を文章化する",
    command: "git diff -- .claude AGENTS.md",
    commandPurpose: "Agent設定だけの変更差分を限定して確認する",
    unsafeAction: "Hookで確認なしに削除や外部送信を自動実行する",
    safeAction: "危険操作は拒否または人間承認にし、対象範囲を限定する",
    evidence: "呼出条件、入力例、成功出力、拒否例、実行Log",
    artifact: "呼び出せるSkill、専門Subagent、4種類のHook",
    verification: "成功ケースと禁止ケースの両方で実際に呼び出す",
    done: "いつ起動し、何を許可し、何を拒否するか説明できる",
    recovery: "自動処理を止め、Hookを一つずつ無効化して原因を切り分ける",
    aiBoundary: "Subagentへ必要最小限のContextと権限だけを渡す",
  },
  15: {
    title: "Plugins・MCP・Codex Skills",
    goal: "読み込めるSkillとPluginを作り、MCP権限を説明する",
    firstAction: "Plugin manifest、Skillの発火条件、必要なMCP操作を設計する",
    command: "git diff -- starter-kits/plugins starter-kits/codex",
    commandPurpose: "PluginとCodex Skillに限定して変更を確認する",
    unsafeAction: "Read用途のMCPへ不要なWrite権限まで付ける",
    safeAction: "Toolごとに最小権限を設定し、Writeは人間確認を入れる",
    evidence: "manifest、SKILL.md、Tool定義、権限表、実行結果",
    artifact: "Codexで読み込めるSkillとPlugin starter",
    verification: "正しい依頼で発火し、無関係な依頼では発火しないことを試す",
    done: "配布構造が有効で、Read/Writeと外部影響を説明できる",
    recovery: "manifest検証、Skill読込、MCP接続を別々に確認する",
    aiBoundary: "外部更新Toolは対象と変更内容を表示して承認後に実行する",
  },
  16: {
    title: "既存Systemを変更せず調査",
    goal: "別の開発者が変更計画を作れる水準で既存Systemを説明する",
    firstAction: "調査質問、対象範囲、変更禁止、必要な根拠を先に固定する",
    command: "git status --short",
    commandPurpose: "読み取り専用調査で差分が発生していないことを確認する",
    unsafeAction: "不明な箇所を一般的な設計パターンで埋めて断定する",
    safeAction: "事実、推測、未確認を分け、推測には検証方法を添える",
    evidence: "入口、データ経路、依存、設定、Testのファイルパス",
    artifact: "system-investigation.md",
    verification: "主要な主張を別の検索経路でも確認し、反例を探す",
    done: "Scope、処理経路、リスク、未確認事項を根拠付きで引き継げる",
    recovery: "問いを一つに絞り、入口と出口から中央へ向かって調査する",
    aiBoundary: "AIには変更を禁止し、引用したPathの存在を人間が確認する",
  },
  17: {
    title: "Refactoring計画と承認",
    goal: "実装可否を判断できる計画を作り、承認後の作業単位へ分ける",
    firstAction: "現状の責務、困りごと、変更しない振る舞いを根拠付きで整理する",
    command: "git diff --exit-code",
    commandPurpose: "計画段階で実装差分がないことを確認する",
    unsafeAction: "承認前に大規模な名前変更やファイル移動を始める",
    safeAction: "互換性、移行順序、Test、Rollbackを計画し、承認を得る",
    evidence: "責務の重複、依存関係、既存Test、変更影響箇所",
    artifact: "承認判断に必要なrefactoring-plan.md",
    verification: "各作業単位に独立した完了条件とTestを割り当てる",
    done: "利点だけでなくリスク、代替案、中止条件を説明できる",
    recovery: "目的と無関係な変更候補を外し、最小の1段階へ分割する",
    aiBoundary: "AIへ複数案を出させても、採否は実コードと制約で判断する",
  },
  18: {
    title: "小さな実装・Test・検証",
    goal: "AI生成Diffを全行説明し、TestとRollbackを伴う実装を完成する",
    firstAction: "承認済み計画、現在Branch、作業前Test結果を確認する",
    command: "git diff --check",
    commandPurpose: "Commit前にDiffの基本的な形式エラーを検出する",
    unsafeAction: "生成された大きなDiffを、動いたという理由だけで採用する",
    safeAction: "小さく実装し、各差分の理由と影響を説明してTestする",
    evidence: "変更前後のTest、Diff、手動確認、影響範囲",
    artifact: "小さな実装Commit、Test、rollback-notes.md",
    verification: "対象Test、全Test、Lint、Build、手動確認を順に行う",
    done: "全変更行と失敗時の戻し方を説明でき、必要なCheckが成功する",
    recovery: "最後に成功した小さな状態へ戻り、変更を半分ずつ切り分ける",
    aiBoundary: "AIの追加変更を自動承認せず、承認済みScope外なら止める",
  },
  19: {
    title: "Pull RequestとReview対応",
    goal: "仕様、互換性、DB、Security、Test、Rollbackを説明したPRを完成する",
    firstAction: "Issueと完了条件を読み直し、Branch差分をmainと比較する",
    command: "git diff main...HEAD --stat",
    commandPurpose: "PRへ含まれる変更ファイルと規模を確認する",
    unsafeAction: "レビュー指摘へ根拠を確認せず機械的に対応する",
    safeAction: "指摘を再現し、採用・不採用の理由と確認結果を返信する",
    evidence: "仕様対応表、Test結果、DB影響、Security確認、Rollback",
    artifact: "レビュー可能でMerge条件を満たしたPull Request",
    verification: "Files changedを全行読み、CIと未解決Threadを確認する",
    done: "レビュアーが再現できる確認手順と残リスクがPRにある",
    recovery: "失敗Checkを一つ選び、Logの最初の原因から修正する",
    aiBoundary: "AIレビューの指摘も優先度、根拠、再現性を確認する",
  },
  20: {
    title: "最終実技試験",
    goal: "調査、計画、実装、Test、PRを一つの実務課題として完遂する",
    firstAction: "課題文、制約、提出物、採点基準を読み、自分の言葉で計画を作る",
    command: "npm run course -- check 20",
    commandPurpose: "Day 20の必須提出物と作業状態を機械的に確認する",
    unsafeAction: "AIへ課題を丸投げし、理解できないDiffを提出する",
    safeAction: "判断をログに残し、各段階で根拠・Diff・Testを自分で確認する",
    evidence: "調査根拠、承認計画、Commit、Test結果、PR説明",
    artifact: "採点基準を満たすFinal Capstoneの実務PR",
    verification: "第三者がREADMEとPRだけで起動・再現・確認できるか試す",
    done: "要件を満たし、安全性と正しさ、残リスク、Rollbackを口頭説明できる",
    recovery: "採点基準へ戻り、未達の項目を一つずつIssue化する",
    aiBoundary: "AI利用箇所、採用理由、検証方法を開示し、最終判断は自分で行う",
  },
};

const distractor = (kind: "goal" | "action" | "evidence") => {
  if (kind === "goal") return ["用語を暗記するだけで、成果物は作らない", "確認せず最短でmainへ変更を入れる"];
  if (kind === "action") return ["作業状態を確認せず、いきなり実装を始める", "分からない箇所を推測で埋めて先へ進む"];
  return ["AIが『正しい』と答えたこと", "根拠のない記憶と推測"];
};

function buildQuiz(day: number, item: QuizBlueprint): LessonQuizItem[] {
  return [
    {
      question: `Day ${day}「${item.title}」のゴールとして最も適切なのはどれですか？`,
      options: [item.goal, ...distractor("goal")],
      correctIndex: 0,
      explanation: `この日の到達点は「${item.goal}」です。視聴や読了ではなく、自分で確認できる成果を基準にします。`,
    },
    {
      question: "ハンズオンを始めるとき、最初に行うことはどれですか？",
      options: [distractor("action")[0], item.firstAction, distractor("action")[1]],
      correctIndex: 1,
      explanation: `最初は「${item.firstAction}」です。基準点を作ると、意図した変更と元からあった状態を区別できます。`,
    },
    {
      question: `コマンド「${item.command}」の目的は何ですか？`,
      options: ["課題を自動的に完成させる", "Remoteのmainを強制的に書き換える", item.commandPurpose],
      correctIndex: 2,
      explanation: `このコマンドは「${item.commandPurpose}」ために使います。実行前に現在地と対象を確認してください。`,
    },
    {
      question: "この演習で避けるべき行動はどれですか？",
      options: [item.unsafeAction, item.safeAction, "小さな単位で結果を確認する"],
      correctIndex: 0,
      explanation: `「${item.unsafeAction}」は、情報漏えい・データ損失・不要変更につながります。代わりに「${item.safeAction}」を実践します。`,
    },
    {
      question: "作業内容が正しいと説明するため、最も有効な証拠はどれですか？",
      options: [distractor("evidence")[0], distractor("evidence")[1], item.evidence],
      correctIndex: 2,
      explanation: `提出時は「${item.evidence}」を残します。再現できる証拠があれば、別の人も判断できます。`,
    },
    {
      question: "この日の中心となる提出物はどれですか？",
      options: ["作業と無関係なScreenshotだけ", item.artifact, "AIとの会話全文だけ"],
      correctIndex: 1,
      explanation: `中心となる提出物は「${item.artifact}」です。作っただけでなく、完了条件と照合します。`,
    },
    {
      question: "提出前の確認として最も適切なのはどれですか？",
      options: [item.verification, "ファイルが保存できたら確認を終える", "Test結果を見ず成功したことにする"],
      correctIndex: 0,
      explanation: `提出前に「${item.verification}」を行います。確認結果も学習ログまたはPRへ残してください。`,
    },
    {
      question: "途中で詰まったときの、安全な切り分け方はどれですか？",
      options: ["関係するファイルをすべて削除してやり直す", item.recovery, "Errorを読まず同じ操作を繰り返す"],
      correctIndex: 1,
      explanation: `まず「${item.recovery}」を行います。観測範囲を小さくすると、原因と症状を分けられます。`,
    },
    {
      question: "AIエージェントを使うときの境界として正しいものはどれですか？",
      options: ["AIの提案は確認せずすべて採用する", "Secretも含め、情報は多いほどよい", item.aiBoundary],
      correctIndex: 2,
      explanation: `この日は「${item.aiBoundary}」を守ります。AIは作業を助けますが、権限と最終判断は人間が管理します。`,
    },
    {
      question: "このレッスンを完了したと言える状態はどれですか？",
      options: ["動画または資料を一度開いた", item.done, "コマンドを意味を理解せずコピーした"],
      correctIndex: 1,
      explanation: `完了条件は「${item.done}」です。受講時間ではなく、説明・成果物・検証結果で判定します。`,
    },
  ];
}

export const lessonQuizBank: Readonly<Record<number, readonly LessonQuizItem[]>> = Object.fromEntries(
  Object.entries(blueprints).map(([day, item]) => [Number(day), buildQuiz(Number(day), item)]),
);

/**
 * 既存の設問を先頭に残し、不足分をDay別の設問で補って10問にします。
 * lessons.ts側では `quizzes: getLessonQuizzes(day, existingQuizzes)` の形で統合できます。
 */
export function getLessonQuizzes(
  day: number,
  existingQuizzes: readonly LessonQuizItem[] = [],
): LessonQuizItem[] {
  const supplemental = lessonQuizBank[day];
  if (!supplemental) throw new RangeError(`Day ${day} のクイズは定義されていません。`);

  const questions = new Set<string>();
  return [...existingQuizzes, ...supplemental]
    .filter((quiz) => {
      if (questions.has(quiz.question)) return false;
      questions.add(quiz.question);
      return true;
    })
    .slice(0, 10)
    .map((quiz) => ({ ...quiz, options: [...quiz.options] }));
}
