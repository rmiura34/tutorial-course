"use client";

import { useState } from "react";
import type { Quiz } from "../data/lessons";

export function LessonQuiz({ quizzes }: { quizzes: Quiz[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const answeredCount = Object.keys(answers).length;
  const score = quizzes.reduce(
    (total, quiz, index) => total + (answers[index] === quiz.correctIndex ? 1 : 0),
    0,
  );

  return (
    <section className="quiz-panel" aria-labelledby="quiz-title">
      <div className="lesson-section-kicker">QUICK CHECK</div>
      <h2 id="quiz-title">理解確認クイズ</h2>
      <p className="quiz-intro">すべて答えてから採点します。答えだけでなく、解説を自分の言葉で言い直してください。</p>
      <div className="quiz-stack">
        {quizzes.map((quiz, quizIndex) => (
          <div className="quiz-item" key={quiz.question}>
            <p className="quiz-question">
              <span>Q{quizIndex + 1}</span>
              {quiz.question}
            </p>
            <div className="quiz-options">
              {quiz.options.map((option, optionIndex) => {
                const selected = answers[quizIndex] === optionIndex;
                const state =
                  checked && optionIndex === quiz.correctIndex
                    ? "correct"
                    : checked && selected
                      ? "incorrect"
                      : "";
                return (
                  <button
                    key={option}
                    type="button"
                    className={`quiz-option ${selected ? "selected" : ""} ${state}`}
                    onClick={() => {
                      setAnswers((current) => ({ ...current, [quizIndex]: optionIndex }));
                      setChecked(false);
                    }}
                  >
                    <span>{String.fromCharCode(65 + optionIndex)}</span>
                    {option}
                  </button>
                );
              })}
            </div>
            {checked && (
              <div
                className={`quiz-result ${answers[quizIndex] === quiz.correctIndex ? "correct" : "incorrect"}`}
                role="status"
              >
                <strong>{answers[quizIndex] === quiz.correctIndex ? "正解" : "要復習"}</strong>
                <p>{quiz.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="quiz-submit"
        type="button"
        disabled={answeredCount !== quizzes.length}
        onClick={() => setChecked(true)}
      >
        {checked ? `${score} / ${quizzes.length} 正解` : "まとめて採点する"}
      </button>
    </section>
  );
}
