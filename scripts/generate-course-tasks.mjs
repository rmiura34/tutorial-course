import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lessons } from "../app/data/lessons.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const taskDirectory = resolve(root, "course", "tasks");

await mkdir(taskDirectory, { recursive: true });

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

console.log(`Generated ${tasks.length} learner tasks in course/tasks.`);
