// Bulk-create the 27 GitHub issues from the registry using the `gh` CLI.
//
// Prerequisites:
//   • `gh auth login` (GitHub CLI authenticated)
//   • run from inside the repo, AFTER pushing it to GitHub
//   • the repo should have NO existing issues, so GitHub's issue numbers line
//     up 1:1 with the #N in ISSUES.md (they are created in order below)
//
// Usage:
//   node scripts/create-github-issues.mjs           # create the issues
//   node scripts/create-github-issues.mjs --dry     # print what it would do
//
import { execFileSync } from "node:child_process";

const dryRun = process.argv.includes("--dry");

/** [issue, slug, title, difficulty, kind, category] */
const rows = [
  [1, "member-directory", "Member Directory", "medium", "build", "People"],
  [2, "member-search", "Member Search", "medium", "fix", "People"],
  [3, "profile-card", "Profile Card", "easy", "build", "People"],
  [4, "edit-profile", "Edit Profile Form", "medium", "build", "People"],
  [5, "leaderboard", "Points Leaderboard", "medium", "fix", "People"],
  [6, "skills-filter", "Filter by Skill", "medium", "build", "People"],
  [7, "announcements-feed", "Announcements Feed", "medium", "build", "Communication"],
  [8, "create-announcement", "Post Announcement", "medium", "build", "Communication"],
  [9, "kudos-wall", "Kudos Wall", "medium", "build", "Communication"],
  [10, "give-kudos", "Give Kudos", "medium", "build", "Communication"],
  [11, "notifications", "Notifications Dropdown", "medium", "build", "Communication"],
  [12, "toast", "Toast Messages", "medium", "build", "Communication"],
  [13, "events-list", "Upcoming Events", "medium", "build", "Events"],
  [14, "event-rsvp", "Event RSVP", "medium", "build", "Events"],
  [15, "calendar", "Month Calendar", "hard", "build", "Events"],
  [16, "countdown", "Event Countdown", "medium", "build", "Events"],
  [17, "poll", "Poll Widget", "hard", "fix", "Engagement"],
  [18, "activity-feed", "Activity Feed", "medium", "build", "Engagement"],
  [19, "team-stats", "Team Stats", "medium", "build", "Engagement"],
  [20, "goal-tracker", "Goal Tracker", "medium", "build", "Engagement"],
  [21, "task-board", "Task Board", "hard", "build", "Engagement"],
  [22, "sortable-table", "Sortable Table", "hard", "fix", "Components"],
  [23, "pagination", "Pagination", "medium", "fix", "Components"],
  [24, "accordion", "FAQ Accordion", "medium", "fix", "Components"],
  [25, "modal", "Accessible Modal", "hard", "build", "Components"],
  [26, "settings", "Settings", "medium", "build", "Settings"],
  [27, "avatar", "Avatar", "easy", "build", "Settings"],
];

function gh(args) {
  if (dryRun) {
    console.log("gh " + args.join(" "));
    return;
  }
  execFileSync("gh", args, { stdio: "inherit" });
}

// Ensure the labels exist (ignore "already exists" errors).
const labels = [
  ["easy", "0e8a16"],
  ["medium", "fbca04"],
  ["hard", "d93f0b"],
  ["build", "5319e7"],
  ["fix", "b60205"],
  ["good first issue", "7057ff"],
];
for (const [name, color] of labels) {
  try {
    gh(["label", "create", name, "--color", color, "--force"]);
  } catch {
    /* label may already exist */
  }
}

for (const [issue, slug, title, difficulty, kind, category] of rows) {
  const labelArgs = [difficulty, kind];
  if (difficulty === "easy") labelArgs.push("good first issue");

  const body = [
    `**Category:** ${category}  ·  **Difficulty:** ${difficulty}  ·  **Type:** ${kind}`,
    "",
    `Full spec: see **#${issue}** in [ISSUES.md](../blob/main/ISSUES.md).`,
    "",
    `**Your folder:** \`src/app/features/${slug}/\``,
    "",
    "Read [CONTRIBUTING.md](../blob/main/CONTRIBUTING.md) before you start.",
    "Assign yourself to claim this issue.",
  ].join("\n");

  gh([
    "issue",
    "create",
    "--title",
    `[#${issue}] ${title}`,
    "--body",
    body,
    ...labelArgs.flatMap((l) => ["--label", l]),
  ]);
}

console.log(dryRun ? "\n(dry run — nothing created)" : "\nCreated 27 issues.");
