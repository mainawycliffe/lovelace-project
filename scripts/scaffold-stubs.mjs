// One-off scaffolder that created the "build" feature stubs.
// Kept in the repo for reference; you don't need to run it again.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** [issue, slug, title, subtitle] */
const buildFeatures = [
  [1, "member-directory", "Member Directory", "Everyone on the team."],
  [3, "profile-card", "Profile Card", "A single member in detail."],
  [4, "edit-profile", "Edit Profile", "Update a member's details."],
  [6, "skills-filter", "Filter by Skill", "Find members by what they do."],
  [7, "announcements-feed", "Announcements", "What's new on the team."],
  [8, "create-announcement", "Post Announcement", "Share something with the team."],
  [9, "kudos-wall", "Kudos Wall", "Shout-outs between teammates."],
  [10, "give-kudos", "Give Kudos", "Recognise a teammate."],
  [11, "notifications", "Notifications", "Stay up to date."],
  [12, "toast", "Toast Messages", "Quick, temporary feedback."],
  [13, "events-list", "Upcoming Events", "What's happening soon."],
  [14, "event-rsvp", "Event RSVP", "Let people know you're coming."],
  [15, "calendar", "Month Calendar", "Events laid out by day."],
  [16, "countdown", "Event Countdown", "Time until the next event."],
  [18, "activity-feed", "Activity Feed", "Everything that just happened."],
  [19, "team-stats", "Team Stats", "The team at a glance."],
  [20, "goal-tracker", "Goal Tracker", "Progress toward a team goal."],
  [21, "task-board", "Task Board", "Track work across columns."],
  [25, "modal", "Accessible Modal", "A focus-trapping dialog."],
  [26, "settings", "Settings", "Your preferences."],
  [27, "avatar", "Avatar", "A picture, or initials."],
];

for (const [issue, slug, title, subtitle] of buildFeatures) {
  const dir = join(root, "src", "app", "features", slug);
  mkdirSync(dir, { recursive: true });

  const page = `import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #${issue}: ${title}
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function ${toPascal(slug)}Page() {
  return (
    <div>
      <PageHeader title="${title}" subtitle="${subtitle}" />
      <FeatureStub slug="${slug}" />
    </div>
  );
}
`;
  writeFileSync(join(dir, "page.tsx"), page);

  const test = `import { describe, it } from "vitest";

// Issue #${issue}: ${title}
// TODO: replace these placeholders with real tests. See the reference test at
// src/app/features/example-notes/NotesBoard.test.tsx for how.
describe("${title}", () => {
  it.todo("renders its main content");
  it.todo("responds to the user");
});
`;
  writeFileSync(join(dir, `${toPascal(slug)}.test.tsx`), test);
}

function toPascal(slug) {
  return slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");
}

console.log(`Scaffolded ${buildFeatures.length} feature stubs.`);
