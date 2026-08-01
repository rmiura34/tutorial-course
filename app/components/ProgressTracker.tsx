"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "../data/lessons";

const STORAGE_KEY = "tutorial-course-progress";

function restoreKnownProgress(raw: string, knownLessonIds: ReadonlySet<string>): string[] {
  const value: unknown = JSON.parse(raw);
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value.filter(
      (item): item is string => typeof item === "string" && knownLessonIds.has(item),
    ),
  )];
}

export function ProgressTracker({ lessons }: { lessons: Lesson[] }) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [storageMessage, setStorageMessage] = useState("");
  const knownLessonIds = useMemo(
    () => new Set(lessons.map((lesson) => lesson.id)),
    [lessons],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setCompleted(restoreKnownProgress(saved, knownLessonIds));
      } catch {
        setStorageMessage("保存済みの進捗を読み込めませんでした。この画面では0件から表示しています。");
      }
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [knownLessonIds]);

  const completedSet = useMemo(() => new Set(completed), [completed]);
  const percent = Math.round((completed.length / lessons.length) * 100);

  function toggle(id: string) {
    if (!knownLessonIds.has(id)) return;

    const next = completedSet.has(id)
      ? completed.filter((item) => item !== id)
      : [...completed, id];
    setCompleted(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setStorageMessage("このブラウザ内に進捗を保存しました。");
    } catch {
      setStorageMessage("このブラウザへ保存できませんでした。今回の画面を閉じると進捗が戻る場合があります。");
    }
  }

  function resetProgress() {
    const confirmed = window.confirm(
      "このブラウザに保存されたコース進捗をすべてリセットします。元に戻せません。よろしいですか？",
    );
    if (!confirmed) return;

    setCompleted([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      setStorageMessage("このブラウザ内の進捗をリセットしました。");
    } catch {
      setStorageMessage("画面上の進捗はリセットしましたが、ブラウザの保存データを削除できませんでした。");
    }
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
      <aside className="progress-storage-note" aria-labelledby="progress-storage-title">
        <strong id="progress-storage-title">進捗の保存について</strong>
        <ul>
          <li>ログインは不要です。チェックした進捗は、このブラウザ・この端末内だけに保存されます。</li>
          <li>別の端末や別のブラウザには同期されません。アカウントへの保存も行いません。</li>
          <li>共有パソコンなど同じブラウザを使う人同士では、この進捗も共有されます。</li>
        </ul>
        <button
          type="button"
          className="progress-reset"
          onClick={resetProgress}
          disabled={!ready || completed.length === 0}
        >
          進捗をリセット
        </button>
        {storageMessage && (
          <p className="progress-storage-status" role="status">
            {storageMessage}
          </p>
        )}
      </aside>
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
