import { copyFile, mkdir, open, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lab = resolve(root, "training-lab");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

function run(command, args, cwd = root, environment = {}) {
  console.log(`\n→ ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    env: { ...process.env, ...environment },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function available(command) {
  return spawnSync(command, ["--version"], { stdio: "ignore" }).status === 0;
}

try {
  await readFile(resolve(lab, ".env"), "utf8");
} catch {
  await copyFile(resolve(lab, ".env.example"), resolve(lab, ".env"));
}

await mkdir(resolve(lab, "database"), { recursive: true });
const database = await open(resolve(lab, "database", "database.sqlite"), "a");
await database.close();

run("composer", ["install", "--no-interaction"], lab);
const labPackageManager = available(pnpm) ? pnpm : npm;
run(
  labPackageManager,
  ["install", "--ignore-scripts"],
  lab,
  labPackageManager === pnpm ? { CI: "true" } : {},
);
run("php", ["artisan", "key:generate", "--force"], lab);
run("php", ["artisan", "migrate:fresh", "--seed", "--force"], lab);
run(labPackageManager, ["run", "build"], lab);
run(process.execPath, ["--experimental-strip-types", "scripts/generate-course-tasks.mjs"], root);

console.log(`
Learner workspace is ready.

Start both applications:
  npm run learner:start

Then open:
  Course site   http://localhost:3000
  Laravel lab  http://localhost:8000
`);
