# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds Laravel backend code: controllers, models, actions, jobs, and policies.
- `resources/js/` contains the Inertia + React frontend; `resources/css/` holds shared styles.
- `routes/` defines HTTP entry points (`web.php`, `settings.php`, `console.php`).
- `database/` stores migrations, seeders, and factories; `tests/` contains Pest feature and unit tests.
- `public/` is the web root for built assets; `storage/` keeps runtime files and logs.

## Build, Test, and Development Commands
- `composer setup` installs PHP/Node deps, prepares `.env`, migrates, and builds assets.
- `composer dev` runs the app, queue listener, and Vite together for local development.
- `npm run dev` starts the frontend dev server; `npm run build` creates production assets.
- `composer test` runs the repo checks: config clear, Pint, PHPStan, then Pest.
- `npm run lint:check`, `npm run format:check`, `npm run types:check` verify JS/TS quality.

## Coding Style & Naming Conventions
- Use 4-space indentation for PHP/JS/TS; YAML uses 2 spaces. Keep files LF and UTF-8.
- Follow Laravel/Pest conventions: `StudlyCase` for classes, `camelCase` for methods/vars, `snake_case` for DB fields.
- Keep React components and page files descriptive, e.g. `resources/js/pages/settings/profile.tsx`.
- Format PHP with Pint and JS/TS with ESLint + Prettier; avoid manual formatting drift.

## Testing Guidelines
- Place feature tests in `tests/Feature/` and pure logic tests in `tests/Unit/`.
- Name tests by behavior, e.g. `it('updates the profile')` or `test_user_can_reset_password()`.
- Prefer Pest assertions and keep tests focused on one outcome per case.
- Run `composer test` before opening a PR; add targeted test runs when changing one area.

## Commit & Pull Request Guidelines
- No Git history is available in this workspace, so follow clear conventional commits: `feat:`, `fix:`, `refactor:`, `test:`.
- Keep PRs small and scoped; include a summary, test notes, and screenshots for UI changes.
- Link related issues or tasks, and call out any schema, env, or deployment impact.

## Security & Configuration Tips
- Never commit `.env` or secrets. Use `.env.example` as the template.
- Review auth, file upload, and route changes carefully; this repo includes Fortify and passkey flows.
