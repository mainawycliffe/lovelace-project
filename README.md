# Team Hub

A small internal team portal — a dashboard with 27 features (member directory, announcements,
events, polls, and more). It's the codebase for a hands-on workshop where a cohort builds one
product together, one issue each.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, tested with
**Vitest + React Testing Library**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command              | What it does                          |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start the dev server                  |
| `npm run build`      | Production build                      |
| `npm run lint`       | ESLint                                |
| `npm run typecheck`  | TypeScript, no emit                   |
| `npm run test`       | Vitest in watch mode                  |
| `npm run test:run`   | Vitest once (what CI runs)            |

## For contributors (the workshop)

1. Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** — the team workflow and the no-AI rule.
2. Pick your issue from **[ISSUES.md](./ISSUES.md)** (or the GitHub issues) and claim it.
3. Study the reference feature in `src/app/features/example-notes/`.
4. Build in your own folder, open a PR, get it green and reviewed, merge.

## Project structure

```
src/
  app/
    layout.tsx                 # wraps every page in the shared AppShell
    page.tsx                   # dashboard: the 27-feature grid
    features/
      example-notes/           # ⭐ reference implementation — study this
      <slug>/                  # one folder per feature (one per issue)
        page.tsx
        <Component>.tsx
        <Component>.test.tsx
  components/
    AppShell.tsx               # sidebar + layout (shared, do not edit)
    FeatureStub.tsx            # the "Not built yet" placeholder
    ui/                        # shared UI kit (Card, Button, Badge, Input, …)
  lib/
    types.ts                   # shared domain types (the "contract")
    mock-data.ts               # the app's data (read-only)
    features.ts                # the 27-feature registry (drives nav + dashboard)
    useLocalStorage.ts         # shared persistence hook
    cn.ts                      # className helper
.github/workflows/ci.yml       # lint → typecheck → test → build on every PR
```

## CI/CD

Every pull request runs **lint → typecheck → test → build** (`.github/workflows/ci.yml`).
Turn on branch protection for `main` and mark the `verify` check as required so nothing merges
red. See [`docs/MAINTAINER.md`](./docs/MAINTAINER.md) for setup.
