// Shared seed data for Team Hub.
// Treat this as the app's "database". Features READ from here.
// Add fields carefully — other features rely on the existing shape (see types.ts).

import type { Member, Announcement, TeamEvent, Poll, Kudos } from "./types";

export const members: Member[] = [
  {
    id: "m1",
    name: "Ada Ochieng",
    role: "Frontend Engineer",
    team: "Engineering",
    email: "ada@teamhub.dev",
    avatarColor: "bg-rose-500",
    skills: ["React", "TypeScript", "CSS"],
    points: 420,
    joinedAt: "2023-01-15",
  },
  {
    id: "m2",
    name: "Brian Kamau",
    role: "Product Designer",
    team: "Design",
    email: "brian@teamhub.dev",
    avatarColor: "bg-amber-500",
    skills: ["Figma", "UX", "Prototyping"],
    points: 310,
    joinedAt: "2023-05-02",
  },
  {
    id: "m3",
    name: "Chelsea Wanjiru",
    role: "Product Manager",
    team: "Product",
    email: "chelsea@teamhub.dev",
    avatarColor: "bg-emerald-500",
    skills: ["Roadmapping", "Analytics", "Writing"],
    points: 500,
    joinedAt: "2022-11-20",
  },
  {
    id: "m4",
    name: "David Mwangi",
    role: "Backend Engineer",
    team: "Engineering",
    email: "david@teamhub.dev",
    avatarColor: "bg-sky-500",
    skills: ["Node", "PostgreSQL", "APIs"],
    points: 275,
    joinedAt: "2024-02-10",
  },
  {
    id: "m5",
    name: "Esther Njeri",
    role: "UX Researcher",
    team: "Design",
    email: "esther@teamhub.dev",
    avatarColor: "bg-violet-500",
    skills: ["Interviews", "Surveys", "Synthesis"],
    points: 190,
    joinedAt: "2024-06-01",
  },
  {
    id: "m6",
    name: "Felix Otieno",
    role: "DevOps Engineer",
    team: "Ops",
    email: "felix@teamhub.dev",
    avatarColor: "bg-teal-500",
    skills: ["Docker", "CI/CD", "AWS"],
    points: 360,
    joinedAt: "2023-08-14",
  },
  {
    id: "m7",
    name: "Grace Adhiambo",
    role: "Frontend Engineer",
    team: "Engineering",
    email: "grace@teamhub.dev",
    avatarColor: "bg-fuchsia-500",
    skills: ["React", "Testing", "Accessibility"],
    points: 445,
    joinedAt: "2022-09-30",
  },
  {
    id: "m8",
    name: "Hassan Ali",
    role: "Data Analyst",
    team: "Product",
    email: "hassan@teamhub.dev",
    avatarColor: "bg-orange-500",
    skills: ["SQL", "Dashboards", "Python"],
    points: 230,
    joinedAt: "2024-04-22",
  },
];

export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Welcome to Team Hub!",
    body: "This is our new internal portal. Explore the features and give feedback.",
    authorId: "m3",
    createdAt: "2025-06-01T09:00:00.000Z",
    pinned: true,
  },
  {
    id: "a2",
    title: "All-hands on Friday",
    body: "Quarterly all-hands at 3pm. Come with questions for leadership.",
    authorId: "m3",
    createdAt: "2025-06-10T14:30:00.000Z",
    pinned: false,
  },
  {
    id: "a3",
    title: "New design system shipped",
    body: "The shared UI kit is live. Please use the shared components in new features.",
    authorId: "m2",
    createdAt: "2025-06-12T11:15:00.000Z",
    pinned: false,
  },
];

export const events: TeamEvent[] = [
  {
    id: "e1",
    title: "Sprint Planning",
    description: "Plan the next two weeks of work.",
    startsAt: "2025-07-01T10:00:00.000Z",
    location: "Room A / Zoom",
    attendeeIds: ["m1", "m3", "m4"],
  },
  {
    id: "e2",
    title: "Design Critique",
    description: "Review the latest prototypes together.",
    startsAt: "2025-07-03T15:00:00.000Z",
    location: "Design Studio",
    attendeeIds: ["m2", "m5"],
  },
  {
    id: "e3",
    title: "Lunch & Learn: Testing",
    description: "Grace shares how she writes component tests.",
    startsAt: "2025-07-05T12:30:00.000Z",
    location: "Cafeteria",
    attendeeIds: ["m1", "m6", "m7", "m8"],
  },
];

export const polls: Poll[] = [
  {
    id: "p1",
    question: "Where should the next team offsite be?",
    options: [
      { id: "o1", label: "Naivasha", votes: 5 },
      { id: "o2", label: "Mombasa", votes: 8 },
      { id: "o3", label: "Nanyuki", votes: 3 },
    ],
  },
];

export const kudos: Kudos[] = [
  {
    id: "k1",
    fromId: "m3",
    toId: "m1",
    message: "Thanks for the amazing dashboard work!",
    createdAt: "2025-06-11T08:00:00.000Z",
  },
  {
    id: "k2",
    fromId: "m6",
    toId: "m4",
    message: "Saved us during the deploy incident. Legend.",
    createdAt: "2025-06-12T17:45:00.000Z",
  },
];

/** Convenience lookup used by several features. */
export function getMember(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}
