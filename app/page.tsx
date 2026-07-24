import Link from "next/link";
import { ProgressTracker } from "./components/ProgressTracker";
import { lessons } from "./data/lessons";

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
          <p className="eyebrow">ZERO TO FIRST PULL REQUEST</p>
          <h1>
            見るだけで終わらない。
            <br />
            <span>手を動かして、つくる。</span>
          </h1>
          <p className="hero-description">
            VS Codeを開くところから、Webページの公開まで。
            動画・クイズ・実装課題・GitHubレビューがひとつになった、
            初心者のための実践コースです。
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/lessons/setup">
              Lesson 01から始める <span aria-hidden="true">→</span>
            </Link>
            <a className="text-link" href="#roadmap">
              全8レッスンを見る
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>8</dt>
              <dd>LESSONS</dd>
            </div>
            <div>
              <dt>3h</dt>
              <dd>TOTAL</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>LIVE SITE</dd>
            </div>
          </dl>
        </div>

        <div className="hero-workspace" aria-label="コースの学習フロー">
          <div className="workspace-topbar">
            <span className="window-dot dot-coral" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
            <span className="workspace-title">profile-card / index.html</span>
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
                <span className="code-muted">&lt;!doctype html&gt;</span>
                {"\n"}
                <span className="code-pink">&lt;main</span>{" "}
                <span className="code-yellow">class</span>=
                <span className="code-green">&quot;profile&quot;</span>
                <span className="code-pink">&gt;</span>
                {"\n  "}
                <span className="code-pink">&lt;h1&gt;</span>
                はじめまして！
                <span className="code-pink">&lt;/h1&gt;</span>
                {"\n  "}
                <span className="code-pink">&lt;p&gt;</span>
                今日からWeb制作を
                {"\n  "}はじめます。
                <span className="code-pink">&lt;/p&gt;</span>
                {"\n"}
                <span className="code-pink">&lt;/main&gt;</span>
              </code>
            </pre>
          </div>
          <div className="workspace-result">
            <span className="result-label">LIVE PREVIEW</span>
            <div className="profile-preview">
              <span className="preview-avatar">R</span>
              <div>
                <strong>はじめまして！</strong>
                <p>今日からWeb制作をはじめます。</p>
              </div>
            </div>
          </div>
          <div className="floating-note note-one">編集する</div>
          <div className="floating-note note-two">すぐ確認 ✓</div>
        </div>
      </section>

      <section className="loop-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>毎回おなじ4ステップ。</h2>
          <p>迷う時間を減らして、つくる時間を増やします。</p>
        </div>
        <ol className="learning-loop">
          <li>
            <span className="loop-number">01</span>
            <span className="loop-icon">▶</span>
            <strong>見る</strong>
            <p>3〜7分の短い動画で、完成形と操作を確認。</p>
          </li>
          <li>
            <span className="loop-number">02</span>
            <span className="loop-icon">?</span>
            <strong>確かめる</strong>
            <p>3問クイズで、重要なポイントをすぐ確認。</p>
          </li>
          <li>
            <span className="loop-number">03</span>
            <span className="loop-icon">&lt;/&gt;</span>
            <strong>つくる</strong>
            <p>自分のブランチで、実際のコードを変更。</p>
          </li>
          <li>
            <span className="loop-number">04</span>
            <span className="loop-icon">✓</span>
            <strong>届ける</strong>
            <p>テストを通してPRを作り、学びを記録。</p>
          </li>
        </ol>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-header">
          <div className="section-heading">
            <p className="eyebrow">YOUR ROADMAP</p>
            <h2>最初の公開まで、8レッスン。</h2>
          </div>
          <div className="roadmap-key">
            <span><i className="key-dot key-build" /> BUILD</span>
            <span><i className="key-dot key-git" /> GIT</span>
            <span><i className="key-dot key-ship" /> SHIP</span>
          </div>
        </div>
        <ProgressTracker lessons={lessons} />
      </section>

      <section className="finish-section">
        <div>
          <p className="eyebrow">THE FINISH LINE</p>
          <h2>最後に残るのは、<br />あなたが公開したページ。</h2>
        </div>
        <div className="finish-card">
          <span className="finish-badge">PUBLIC</span>
          <p className="finish-url">your-name.github.io/profile</p>
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
        <p>小さく学び、確かめ、つくって届ける。</p>
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
