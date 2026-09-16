import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));

function course(...args) {
  const result = spawnSync("npm", ["run", "course", "--", ...args], {
    cwd: root,
    encoding: "utf8",
  });
  assert.ifError(result.error);
  return result;
}

test("documented Day 01 command displays the lesson through the npm script", () => {
  const result = course("show", "1");
  assert.equal(result.status, 0, result.stderr);
  for (const content of ["Lesson 01: 作業場所をひらこう", "学習目標", "exercises/01-profile-card", "pwd", "完了チェック", "理解確認クイズ", "/lessons/setup"]) {
    assert.ok(result.stdout.includes(content), content);
  }
  const padded = course("show", "01");
  assert.equal(padded.status, 0, padded.stderr);
  assert.ok(padded.stdout.includes("Lesson 01: 作業場所をひらこう"));
});

test("lists and displays all eight lessons", () => {
  const list = course("list");
  assert.equal(list.status, 0, list.stderr);
  for (let number = 1; number <= 8; number += 1) {
    const label = String(number).padStart(2, "0");
    assert.match(list.stdout, new RegExp(`^${label}  `, "m"));
    const result = course("show", String(number));
    assert.equal(result.status, 0, result.stderr);
    assert.ok(result.stdout.includes(`Lesson ${label}:`));
  }
});

test("shows help by default and on request", () => {
  for (const args of [[], ["help"], ["--help"], ["-h"]]) {
    const result = course(...args);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /使い方/);
  }
});

test("invalid commands and lesson numbers fail with actionable guidance", () => {
  for (const args of [["show"], ["show", "0"], ["show", "9"], ["show", "1x"], ["show", "1.0"], ["show", "-1"], ["show", "1", "extra"], ["unknown"], ["list", "extra"], ["help", "extra"]]) {
    const result = course(...args);
    assert.equal(result.status, 1, JSON.stringify(args));
    assert.match(result.stderr, /npm run course/);
    assert.doesNotMatch(result.stderr, /MODULE_NOT_FOUND|Missing script/);
  }
});
