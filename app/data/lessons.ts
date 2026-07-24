export type Quiz = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  number: string;
  slug: string;
  category: "BUILD" | "GIT" | "SHIP";
  title: string;
  shortTitle: string;
  description: string;
  duration: string;
  outcome: string;
  branch: string;
  color: string;
  objectives: string[];
  steps: {
    title: string;
    detail: string;
    code?: string;
  }[];
  checks: string[];
  quiz: Quiz;
};

export const lessons: Lesson[] = [
  {
    id: "lesson-01",
    number: "01",
    slug: "setup",
    category: "BUILD",
    title: "作業場所をひらこう",
    shortTitle: "VS Code / Codespaces",
    description: "画面の見方、ファイル、ターミナル。最初の「分からない」をなくします。",
    duration: "20分",
    outcome: "教材フォルダを開き、index.htmlを見つけられる",
    branch: "lesson/01-setup",
    color: "lime",
    objectives: ["エディタの主要な場所が分かる", "ファイルを開いて保存できる", "ターミナルを表示できる"],
    steps: [
      { title: "Codespacesを開く", detail: "GitHubのCodeボタンからCodespacesを選び、Create codespaceを押します。" },
      { title: "Explorerを見る", detail: "左側のExplorerで exercises/01-profile-card を探します。" },
      { title: "ファイルを保存する", detail: "index.htmlを開き、コメントに自分の名前を書いて保存します。" },
      { title: "ターミナルを開く", detail: "メニューのTerminal → New Terminalを選びます。", code: "pwd" },
    ],
    checks: ["index.htmlを開ける", "変更後に保存マークが消える", "ターミナルで現在地を確認できる"],
    quiz: {
      question: "コードや文章が書かれたファイルを探す場所はどこですか？",
      options: ["Explorer", "Extensions", "Accounts"],
      correctIndex: 0,
      explanation: "Explorerには、いま開いているフォルダ内のファイルとフォルダが表示されます。",
    },
  },
  {
    id: "lesson-02",
    number: "02",
    slug: "html",
    category: "BUILD",
    title: "HTMLで自己紹介を書こう",
    shortTitle: "HTMLの基本",
    description: "見出し、文章、画像、リンクを使って、プロフィールの骨組みを作ります。",
    duration: "25分",
    outcome: "意味のあるHTMLでプロフィールカードを作れる",
    branch: "lesson/02-html",
    color: "sky",
    objectives: ["HTMLタグの役割が分かる", "見出しと文章を書ける", "画像に代替テキストを付けられる"],
    steps: [
      { title: "見出しを書く", detail: "ページで一番大切な見出しをh1で囲みます。", code: "<h1>はじめまして、○○です</h1>" },
      { title: "自己紹介を書く", detail: "pタグで、好きなことや学びたいことを2文書きます。" },
      { title: "画像を置く", detail: "imgタグを追加し、画像を説明するalt属性を書きます。", code: '<img src="profile.png" alt="○○のプロフィール写真">' },
      { title: "リンクを作る", detail: "aタグで、自分がよく見るサイトへのリンクを作ります。" },
    ],
    checks: ["h1が1つある", "pが2つ以上ある", "imgにalt属性がある", "aにhref属性がある"],
    quiz: {
      question: "別のページへのリンクを作るHTMLタグはどれですか？",
      options: ["<p>", "<a>", "<img>"],
      correctIndex: 1,
      explanation: "aはanchorの略で、href属性に移動先を書きます。",
    },
  },
  {
    id: "lesson-03",
    number: "03",
    slug: "css",
    category: "BUILD",
    title: "CSSで見た目を整えよう",
    shortTitle: "CSSの基本",
    description: "色、余白、文字、角丸を使って、自分らしいカードに仕上げます。",
    duration: "30分",
    outcome: "CSSを使って読みやすいレイアウトを作れる",
    branch: "lesson/03-css",
    color: "pink",
    objectives: ["セレクタとプロパティが分かる", "余白を使い分けられる", "色と文字サイズを変更できる"],
    steps: [
      { title: "CSSを読み込む", detail: "head内にlinkタグを追加してstyles.cssを読み込みます。", code: '<link rel="stylesheet" href="styles.css">' },
      { title: "カードを中央に置く", detail: "bodyにdisplay: gridを指定し、place-itemsで中央にします。" },
      { title: "余白を作る", detail: "カードの内側にpadding、外側にmarginを使います。" },
      { title: "自分の色を選ぶ", detail: "背景色、文字色、アクセント色を3色以内で決めます。" },
    ],
    checks: ["styles.cssが読み込まれている", "文字と背景のコントラストがある", "カードにpaddingがある", "スマホ幅でもはみ出さない"],
    quiz: {
      question: "要素の「内側」に余白を作るプロパティはどれですか？",
      options: ["padding", "margin", "border"],
      correctIndex: 0,
      explanation: "paddingは要素の内側、marginは要素の外側の余白です。",
    },
  },
  {
    id: "lesson-04",
    number: "04",
    slug: "javascript",
    category: "BUILD",
    title: "ボタンに動きをつけよう",
    shortTitle: "JavaScript入門",
    description: "クリックをきっかけに表示を変えて、Webページをインタラクティブにします。",
    duration: "30分",
    outcome: "クリックイベントでページの表示を変更できる",
    branch: "lesson/04-javascript",
    color: "yellow",
    objectives: ["JavaScriptの役割が分かる", "要素を取得できる", "クリックイベントを扱える"],
    steps: [
      { title: "ボタンを追加する", detail: "HTMLに自己紹介を切り替えるbuttonを追加します。", code: '<button id="toggle">もっと見る</button>' },
      { title: "JavaScriptを読み込む", detail: "bodyの最後でscript.jsを読み込みます。" },
      { title: "要素を取得する", detail: "querySelectorでボタンと文章を取得します。", code: 'const button = document.querySelector("#toggle");' },
      { title: "クリックを受け取る", detail: "addEventListenerで文章の表示・非表示を切り替えます。" },
    ],
    checks: ["buttonがある", "script.jsが読み込まれている", "クリックで表示が変わる", "ブラウザのConsoleにエラーがない"],
    quiz: {
      question: "クリックされたときの処理を登録するメソッドはどれですか？",
      options: ["querySelector", "addEventListener", "textContent"],
      correctIndex: 1,
      explanation: "addEventListenerでclickなどの出来事と、実行する処理を結びつけます。",
    },
  },
  {
    id: "lesson-05",
    number: "05",
    slug: "commit",
    category: "GIT",
    title: "変更をコミットしよう",
    shortTitle: "Git Commit",
    description: "変更を確認し、意味のある単位とメッセージで履歴に残します。",
    duration: "20分",
    outcome: "自分の変更だけを選び、コミットできる",
    branch: "lesson/05-commit",
    color: "lavender",
    objectives: ["Gitの役割が分かる", "差分を確認できる", "コミットメッセージを書ける"],
    steps: [
      { title: "状態を見る", detail: "変更されたファイルを確認します。", code: "git status" },
      { title: "差分を見る", detail: "保存前と現在の違いを確認します。", code: "git diff" },
      { title: "変更を選ぶ", detail: "プロフィール課題のファイルだけをステージします。", code: "git add exercises/01-profile-card" },
      { title: "履歴に残す", detail: "何をしたか分かる短いメッセージでコミットします。", code: 'git commit -m "プロフィールカードを作成"' },
    ],
    checks: ["git statusで対象ファイルを確認した", "git diffを読んだ", "意味の分かるコミットメッセージを使った"],
    quiz: {
      question: "コミットする前に変更内容を確認するコマンドはどれですか？",
      options: ["git diff", "git push", "git clone"],
      correctIndex: 0,
      explanation: "git diffは、まだコミットしていない変更の差分を表示します。",
    },
  },
  {
    id: "lesson-06",
    number: "06",
    slug: "branch",
    category: "GIT",
    title: "ブランチで安全に作業しよう",
    shortTitle: "Git Branch",
    description: "mainを守りながら、新しい機能を試せる自分の作業線を作ります。",
    duration: "20分",
    outcome: "課題用ブランチを作成してPushできる",
    branch: "lesson/06-branch",
    color: "orange",
    objectives: ["ブランチの意味が分かる", "ブランチを作って移動できる", "リモートへPushできる"],
    steps: [
      { title: "現在のブランチを見る", detail: "いま作業しているブランチ名を確認します。", code: "git branch --show-current" },
      { title: "ブランチを作る", detail: "課題内容が分かる名前で作成し、そのブランチへ移動します。", code: "git switch -c lesson/06-branch" },
      { title: "小さく変更する", detail: "READMEの学習ログに、今日理解したことを1つ書きます。" },
      { title: "GitHubへ送る", detail: "最初のPushでは追跡先も設定します。", code: "git push -u origin lesson/06-branch" },
    ],
    checks: ["main以外のブランチにいる", "ブランチ名が作業内容を表している", "GitHubに同じブランチがある"],
    quiz: {
      question: "新しいブランチを作って、同時に移動するコマンドはどれですか？",
      options: ["git switch -c", "git status -c", "git push -c"],
      correctIndex: 0,
      explanation: "git switch -c 名前 で、新規ブランチの作成と移動を同時に行えます。",
    },
  },
  {
    id: "lesson-07",
    number: "07",
    slug: "pull-request",
    category: "GIT",
    title: "Pull Requestを作ろう",
    shortTitle: "Pull Request",
    description: "作ったもの、確認方法、学びを説明して、変更をレビュー可能にします。",
    duration: "25分",
    outcome: "説明と確認結果を含むPull Requestを作れる",
    branch: "lesson/07-pull-request",
    color: "blue",
    objectives: ["Pull Requestの目的が分かる", "変更を説明できる", "自動チェックの結果を読める"],
    steps: [
      { title: "GitHubでCompareする", detail: "PushしたブランチからCompare & pull requestを選びます。" },
      { title: "タイトルを書く", detail: "何ができるようになったかを一文で表します。" },
      { title: "テンプレートを埋める", detail: "作ったもの、AIを使った部分、テスト結果を記入します。" },
      { title: "チェックを確認する", detail: "Actionsが緑になるまで、エラーを読んで修正します。" },
    ],
    checks: ["タイトルから変更内容が分かる", "動作確認方法が書かれている", "自動チェックが成功している", "学びが自分の言葉で書かれている"],
    quiz: {
      question: "Pull Requestに必ず書くべき内容はどれですか？",
      options: ["変更内容と確認方法", "パスワード", "関係のない作業メモ"],
      correctIndex: 0,
      explanation: "レビューする人が変更の目的と確認方法を理解できる説明が必要です。",
    },
  },
  {
    id: "lesson-08",
    number: "08",
    slug: "deploy",
    category: "SHIP",
    title: "Webページを公開しよう",
    shortTitle: "Deploy",
    description: "ビルドを確認し、自分のページを公開して、URLを人に届けます。",
    duration: "25分",
    outcome: "公開URLを取得して他の人に共有できる",
    branch: "lesson/08-deploy",
    color: "green",
    objectives: ["ビルドと公開の違いが分かる", "公開前チェックができる", "URLを共有できる"],
    steps: [
      { title: "最終確認する", detail: "リンク、画像、スマホ表示、文章を確認します。" },
      { title: "ビルドする", detail: "公開用ファイルを正しく作れるか確認します。", code: "npm run build" },
      { title: "mainへマージする", detail: "チェックが成功したPull Requestをmainへマージします。" },
      { title: "公開URLを見る", detail: "Actionsのデプロイ結果からURLを開き、別の端末でも確認します。" },
    ],
    checks: ["ビルドが成功する", "公開URLが開く", "スマホでも読める", "READMEに公開URLを記録した"],
    quiz: {
      question: "公開前に最も確認すべきものはどれですか？",
      options: ["ビルドとリンクが成功すること", "ファイル名の長さ", "コミット数の多さ"],
      correctIndex: 0,
      explanation: "公開用ビルドが成功し、リンクや画像が実際のURLでも動くことが重要です。",
    },
  },
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
