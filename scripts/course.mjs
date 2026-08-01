import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = resolve(root, "course", "tasks", "index.json");
const { tasks } = JSON.parse(await readFile(indexPath, "utf8"));
const cliArguments = process.argv.slice(2).filter((argument) => argument !== "--");
const [command = "help", dayInput] = cliArguments;

function taskFor(value) {
  const day = Number(value);
  const task = tasks.find((item) => item.day === day);
  if (!task) {
    console.error(`Day must be a number from 1 to ${tasks.length}.`);
    process.exit(1);
  }
  return task;
}

function git(args, options = {}) {
  return spawnSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: options.stdio ?? "pipe",
  });
}

function printTask(task) {
  const day = String(task.day).padStart(2, "0");
  console.log(`\nDay ${day}: ${task.title}`);
  console.log(`Branch: ${task.branch}`);
  console.log(`Workspace: ${task.workspace}`);
  console.log(`Goal: ${task.goal}`);
  console.log(`Task file: ${task.taskFile}`);
  console.log("\nStart:");
  console.log(`  npm run course -- start ${task.day}`);
  console.log("\nCodex kickoff:");
  console.log(task.kickoffPrompt);
}

if (command === "list") {
  for (const task of tasks) {
    console.log(`${String(task.day).padStart(2, "0")}  ${task.title}  [${task.branch}]`);
  }
} else if (command === "show") {
  printTask(taskFor(dayInput));
} else if (command === "prompt") {
  console.log(taskFor(dayInput).kickoffPrompt);
} else if (command === "start") {
  const task = taskFor(dayInput);
  const status = git(["status", "--porcelain"]);
  if (status.status !== 0) {
    console.error(status.stderr || "Could not inspect Git status.");
    process.exit(1);
  }
  if (status.stdout.trim()) {
    console.error("Start stopped: commit or stash the current changes first. Nothing was changed.");
    process.exit(1);
  }

  const exists = git(["show-ref", "--verify", "--quiet", `refs/heads/${task.branch}`]).status === 0;
  const switched = exists
    ? git(["switch", task.branch], { stdio: "inherit" })
    : git(["switch", "-c", task.branch], { stdio: "inherit" });
  if (switched.status !== 0) process.exit(switched.status ?? 1);

  const day = String(task.day).padStart(2, "0");
  const logDirectory = resolve(root, "learning-log", `day-${day}`);
  const planPath = resolve(logDirectory, "plan.md");
  await mkdir(logDirectory, { recursive: true });
  await copyFile(resolve(root, task.taskFile), resolve(logDirectory, "TASK.md"));
  await writeFile(
    planPath,
    `# Day ${day} plan\n\n## Goal\n\n${task.goal}\n\n## Task checklist\n\n- [ ] Ask Codex to read the task and inspect the current state\n- [ ] Record evidence before changing code\n- [ ] Complete the scoped implementation or investigation\n- [ ] Run the required checks\n- [ ] Review the diff and prepare the Pull Request\n\n## Evidence\n\n- Commands:\n- Files inspected:\n- Test results:\n\n## AI decisions\n\n- Adopted:\n- Rejected:\n- Reason:\n`,
    { flag: "wx" },
  ).catch((error) => {
    if (error.code !== "EEXIST") throw error;
  });

  console.log(`\nDay ${day} is ready on ${task.branch}.`);
  console.log(`Read ${task.taskFile} and learning-log/day-${day}/plan.md.`);
  console.log("\nPaste this into Codex:\n");
  console.log(task.kickoffPrompt);
} else if (command === "check") {
  const task = taskFor(dayInput);
  const branch = git(["branch", "--show-current"]);
  const day = String(task.day).padStart(2, "0");
  const correctBranch = branch.stdout.trim() === task.branch;
  let planExists = true;
  try {
    await readFile(resolve(root, "learning-log", `day-${day}`, "plan.md"), "utf8");
  } catch {
    planExists = false;
  }

  console.log(`${correctBranch ? "✓" : "✗"} Branch: ${branch.stdout.trim() || "(unknown)"}`);
  console.log(`${planExists ? "✓" : "✗"} learning-log/day-${day}/plan.md`);
  console.log("\nManual completion checks:");
  for (const check of task.checks) console.log(`- [ ] ${check}`);
  if (!correctBranch || !planExists) process.exitCode = 1;
} else {
  console.log(`Tutorial Course task runner

Usage:
  npm run course -- list
  npm run course -- show <day>
  npm run course -- start <day>
  npm run course -- prompt <day>
  npm run course -- check <day>`);
}
