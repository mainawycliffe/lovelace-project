# Contributing to Team Hub

Welcome! For the next 3 hours you're a software team shipping **one product** together.
This guide is how real teams work: claim a task, branch, build, get it reviewed, merge.

## The one rule about AI

**Do not use AI tools** (ChatGPT, Copilot, Claude, etc.) for this workshop. You *may* use
Google, MDN, the React docs, Stack Overflow, and each other. The goal is to build the muscle
of reading docs and figuring things out — that skill is what makes you a strong engineer.

## Ground rules that keep 27 people from colliding

1. **You own one issue and one folder.** Everything you write goes inside
   `src/app/features/<your-slug>/`. If you find yourself editing a file outside that folder,
   stop and ask — you're probably about to cause a merge conflict for someone else.
2. **Never edit shared files:** `src/lib/features.ts`, `src/lib/mock-data.ts`,
   `src/lib/types.ts`, `src/components/ui/*`, `src/components/AppShell.tsx`. They're already
   done. *Read* them, *import* from them, don't change them.
3. **Reuse, don't rebuild.** Use the shared UI kit and hooks (see below) instead of writing
   your own buttons, cards, or localStorage code. That's what makes it feel like one product.

## Setup (once)

```bash
npm install
npm run dev      # open http://localhost:3000
```

The homepage lists all 27 features. Yours currently shows a "Not built yet" placeholder.

## Study the example first

Open **`src/app/features/example-notes/`**. It's a complete, tested feature that shows the
patterns we expect: a `page.tsx`, a `"use client"` component, shared UI, the
`useLocalStorage` hook, an empty state, and a real test file. Copy its style.

## The workflow (do this for your issue)

1. **Claim it.** On GitHub, assign the issue to yourself so nobody else takes it.
2. **Branch off `main`:**
   ```bash
   git checkout main && git pull
   git checkout -b feat/<your-slug>      # e.g. feat/member-directory
   ```
3. **Build it** in your folder. Read your issue in [`ISSUES.md`](./ISSUES.md) for the exact
   acceptance criteria.
4. **Run the checks locally** — these are the same four the CI runs:
   ```bash
   npm run lint
   npm run typecheck
   npm run test:run
   npm run build
   ```
5. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: build member directory"   # or "fix: ..." for bug issues
   git push -u origin feat/<your-slug>
   ```
6. **Open a Pull Request** into `main`. Fill in the PR template. Link your issue with
   "Closes #<number>".
7. **CI runs automatically.** If it's red, click the failing check, read the error, fix it,
   push again. A red PR won't be merged.
8. **Get reviewed.** A reviewer will comment. Respond to every comment — either make the
   change and push, or reply explaining why. This back-and-forth *is* the job.
9. **Merge** once it's approved and green. Then pull `main` to see your feature live in the app. 🎉

## What the shared toolbox gives you

```ts
// UI components — use these, don't reinvent them
import { Card, Button, Badge, Input, PageHeader, EmptyState } from "@/components/ui";

// The app's data (treat it as read-only)
import { members, announcements, events, polls, kudos, getMember } from "@/lib/mock-data";

// Types
import type { Member, Announcement, TeamEvent, Poll, Kudos } from "@/lib/types";

// Persist state to localStorage (survives reloads)
import { useLocalStorage } from "@/lib/useLocalStorage";
```

## Definition of Done

- [ ] Feature works in `npm run dev` and the "Not built yet" stub is gone.
- [ ] `lint`, `typecheck`, `test:run`, and `build` all pass locally.
- [ ] You added at least one meaningful test (bug fixes: the previously-skipped test now passes).
- [ ] Only files inside your feature folder changed.
- [ ] PR is open, links its issue, and CI is green.

## Common gotchas

- **"useState is not defined" / hooks error** → add `"use client";` at the top of any
  component that uses state, effects, or event handlers.
- **Hydration / localStorage errors** → use the shared `useLocalStorage` hook instead of
  touching `localStorage` directly.
- **Lint fails on an unused variable** → remove it; CI treats lint errors as blocking.

Stuck for more than ~15 minutes? Ask. Pairing and asking questions is normal team behaviour.
