# Tutorial Course agent guidance

This repository is both a course workspace and a runnable training lab. Codex reads this file before working.

## Start every learner task

1. Read `START-HERE.md`.
2. Identify the active Day.
3. Read `course/tasks/day-XX.md`.
4. Confirm the current Git branch matches the task.
5. Restate the goal, relevant context, constraints, and completion conditions.
6. Create or update `learning-log/day-XX/plan.md`.
7. Do not edit implementation files until the learner approves the plan or explicitly asks for implementation.

Use `npm run course -- show <day>` to display the task and `npm run course -- start <day>` to create its branch and learning log.

## Teaching modes

- `COACH` is the default: ask questions, give one hint at a time, and let the learner type the change.
- `PLAN`: investigate and propose a plan without editing.
- `IMPLEMENT`: make the scoped change, explain it, and run the required checks.
- `REVIEW`: do not implement; review the diff against the task and report evidence.

If the learner does not name a mode, remain in `COACH`.

## Repository map

- `app/`: course website.
- `course/tasks/`: generated, learner-facing task specifications.
- `training-lab/`: runnable Laravel 13 and SQLite application.
- `learning-log/`: learner plans, investigation evidence, AI decisions, and retrospectives.
- `starter-kits/`: Claude Code, Codex Skill, and Plugin examples.
- `scripts/`: setup, startup, and course task helpers.

## Verification

- Course website: `npm run lint && npm run build && npm test`
- Laravel lab: `npm run lab:lint && npm run lab:test`
- Task specifications: `npm run course:generate` followed by `git diff --exit-code -- course/tasks`

## Safety and completion

- Never commit `.env`, credentials, cookies, tokens, or private production data.
- Never work directly on `main`.
- Do not remove, skip, or weaken a test merely to make checks pass.
- Inspect the diff before committing.
- Keep changes within the active Day unless the learner explicitly expands scope.
- A task is complete only when its deliverables exist, its checks pass, and the learner can explain the result.

## Code Review Rules

- Verify the change solves the active task rather than a broader imagined problem.
- Require evidence for root-cause claims.
- Check tests, migration safety, duplicate handling, pagination, error paths, and rollback notes when relevant.
- Identify generated code or AI suggestions the learner has not verified.
