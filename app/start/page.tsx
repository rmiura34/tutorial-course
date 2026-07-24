import type { Metadata } from "next";
import Link from "next/link";
import { StartChecklist } from "../components/StartChecklist";

export const metadata: Metadata = {
  title: "START HERE — 受講開始ガイド",
  description: "GitHub、Codespaces、Codex、Laravel Labを準備し、Day 01のTaskを開始するまでの手順。",
};

const accountRows = [
  {
    name: "教材サイト",
    timing: "最初から",
    need: "動画・資料・Quizを見る",
    note: "招待制開催では案内されたメールアドレスでログイン",
  },
  {
    name: "GitHub",
    timing: "Day 01から必須",
    need: "Repository・Codespaces・Branch・PR",
    note: "ChatGPTとは別アカウント。講師の招待を先に確認",
  },
  {
    name: "Codex / ChatGPT",
    timing: "Day 05以降",
    need: "調査・計画・実装・Review支援",
    note: "GitHubの権限は付与されない。Repositoryを別途開く",
  },
  {
    name: "Cursor / Claude Code",
    timing: "指定Day",
    need: "Agent比較・Skills・Hooks",
    note: "講師が指定したAccountと利用範囲を確認",
  },
];

const setupSteps = [
  {
    number: "01",
    title: "自分のRepositoryを作る",
    body: "講師が指定したTemplateまたはForkを使います。元教材へ直接Pushせず、自分のGitHub Account配下に作成します。",
    command: null,
  },
  {
    number: "02",
    title: "Codespacesを起動する",
    body: "Repositoryの Code → Codespaces → Create codespace on main。初回Setupが終わり「Learner workspace is ready」と表示されるまで待ちます。",
    command: null,
  },
  {
    number: "03",
    title: "教材とLaravel Labを起動",
    body: "1つのCommandで教材サイトと実習アプリを起動します。CodespacesのPORTSタブから3000と8000を開きます。",
    command: "npm run learner:start",
  },
  {
    number: "04",
    title: "Day 01のTaskを読む",
    body: "Task runnerが目的、Branch、Workspace、Codexへの最初の指示を表示します。",
    command: "npm run course -- show 1",
  },
  {
    number: "05",
    title: "安全にBranchを作る",
    body: "未Commit変更がある場合は停止します。問題がなければBranchとlearning-logを自動作成します。",
    command: "npm run course -- start 1",
  },
];

export default function StartPage() {
  return (
    <main className="start-page">
      <header className="site-header lesson-header">
        <Link className="brand" href="/">
          <span className="brand-mark">TC</span>
          <span>Tutorial Course</span>
        </Link>
        <span className="start-header-label">START HERE</span>
        <Link className="back-link" href="/#roadmap">20日間を見る</Link>
      </header>

      <section className="start-hero">
        <div>
          <p className="eyebrow">BEFORE DAY 01 · 30–60 MINUTES</p>
          <h1>
            迷わず始める。
            <br />
            <span>入口は、ここ一つ。</span>
          </h1>
          <p>
            教材サイトを見るだけのAccount、Codeを書くGitHub、AIを使うCodexは別物です。
            先に役割を分け、2つのApplicationが起動してからDay 01へ進みます。
          </p>
          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://github.com/rmiura34/tutorial-course"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repositoryを開く ↗
            </a>
            <a className="text-link" href="#setup">Setup手順へ</a>
          </div>
        </div>
        <div className="start-route-card" aria-label="受講開始の順番">
          <span>LEARNER ROUTE</span>
          <ol>
            <li><i>1</i><strong>Access</strong><small>教材とGitHub</small></li>
            <li><i>2</i><strong>Workspace</strong><small>Codespaces</small></li>
            <li><i>3</i><strong>Boot</strong><small>Port 3000 / 8000</small></li>
            <li><i>4</i><strong>Task</strong><small>Day file + Branch</small></li>
            <li><i>5</i><strong>Coach</strong><small>Codex + AGENTS.md</small></li>
          </ol>
        </div>
      </section>

      <section className="start-section">
        <div className="section-heading">
          <p className="eyebrow">ACCOUNTS ARE SEPARATE</p>
          <h2>何に、いつログインするか。</h2>
          <p>ChatGPTへ入れてもGitHubの権限は付きません。逆も同じです。</p>
        </div>
        <div className="account-grid">
          {accountRows.map((account) => (
            <article key={account.name}>
              <span>{account.timing}</span>
              <h3>{account.name}</h3>
              <strong>{account.need}</strong>
              <p>{account.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="start-section start-setup" id="setup">
        <div className="section-heading">
          <p className="eyebrow">RECOMMENDED · GITHUB CODESPACES</p>
          <h2>この順番でSetupする。</h2>
          <p>初心者はローカルPCへの個別Installを避け、Repositoryに同梱した環境を使います。</p>
        </div>
        <ol className="setup-timeline">
          {setupSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.command && <pre><code>{step.command}</code></pre>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="start-section dual-app-section">
        <div className="section-heading">
          <p className="eyebrow">SUCCESS LOOKS LIKE THIS</p>
          <h2>2つの画面が開けば準備完了。</h2>
        </div>
        <div className="dual-app-grid">
          <article>
            <span>PORT 3000</span>
            <h3>Tutorial Course</h3>
            <p>動画、公式資料、Quiz、実装手順、Taskを確認する教材画面。</p>
            <code>http://localhost:3000</code>
          </article>
          <article>
            <span>PORT 8000</span>
            <h3>Company Import Lab</h3>
            <p>Laravel、SQLite、Scraping、Pagination、重複、Testを調査する実習画面。</p>
            <code>http://localhost:8000</code>
          </article>
        </div>
      </section>

      <StartChecklist />

      <section className="start-help">
        <div>
          <span className="lesson-section-kicker">WHEN SOMETHING FAILS</span>
          <h2>エラーを隠さず、情報を揃える。</h2>
          <p>Setupを再実行しても失敗する場合は、エラー全文、実行Command、現在のBranchを講師へ送ります。</p>
        </div>
        <pre><code>{`npm run learner:setup
npm run lab:test
git status -sb`}</code></pre>
        <p className="start-secret-warning">`.env`、Token、Cookie、Passwordは送信・Commitしません。</p>
      </section>

      <nav className="start-next">
        <div>
          <span>SETUP COMPLETE?</span>
          <h2>Day 01で、Repositoryの地図を作る。</h2>
        </div>
        <Link className="primary-button" href="/lessons/terminal-environment">
          Day 01を開く →
        </Link>
      </nav>
    </main>
  );
}
