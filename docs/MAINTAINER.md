# Maintainer / Facilitator Guide

Everything you (the reviewer) need to run the 3-hour session.

## 1. Push the repo to GitHub

```bash
# from the project root
git add .
git commit -m "chore: Team Hub starter"
gh repo create <org>/team-hub --public --source=. --push
# or create the repo in the UI and: git remote add origin … && git push -u origin main
```

## 2. Protect `main` (so nothing merges red)

GitHub → **Settings → Branches → Add branch ruleset** (or "Add rule") for `main`:

- ✅ Require a pull request before merging
- ✅ Require approvals: **1** (that's you)
- ✅ Require status checks to pass → select **`verify`** (the CI job)
- ✅ Require branches to be up to date before merging

Now every PR must be green **and** approved before it can merge.

## 3. Create the 27 issues (one command)

```bash
gh auth login          # if you haven't
node scripts/create-github-issues.mjs --dry   # preview
node scripts/create-github-issues.mjs         # create them
```

Run this on a fresh repo with no existing issues so GitHub's issue numbers line up with the
`#N` in [`ISSUES.md`](../ISSUES.md). Students **assign themselves** to claim one.

## 4. (Optional but recommended) Vercel preview deployments

Import the repo at [vercel.com/new](https://vercel.com/new). Vercel posts a **preview URL on
every PR**, so reviewing a frontend change is: click the link, see it work. No config needed
for a standard Next.js app.

## 5. Running the session

- **Kickoff (10 min):** demo the running app, show the dashboard and the `example-notes`
  reference, walk through the workflow in `CONTRIBUTING.md`, state the no-AI rule.
- **Claiming:** each student assigns themselves one issue. 27 issues for 27 people — the
  6 🔧 "fix" issues are great for anyone who prefers reading code to writing from scratch;
  the 🟢 easy ones (#3, #27) are good confidence-builders.
- **Build (≈2 hrs):** they work on their branch. Circulate. The most common blockers are
  missing `"use client"` and forgetting to run the checks locally.
- **Review (rolling):** review PRs as they open — don't batch them to the end. Because each
  PR touches only one folder, they never conflict and you can merge in any order.

## 6. Reviewing efficiently

For each PR, check:
1. CI is green (lint/typecheck/test/build) and the preview looks right.
2. Only their feature folder changed (reject edits to shared files — that's the guardrail).
3. They used the shared UI/data instead of reinventing it.
4. There's a real test, not just the `it.todo` placeholders.
5. For 🔧 fix issues: the previously-skipped test was un-skipped and passes.

Leave at least one comment even on good PRs — responding to review is part of what you want
them to practice. Approve + merge when green.

## 7. If someone finishes early

- Pick up an unclaimed issue, or
- Review a teammate's PR and leave constructive comments, or
- Add a second test / an empty state / keyboard accessibility to their feature.

## Difficulty spread (for balancing assignments)

- 🟢 **easy (2):** #3 Profile Card, #27 Avatar
- 🔴 **hard (5):** #15 Calendar, #17 Poll, #21 Task Board, #22 Sortable Table, #25 Modal
- 🟡 **medium (20):** everything else
- 🔧 **bug fixes (6):** #2, #5, #17, #22, #23, #24 — each ships a failing (skipped) test to un-skip
