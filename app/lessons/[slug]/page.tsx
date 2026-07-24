import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyCommand } from "../../components/CopyCommand";
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
        <nav className="lesson-top-nav">
          <Link href="/glossary">用語集</Link>
          <Link className="back-link" href="/start">受講準備を確認</Link>
        </nav>
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
              <p className="eyebrow">WEEK {lesson.week} · DAY {lesson.day} · {lesson.duration}</p>
              <h1>{lesson.title}</h1>
              <p>{lesson.description}</p>
            </div>
            <span className="lesson-hero-number">{lesson.number}</span>
          </div>

          <section className="task-launch-panel">
            <div>
              <span className="lesson-section-kicker">LOAD TODAY&apos;S TASK</span>
              <h2>最初にTaskとBranchを準備する</h2>
              <p>Task fileをCodexと人間が同じ順番で読み、実装前に計画を作ります。</p>
            </div>
            <div className="task-commands">
              <div><pre><code>{`npm run course -- show ${lesson.day}`}</code></pre><CopyCommand command={`npm run course -- show ${lesson.day}`} /></div>
              <div><pre><code>{`npm run course -- start ${lesson.day}`}</code></pre><CopyCommand command={`npm run course -- start ${lesson.day}`} /></div>
            </div>
            <blockquote>
              {`COACHモードで、AGENTS.md、START-HERE.md、course/tasks/day-${lesson.number}.mdを読んでください。まだ実装せず、Goal・Context・Constraints・Done whenからTask checklistを作ってください。`}
            </blockquote>
          </section>

          <section className="beginner-context">
            <div className="beginner-before">
              <span className="lesson-section-kicker">BEFORE YOU START</span>
              <h2>始める前に、ここだけ確認</h2>
              <ul>
                {lesson.prerequisites.map((item) => <li key={item}><span>□</span>{item}</li>)}
              </ul>
            </div>
            <div className="beginner-why">
              <span className="lesson-section-kicker">WHY THIS MATTERS</span>
              <h2>なぜ、今日これを学ぶのか</h2>
              <p>{lesson.whyItMatters}</p>
            </div>
            <div className="lesson-terms">
              <div><span className="lesson-section-kicker">3 WORDS FOR TODAY</span><h2>今日使う言葉</h2></div>
              <dl>
                {lesson.terms.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.meaning}</dd></div>)}
              </dl>
              <Link href="/glossary">50語の初心者用語集を見る →</Link>
            </div>
          </section>

          <section className="video-panel">
            {lesson.videos.map((item, index) => (
              <div className="video-resource" key={item.url}>
                {item.embedUrl ? (
                  <div className="video-embed">
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a className="video-link-card" href={item.url} target="_blank" rel="noreferrer">
                    <span className="video-play" aria-hidden="true">▶</span>
                    <span>
                      <small>VIDEO {String(index + 1).padStart(2, "0")} · {item.source}</small>
                      <strong>{item.title}</strong>
                      <em>動画教材を開く ↗</em>
                    </span>
                  </a>
                )}
                <div className="video-note">
                  <strong>{item.time}</strong>
                  <p>{item.description}</p>
                  {item.embedUrl && (
                    <a href={item.url} target="_blank" rel="noreferrer">元動画を開く ↗</a>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="schedule-section">
            <div className="lesson-section-kicker">180 MINUTES</div>
            <h2>今日の進め方</h2>
            <ol className="schedule-list">
              {lesson.schedule.map((item) => (
                <li key={item.time}>
                  <time>{item.time}</time>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="resource-section">
            <div className="resource-heading">
              <div>
                <span className="lesson-section-kicker">READ IN THIS ORDER</span>
                <h2>公式資料をこの順番で読む</h2>
              </div>
              <p>「全部読む」のではなく、今日の演習に必要な範囲を上から順に読みます。</p>
            </div>
            <ol className="resource-list">
              {lesson.readings.map((item, index) => (
                <li key={item.url}>
                  <span className="resource-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="resource-meta">
                      <span>{item.source}</span>
                      <span>{item.time}</span>
                      <span>{item.required ? "必修" : "補助"}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <a href={item.url} target="_blank" rel="noreferrer" aria-label={`${item.title}を開く`}>
                    読む ↗
                  </a>
                </li>
              ))}
            </ol>
            <p className="version-note">
              Laravel・Cursor・Claude Code・Codexは更新頻度が高いため、演習ProjectのVersionとページの更新日を必ず確認してください。
            </p>
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
            <div className="lesson-section-kicker">HANDS ON</div>
            <h2>実際のProjectで手を動かす</h2>
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

          <section className="expected-section">
            <div>
              <span className="lesson-section-kicker">SUCCESS LOOKS LIKE THIS</span>
              <h2>成功すると、こうなります</h2>
              <p>途中で不安になったら、完成形ではなくこの3点だけを照合します。</p>
            </div>
            <ol>
              {lesson.expectedResults.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
              ))}
            </ol>
          </section>

          <section className="mistake-section">
            <div className="resource-heading">
              <div><span className="lesson-section-kicker">IF YOU GET STUCK</span><h2>よくあるつまずきと戻り方</h2></div>
              <p>Errorは失敗ではなく、現在地を示す情報です。削除ややり直しの前に症状を照合します。</p>
            </div>
            <div className="mistake-table">
              <div className="mistake-head"><b>見えている症状</b><b>よくある原因</b><b>安全な戻り方</b></div>
              {lesson.commonMistakes.map((item) => (
                <div key={item.symptom}><strong>{item.symptom}</strong><p>{item.cause}</p><p>{item.recovery}</p></div>
              ))}
            </div>
          </section>

          <section className="prompt-panel">
            <div>
              <span className="lesson-section-kicker">AI PRACTICE</span>
              <h2>そのまま使える練習Prompt</h2>
            </div>
            <blockquote>{lesson.prompt}</blockquote>
            <p>実行前に対象Project、仕様、禁止事項を追記し、出力後は実File・Test・公式資料で裏取りします。</p>
          </section>

          <LessonQuiz quizzes={lesson.quizzes} />

          <section className="practice-panel">
            <div className="practice-heading">
              <div>
                <span className="lesson-section-kicker">YOUR TURN</span>
                <h2>自分のBranchで提出物を作る</h2>
              </div>
              <span className="practice-time">Day {lesson.day} · {lesson.duration}</span>
            </div>
            <div className="branch-command">
              <span>EXPECTED BRANCH</span>
              <code>{lesson.branch}</code>
              <small>`course -- start`で作成済みです。もう一度git switch -cは実行しません。</small>
            </div>
            <div className="deliverables">
              <h3>必須提出物</h3>
              <ol>
                {lesson.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </div>
            <div className="submission-example">
              <h3>提出物の書き方</h3>
              {lesson.submissionGuide.map((item) => (
                <article key={item.section}>
                  <span>{item.section}</span>
                  <p><b>含めるもの:</b> {item.include}</p>
                  <blockquote>{item.example}</blockquote>
                </article>
              ))}
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
                <p>変更目的、根拠、確認方法、AI利用、残Risk、Rollbackを自分の言葉で書きます。</p>
              </div>
              <a
                href="https://github.com/rmiura34/tutorial-course"
                rel="noreferrer"
                target="_blank"
              >
                GitHubを開く ↗
              </a>
            </div>
            <div className="final-check-command">
              <div><strong>提出前に自動チェック</strong><p>Branch、提出File、禁止事項をCourse runnerで確認します。</p></div>
              <code>{`npm run course -- check ${lesson.day}`}</code>
              <CopyCommand command={`npm run course -- check ${lesson.day}`} />
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
