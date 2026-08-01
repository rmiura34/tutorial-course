# Training Lab instructions

These instructions apply when working inside `training-lab/`.

- Read the active `course/tasks/day-XX.md` before changing code.
- Trace requests from route to controller, service, model, database, view, and test.
- Use SQLite unless the active task explicitly requires another database.
- Run `php artisan test` after PHP changes and `vendor/bin/pint --test` before a Pull Request.
- Never add `.env` to Git or print secrets.
- Do not remove or skip a failing test just to make the suite green.
- Keep fixes scoped to the active Day. Explain the root cause before implementing.
- For Day 18–20, reproduce the reported behavior before changing `CompanyImportService`.
