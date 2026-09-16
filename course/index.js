import { lessons } from "../app/data/lessons.ts";

const usage = `使い方:
  npm run course -- list             レッスン一覧
  npm run course -- show <番号>      レッスンを表示（例: show 1）
  npm run course -- help             ヘルプ

Day 01 は Lesson 01 に対応します。ブラウザで学習する場合は npm run dev を実行してください。`;

function showLesson(lesson) {
  const lines = [
    `Lesson ${lesson.number}: ${lesson.title}`,
    lesson.description,
    `目安: ${lesson.duration}`,
    `学習成果: ${lesson.outcome}`,
    `課題ブランチ: ${lesson.branch}`,
    "",
    "学習目標",
    ...lesson.objectives.map((objective) => `- ${objective}`),
    "",
    "手順",
    ...lesson.steps.flatMap((step, index) => [
      `${index + 1}. ${step.title}`,
      `   ${step.detail}`,
      ...(step.code ? step.code.split("\n").map((line) => `   ${line}`) : []),
    ]),
    "",
    "完了チェック（自分で確認してください）",
    ...lesson.checks.map((check) => `- [ ] ${check}`),
    "",
    "理解確認クイズ",
    lesson.quiz.question,
    ...lesson.quiz.options.map((option, index) => `${index + 1}. ${option}`),
    "",
    `回答・解説や進捗記録はWeb画面 /lessons/${lesson.slug} を開いてください。`,
  ];
  console.log(lines.join("\n"));
}

const [command = "help", number, ...extra] = process.argv.slice(2);

if (["help", "--help", "-h"].includes(command) && number === undefined) {
  console.log(usage);
} else if (command === "list" && number === undefined) {
  console.log(lessons.map((lesson) => `${lesson.number}  ${lesson.title}`).join("\n"));
} else if (command === "show" && /^\d{1,2}$/.test(number ?? "") && extra.length === 0) {
  const lesson = lessons.find((item) => Number(item.number) === Number(number));
  if (lesson) {
    showLesson(lesson);
  } else {
    console.error(`レッスン ${number} は存在しません。npm run course -- list で確認してください。`);
    process.exitCode = 1;
  }
} else {
  console.error(`コマンドまたは引数が正しくありません。\n\n${usage}`);
  process.exitCode = 1;
}
