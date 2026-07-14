# Team Hub — Issue Backlog (27)

One issue per person. **Claim exactly one**, build it, open a PR.

**Legend:** 🟢 easy · 🟡 medium · 🔴 hard · 🔧 = fix a bug · 🏗️ = build a feature

Before you start, read [`CONTRIBUTING.md`](./CONTRIBUTING.md) and study the reference
implementation in `src/app/features/example-notes/` — it shows the exact patterns we want.

Every feature lives in its own folder: `src/app/features/<slug>/`. **You only edit files
inside your own folder.** Do not edit `src/lib/features.ts`, the shared UI kit, or anyone
else's folder — that's how 27 people avoid stepping on each other.

Reuse the shared pieces:
- UI: `import { Card, Button, Badge, Input, PageHeader, EmptyState } from "@/components/ui"`
- Data: `import { members, announcements, events, polls, kudos, getMember } from "@/lib/mock-data"`
- Types: `import type { Member, ... } from "@/lib/types"`
- Persistence: `import { useLocalStorage } from "@/lib/useLocalStorage"`

Definition of done for **every** issue: `npm run lint`, `npm run typecheck`, `npm run test:run`,
and `npm run build` all pass, and your feature page no longer shows the "Not built yet" stub.

---

## People

### #1 Member Directory — 🟡 🏗️
**Files:** `src/app/features/member-directory/`
**Goal:** Replace the stub with a responsive grid of cards, one per member in `members`.
**Acceptance criteria:**
- Renders all 8 members.
- Each card shows name, role, team, and skills (skills as `Badge`s).
- Grid is 1 column on mobile, 2 on tablet, 3 on desktop (Tailwind `grid-cols-*`).
- Uses the shared `Card` component.
**Tests to add:** all member names render; a role is visible.
**Hints:** `members.map(...)`; Tailwind responsive prefixes `sm:` / `lg:`.

### #2 Member Search — 🟡 🔧
**Files:** `src/app/features/member-search/MemberSearch.tsx`
**Bug:** Search only matches the exact letter case ("Ada" works, "ada" doesn't).
**Fix it:** Make the filter case-insensitive.
**Done when:** you remove `.skip` from the "matches regardless of letter case" test and it passes. Don't change the test.
**Hints:** `String.prototype.toLowerCase()`.

### #3 Profile Card — 🟢 🏗️
**Files:** `src/app/features/profile-card/`
**Goal:** Show one member (use `members[0]`) in full.
**Acceptance criteria:**
- Avatar circle using the member's `avatarColor`, name, role, team, email.
- `skills` rendered as `Badge`s; `points` and `joinedAt` shown.
**Tests to add:** name, email and at least one skill render.

### #4 Edit Profile — 🟡 🏗️
**Files:** `src/app/features/edit-profile/`
**Goal:** A form (pre-filled from `members[0]`) to edit name, role and email.
**Acceptance criteria:**
- Inputs are controlled and start with the member's values.
- Validation: name required; email must contain `@`. Show errors via `Input`'s `error` prop.
- On valid submit, show the updated values (a summary or success message).
**Tests to add:** error shows for empty name; error shows for bad email; success on valid input.

### #5 Points Leaderboard — 🟡 🔧
**Files:** `src/app/features/leaderboard/Leaderboard.tsx`
**Bug:** The list is upside down — fewest points on top.
**Fix it:** Sort so the highest scorer is ranked #1.
**Done when:** remove `.skip` from the "ranks the highest scorer first" test and it passes.

### #6 Filter by Skill — 🟡 🏗️
**Files:** `src/app/features/skills-filter/`
**Goal:** Show every unique skill as a clickable chip; clicking filters the member list to those with that skill.
**Acceptance criteria:**
- Chips are derived from the data (no hard-coded skill list).
- Clicking a chip filters; clicking again (or a "clear") resets.
- Active chip is visually distinct.
**Tests to add:** clicking a skill narrows the visible members.
**Hints:** `new Set(members.flatMap(m => m.skills))`.

---

## Communication

### #7 Announcements Feed — 🟡 🏗️
**Files:** `src/app/features/announcements-feed/`
**Goal:** List `announcements` with pinned ones first.
**Acceptance criteria:**
- Pinned announcements appear before unpinned; pinned ones show a "Pinned" `Badge`.
- Each shows title, body, author name (via `getMember`), and a readable date.
**Tests to add:** a pinned item appears above an unpinned one; author name renders.

### #8 Post Announcement — 🟡 🏗️
**Files:** `src/app/features/create-announcement/`
**Goal:** A form (title + body) that adds an announcement to a list saved with `useLocalStorage`.
**Acceptance criteria:**
- Both fields required; empty submit is rejected.
- New announcement appears at the top of the list and survives a page reload.
**Tests to add:** submitting adds the announcement to the list.

### #9 Kudos Wall — 🟡 🏗️
**Files:** `src/app/features/kudos-wall/`
**Goal:** Show `kudos` as cards: "{from} → {to}: {message}" using member names.
**Acceptance criteria:** each kudos shows both names (via `getMember`) and the message; newest first.
**Tests to add:** a kudos message and both names render.

### #10 Give Kudos — 🟡 🏗️
**Files:** `src/app/features/give-kudos/`
**Goal:** A form to send kudos: pick a recipient (`<select>` of members) + a message; submit adds it to a list (`useLocalStorage`).
**Acceptance criteria:** recipient and non-empty message required; submitted kudos appears in the list.
**Tests to add:** sending a kudos shows it on screen.

### #11 Notifications Dropdown — 🟡 🏗️
**Files:** `src/app/features/notifications/`
**Goal:** A bell button showing an unread count; clicking opens a dropdown listing notifications (make up 3–4 in the component).
**Acceptance criteria:**
- Unread count badge is visible and correct.
- Dropdown toggles open/closed on click.
- A "Mark all read" action sets the count to 0.
**Tests to add:** dropdown hidden by default; opens on click; count clears on "mark all read".

### #12 Toast Messages — 🟡 🏗️
**Files:** `src/app/features/toast/`
**Goal:** A button that shows a temporary toast which auto-dismisses after ~3s. Multiple can stack.
**Acceptance criteria:** clicking shows a toast; it disappears on its own; clicking again can stack another.
**Tests to add:** toast appears after clicking the trigger.
**Hints:** `setTimeout` inside the handler; clean up with an id in state.

---

## Events

### #13 Upcoming Events — 🟡 🏗️
**Files:** `src/app/features/events-list/`
**Goal:** List `events` sorted by `startsAt` (soonest first).
**Acceptance criteria:** sorted ascending; each shows title, formatted date/time, location, and attendee count.
**Tests to add:** the earliest event renders before a later one.
**Hints:** `[...events].sort((a,b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())`.

### #14 Event RSVP — 🟡 🏗️
**Files:** `src/app/features/event-rsvp/`
**Goal:** For one event, a button toggles the current user (use `"m1"`) in/out of the attendee list and shows the live count.
**Acceptance criteria:** button reads "RSVP" / "Cancel RSVP"; count goes up and down accordingly.
**Tests to add:** clicking toggles the button label and the count.

### #15 Month Calendar — 🔴 🏗️
**Files:** `src/app/features/calendar/`
**Goal:** Render a month grid (pick July 2025) with weekday headers and day cells; days with an event are marked.
**Acceptance criteria:**
- 7 columns; correct number of day cells with correct leading blanks.
- A day that has an event (from `events`) is visually highlighted.
**Tests to add:** the day of a known event is marked.
**Hints:** `new Date(2025, 6, 1).getDay()` for the leading offset; `new Date(year, month+1, 0).getDate()` for days-in-month.

### #16 Event Countdown — 🟡 🏗️
**Files:** `src/app/features/countdown/`
**Goal:** A live countdown to the soonest upcoming event, updating every second (days / hours / minutes / seconds).
**Acceptance criteria:** shows all four units; updates on an interval; interval is cleared on unmount.
**Tests to add:** the four unit labels render.
**Hints:** `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, [])`.

---

## Engagement

### #17 Poll Widget — 🔴 🔧
**Files:** `src/app/features/poll/PollWidget.tsx`
**Bugs:** (1) percentages use the number of *options* as the total instead of total *votes*; (2) once you fix (1), a poll with zero votes divides by zero and shows `NaN%`.
**Fix it:** compute each bar as `votes / (sum of all votes)`, rounded; guard so it shows `0%` when there are no votes.
**Done when:** remove `.skip` from both tests and both pass. (Tip: fix bug 1 first, then watch bug 2's test start failing — that's the divide-by-zero to guard.)

### #18 Activity Feed — 🟡 🏗️
**Files:** `src/app/features/activity-feed/`
**Goal:** Merge `announcements`, `events` and `kudos` into a single timeline sorted newest-first, each row labelled with its type.
**Acceptance criteria:** all three sources appear; a type label/`Badge` distinguishes them; sorted by date descending.
**Tests to add:** at least one item from each source renders.

### #19 Team Stats — 🟡 🏗️
**Files:** `src/app/features/team-stats/`
**Goal:** Stat cards computed from the data: total members, total points, average points, and number of distinct teams.
**Acceptance criteria:** all four stats shown with correct values.
**Tests to add:** total members shows 8; total points is correct.
**Hints:** `members.reduce((sum, m) => sum + m.points, 0)`.

### #20 Goal Tracker — 🟡 🏗️
**Files:** `src/app/features/goal-tracker/`
**Goal:** A progress bar toward a team goal of 3000 points (sum of everyone's points), with the percentage shown.
**Acceptance criteria:** bar width reflects the percentage; percentage is clamped to a max of 100%.
**Tests to add:** the computed percentage text renders.

### #21 Task Board — 🔴 🏗️
**Files:** `src/app/features/task-board/`
**Goal:** Three columns — To Do / Doing / Done. Add a task to To Do; move a task left/right between columns. Persist with `useLocalStorage`.
**Acceptance criteria:** adding creates a card in To Do; move buttons shift it between columns; state survives reload.
**Tests to add:** a new task appears; moving it changes its column.

---

## Components

### #22 Sortable Table — 🔴 🔧
**Files:** `src/app/features/sortable-table/SortableTable.tsx`
**Bug:** Sorting reorders the shared `members` array in place (`.sort()` mutates!), corrupting every other feature that reads it.
**Fix it:** sort a *copy* so the shared data is never mutated.
**Done when:** remove `.skip` from the "does not mutate the shared members array" test and it passes.

### #23 Pagination — 🟡 🔧
**Files:** `src/app/features/pagination/Pagination.tsx`
**Bug:** Page 1 skips the first three members and the last members can't be reached — an off-by-one in the slice offset.
**Fix it:** page 1 should show members 1–3.
**Done when:** remove `.skip` from both tests and they pass.

### #24 FAQ Accordion — 🟡 🔧
**Files:** `src/app/features/accordion/Accordion.tsx`
**Bug:** Clicking one question opens *all* of them (a single boolean controls every item).
**Fix it:** track which item is open so only the clicked answer shows. Bonus: add `aria-expanded` to each question button.
**Done when:** remove `.skip` from the "only opens the clicked item" test and it passes.

### #25 Accessible Modal — 🔴 🏗️
**Files:** `src/app/features/modal/`
**Goal:** A button that opens a dialog with a dimmed overlay.
**Acceptance criteria:**
- Closes on the Escape key and on overlay click.
- Has `role="dialog"` and `aria-modal="true"`; focus moves into the dialog on open.
**Tests to add:** dialog hidden by default; opens on click; closes on Escape.
**Hints:** listen for `keydown` in a `useEffect` while open; clean up the listener.

---

## Settings

### #26 Settings — 🟡 🏗️
**Files:** `src/app/features/settings/`
**Goal:** A preferences panel — e.g. a "compact mode" toggle and a display-name field — saved with `useLocalStorage`.
**Acceptance criteria:** toggling/typing updates state; values persist across reload.
**Tests to add:** toggling a switch flips its state.

### #27 Avatar — 🟢 🏗️
**Files:** `src/app/features/avatar/`
**Goal:** An `Avatar` that shows a member's initials on a colored circle (use `avatarColor`). Render a few members' avatars on the page.
**Acceptance criteria:** initials are the first letters of first + last name (e.g. "Ada Ochieng" → "AO"); accepts a `size` prop.
**Tests to add:** renders "AO" for Ada Ochieng.
