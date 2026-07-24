import Link from "next/link";
import { ProgressTracker } from "./components/ProgressTracker";
import { lessons, weekSummaries } from "./data/lessons";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Tutorial Course ホーム">
          <span className="brand-mark">TC</span>
          <span>Tutorial Course</span>
        </Link>
        <nav className="header-nav" aria-label="メインナビゲーション">
          <a href="#roadmap">ロードマップ</a>
          <a href="#how-it-works">学び方</a>
          <a
            className="github-link"
            href="https://github.com/rmiura34/tutorial-course"
            rel="noreferrer"
            target="_blank"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI-DRIVEN DEVELOPMENT · 20 DAYS / 60 HOURS</p>
          <h1>
            AIで書くだけで終わらない。
            <br />
            <span>安全なPRまで、やり切る。</span>
          </h1>
          <p className="hero-description">
            CLIとGitから始め、Web・PHP・Laravel・DB・Scrapingを読み、
            Claude Code・Cursor・CodexのSkills、Hooks、MCP、Pluginsまで実装。
            最後は未知のIssueを調査・修正・Test・ReviewしてPull Requestへ変えます。
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/lessons/terminal-environment">
              Day 01から始める <span aria-hidden="true">→</span>
            </Link>
            <a className="text-link" href="#roadmap">
              全20日を見る
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>20</dt>
              <dd>DAYS</dd>
            </div>
            <div>
              <dt>60h</dt>
              <dd>TOTAL</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>FINAL PR</dd>
            </div>
          </dl>
        </div>

        <div className="hero-workspace" aria-label="コースの学習フロー">
          <div className="workspace-topbar">
            <span className="window-dot dot-coral" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
            <span className="workspace-title">request-flow.md</span>
          </div>
          <div className="workspace-body">
            <div className="file-rail" aria-hidden="true">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
            </div>
            <pre aria-label="HTMLコード例">
              <code>
                <span className="code-muted">GET /users</span>
                {"\n"}
                <span className="code-pink">Route</span>
                {" → "}
                <span className="code-yellow">Middleware</span>
                {"\n"}
                <span className="code-pink">Controller</span>
                {" → "}
                <span className="code-green">Service</span>
                {"\n"}
                <span className="code-pink">Model</span>
                {" → "}
                <span className="code-yellow">Database</span>
                {"\n"}
                <span className="code-green">Test: PASS ✓</span>
              </code>
            </pre>
          </div>
          <div className="workspace-result">
            <span className="result-label">PULL REQUEST</span>
            <div className="profile-preview">
              <span className="preview-avatar">PR</span>
              <div>
                <strong>安全に変更できる</strong>
                <p>根拠・Test・Rollback付き</p>
              </div>
            </div>
          </div>
          <div className="floating-note note-one">公式Docsで裏取り</div>
          <div className="floating-note note-two">独立Review ✓</div>
        </div>
      </section>

      <section className="loop-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>毎回おなじ4ステップ。</h2>
          <p>AIの回答を鵜呑みにせず、根拠とTestで安全な変更へ変えます。</p>
        </div>
        <ol className="learning-loop">
          <li>
            <span className="loop-number">01</span>
            <span className="loop-icon">▶</span>
            <strong>学ぶ</strong>
            <p>指定動画と公式資料を、決められた順番で読む。</p>
          </li>
          <li>
            <span className="loop-number">02</span>
            <span className="loop-icon">?</span>
            <strong>調べる</strong>
            <p>コードと通信を調査し、AIの説明を実Fileで照合。</p>
          </li>
          <li>
            <span className="loop-number">03</span>
            <span className="loop-icon">&lt;/&gt;</span>
            <strong>実装する</strong>
            <p>自分のBranchで小さく変更し、TestとDiffを確認。</p>
          </li>
          <li>
            <span className="loop-number">04</span>
            <span className="loop-icon">✓</span>
            <strong>反証する</strong>
            <p>別Agentと人間でReviewし、根拠付きPRを提出。</p>
          </li>
        </ol>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-header">
          <div className="section-heading">
            <p className="eyebrow">YOUR ROADMAP</p>
            <h2>実務PRまで、20日・60時間。</h2>
          </div>
          <div className="roadmap-key">
            <span><i className="key-dot key-build" /> FOUNDATION</span>
            <span><i className="key-dot key-git" /> WEB / AUTOMATION</span>
            <span><i className="key-dot key-ship" /> CAPSTONE</span>
          </div>
        </div>
        <div className="week-grid">
          {weekSummaries.map((week) => (
            <article key={week.week}>
              <span>WEEK {week.week} · {week.range}</span>
              <h3>{week.title}</h3>
              <p>{week.outcome}</p>
            </article>
          ))}
        </div>
        <ProgressTracker lessons={lessons} />
      </section>

      <section className="finish-section">
        <div>
          <p className="eyebrow">THE FINISH LINE</p>
          <h2>最後に残るのは、<br />説明できる実務PR。</h2>
        </div>
        <div className="finish-card">
          <span className="finish-badge">READY TO MERGE</span>
          <p className="finish-url">fix/scraper-pagination-and-duplicates</p>
          <div className="finish-preview">
            <span className="preview-avatar preview-avatar-large">YOU</span>
            <div>
              <span className="finish-line finish-line-long" />
              <span className="finish-line" />
            </div>
          </div>
          <span className="finish-check">✓</span>
        </div>
      </section>

      <footer>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">TC</span>
          <span>Tutorial Course</span>
        </Link>
        <p>Contextを集め、計画し、小さく実装し、別Agentで反証する。</p>
        <a
          href="https://github.com/rmiura34/tutorial-course"
          rel="noreferrer"
          target="_blank"
        >
          Source on GitHub ↗
        </a>
      </footer>
    </main>
  );
}
