import assert from "node:assert/strict";
import test from "node:test";

import {
  getLessonQuizzes,
  lessonQuizBank,
} from "../app/data/lesson-quizzes.ts";
import { lessons } from "../app/data/lessons.ts";

test("all 20 lessons have 10 complete Japanese quiz questions", () => {
  assert.equal(Object.keys(lessonQuizBank).length, 20);

  for (let day = 1; day <= 20; day += 1) {
    const quizzes = lessonQuizBank[day];
    assert.equal(quizzes.length, 10, `Day ${day} should have 10 questions`);
    assert.equal(new Set(quizzes.map((quiz) => quiz.question)).size, 10);

    for (const [index, quiz] of quizzes.entries()) {
      assert.match(quiz.question, /[ぁ-んァ-ヶ一-龠]/, `Day ${day} Q${index + 1}`);
      assert.equal(quiz.options.length, 3, `Day ${day} Q${index + 1}`);
      assert.ok(quiz.correctIndex >= 0 && quiz.correctIndex < 3);
      assert.ok(quiz.explanation.length >= 25, `Day ${day} Q${index + 1} needs a concrete explanation`);
    }
  }
});

test("getLessonQuizzes preserves existing questions and fills the set to 10", () => {
  const existing = [
    {
      question: "既存の確認問題ですか？",
      options: ["はい", "いいえ", "未確認"],
      correctIndex: 0,
      explanation: "既存問題を先頭に維持できることを確認するための具体的なテスト用解説です。",
    },
  ];
  const quizzes = getLessonQuizzes(1, existing);

  assert.equal(quizzes.length, 10);
  assert.equal(quizzes[0].question, existing[0].question);
  assert.equal(new Set(quizzes.map((quiz) => quiz.question)).size, 10);
});

test("getLessonQuizzes rejects an undefined lesson day", () => {
  assert.throws(() => getLessonQuizzes(21), /Day 21/);
});

test("every lesson exposed to the website contains exactly 10 questions", () => {
  assert.equal(lessons.length, 20);
  for (const lesson of lessons) {
    assert.equal(lesson.quizzes.length, 10, `Day ${lesson.day}`);
  }
});
