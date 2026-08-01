import Link from "next/link";
import { LessonRoadmap } from "./components/ProgressTracker";
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
          <a href="#how-it-works">学び方</a>
          <a href="#roadmap">20日ロードマップ</a>
          <Link href="/glossary">用語集</Link>
          <Link className="header-start" href="/lessons/terminal-environment">Day 01を開始</Link>
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
            Repositoryを開くところから、
            <br />
            <span>安全なPull Requestまで。</span>
          </h1>
          <p className="hero-description">
            GitHubとVS Codeの開き方、Terminalへ入力するCommandから始めます。
            20日間、各DayのTaskを読み、自分のBranchで実装し、TestとReviewを行い、
            最後は用意されたLaravelの不具合を直してPull Requestとして提出します。
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/lessons/terminal-environment">
              Day 01から始める <span aria-hidden="true">→</span>
            </Link>
            <a className="text-link" href="#roadmap">20日間の内容を見る</a>
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
            <span className="workspace-title">day-01 / repository-map.md</span>
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
            <pre aria-label="Day 01で入力するTerminalコマンド例">
              <code>
                <span className="code-muted">$ pwd</span>
                {"\n"}
                <span className="code-pink">tutorial-course</span>
                {"\n"}
                <span className="code-muted">$ git status -sb</span>
                {"\n"}
                <span className="code-yellow">training/day-01-environment</span>
                {"\n"}
                <span className="code-green">Task ready ✓</span>
              </code>
            </pre>
          </div>
          <div className="workspace-result">
            <span className="result-label">DAY 01 OUTPUT</span>
            <div className="profile-preview">
              <span className="preview-avatar">01</span>
              <div>
                <strong>Repositoryの地図</strong>
                <p>主要File・起動方法・Test方法</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap-section" aria-labelledby="course-outcomes-title">
        <div className="roadmap-header">
          <div className="section-heading">
            <p className="eyebrow">WHAT YOU WILL BE ABLE TO DO</p>
            <h2 id="course-outcomes-title">このコースで、できるようになること。</h2>
            <p>操作方法だけでなく、実務で安全に変更を届ける一連の流れを身につけます。</p>
          </div>
        </div>
        <div className="week-grid">
          <article>
            <span>DEVELOPMENT ENVIRONMENT</span>
            <h3>GitHubから開発を始める</h3>
            <p>Codespaces、VS Code、Terminalを使い、現在地・Branch・差分を自分で確認できます。</p>
          </article>
          <article>
            <span>CODE READING</span>
            <h3>画面からDBまで処理を追う</h3>
            <p>HTTP、TypeScript、PHP、Laravel、Databaseを実Fileと行番号を根拠に説明できます。</p>
          </article>
          <article>
            <span>IMPLEMENTATION</span>
            <h3>AIと小さく実装する</h3>
            <p>Scraper、Test、Skill、Hook、Pluginを自分のBranchで作り、動作を検証できます。</p>
          </article>
          <article>
            <span>DELIVERY</span>
            <h3>Review可能なPRを提出する</h3>
            <p>再現、原因、変更、Test、Risk、Rollbackを揃え、第三者が判断できるPRを作れます。</p>
          </article>
        </div>
      </section>

      <section className="loop-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>毎回同じ4ステップ × 20日。</h2>
          <p>各Dayのページに、Task、Command、成果物、完了条件、クイズがまとまっています。</p>
        </div>
        <ol className="learning-loop">
          <li>
            <span className="loop-number">01</span>
            <span className="loop-icon">▶</span>
            <strong>学ぶ</strong>
            <p>そのDayに必要な教材だけを確認する。動画や資料が任意なら飛ばしてよい。</p>
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
            <strong>確かめる</strong>
            <p>完了条件とクイズで理解を確認し、必要なDayではReviewやPR提出まで行う。</p>
          </li>
        </ol>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-header">
          <div className="section-heading">
            <p className="eyebrow">4 WEEKS / 20 DAYS</p>
            <h2>4週間の概要と、20日ロードマップ。</h2>
            <p>Weekの到達点を確認し、下のDayカードから今日のレッスンを開きます。</p>
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
        <LessonRoadmap lessons={lessons} />
      </section>

      <footer>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">TC</span>
          <span>Tutorial Course</span>
        </Link>
        <p>Day 01から順に、Taskを読み、手を動かし、完了条件を確認します。</p>
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
