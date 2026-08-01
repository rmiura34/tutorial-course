import { spawn, spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lab = resolve(root, "training-lab");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

function available(command) {
  return spawnSync(command, ["--version"], { stdio: "ignore" }).status === 0;
}

const packageManager = available(npm) ? npm : pnpm;

const processes = [
  spawn(packageManager, ["run", "dev"], { cwd: root, stdio: "inherit" }),
  spawn("php", ["artisan", "serve", "--host=0.0.0.0", "--port=8000"], {
    cwd: lab,
    stdio: "inherit",
  }),
];

console.log(`
Starting the learner workspace:
  Course site   http://localhost:3000
  Laravel lab  http://localhost:8000

Press Ctrl+C once to stop both.
`);

let stopping = false;
function stop(exitCode = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of processes) child.kill("SIGTERM");
  setTimeout(() => process.exit(exitCode), 300);
}

for (const child of processes) {
  child.on("exit", (code, signal) => {
    if (!stopping && code && !signal) stop(code);
  });
  child.on("error", (error) => {
    console.error(error.message);
    stop(1);
  });
}

process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
