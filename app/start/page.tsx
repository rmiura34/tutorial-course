import type { Metadata } from "next";
import Link from "next/link";
import { CopyCommand } from "../components/CopyCommand";
import { StartChecklist } from "../components/StartChecklist";

export const metadata: Metadata = {
  title: "START HERE — 受講開始ガイド",
  description: "招待画面からGitHub、Codespaces、2つのApplication起動、Day 01開始までを画面ラベル付きで案内。",
};

const accountRows = [
  { name: "教材サイト", timing: "最初から", need: "動画・資料・Quizを見る", note: "招待メールと同じChatGPT AccountでContinue with ChatGPTを選ぶ" },
  { name: "GitHub", timing: "Day 01から必須", need: "Repository・Codespaces・Branch・PR", note: "ChatGPTとは別Account。github.comで無料Accountを作成できる" },
  { name: "Codex / ChatGPT", timing: "Day 01からCoachとして利用", need: "調査・計画・実装・Review支援", note: "正式なツール比較はDay 05。GitHub Repositoryは別途開く" },
  { name: "Cursor / Claude Code", timing: "Day 04・05・14以降", need: "Agent比較・Skills・Hooks", note: "講師が指定したAccount・Plan・Data利用範囲を確認する" },
];

const commands = [
  {
    command: "npm run learner:setup",
    plain: "npmで、このRepositoryに登録されたlearner:setupという準備処理を実行します。",
    result: "最後に「Learner setup completed」と表示され、途中に赤いErrorがない。",
  },
  {
    command: "npm run learner:start",
    plain: "教材サイトとLaravel Labを同時に起動します。このTerminalは起動中そのままにします。",
    result: "Terminalにlocalhost:3000とlocalhost:8000が表示される。終了はControl + C。",
  },
  {
    command: "npm run course -- show 1",
    plain: "--より後ろのshow 1をCourse runnerへ渡し、Day 01の目的とTaskを表示します。Fileは変更しません。",
    result: "Day 01、Goal、Branch、Kickoff promptが表示される。",
  },
  {
    command: "npm run course -- start 1",
    plain: "Day 01用Branchとlearning-logを作ります。未保存の変更があると安全のため停止します。",
    result: "Branchがtraining/day-01-environmentになり、plan.mdが作られる。",
  },
];

const errors = [
  ["You’re almost in / 権限がありません", "教材サイトの招待Accountと違う", "いったん戻り、招待メールと同じChatGPT AccountでContinue with ChatGPT。招待がなければ講師へメールアドレスだけ伝える。"],
  ["Repository not found / 404", "GitHubへ未Login、またはRepository招待未承認", "github.comの右上Avatarを確認し、招待メールのView invitationを開く。"],
  ["Use this templateが見つからない", "講師RepositoryがTemplate設定ではない、または画面幅で隠れている", "緑のUse this templateがなければForkを勝手に選ばず、講師指定URLを確認する。"],
  ["Codespace creation failed", "権限・利用枠・一時的なBuild失敗", "GitHubのError詳細を保存し、一度だけRetry。繰り返す場合はError全文を講師へ送る。"],
  ["command not found: npm", "CodespaceのSetup中、または通常Terminal以外で実行", "Codespaceの作成完了を待ち、VS Code内のTerminalでnode -vとnpm -vを確認する。"],
  ["EADDRINUSE / Address already in use", "同じPortで前のApplicationが動いている", "別Terminalを探してControl + C。見つからなければCodespaceをStopして再開する。"],
  ["Branch already exists", "同じDayを一度開始済み", "git branch --show-currentを確認。正しい課題Branchなら作り直さず、そのまま続ける。"],
  ["Working tree is not clean", "未Commitの変更が残っている", "git status -sbでFileを確認。消さずに、Commitするか講師へ相談する。"],
];

export default function StartPage() {
  return (
    <main className="start-page">
      <header className="site-header lesson-header">
        <Link className="brand" href="/"><span className="brand-mark">TC</span><span>Tutorial Course</span></Link>
        <span className="start-header-label">ZERO DAY · START HERE</span>
        <nav className="start-mini-nav"><Link href="/glossary">用語集</Link><Link href="/#roadmap">20日間を見る</Link></nav>
      </header>

      <section className="access-gate-note">
        <strong>いま英語の「You’re almost in」が表示されている人へ</strong>
        <p>
          それは教材の前にある招待確認画面です。<b>Continue with ChatGPT</b>を選び、
          招待されたChatGPT Accountで入ります。その後、このページで<b>別にGitHubへLogin</b>します。
          ChatGPT AccountだけではRepositoryを編集できません。
        </p>
      </section>

      <section className="start-hero">
        <div>
          <p className="eyebrow">ZERO DAY · 30–60 MINUTES · NO EXPERIENCE NEEDED</p>
          <h1>迷わず始める。<br /><span>入口は、ここ一つ。</span></h1>
          <p>
            今日のGoalはCodeを書くことではありません。自分専用のRepositoryを作り、
            Browser上のVS Codeで教材と練習Appを開き、Day 01の安全なBranchへ入ることです。
            知らない言葉は<Link className="inline-help-link" href="/glossary">初心者用語集</Link>ですぐ確認できます。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="https://github.com/rmiura34/tutorial-course" target="_blank" rel="noreferrer">GitHubを開く ↗</a>
            <a className="text-link" href="#before-you-start">持ち物を確認</a>
          </div>
        </div>
        <div className="start-route-card" aria-label="受講開始の順番">
          <span>LEARNER ROUTE</span>
          <ol>
            <li><i>1</i><strong>教材へ入る</strong><small>ChatGPT招待</small></li>
            <li><i>2</i><strong>自分のRepo</strong><small>GitHub</small></li>
            <li><i>3</i><strong>作業画面</strong><small>Codespaces</small></li>
            <li><i>4</i><strong>2つを起動</strong><small>3000 / 8000</small></li>
            <li><i>5</i><strong>Day 01開始</strong><small>Task + Branch</small></li>
          </ol>
        </div>
      </section>

      <section className="start-section" id="before-you-start">
        <div className="section-heading">
          <p className="eyebrow">BEFORE YOU START</p>
          <h2>必要なのは2つのLoginと、1つの招待。</h2>
          <p>「どのAccountで、何をするか」を先に分けます。GitHub Accountがなければ無料作成後、このページへ戻ります。</p>
        </div>
        <div className="account-grid">
          {accountRows.map((account) => (
            <article key={account.name}><span>{account.timing}</span><h3>{account.name}</h3><strong>{account.need}</strong><p>{account.note}</p></article>
          ))}
        </div>
        <div className="decision-grid">
          <article><strong>教材の招待がない</strong><p>講師へ、ChatGPTで使うメールアドレスを伝えます。Passwordや認証Codeは送りません。</p></article>
          <article><strong>GitHub Accountがない</strong><p><a href="https://github.com/signup" target="_blank" rel="noreferrer">GitHub Sign up ↗</a>で作成し、メール認証まで完了します。</p></article>
          <article><strong>PCへのInstallが不安</strong><p>問題ありません。推奨RouteはBrowserで動くCodespacesです。VS Code・PHP・Nodeを個別Installしません。</p></article>
        </div>
      </section>

      <section className="start-section start-setup" id="setup">
        <div className="section-heading">
          <p className="eyebrow">CLICK GUIDE · GITHUB CODESPACES</p>
          <h2>見えている文字を、順番に押す。</h2>
          <p>GitHubの見た目が多少違っても、太字の英語Labelを探します。以下は説明用の画面図です。</p>
        </div>

        <div className="click-guide">
          <article>
            <div className="mock-window">
              <div className="mock-top"><i /><i /><i /><span>github.com / tutorial-course</span></div>
              <div className="mock-body mock-repo">
                <span>rmiura34 / <b>tutorial-course</b></span>
                <button>① Use this template ▾</button>
                <div className="mock-menu"><b>② Create a new repository</b><small>Start with the same files</small></div>
              </div>
            </div>
            <div><span>STEP 1</span><h3>自分専用Repositoryを作る</h3><ol><li><b>Use this template</b>を押す</li><li><b>Create a new repository</b>を選ぶ</li><li>Ownerが自分、Repository nameがtutorial-courseか確認</li><li><b>Create repository</b>を押す</li></ol><p>元のrmiura34/tutorial-courseへ直接Pushしません。完成後のURL先頭が自分のGitHub名なら成功です。</p></div>
          </article>

          <article>
            <div className="mock-window">
              <div className="mock-top"><i /><i /><i /><span>your-name / tutorial-course</span></div>
              <div className="mock-body mock-codespace">
                <button>① &lt;&gt; Code ▾</button>
                <div className="mock-tabs"><span>Local</span><b>② Codespaces</b></div>
                <strong>③ Create codespace on main</strong>
                <small>初回は数分かかります。画面を閉じずに待ちます。</small>
              </div>
            </div>
            <div><span>STEP 2</span><h3>Browser版VS Codeを開く</h3><ol><li>自分のRepositoryで緑の<b>&lt;&gt; Code</b></li><li><b>Codespaces</b> Tab</li><li><b>Create codespace on main</b></li><li>中央の準備表示が消えるまで待つ</li></ol><p>左にFile一覧、中央にEditor、下にTerminalが見えたら成功です。</p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>tutorial-course — Visual Studio Code</span></div>
              <div className="mock-editor"><aside><b>EXPLORER</b><span>▾ tutorial-course</span><span>　app</span><span>　course</span><span>　package.json</span></aside><main><div>Terminal　New Terminal</div><pre>$ npm run learner:setup{"\n"}Learner setup completed ✓</pre></main></div>
            </div>
            <div><span>STEP 3</span><h3>Terminalで準備する</h3><ol><li>上のMenuから<b>Terminal</b></li><li><b>New Terminal</b></li><li>下の入力行へCommandを貼る</li><li>Enterを1回押し、完了まで待つ</li></ol><p>$ は入力位置の印なので、自分で入力しません。Commandだけを貼ります。</p></div>
          </article>

          <article>
            <div className="mock-window mock-vscode">
              <div className="mock-top"><span>PORTS — Visual Studio Code</span></div>
              <div className="mock-ports"><b>PORTS</b><div><span>3000</span><span>Tutorial Course</span><button>① 🌐</button></div><div><span>8000</span><span>Company Import Lab</span><button>② 🌐</button></div></div>
            </div>
            <div><span>STEP 4</span><h3>2つのApplicationを開く</h3><ol><li>Terminalで<b>npm run learner:start</b></li><li>下Panelの<b>PORTS</b> Tab</li><li>3000の🌐を押す</li><li>8000の🌐も押す</li></ol><p>Codespacesではlocalhostではなく、自動発行されたURLが開く場合があります。どちらでも正常です。</p></div>
          </article>
        </div>
      </section>

      <section className="start-section command-school">
        <div className="section-heading">
          <p className="eyebrow">COPY · RUN · CHECK</p>
          <h2>4つのCommandを、意味まで理解する。</h2>
          <p>上から1つずつ実行します。前の結果を確認するまで次へ進みません。</p>
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
        <div className="section-heading"><p className="eyebrow">SUCCESS LOOKS LIKE THIS</p><h2>2つの画面が開けば準備完了。</h2></div>
        <div className="dual-app-grid">
          <article><span>PORT 3000</span><h3>Tutorial Course</h3><p>上にTC、中央に「AIで書くだけで終わらない」、下に20日間のRoadmapが見えます。</p><code>教材・動画・Quiz・手順</code></article>
          <article><span>PORT 8000</span><h3>Company Import Lab</h3><p>Company一覧とImport操作が見えます。後半でPagination、重複、Testを調査する練習用Appです。</p><code>Laravel・SQLite・Scraping</code></article>
        </div>
      </section>

      <StartChecklist />

      <section className="start-section troubleshooting">
        <div className="section-heading"><p className="eyebrow">WHEN SOMETHING FAILS</p><h2>Error文から、次の1手を選ぶ。</h2><p>連打や削除をせず、同じ文を表から探します。Error全文・Command・現在のBranchは共有してよいですが、Secretは共有しません。</p></div>
        <div className="error-table" role="table" aria-label="起動時のエラー復旧表">
          <div className="error-head" role="row"><b>Error・症状</b><b>主な原因</b><b>安全な直し方</b></div>
          {errors.map(([symptom, cause, recovery]) => <div role="row" key={symptom}><strong>{symptom}</strong><p>{cause}</p><p>{recovery}</p></div>)}
        </div>
        <div className="diagnostic-command">
          <div><strong>講師へ送る前の確認</strong><p>結果をそのまま貼り、どのStepで止まったかを書きます。</p></div>
          <pre><code>pwd{"\n"}node -v{"\n"}npm -v{"\n"}git status -sb</code></pre>
          <CopyCommand command={"pwd\nnode -v\nnpm -v\ngit status -sb"} label="診断Commandをコピー" />
        </div>
        <p className="start-secret-warning">送らないもの: `.env`の中身、Token、Cookie、Password、認証Code、画面に映ったSecret。</p>
      </section>

      <nav className="start-next">
        <div><span>SETUP COMPLETE?</span><h2>Day 01で、Repositoryの地図を作る。</h2><p>Day 01からCodexをCoachとして使えます。AI Tool自体の正式な比較はDay 05で学びます。</p></div>
        <Link className="primary-button" href="/lessons/terminal-environment">Day 01を開く →</Link>
      </nav>
    </main>
  );
}
