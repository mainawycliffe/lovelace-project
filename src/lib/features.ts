// ─────────────────────────────────────────────────────────────────────────────
// FEATURE REGISTRY — the backlog for Team Hub.
//
// This is a SHARED file. Do NOT edit it during the workshop. It is pre-populated
// with all 27 features so the sidebar and dashboard already list everything.
// You only implement the page inside YOUR feature's folder.
// ─────────────────────────────────────────────────────────────────────────────

export type Difficulty = "easy" | "medium" | "hard";
export type FeatureKind = "build" | "fix";
export type Category =
  | "People"
  | "Communication"
  | "Events"
  | "Engagement"
  | "Components"
  | "Settings";

export interface Feature {
  /** Issue number — matches the GitHub issue and ISSUES.md. */
  issue: number;
  /** URL slug and folder name: src/app/features/<slug>/page.tsx */
  slug: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  /** "build" = implement a stub. "fix" = the feature exists but has a bug. */
  kind: FeatureKind;
}

export const CATEGORY_ORDER: Category[] = [
  "People",
  "Communication",
  "Events",
  "Engagement",
  "Components",
  "Settings",
];

export const features: Feature[] = [
  // People
  { issue: 1, slug: "member-directory", title: "Member Directory", description: "List every team member in a responsive card grid.", category: "People", difficulty: "medium", kind: "build" },
  { issue: 2, slug: "member-search", title: "Member Search", description: "Search members by name — but the search is buggy.", category: "People", difficulty: "medium", kind: "fix" },
  { issue: 3, slug: "profile-card", title: "Profile Card", description: "Show a single member's full profile.", category: "People", difficulty: "easy", kind: "build" },
  { issue: 4, slug: "edit-profile", title: "Edit Profile Form", description: "A validated form for editing a member's details.", category: "People", difficulty: "medium", kind: "build" },
  { issue: 5, slug: "leaderboard", title: "Points Leaderboard", description: "Rank members by points — the sort order is wrong.", category: "People", difficulty: "medium", kind: "fix" },
  { issue: 6, slug: "skills-filter", title: "Filter by Skill", description: "Filter the directory by clickable skill chips.", category: "People", difficulty: "medium", kind: "build" },

  // Communication
  { issue: 7, slug: "announcements-feed", title: "Announcements Feed", description: "List announcements, pinned ones first.", category: "Communication", difficulty: "medium", kind: "build" },
  { issue: 8, slug: "create-announcement", title: "Post Announcement", description: "A form that adds an announcement (saved to localStorage).", category: "Communication", difficulty: "medium", kind: "build" },
  { issue: 9, slug: "kudos-wall", title: "Kudos Wall", description: "Show shout-outs between teammates.", category: "Communication", difficulty: "medium", kind: "build" },
  { issue: 10, slug: "give-kudos", title: "Give Kudos", description: "A form to send kudos to a teammate.", category: "Communication", difficulty: "medium", kind: "build" },
  { issue: 11, slug: "notifications", title: "Notifications Dropdown", description: "A bell icon with a dropdown of notifications.", category: "Communication", difficulty: "medium", kind: "build" },
  { issue: 12, slug: "toast", title: "Toast Messages", description: "Trigger temporary toast notifications.", category: "Communication", difficulty: "medium", kind: "build" },

  // Events
  { issue: 13, slug: "events-list", title: "Upcoming Events", description: "List events sorted by start date.", category: "Events", difficulty: "medium", kind: "build" },
  { issue: 14, slug: "event-rsvp", title: "Event RSVP", description: "Toggle attendance and show the attendee count.", category: "Events", difficulty: "medium", kind: "build" },
  { issue: 15, slug: "calendar", title: "Month Calendar", description: "Render a month grid with events on their days.", category: "Events", difficulty: "hard", kind: "build" },
  { issue: 16, slug: "countdown", title: "Event Countdown", description: "Live countdown to the next event.", category: "Events", difficulty: "medium", kind: "build" },

  // Engagement
  { issue: 17, slug: "poll", title: "Poll Widget", description: "Vote and see results — the percentages are broken.", category: "Engagement", difficulty: "hard", kind: "fix" },
  { issue: 18, slug: "activity-feed", title: "Activity Feed", description: "Merge announcements, events and kudos into one timeline.", category: "Engagement", difficulty: "medium", kind: "build" },
  { issue: 19, slug: "team-stats", title: "Team Stats", description: "Summary stat cards computed from the data.", category: "Engagement", difficulty: "medium", kind: "build" },
  { issue: 20, slug: "goal-tracker", title: "Goal Tracker", description: "A progress bar toward a team points goal.", category: "Engagement", difficulty: "medium", kind: "build" },
  { issue: 21, slug: "task-board", title: "Task Board", description: "A three-column board with tasks (saved to localStorage).", category: "Engagement", difficulty: "hard", kind: "build" },

  // Components
  { issue: 22, slug: "sortable-table", title: "Sortable Table", description: "A members table you can sort by column — sorting is buggy.", category: "Components", difficulty: "hard", kind: "fix" },
  { issue: 23, slug: "pagination", title: "Pagination", description: "Page through the member list — the paging is off.", category: "Components", difficulty: "medium", kind: "fix" },
  { issue: 24, slug: "accordion", title: "FAQ Accordion", description: "Expand/collapse FAQ items — it misbehaves.", category: "Components", difficulty: "medium", kind: "fix" },
  { issue: 25, slug: "modal", title: "Accessible Modal", description: "A dialog that traps focus and closes on Escape.", category: "Components", difficulty: "hard", kind: "build" },

  // Settings
  { issue: 26, slug: "settings", title: "Settings", description: "Preferences panel with values saved to localStorage.", category: "Settings", difficulty: "medium", kind: "build" },
  { issue: 27, slug: "avatar", title: "Avatar", description: "An avatar that falls back to initials.", category: "Settings", difficulty: "easy", kind: "build" },
];

export function featureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}

export function featuresByCategory(category: Category): Feature[] {
  return features.filter((f) => f.category === category);
}
