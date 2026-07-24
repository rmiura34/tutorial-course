import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lessons } from "../app/data/lessons.ts";
import { glossaryTerms } from "../app/data/glossary.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const taskDirectory = resolve(root, "course", "tasks");

await mkdir(taskDirectory, { recursive: true });

for (const lesson of lessons) {
  if (lesson.videos.length === 0) {
    throw new Error(`Day ${lesson.day} has no video resource`);
  }
  if (lesson.readings.length === 0) {
    throw new Error(`Day ${lesson.day} has no reading resource`);
  }
  for (const resource of [...lesson.videos, ...lesson.readings]) {
    if (
      !resource.title.trim() ||
      !resource.source.trim() ||
      !resource.description.trim() ||
      !resource.time.trim() ||
      !resource.url.startsWith("https://")
    ) {
      throw new Error(`Day ${lesson.day} has an incomplete resource: ${resource.title}`);
    }
  }
  if (
    lesson.prerequisites.length < 3 ||
    lesson.terms.length < 3 ||
    lesson.expectedResults.length < 3 ||
    lesson.commonMistakes.length < 2 ||
    lesson.submissionGuide.length < 2
  ) {
    throw new Error(`Day ${lesson.day} is missing beginner support`);
  }
}

function workspaceFor(day) {
  if (day <= 5) return "repository root";
  if (day <= 10) return "training-lab";
  if (day <= 12) return "practice/python-scraper";
  if (day <= 15) return "starter-kits";
  return "training-lab";
}

const tasks = lessons.map((lesson) => {
  const day = String(lesson.day).padStart(2, "0");
  const workspace = workspaceFor(lesson.day);
  const taskFile = `course/tasks/day-${day}.md`;
  const kickoffPrompt = [
    `Read AGENTS.md, START-HERE.md, and ${taskFile}.`,
    "Use COACH mode. Do not edit implementation files yet.",
    `Confirm that the current branch is ${lesson.branch} and inspect git status.`,
    "Summarize Goal, Context, Constraints, and Done when.",
    `Create learning-log/day-${day}/plan.md as a checklist, explain only the first task, and wait.`,
  ].join(" ");

  return {
    schemaVersion: 1,
    id: lesson.id,
    day: lesson.day,
    week: lesson.week,
    title: lesson.title,
    branch: lesson.branch,
    workspace,
    taskFile,
    durationMinutes: 180,
    goal: lesson.outcome,
    prerequisites: lesson.prerequisites,
    whyItMatters: lesson.whyItMatters,
    terms: lesson.terms,
    expectedResults: lesson.expectedResults,
    commonMistakes: lesson.commonMistakes,
    submissionGuide: lesson.submissionGuide,
    objectives: lesson.objectives,
    schedule: lesson.schedule,
    instructions: lesson.steps,
    deliverables: lesson.deliverables,
    checks: lesson.checks,
    practicePrompt: lesson.prompt,
    kickoffPrompt,
  };
});

await writeFile(
  resolve(taskDirectory, "index.json"),
  `${JSON.stringify({ schemaVersion: 1, generatedFrom: "app/data/lessons.ts", tasks }, null, 2)}\n`,
);

for (const task of tasks) {
  const day = String(task.day).padStart(2, "0");
  const schedule = task.schedule
    .map((item) => `- **${item.time} ${item.title}:** ${item.detail}`)
    .join("\n");
  const objectives = task.objectives.map((item) => `- [ ] ${item}`).join("\n");
  const prerequisites = task.prerequisites.map((item) => `- [ ] ${item}`).join("\n");
  const terms = task.terms.map((item) => `- **${item.term}:** ${item.meaning}`).join("\n");
  const expectedResults = task.expectedResults.map((item) => `- [ ] ${item}`).join("\n");
  const mistakes = task.commonMistakes
    .map((item) => `| ${item.symptom} | ${item.cause} | ${item.recovery} |`)
    .join("\n");
  const submissionGuide = task.submissionGuide
    .map((item) => `### ${item.section}\n\n- 含めるもの: ${item.include}\n- 記入例: ${item.example}`)
    .join("\n\n");
  const instructions = task.instructions
    .map((item, index) => {
      const code = item.code ? `\n\n\`\`\`text\n${item.code}\n\`\`\`` : "";
      return `${index + 1}. **${item.title}** — ${item.detail}${code}`;
    })
    .join("\n\n");
  const deliverables = task.deliverables.map((item) => `- [ ] ${item}`).join("\n");
  const checks = task.checks.map((item) => `- [ ] ${item}`).join("\n");

  const markdown = `---
schema_version: 1
day: ${task.day}
week: ${task.week}
branch: ${task.branch}
workspace: ${task.workspace}
duration_minutes: ${task.durationMinutes}
---

# Day ${day} — ${task.title}

## Goal

${task.goal}

## Why this matters

${task.whyItMatters}

## Before you start

${prerequisites}

## Three words for today

${terms}

## Start command

\`\`\`bash
npm run course -- start ${task.day}
\`\`\`

## Codex kickoff

\`\`\`text
${task.kickoffPrompt}
\`\`\`

## 180-minute schedule

${schedule}

## Objectives

${objectives}

## Tasks

${instructions}

## Practice prompt

\`\`\`text
${task.practicePrompt}
\`\`\`

## Required deliverables

${deliverables}

## Success looks like this

${expectedResults}

## If you get stuck

| 見えている症状 | よくある原因 | 安全な戻り方 |
|---|---|---|
${mistakes}

## How to write the submission

${submissionGuide}

## Done when

${checks}

## Before the Pull Request

- [ ] Relevant tests pass
- [ ] I read every changed line
- [ ] No secret or \`.env\` value is included
- [ ] AI suggestions I rejected are recorded with a reason
- [ ] The Pull Request explains purpose, evidence, verification, risk, and rollback
`;

  await writeFile(resolve(taskDirectory, `day-${day}.md`), markdown);
}

const glossaryByCategory = Map.groupBy(glossaryTerms, (item) => item.category);
const glossaryMarkdown = `# 初心者用語集

この用語集は暗記用ではありません。Taskで知らない言葉が出たときに、「何のために使うか」と例を確認するために使います。

教材サイトを起動済みなら、検索できる \`/glossary\` 画面も利用できます。

${[...glossaryByCategory.entries()]
  .map(
    ([category, terms]) => `## ${category}

${terms
  .map(
    (item) => `### ${item.term}（${item.japanese}）

${item.meaning}

**例:** ${item.example}`,
  )
  .join("\n\n")}`,
  )
  .join("\n\n")}
`;

await mkdir(resolve(root, "docs"), { recursive: true });
await writeFile(resolve(root, "docs", "GLOSSARY.md"), glossaryMarkdown);

console.log(`Generated ${tasks.length} learner tasks in course/tasks.`);
