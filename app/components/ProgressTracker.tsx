import Link from "next/link";
import type { Lesson } from "../data/lessons";

/**
 * 20日分の入口を一覧表示します。
 * アカウント同期されない端末ローカルの進捗は、誤解を避けるため扱いません。
 */
export function LessonRoadmap({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="roadmap-shell">
      <ol className="lesson-grid">
        {lessons.map((lesson) => (
          <li className={`lesson-card lesson-${lesson.color}`} key={lesson.id}>
            <div className="lesson-card-top">
              <span className="lesson-number">{lesson.number}</span>
              <span className="lesson-category">{lesson.category}</span>
            </div>
            <Link href={`/lessons/${lesson.slug}`}>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <div className="lesson-task-preview">
                <strong>このDayでやること</strong>
                <ol>
                  {lesson.steps.slice(0, 3).map((step) => (
                    <li key={step.title}>{step.title}</li>
                  ))}
                </ol>
              </div>
              <div className="lesson-meta">
                <span>{lesson.duration}</span>
                <span>
                  {[
                    lesson.videos.length > 0 ? `動画 ${lesson.videos.length}件` : null,
                    lesson.readings.length > 0 ? `資料 ${lesson.readings.length}件` : null,
                    `実習 ${lesson.steps.length}件`,
                    `クイズ ${lesson.quizzes.length}問`,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </div>
              <p className="lesson-outcome"><strong>完成:</strong> {lesson.outcome}</p>
              <span className="card-link">レッスンを開く →</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
