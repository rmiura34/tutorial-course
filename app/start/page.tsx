import type { Metadata } from "next";
import Link from "next/link";
import { CopyCommand } from "../components/CopyCommand";

export const metadata: Metadata = {
  title: "受講準備 — PCで開発を始める",
  description: "GitHubで自分用Repositoryを作り、PCへcloneし、VS CodeまたはCursorのTerminalからDay 01を開始する手順。",
};

const accountRows = [
  { name: "教材サイト", timing: "Login不要", need: "説明・資料・Quizを見る", note: "URLを知っている人は誰でも閲覧できます。" },
  { name: "GitHub", timing: "演習で必須", need: "自分用Repository・Branch・Pull Request", note: "無料Accountを作り、メール認証まで完了します。" },
  { name: "VS Code または Cursor", timing: "どちらか1つ", need: "Folder・File・Terminalを同じ画面で扱う", note: "両方をInstallする必要はありません。初めてならVS Codeでも進められます。" },
  { name: "Codex / ChatGPT", timing: "必要に応じて", need: "調査・計画・ReviewのCoach", note: "GitHubとは別Accountです。AIなしでも教材とCommandは利用できます。" },
];

const commands = [
  {
    command: "npm run learner:setup",
    plain: "このRepositoryに必要な依存関係と学習用Fileを準備します。初回と、教材更新後に実行します。",
    result: "最後に「Learner workspace is ready」と表示され、赤いErrorが残らない。",
  },
  {
    command: "npm run learner:start",
    plain: "教材サイトとLaravel LabをLocal PCで起動します。このTerminalは起動中そのままにします。",
    result: "http://localhost:3000 と http://localhost:8000 が表示される。終了はControl + C。",
  },
  {
    command: "npm run course -- show 1",
    plain: "Day 01のGoal、Task、Branch名、成果物を表示するだけです。BranchやFileは変更しないため、何度実行しても構いません。",
    result: "Day 01、Goal、Branch、Task、Kickoff promptがTerminalに表示される。",
  },
  {
    command: "npm run course -- start 1",
    plain: "内容を確認した後に1回実行します。Day 01用Branchを作り、learning-log/day-01/plan.mdを準備します。",
    result: "Branchがtraining/day-01-environmentになり、plan.mdが作られる。",
  },
];

const errors = [
  ["command not found: node / npm", "Node.jsが未Install、またはInstall前からEditorを開いている", "Node.js LTS InstallerでInstallし、VS CodeまたはCursorを完全に閉じて開き直します。その後node -vとnpm -vを確認します。"],
  ["command not found: git", "Gitが未Install、またはEditorを再起動していない", "Git公式DownloadからInstallし、Editorを開き直してgit --versionを実行します。"],
  ["Repository not found / 404", "clone URLが自分のRepositoryではない、または入力違い", "Browserで自分のtutorial-courseを開き、Code → Local → HTTPSのURLをコピーし直します。"],
  ["npm ERR! / dependency Error", "tutorial-course以外で実行した、通信失敗、Node.js版の不一致", "pwdを確認し、Explorer最上部がtutorial-courseか確認します。node -vとError全文を保存してから再実行します。"],
  ["EADDRINUSE / Address already in use", "同じPortで前のApplicationが動いている", "別Terminalで起動中の処理を探してControl + C。見つからなければEditorを再起動します。"],
  ["Branch already exists", "同じDayを開始済み", "git branch --show-currentを確認します。training/day-01-environmentなら作り直さず続けます。"],
  ["Working tree is not clean", "未Commitの変更が残っている", "git status -sbでFileを確認します。削除やresetをせず、Commitするか講師へ相談します。"],
];

export default function StartPage() {
  return (
    <main className="start-page">
      <header className="site-header lesson-header">
        <Link className="brand" href="/"><span className="brand-mark">TC</span><span>Tutorial Course</span></Link>
        <span className="start-header-label">ZERO DAY · LOCAL SETUP</span>
        <nav className="start-mini-nav"><Link href="/glossary">用語集</Link><Link href="/#roadmap">20日間を見る</Link></nav>
      </header>

      <section className="access-gate-note">
        <strong>教材を見るだけなら、LoginもInstallも不要です</strong>
        <p>
          実際にCodeを書いて演習するときは、GitHub Accountと自分のPCを使います。
          推奨Routeは<b>自分用Repositoryを作る → PCへclone → VS CodeまたはCursorで開く → Terminalで開始</b>です。
        </p>
      </section>

      <section className="start-hero">
        <div>
          <p className="eyebrow">ZERO DAY · 45–90 MINUTES · LOCAL DEVELOPMENT</p>
          <h1>自分のPCを、<br /><span>学習できる状態にする。</span></h1>
          <p>
            今日のGoalはCodeを書くことではありません。必要な公式ToolをInstallし、
            GitHubの教材を自分のPCへコピーして、EditorのTerminalでDay 01を開始できる状態にします。
            知らない言葉は<Link className="inline-help-link" href="/glossary">初心者用語集</Link>で確認できます。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="https://github.com/rmiura34/tutorial-course" target="_blank" rel="noreferrer">教材Repositoryを開く ↗</a>
            <a className="text-link" href="#tools">必要なToolを確認</a>
          </div>
        </div>
        <div className="start-route-card" aria-label="Local PCで受講開始する順番">
          <span>RECOMMENDED LOCAL ROUTE</span>
          <ol>
            <li><i>1</i><strong>自分用Repo</strong><small>GitHub Template</small></li>
            <li><i>2</i><strong>Toolを準備</strong><small>Editor + Node.js + Git</small></li>
            <li><i>3</i><strong>PCへclone</strong><small>HTTPS URL</small></li>
            <li><i>4</i><strong>Folderを開く</strong><small>VS Code / Cursor</small></li>
            <li><i>5</i><strong>Day 01開始</strong><small>Terminal + Branch</small></li>
          </ol>
        </div>
      </section>

      <section className="start-section" id="before-you-start">
        <div className="section-heading">
          <p className="eyebrow">BEFORE YOU START</p>
          <h2>必要なAccountとApplication。</h2>
          <p>VS CodeとCursorは同じ役割のEditorです。受講開始時は、どちらか1つだけ選べば十分です。</p>
        </div>
        <div className="account-grid">
          {accountRows.map((account) => (
            <article key={account.name}><span>{account.timing}</span><h3>{account.name}</h3><strong>{account.need}</strong><p>{account.note}</p></article>
          ))}
        </div>
        <div className="decision-grid">
          <article><strong>GitHub Accountがない</strong><p><a href="https://github.com/signup" target="_blank" rel="noreferrer">GitHub Sign up ↗</a>で作成し、メール認証を完了します。</p></article>
          <article><strong>VS Codeを選ぶ</strong><p>無料の標準的なEditorです。<a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">VS Code公式Download ↗</a></p></article>
          <article><strong>Cursorを選ぶ</strong><p>AI機能を統合したEditorです。<a href="https://cursor.com/download" target="_blank" rel="noreferrer">Cursor公式Download ↗</a></p></article>
        </div>
      </section>

      <section className="start-section start-setup" id="tools">
        <div className="section-heading">
          <p className="eyebrow">INSTALL FROM OFFICIAL SITES ONLY</p>
          <h2>Editor・Node.js LTS・Gitを準備する。</h2>
          <p>Downloadは必ず公式Siteから行います。会社や学校のPCでInstall権限がない場合は、管理者へ相談してください。</p>
        </div>

        <div className="decision-grid">
          <article>
            <strong>1. Editorはどちらか1つ</strong>
            <p><a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">VS Code ↗</a>または<a href="https://cursor.com/download" target="_blank" rel="noreferrer">Cursor ↗</a>をInstallします。両方は不要です。</p>
          </article>
          <article>
            <strong>2. Node.jsはLTS</strong>
            <p><a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">Node.js公式Download ↗</a>で「LTS」と表示された版を選びます。「Current」ではありません。</p>
          </article>
          <article>
            <strong>3. Git</strong>
            <p>まず<code>git --version</code>を確認します。見つからなければ<a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Git公式Download ↗</a>からInstallします。</p>
          </article>
        </div>

        <div className="access-gate-note">
          <strong>npmを単体で探してInstallしないでください</strong>
          <p>
            npmはNode.jsのPackageを扱うToolで、<b>Node.jsをInstallすると一緒にInstallされます</b>。
            検索結果に出る非公式SiteやDownload配布Siteからnpm単体を入れません。
            詳細は<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/" target="_blank" rel="noreferrer">Node.jsとnpmの公式Installガイド ↗</a>で確認できます。
          </p>
        </div>

        <div className="click-guide">
          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>macOS · 推奨A</span></div>
              <div className="mock-editor"><main><div>Node.js公式Download</div><pre>LTS を選択{"\n"}.pkg Installerを開く{"\n"}画面の案内どおり進む</pre></main></div>
            </div>
            <div><span>MAC · OPTION A · RECOMMENDED</span><h3>Node.js LTS Installerを使う</h3><ol><li>Node.js公式Downloadを開く</li><li><b>LTS</b>を選ぶ</li><li>macOS Installerを実行</li><li>Editorを完全に閉じて開き直す</li></ol><p>Homebrewを知らない初心者はこちらを選びます。</p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>macOS · 代替B</span></div>
              <div className="mock-editor"><main><div>Terminal</div><pre>brew --version{"\n"}brew install node{"\n"}node -v && npm -v</pre></main></div>
            </div>
            <div><span>MAC · OPTION B · EXISTING USERS ONLY</span><h3>Homebrewがすでにある人</h3><ol><li><code>brew --version</code>が成功することを確認</li><li><code>brew install node</code>を実行</li><li>Editorを開き直す</li><li>nodeとnpmのVersionを確認</li></ol><p>この教材のためにHomebrewを新規導入する必要はありません。公式情報は<a href="https://brew.sh/" target="_blank" rel="noreferrer">brew.sh ↗</a>です。</p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>Windows · 推奨A</span></div>
              <div className="mock-editor"><main><div>Node.js公式Download</div><pre>LTS を選択{"\n"}Windows Installer (.msi){"\n"}画面の案内どおり進む</pre></main></div>
            </div>
            <div><span>WINDOWS · OPTION A · RECOMMENDED</span><h3>Windows Installerを使う</h3><ol><li>Node.js公式Downloadを開く</li><li><b>LTS</b>を選ぶ</li><li>Windows Installerを実行</li><li>Editorを完全に閉じて開き直す</li></ol><p>特別な理由がなければ、この方法を選びます。</p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>Windows · 代替B</span></div>
              <div className="mock-editor"><main><div>PowerShell</div><pre>winget install OpenJS.NodeJS.LTS{"\n"}node -v{"\n"}npm -v</pre></main></div>
            </div>
            <div><span>WINDOWS · OPTION B</span><h3>wingetを使える人</h3><ol><li>PowerShellを開く</li><li><code>winget install OpenJS.NodeJS.LTS</code></li><li>Editorを開き直す</li><li><code>node -v</code>と<code>npm -v</code></li></ol><p>winget自体が不明な場合はInstallerを使います。<a href="https://learn.microsoft.com/windows/package-manager/winget/install" target="_blank" rel="noreferrer">Microsoft公式説明 ↗</a></p></div>
          </article>
        </div>

        <div className="diagnostic-command">
          <div><strong>Install後の確認</strong><p>VS CodeまたはCursorを開き直してから、新しいTerminalで実行します。Version番号が3行表示されれば成功です。</p></div>
          <pre><code>node -v{"\n"}npm -v{"\n"}git --version</code></pre>
          <CopyCommand command={"node -v\nnpm -v\ngit --version"} label="確認Commandをコピー" />
        </div>
        <div className="access-gate-note">
          <strong>Laravel Labまで起動する場合は、PHPとComposerも必要です</strong>
          <p>
            Day 01のTaskを読む<code>show 1</code>と開始する<code>start 1</code>は、Node.js・npm・Gitだけで進められます。
            一方、<code>npm run learner:setup</code>とPort 8000のLaravel LabにはPHP 8.4以上とComposer 2が必要です。
            初心者のMac／Windowsでは、PHPとComposerをまとめて導入できる<a href="https://herd.laravel.com/" target="_blank" rel="noreferrer">Laravel Herd公式 ↗</a>が選択肢です。
            Install後は<code>php -v</code>と<code>composer --version</code>を確認します。
          </p>
        </div>
      </section>

      <section className="start-section start-setup" id="setup">
        <div className="section-heading">
          <p className="eyebrow">GITHUB → LOCAL PC → EDITOR</p>
          <h2>自分用Repoを作り、PCへcloneする。</h2>
          <p>cloneとはGitHub上のRepositoryを、変更履歴ごと自分のPCへコピーする操作です。</p>
        </div>

        <div className="click-guide">
          <article>
            <div className="mock-window">
              <div className="mock-top"><i /><i /><i /><span>github.com / rmiura34 / tutorial-course</span></div>
              <div className="mock-body mock-repo"><span>rmiura34 / <b>tutorial-course</b></span><button>① Use this template ▾</button><div className="mock-menu"><b>② Create a new repository</b><small>Owner: 自分のGitHub名</small></div></div>
            </div>
            <div><span>STEP 1</span><h3>GitHubで自分用Repositoryを作る</h3><ol><li><b>Use this template</b></li><li><b>Create a new repository</b></li><li>Ownerが自分、名前がtutorial-courseか確認</li><li><b>Create repository</b></li></ol><p>完成後のURLがgithub.com/<b>自分のGitHub名</b>/tutorial-courseなら成功です。</p></div>
          </article>

          <article>
            <div className="mock-window">
              <div className="mock-top"><i /><i /><i /><span>your-name / tutorial-course</span></div>
              <div className="mock-body mock-codespace"><button>① &lt;&gt; Code ▾</button><div className="mock-tabs"><b>② Local</b><span>Codespaces</span></div><strong>③ HTTPS URLをコピー</strong><small>https://github.com/YOUR_NAME/tutorial-course.git</small></div>
            </div>
            <div><span>STEP 2</span><h3>HTTPSのclone URLをコピー</h3><ol><li>自分のRepositoryで<b>&lt;&gt; Code</b></li><li><b>Local</b> Tab</li><li><b>HTTPS</b>を選択</li><li>URL右側のCopy icon</li></ol><p><a href="https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository" target="_blank" rel="noreferrer">GitHub公式のclone手順 ↗</a></p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>macOS Terminal / Windows PowerShell</span></div>
              <div className="mock-editor"><main><div>保存したいFolderで実行</div><pre>git clone https://github.com/{'<YOUR_GITHUB_NAME>'}/tutorial-course.git{"\n"}cd tutorial-course</pre></main></div>
            </div>
            <div><span>STEP 3</span><h3>PCへcloneする</h3><ol><li>macOSはTerminal、WindowsはPowerShellを開く</li><li>Repositoryを置きたいFolderへ移動</li><li><code>git clone</code>の後ろへコピーしたURLを貼る</li><li><code>cd tutorial-course</code></li></ol><p><code>YOUR_GITHUB_NAME</code>は文字どおり入力せず、自分のURLを使います。</p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>tutorial-course — VS Code / Cursor</span></div>
              <div className="mock-editor"><aside><b>EXPLORER</b><span>▾ tutorial-course</span><span>　app</span><span>　course</span><span>　package.json</span></aside><main><div>Terminal → New Terminal</div><pre>pwd{"\n"}node -v{"\n"}npm -v{"\n"}git status -sb</pre></main></div>
            </div>
            <div><span>STEP 4</span><h3>FolderとTerminalを開く</h3><ol><li>VS CodeまたはCursorの<b>File → Open Folder</b></li><li>cloneした<b>tutorial-course</b>を選ぶ</li><li>左Explorer最上部がtutorial-courseか確認</li><li><b>Terminal → New Terminal</b></li></ol><p>Terminalの現在地もtutorial-courseであることを<code>pwd</code>で確認します。</p></div>
          </article>
        </div>
      </section>

      <section className="start-section command-school">
        <div className="section-heading">
          <p className="eyebrow">COPY · RUN · CHECK</p>
          <h2>4つのCommandを、意味まで理解する。</h2>
          <p>上から1つずつ実行します。特にshowとstartは役割が違います。先にshowで読み、理解してからstartします。</p>
        </div>
        <div className="command-anatomy" aria-label="npm run course -- show 1の読み方">
          <div><code>npm</code><strong>実行する道具</strong><p>Node.jsと一緒にInstallされるCommandです。</p></div>
          <div><code>run</code><strong>登録済み処理を呼ぶ</strong><p>package.jsonのscripts欄から名前を探します。</p></div>
          <div><code>course</code><strong>この教材のTask runner</strong><p>Dayの表示・開始・確認を行う教材専用処理です。</p></div>
          <div><code>--</code><strong>ここから先を渡す</strong><p>npmではなくcourse側へ後ろの文字を渡す区切りです。</p></div>
          <div><code>show 1</code><strong>Day 01を読む</strong><p>showが操作、1がDay番号です。FileやBranchは変えません。</p></div>
        </div>
        <ol className="command-lessons">
          {commands.map((item, index) => (
            <li key={item.command}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="command-code"><code>{item.command}</code><CopyCommand command={item.command} /></div>
              <p><b>何をする？</b>{item.plain}</p>
              <p className="expected-output"><b>成功の見た目</b>{item.result}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="start-section dual-app-section">
        <div className="section-heading"><p className="eyebrow">SUCCESS LOOKS LIKE THIS</p><h2>Browserで2つのLocal URLを開く。</h2><p>CodespacesのPORTS Tabではありません。PCのBrowserのAddress barへ、Terminalに表示されたlocalhost URLを入力します。</p></div>
        <div className="dual-app-grid">
          <article><span>http://localhost:3000</span><h3>Tutorial Course</h3><p>上にTC、Heroに「Repositoryを開くところから」、下に20日間のRoadmapが見えます。</p><code>教材・Quiz・手順</code></article>
          <article><span>http://localhost:8000</span><h3>Company Import Lab</h3><p>Company一覧とImport操作が見えます。後半のLaravel不具合修正で使う練習用Applicationです。</p><code>Laravel・SQLite・Test</code></article>
        </div>
      </section>

      <section className="start-section">
        <div className="section-heading"><p className="eyebrow">OPTIONAL ALTERNATIVE</p><h2>PCへInstallできない場合だけCodespaces。</h2><p>会社・学校の制限などでLocal環境を作れない場合は、自分のRepositoryで Code → Codespaces → Create codespace on main を使えます。これは代替手段で、推奨Routeではありません。</p></div>
      </section>

      <section className="start-section troubleshooting">
        <div className="section-heading"><p className="eyebrow">READY CHECK</p><h2>Day 01へ進む前の6項目。</h2></div>
        <div className="decision-grid">
          <article><strong>□ 自分用Repo</strong><p>URLのOwnerが自分のGitHub名になっている。</p></article>
          <article><strong>□ Editor</strong><p>VS CodeまたはCursorのどちらか1つを開ける。</p></article>
          <article><strong>□ Tool</strong><p>node -v、npm -v、git --versionがすべて成功する。</p></article>
          <article><strong>□ Local Folder</strong><p>Explorer最上部とpwdがtutorial-courseを示す。</p></article>
          <article><strong>□ 2つの画面</strong><p>localhost:3000とlocalhost:8000をBrowserで開ける。</p></article>
          <article><strong>□ Day 01</strong><p>show 1でTaskを読み、start 1で課題Branchを作った。</p></article>
        </div>
      </section>

      <section className="start-section troubleshooting">
        <div className="section-heading"><p className="eyebrow">WHEN SOMETHING FAILS</p><h2>Error文から、次の1手を選ぶ。</h2><p>Error全文、実行したCommand、OS、node -v、現在のBranchは共有して構いません。ただしSecretは共有しません。</p></div>
        <div className="error-table" role="table" aria-label="Local環境の起動エラー復旧表">
          <div className="error-head" role="row"><b>Error・症状</b><b>主な原因</b><b>安全な直し方</b></div>
          {errors.map(([symptom, cause, recovery]) => <div role="row" key={symptom}><strong>{symptom}</strong><p>{cause}</p><p>{recovery}</p></div>)}
        </div>
        <div className="diagnostic-command">
          <div><strong>相談前にコピーする結果</strong><p>どのStepで止まったかと一緒に送ります。</p></div>
          <pre><code>pwd{"\n"}node -v{"\n"}npm -v{"\n"}git --version{"\n"}git status -sb</code></pre>
          <CopyCommand command={"pwd\nnode -v\nnpm -v\ngit --version\ngit status -sb"} label="診断Commandをコピー" />
        </div>
        <p className="start-secret-warning">送らないもの: `.env`の中身、Token、Cookie、Password、認証Code、画面に映ったSecret。</p>
      </section>

      <nav className="start-next">
        <div><span>LOCAL SETUP COMPLETE?</span><h2>Day 01で、Repositoryの地図を作る。</h2><p>Day 01ではCLI、Terminal、VS Code、Repositoryの意味から確認し、入力するCommandを1つずつ実行します。</p></div>
        <Link className="primary-button" href="/lessons/terminal-environment">Day 01を開く →</Link>
      </nav>
    </main>
  );
}
