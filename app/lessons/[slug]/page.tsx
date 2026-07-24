import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonQuiz } from "../../components/LessonQuiz";
import { getLesson, lessons } from "../../data/lessons";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.number}. ${lesson.title}`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const lessonIndex = lessons.findIndex((item) => item.slug === slug);
  const previous = lessons[lessonIndex - 1];
  const next = lessons[lessonIndex + 1];

  return (
    <main className="lesson-page">
      <header className="site-header lesson-header">
        <Link className="brand" href="/">
          <span className="brand-mark">TC</span>
          <span>Tutorial Course</span>
        </Link>
        <div className="lesson-header-progress">
          LESSON {lesson.number} / {String(lessons.length).padStart(2, "0")}
        </div>
        <Link className="back-link" href="/#roadmap">ロードマップへ</Link>
      </header>

      <div className="lesson-layout">
        <aside className="lesson-sidebar">
          <p className="sidebar-title">COURSE MAP</p>
          <ol>
            {lessons.map((item) => (
              <li className={item.id === lesson.id ? "active" : ""} key={item.id}>
                <Link href={`/lessons/${item.slug}`}>
                  <span>{item.number}</span>
                  <div>
                    <small>{item.category}</small>
                    {item.shortTitle}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </aside>

        <article className="lesson-content">
          <div className={`lesson-hero lesson-${lesson.color}`}>
            <div>
              <p className="eyebrow">{lesson.category} · {lesson.duration}</p>
              <h1>{lesson.title}</h1>
              <p>{lesson.description}</p>
            </div>
            <span className="lesson-hero-number">{lesson.number}</span>
          </div>

          <section className="video-panel">
            <div className="video-screen">
              <span className="video-play" aria-hidden="true">▶</span>
              <span className="video-label">VIDEO {lesson.number}</span>
              <div className="video-caption">
                <strong>{lesson.shortTitle}</strong>
                <span>動画をここに埋め込みます</span>
              </div>
            </div>
            <div className="video-note">
              <strong>撮影ガイド</strong>
              <p>完成形 → 操作 → よくある失敗 → もう一度成功、の順で3〜7分にまとめます。</p>
            </div>
          </section>

          <section className="lesson-objectives">
            <div>
              <span className="lesson-section-kicker">TODAY&apos;S GOAL</span>
              <h2>このレッスンのゴール</h2>
              <p className="outcome">{lesson.outcome}</p>
            </div>
            <ul>
              {lesson.objectives.map((objective) => (
                <li key={objective}><span>✓</span>{objective}</li>
              ))}
            </ul>
          </section>

          <section className="step-section">
            <div className="lesson-section-kicker">STEP BY STEP</div>
            <h2>一緒にやってみよう</h2>
            <ol className="step-list">
              {lesson.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                    {step.code && <pre><code>{step.code}</code></pre>}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <LessonQuiz quiz={lesson.quiz} />

          <section className="practice-panel">
            <div className="practice-heading">
              <div>
                <span className="lesson-section-kicker">YOUR TURN</span>
                <h2>自分のブランチで実装しよう</h2>
              </div>
              <span className="practice-time">目安 {lesson.duration}</span>
            </div>
            <div className="branch-command">
              <span>BRANCH</span>
              <code>git switch -c {lesson.branch}</code>
            </div>
            <h3>完了チェック</h3>
            <ul className="check-list">
              {lesson.checks.map((check) => (
                <li key={check}><span className="empty-check" />{check}</li>
              ))}
            </ul>
            <div className="practice-submit">
              <div>
                <strong>できたらPull Requestへ</strong>
                <p>作ったもの・確認方法・学んだことを自分の言葉で書きます。</p>
              </div>
              <a
                href="https://github.com/rmiura34/tutorial-course"
                rel="noreferrer"
                target="_blank"
              >
                GitHubを開く ↗
              </a>
            </div>
          </section>

          <nav className="lesson-pagination" aria-label="レッスン移動">
            {previous ? (
              <Link href={`/lessons/${previous.slug}`}>
                <small>← PREVIOUS</small>
                <strong>{previous.number}. {previous.shortTitle}</strong>
              </Link>
            ) : <span />}
            {next ? (
              <Link className="next-lesson" href={`/lessons/${next.slug}`}>
                <small>NEXT →</small>
                <strong>{next.number}. {next.shortTitle}</strong>
              </Link>
            ) : (
              <Link className="next-lesson" href="/#roadmap">
                <small>COMPLETE ✓</small>
                <strong>ロードマップに戻る</strong>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </main>
  );
}
