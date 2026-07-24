import type { Metadata } from "next";
import Link from "next/link";
import { GlossarySearch } from "../components/GlossarySearch";
import { glossaryTerms } from "../data/glossary";

export const metadata: Metadata = {
  title: "初心者用語集",
  description: "GitHub、VS Code、Terminal、Web、AI開発の言葉を日本語と例で確認できる初心者用語集。",
};

export default function GlossaryPage() {
  return (
    <main className="glossary-page">
      <header className="site-header lesson-header">
        <Link className="brand" href="/">
          <span className="brand-mark">TC</span>
          <span>Tutorial Course</span>
        </Link>
        <span className="start-header-label">BEGINNER GLOSSARY</span>
        <Link className="back-link" href="/start">START HEREへ戻る</Link>
      </header>
      <section className="glossary-hero">
        <p className="eyebrow">50 WORDS · PLAIN JAPANESE</p>
        <h1>分からない言葉を、<br /><span>分からないままにしない。</span></h1>
        <p>
          暗記は不要です。Lessonで知らない言葉が出たらここへ戻り、
          「何のために使うか」と例だけ確認してください。
        </p>
      </section>
      <GlossarySearch terms={glossaryTerms} />
      <nav className="glossary-next">
        <div>
          <span>FIRST VISIT?</span>
          <strong>Accountと起動手順から確認しましょう。</strong>
        </div>
        <Link className="primary-button" href="/start">START HERE →</Link>
      </nav>
    </main>
  );
}
