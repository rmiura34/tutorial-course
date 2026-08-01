"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "../data/lessons";

const STORAGE_KEY = "tutorial-course-progress";

export function ProgressTracker({ lessons }: { lessons: Lesson[] }) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setCompleted(JSON.parse(saved) as string[]);
      } catch {
        // Progress remains available for this visit if storage is unavailable.
      }
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const completedSet = useMemo(() => new Set(completed), [completed]);
  const percent = Math.round((completed.length / lessons.length) * 100);

  function toggle(id: string) {
    const next = completedSet.has(id)
      ? completed.filter((item) => item !== id)
      : [...completed, id];
    setCompleted(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="roadmap-shell">
      <div className="progress-summary">
        <div>
          <span className="progress-label">YOUR PROGRESS</span>
          <strong>{ready ? `${completed.length} / ${lessons.length}` : `— / ${lessons.length}`}</strong>
        </div>
        <div
          className="progress-track"
          aria-label={`コース進捗 ${percent}%`}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span style={{ width: `${percent}%` }} />
        </div>
        <span className="progress-percent">{ready ? `${percent}%` : "—%"}</span>
      </div>
      <ol className="lesson-grid">
        {lessons.map((lesson) => {
          const isComplete = completedSet.has(lesson.id);
          return (
            <li className={`lesson-card lesson-${lesson.color}`} key={lesson.id}>
              <div className="lesson-card-top">
                <span className="lesson-number">{lesson.number}</span>
                <span className="lesson-category">{lesson.category}</span>
                <button
                  className={`complete-toggle ${isComplete ? "is-complete" : ""}`}
                  type="button"
                  onClick={() => toggle(lesson.id)}
                  aria-label={`${lesson.title}を${isComplete ? "未完了" : "完了"}にする`}
                  aria-pressed={isComplete}
                >
                  {isComplete ? "✓" : ""}
                </button>
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
          );
        })}
      </ol>
    </div>
  );
}
