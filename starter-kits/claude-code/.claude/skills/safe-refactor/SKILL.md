---
name: safe-refactor
description: Use when planning or implementing a behavior-preserving Laravel refactor after the current behavior and tests have been established. Do not use for unapproved schema changes or broad rewrites.
---

# Safe Laravel refactoring

Before editing, produce:

1. Current behavior and evidence
2. Problem and root cause
3. Behavior that must not change
4. Files in scope and explicitly out of scope
5. Compatibility, database, and external-service impact
6. Test plan and baseline results
7. Rollback plan
8. Small implementation steps

Implement only the next approved step. After each step:

1. Show the exact diff.
2. Explain every changed line.
3. Run the narrowest relevant tests.
4. Record remaining risks.
5. Stop before starting the next step.

Never expose secrets, run destructive database commands without approval, remove tests to make CI pass, or rewrite unrelated code.

