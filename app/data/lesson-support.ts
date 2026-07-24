export type LessonSupport = {
  prerequisites: string[];
  terms: { term: string; meaning: string }[];
  whyItMatters: string;
  expectedResults: string[];
  commonMistakes: { symptom: string; cause: string; recovery: string }[];
  submissionGuide: { section: string; include: string; example: string }[];
};

type SupportSeed = {
  why: string;
  before: string[];
  terms: [string, string][];
  results: string[];
  mistake: [string, string, string];
  example: string;
};

const supportByDay: Record<number, SupportSeed> = {
  1: {
    why: "AIに正しく調査を頼むには、まず自分が「いまどのフォルダにいて、どのファイルを見ているか」を確認できる必要があります。ここが曖昧だと、別Projectを編集したり、存在しない設定を信じたりします。",
    before: ["START HEREの完了チェックが5つともON", "教材サイト（Port 3000）とLab（Port 8000）が開く", "VS CodeのExplorerとTerminalを表示できる"],
    terms: [["パス", "ファイルやフォルダの住所"], ["ターミナル", "文字でPCへ命令する画面"], ["Repository", "Codeと変更履歴をまとめたProjectフォルダ"]],
    results: ["pwdの結果がRepositoryの場所を指す", "主要ファイルを5つ以上、役割と根拠付きで記録できる", "調査だけを行い、git statusに意図しない変更がない"],
    mistake: ["pwdが想定外の場所を表示する", "Terminalで別フォルダを開いている", "Explorerでtutorial-courseを右クリックし「Open in Integrated Terminal」を選ぶ"],
    example: "package.json — 教材サイトの起動CommandとJavaScript依存関係を定義している。確認: scripts欄。",
  },
  2: {
    why: "Gitは失敗を消す道具ではなく、変更を小さく記録して安全に比較・復元する道具です。AIの変更も、Commit前の差分を読めれば自分で止められます。",
    before: ["Day 01のrepository-map.mdがある", "現在のBranch名を確認できる", "git status -sbが読める"],
    terms: [["差分（Diff）", "変更前と変更後の違い"], ["Stage", "次のCommitへ入れる変更を選ぶ場所"], ["Commit", "説明付きで保存した変更の区切り"]],
    results: ["変更前後をgit diffで説明できる", "関係するファイルだけをStageできる", "2つの小さなCommitが履歴に並ぶ"],
    mistake: ["git commitしても変更が入らない", "git addでStageしていない", "git statusで対象を確認し、git add <file>の後にgit diff --stagedを見る"],
    example: "Commit 1: READMEへ目的を追加。Commit 2: 操作結果をlearning-logへ記録。目的を混ぜない。",
  },
  3: {
    why: "Pull Requestは単なる提出ボタンではなく、「なぜ変えたか・どう確かめたか」を他の人が判断するための説明書です。",
    before: ["GitHubへログイン済み", "自分のRepositoryへPushできる", "Day 02でCommitとBranchを区別できた"],
    terms: [["Issue", "問題や作業目的を記録する場所"], ["Pull Request", "Branchの変更を取り込んでもらう提案"], ["base / compare", "取込先 / 変更を持つBranch"]],
    results: ["IssueとPRが相互に参照される", "baseがmain、compareが課題Branch", "第三者が手順どおりに確認できる"],
    mistake: ["PRのFiles changedが空", "同じBranch同士を比較しているかPush前", "compareを課題Branchへ直し、git push -u origin <branch>を確認する"],
    example: "目的: 学習手順を明確化。確認: npm test。Risk: 文書のみ。Rollback: Commitをrevert。",
  },
  4: {
    why: "Cursorへ渡すContextを絞ると、関係ないファイルの変更や秘密情報の混入を減らせます。AIに触らせる範囲を人が決める練習です。",
    before: ["Cursorを利用する場合は講師指定のAccountでログイン", "RepositoryをCursorで開ける", "Day 01の地図を手元に置く"],
    terms: [["Context", "AIが回答に使える情報"], ["Indexing", "Codeを検索できるよう整理する処理"], ["Rules", "Projectで継続して守らせる指示"]],
    results: ["根拠パス付きの調査結果がある", "未確認事項が推測と分けられている", "小変更のDiffを承認前に読める"],
    mistake: ["AIが関係ないファイルまで変更する", "依頼範囲と禁止事項が曖昧", "変更を戻す前にDiffを保存し、対象ファイルと「変更禁止」を明記して再依頼する"],
    example: "確認済み: routes/web.phpのGET /companies。未確認: 本番Queue設定。根拠がないため断定しない。",
  },
  5: {
    why: "AIツールは同じではありません。調査・計画・実装・Reviewの得意分野と権限を比較し、目的に合う道具を選びます。",
    before: ["GitHub RepositoryをCodexから開ける", "利用するAIごとの送信データ規約を確認", "秘密情報をContextへ入れない"],
    terms: [["Agent", "目標に向けて検索・編集・実行を組み合わせるAI"], ["Prompt", "AIへ渡す目的・条件・出力形式"], ["AGENTS.md", "CodexがProjectで読む継続指示"]],
    results: ["同じ質問への3ツールの違いを表で比較できる", "各回答の根拠を実ファイルで確認できる", "採用・不採用理由が残る"],
    mistake: ["AIの説明がもっともらしいが根拠がない", "確認対象を指定していない", "ファイルパスと検証Commandを要求し、自分で開いて照合する"],
    example: "Codex案を採用: testsまで確認したため。別案を不採用: 存在しないServiceを前提にしていたため。",
  },
  6: {
    why: "HTMLは画面の意味と骨組み、CSSは見た目を担当します。役割を分けると、AIが生成した画面も直す場所を自分で特定できます。",
    before: ["exercises/01-profile-cardを開く", "Browser PreviewまたはPortを開ける", "HTMLファイルとCSSファイルを見分けられる"],
    terms: [["HTML", "Webページの内容と構造を表す言語"], ["CSS", "色・余白・配置を指定する言語"], ["要素", "見出し、段落、リンクなどHTMLの部品"]],
    results: ["名前・説明・リンクを持つProfile cardが表示される", "画面幅を変えても文字がはみ出さない", "HTMLとCSSの変更理由を説明できる"],
    mistake: ["変更したのに画面が変わらない", "別ファイルを開いたかBrowser cache", "開いているURLと保存済みファイルを確認し、再読み込みする"],
    example: "h1はページの主題、pは説明、aは外部リンク。見た目だけでなく意味を選んだ。",
  },
  7: {
    why: "HTTPのRequestとResponseが分かると、画面の不具合をBrowser・Server・Databaseのどこから調べるか判断できます。",
    before: ["教材とLabを起動できる", "BrowserのDeveloper Toolsを開ける", "URLをAddress barへ入力できる"],
    terms: [["HTTP", "BrowserとServerが情報を交換する約束"], ["Request", "BrowserからServerへの依頼"], ["Response", "Serverが返すStatus・Header・Body"]],
    results: ["Network panelで1件の通信を選べる", "Method・Status・URL・Responseを記録できる", "404と500の調査開始点を説明できる"],
    mistake: ["Network panelに何も出ない", "記録開始前に通信が終わった", "Networkを開いたままページを再読み込みし、AllまたはFetch/XHRを選ぶ"],
    example: "GET /companies → 200。ResponseはHTML。404ならRoute、500ならServer logから確認する。",
  },
  8: {
    why: "PHPの配列・条件分岐・関数はLaravelのControllerやServiceを読む土台です。文法暗記より、入力がどの出力へ変わるかを追います。",
    before: ["training-labでphp -vが実行できる", "変数と文字列の違いを説明できる", "TerminalでTestを実行できる"],
    terms: [["変数", "値へ名前を付けたもの"], ["関数", "入力を受け処理し結果を返すまとまり"], ["配列", "複数の値を順序やKeyで持つ入れ物"]],
    results: ["小さなPHP関数を実行できる", "正常・空・不正入力をTestできる", "Errorの行番号から原因箇所を開ける"],
    mistake: ["Parse errorが表示される", "括弧・セミコロン・引用符の不足", "最初のError行を開き、直前の記号を1つずつ確認する"],
    example: "入力['name' => 'A社']を受け、空ならError、値があれば整形した名前を返す。",
  },
  9: {
    why: "LaravelではURLからResponseまでに複数の層があります。処理経路を追えると、AIへ修正場所を丸投げせず根拠付きで指定できます。",
    before: ["Port 8000でLabが表示される", "PHPの関数と配列を読める", "repository-map.mdを開いている"],
    terms: [["Route", "URLと処理の入口を結ぶ定義"], ["Controller", "Requestを受け処理を組み立てる場所"], ["Model", "DatabaseのDataを扱う部品"]],
    results: ["URLからRoute・Controller・Viewを線で結べる", "各段階の入力と出力を書ける", "根拠となるファイルパスを示せる"],
    mistake: ["検索結果が多すぎて経路を追えない", "URL・Methodを固定していない", "Browserで対象通信を1件選び、Route定義から順に追う"],
    example: "GET /companies → routes/web.php → CompanyController@index → companies/index.blade.php。",
  },
  10: {
    why: "Database変更は画面より戻しにくいため、読む・試す・戻す手順を先に身につけます。MigrationとTestで安全網を作ります。",
    before: ["ModelからTable名を確認できる", "LabのSQLite fileを確認できる", "Test用Databaseと学習用Databaseを区別する"],
    terms: [["Database", "構造化したDataを保存する仕組み"], ["Migration", "Table構造の変更をCodeで記録する仕組み"], ["Transaction", "複数処理を全部成功か全部取消にする単位"]],
    results: ["Table・Column・制約を説明できる", "Migrationのup/downを確認できる", "重複やNullのTest結果を残せる"],
    mistake: ["Table already existsでMigration失敗", "同じMigrationを別状態のDBへ実行", "使用中Environmentを確認し、履歴を見てから講師指定のreset手順を使う"],
    example: "companies.nameは必須、external_idはunique。重複時にどのErrorになるかTestする。",
  },
  11: {
    why: "Scrapingは取得できれば終わりではありません。相手サイトへの負荷、利用条件、失敗時の停止、Data品質まで設計します。",
    before: ["対象サイトの利用規約とrobots.txtを確認", "練習用URLだけを使う", "Request回数の上限を決める"],
    terms: [["Scraping", "Webページから必要な情報を規則的に取得する処理"], ["Selector", "HTMLから対象要素を選ぶ指定"], ["robots.txt", "Crawler向けのアクセス方針を示すファイル"]],
    results: ["名前とURLを構造化して取得できる", "Timeoutと待機時間がある", "失敗URLと理由をLogへ残せる"],
    mistake: ["Selectorが0件になる", "HTML構造が想定と違う", "取得HTMLを保存して対象文字を探し、最小のSelectorから組み直す"],
    example: "成功3件、失敗1件。失敗URL・Status・時刻を記録し、無限再試行しない。",
  },
  12: {
    why: "Paginationと重複除去は実務Scraperで頻出します。停止条件を誤ると無限Loopや同じDataの大量登録につながります。",
    before: ["Day 11の1ページ取得が成功", "一意にできるKey候補を確認", "最大ページ数を安全な小さい値に設定"],
    terms: [["Pagination", "結果を複数ページに分ける仕組み"], ["重複排除", "同じ対象を一度だけ残す処理"], ["停止条件", "Loopを終了する明確な判断"]],
    results: ["2ページ以上を順番に取得できる", "同一Keyが1件にまとまる", "最大件数・次リンクなし・Errorで安全に停止する"],
    mistake: ["同じページを繰り返し取得する", "next URLを更新していない", "各Loopでcurrent URLをLogし、同じURL再訪時に停止する"],
    example: "external_idをKeyにdictへ保存。nextがない、既訪問URL、最大3ページのいずれかで停止。",
  },
  13: {
    why: "Testは完成後の採点ではなく、変更してよい範囲を示す安全網です。正常系だけでなく失敗条件を先に固定します。",
    before: ["対象処理を手動で一度再現", "期待する入力と出力を文章化", "Test Commandを確認"],
    terms: [["Unit Test", "小さな関数やClassを単独で確かめるTest"], ["Feature Test", "複数部品を通した振る舞いを確かめるTest"], ["Regression", "直した不具合が再発すること"]],
    results: ["変更前に失敗する再現Testがある", "修正後に同じTestが成功する", "正常・境界・失敗の3種類を含む"],
    mistake: ["Testが実装前から成功する", "不具合を再現できていない", "期待値を見直し、壊れている入力で本当に失敗することを先に確認する"],
    example: "2ページ目を取得できない入力でRED、修正後GREEN、1ページだけの既存動作もGREEN。",
  },
  14: {
    why: "SkillとHookはAIの作業手順を再利用可能にし、危険な操作を機械的に止めます。指示を長くするより、発動条件と検証を明確にします。",
    before: ["Day 05でAgentとPromptを区別できる", "安全にTestできる専用Branch", "禁止したいCommandを具体化"],
    terms: [["Skill", "特定作業の手順・知識・Tool利用をまとめた再利用部品"], ["Hook", "決まったEventの前後で自動実行する処理"], ["Trigger", "SkillやHookが動く条件"]],
    results: ["Skillの使用条件と手順が文書化される", "Hookが安全なCommandを通し危険例を止める", "発動・非発動のTest記録がある"],
    mistake: ["Skillが関係ない依頼でも使われる", "説明が広すぎてTriggerが曖昧", "対象Task・入力・使わない条件をdescriptionへ具体的に書く"],
    example: "Laravel処理経路調査の時だけ発動。実装依頼や一般質問では使わない。",
  },
  15: {
    why: "PluginとMCPはAIが触れられる外部機能を増やします。便利さと同時に権限・入力検証・失敗時の境界を設計する必要があります。",
    before: ["Day 14のSkillがTest済み", "外部接続なしのMockから始める", "許可する操作と禁止操作を列挙"],
    terms: [["Plugin", "SkillやToolなどを配布できるPackage"], ["MCP", "AIと外部Tool・Dataを接続する共通方式"], ["権限", "読み取り・変更など許可された操作範囲"]],
    results: ["Manifestが検証を通る", "Tool入力のValidationとErrorがある", "権限とSecurity注意点がREADMEにある"],
    mistake: ["Pluginを読めるがToolが見つからない", "Manifestのpath/name不一致", "validatorを実行し、実ファイル名とmanifestを1項目ずつ照合する"],
    example: "入力はcompany_idのみ、読み取り専用。存在しないIDは明示Error。Tokenは受け取らない。",
  },
  16: {
    why: "未知のSystemでは、すぐ直すより先に地図を作る方が速く安全です。確認済み事実と仮説を分離して調査します。",
    before: ["変更禁止の調査Branch", "起動・Test Commandを確認", "本番Secretへアクセスしない"],
    terms: [["System map", "主要部品とDataの流れを表す地図"], ["依存関係", "ある部品が別の部品を必要とする関係"], ["Risk register", "危険・影響・確認方法を並べた表"]],
    results: ["Request・DB・外部通信の地図がある", "各事実に根拠ファイルがある", "不明点と次の質問が残る"],
    mistake: ["調査中にAIがCodeを整形した", "変更禁止を明示していない", "git diffを保存し、不要変更を確認してから調査Promptへ禁止条件を追加する"],
    example: "事実: Scheduler登録あり（routes/console.php）。仮説: 本番で毎時実行。設定未確認。",
  },
  17: {
    why: "Refactoringの失敗は、Codeより「変えてはいけない振る舞い」の認識不足から起きます。実装前に範囲とRollbackを合意します。",
    before: ["Day 16のSystem mapが承認済み", "症状を再現できる", "このDayでは承認前に実装しない"],
    terms: [["Refactoring", "外から見える動作を保ち内部構造を改善すること"], ["非Goal", "今回あえて行わないこと"], ["Rollback", "問題時に安全な以前の状態へ戻す手順"]],
    results: ["現状・原因仮説・変更しない仕様が分離", "実装StepごとにTestとRollbackがある", "講師の承認記録が残る"],
    mistake: ["計画が「きれいにする」だけ", "問題と完了条件が測定不能", "対象File、守るResponse、Test、変更しない範囲を具体化する"],
    example: "維持: APIのJSON keyとStatus。変更: 重複排除Service。非Goal: UI刷新。",
  },
  18: {
    why: "承認済み計画を小さく実装すると、失敗原因・Review範囲・戻す単位を限定できます。AIの生成量より検証可能性を優先します。",
    before: ["Day 17の計画が承認済み", "変更前Test結果を保存", "Rollback Commandを確認"],
    terms: [["Baseline", "変更前の比較基準"], ["Static analysis", "実行せずCode上の問題を調べる検査"], ["Timeout / Retry", "待つ上限 / 条件付き再試行"]],
    results: ["1 Commit 1目的で履歴が並ぶ", "変更前後のTest結果を比較できる", "失敗経路とRollbackを実行できる"],
    mistake: ["多数のTestが同時に失敗する", "変更単位が大きすぎる", "直前の小Commitまで戻して最初の失敗1件から調べる"],
    example: "Step 1: 再現Test。Step 2: 重複Key修正。各Stepで対象Test→Diff→Commit。",
  },
  19: {
    why: "Reviewの目的はAIや人の意見へ従うことではなく、仕様と証拠に基づいてMerge可否を判断することです。",
    before: ["Day 18の実装と全Testが完了", "PR説明欄を埋めた", "Files changedを自分で全行確認"],
    terms: [["Review", "変更を第三者視点で検査すること"], ["Status check", "CIなど自動検査の結果"], ["Merge conflict", "同じ箇所の変更を自動統合できない状態"]],
    results: ["指摘を採用・不採用・保留に分類", "全判断に根拠と再Test結果がある", "未解決RiskがPRに明記される"],
    mistake: ["AIの全指摘をそのまま修正した", "仕様と再現を確認していない", "各指摘を仮説へ戻し、対象行・仕様・Testで1件ずつ検証する"],
    example: "指摘#2は不採用。理由: nullableはMigration仕様。根拠と該当TestをPRへ返信。",
  },
  20: {
    why: "最終課題では、Codeを書く速さではなく、未知の問題を安全に調査し、判断と検証を説明できるかを確認します。",
    before: ["Day 01–19の提出物が揃う", "試験用Branch以外はClean", "禁止事項と採点表を読む"],
    terms: [["Root cause", "症状を生む根本原因"], ["Capstone", "学んだ内容を統合する最終課題"], ["Audit trail", "誰が何を判断・実行したかの記録"]],
    results: ["再現→原因→計画→実装→Test→PRがつながる", "AI利用と人間の判断が区別される", "第三者がRollbackまで再現できる"],
    mistake: ["時間が足りず検証前に提出しそう", "実装範囲を広げすぎた", "非Goalを増やし、再現する最小修正とRegression Testへ絞る"],
    example: "AIは原因候補列挙に使用。採用案は実Fileと失敗Testで確認。残Riskと戻し方も記載。",
  },
};

export function getLessonSupport(day: number): LessonSupport {
  const seed = supportByDay[day];
  if (!seed) throw new Error(`Missing beginner support for Day ${day}`);

  return {
    prerequisites: seed.before,
    terms: seed.terms.map(([term, meaning]) => ({ term, meaning })),
    whyItMatters: seed.why,
    expectedResults: seed.results,
    commonMistakes: [
      { symptom: seed.mistake[0], cause: seed.mistake[1], recovery: seed.mistake[2] },
      {
        symptom: "途中で現在地やBranchが分からなくなった",
        cause: "複数のTerminalやTaskを同時に進めた",
        recovery: "作業を止め、pwdとgit status -sbを実行。対象DayのTaskを読み直してから1手だけ進める",
      },
    ],
    submissionGuide: [
      {
        section: "事実と根拠",
        include: "何を確認し、どのファイル・Command・画面を根拠にしたか",
        example: seed.example,
      },
      {
        section: "検証と振り返り",
        include: "実行したTest、結果、AI案の採否、残っている不明点",
        example: "確認: 指定TestはPASS。AI案のうち1件は根拠不足で不採用。未確認事項は次の質問へ残した。",
      },
    ],
  };
}
