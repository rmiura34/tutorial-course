"use client";

import { useState } from "react";
import type { Quiz } from "../data/lessons";

export function LessonQuiz({ quiz }: { quiz: Quiz }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === quiz.correctIndex;

  return (
    <section className="quiz-panel" aria-labelledby="quiz-title">
      <div className="lesson-section-kicker">QUICK CHECK</div>
      <h2 id="quiz-title">3分チェック</h2>
      <p className="quiz-question">{quiz.question}</p>
      <div className="quiz-options">
        {quiz.options.map((option, index) => {
          const state =
            checked && index === quiz.correctIndex
              ? "correct"
              : checked && index === selected
                ? "incorrect"
                : "";
          return (
            <button
              key={option}
              type="button"
              className={`quiz-option ${selected === index ? "selected" : ""} ${state}`}
              onClick={() => {
                setSelected(index);
                setChecked(false);
              }}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          );
        })}
      </div>
      <button
        className="quiz-submit"
        type="button"
        disabled={selected === null}
        onClick={() => setChecked(true)}
      >
        答えを確認する
      </button>
      {checked && (
        <div className={`quiz-result ${isCorrect ? "correct" : "incorrect"}`} role="status">
          <strong>{isCorrect ? "正解です！" : "もう一度考えてみよう"}</strong>
          <p>{quiz.explanation}</p>
        </div>
      )}
    </section>
  );
}
