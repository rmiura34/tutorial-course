"use client";

import { useState } from "react";
import type { LessonQuizItem } from "../data/lesson-quizzes";

type LessonQuizProps = {
  quizzes: readonly LessonQuizItem[];
};

export function LessonQuiz({ quizzes }: LessonQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const answeredCount = Object.keys(answers).length;
  const score = quizzes.reduce(
    (total, quiz, index) => total + (answers[index] === quiz.correctIndex ? 1 : 0),
    0,
  );
  const currentQuiz = quizzes[currentIndex];

  if (!currentQuiz) return null;

  const selectAnswer = (optionIndex: number) => {
    if (checked) return;
    setAnswers((current) => ({ ...current, [currentIndex]: optionIndex }));
  };

  const retry = () => {
    setAnswers({});
    setCurrentIndex(0);
    setChecked(false);
  };

  return (
    <section className="quiz-panel" aria-labelledby="quiz-title">
      <div className="lesson-section-kicker">10-QUESTION CHECK</div>
      <h2 id="quiz-title">理解確認クイズ</h2>
      <p className="quiz-intro">
        全{quizzes.length}問です。暗記ではなく、手順・安全性・完了条件を確認します。すべて答えると採点と全問の解説を見られます。
      </p>

      <div className="quiz-progress" aria-live="polite">
        <div>
          <strong>{checked ? "採点完了" : `${answeredCount} / ${quizzes.length} 問回答`}</strong>
          <span>{checked ? `${score}問正解` : `残り${quizzes.length - answeredCount}問`}</span>
        </div>
        <progress max={quizzes.length} value={checked ? score : answeredCount}>
          {checked ? score : answeredCount} / {quizzes.length}
        </progress>
      </div>

      {!checked ? (
        <>
          <nav className="quiz-nav" aria-label="クイズの問題一覧">
            {quizzes.map((quiz, index) => {
              const answered = answers[index] !== undefined;
              return (
                <button
                  key={quiz.question}
                  type="button"
                  className={`${index === currentIndex ? "selected" : ""} ${answered ? "answered" : ""}`}
                  aria-label={`問題${index + 1}${answered ? "、回答済み" : "、未回答"}`}
                  aria-current={index === currentIndex ? "step" : undefined}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </nav>

          <div className="quiz-stack">
            <div className="quiz-item">
              <p className="quiz-question">
                <span>Q{currentIndex + 1}</span>
                {currentQuiz.question}
              </p>
              <div className="quiz-options" role="group" aria-label={`問題${currentIndex + 1}の選択肢`}>
                {currentQuiz.options.map((option, optionIndex) => {
                  const selected = answers[currentIndex] === optionIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`quiz-option ${selected ? "selected" : ""}`}
                      aria-pressed={selected}
                      onClick={() => selectAnswer(optionIndex)}
                    >
                      <span>{String.fromCharCode(65 + optionIndex)}</span>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="quiz-actions">
            <button
              className="quiz-submit"
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
            >
              前の問題
            </button>
            {currentIndex < quizzes.length - 1 ? (
              <button
                className="quiz-submit"
                type="button"
                disabled={answers[currentIndex] === undefined}
                onClick={() => setCurrentIndex((index) => Math.min(quizzes.length - 1, index + 1))}
              >
                次の問題
              </button>
            ) : (
              <button
                className="quiz-submit"
                type="button"
                disabled={answeredCount !== quizzes.length}
                onClick={() => setChecked(true)}
              >
                10問をまとめて採点する
              </button>
            )}
          </div>
          {answeredCount === quizzes.length && currentIndex !== quizzes.length - 1 && (
            <button className="quiz-submit" type="button" onClick={() => setChecked(true)}>
              10問をまとめて採点する
            </button>
          )}
        </>
      ) : (
        <div className="quiz-review" aria-live="polite">
          <div className="quiz-score-card">
            <strong>{score} / {quizzes.length} 正解</strong>
            <p>
              {score === quizzes.length
                ? "全問正解です。提出物と完了条件を照合して、レッスンを完了しましょう。"
                : "間違えた問題だけでなく、全問の解説を自分の言葉で言い直してから再挑戦しましょう。"}
            </p>
          </div>
          <h3>全問の答えと解説</h3>
          <ol className="quiz-stack">
            {quizzes.map((quiz, quizIndex) => {
              const isCorrect = answers[quizIndex] === quiz.correctIndex;
              return (
                <li className="quiz-item" key={quiz.question}>
                  <p className="quiz-question">
                    <span>Q{quizIndex + 1}</span>
                    {quiz.question}
                  </p>
                  <div className={`quiz-result ${isCorrect ? "correct" : "incorrect"}`}>
                    <strong>{isCorrect ? "正解" : "要復習"}</strong>
                    {!isCorrect && (
                      <p>正解：{String.fromCharCode(65 + quiz.correctIndex)}. {quiz.options[quiz.correctIndex]}</p>
                    )}
                    <p>{quiz.explanation}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <button className="quiz-submit" type="button" onClick={retry}>
            回答をリセットして再挑戦する
          </button>
        </div>
      )}
    </section>
  );
}
