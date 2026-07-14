// Shared domain types for Team Hub.
// EVERY feature reads from these types — do not change them without coordinating,
// because other people's features depend on this shape. (This is the "team contract".)

export interface Member {
  id: string;
  name: string;
  role: string;
  team: "Engineering" | "Design" | "Product" | "Ops";
  email: string;
  /** Tailwind background color used for the avatar circle, e.g. "bg-rose-500". */
  avatarColor: string;
  skills: string[];
  points: number;
  /** ISO date string, e.g. "2024-03-01". */
  joinedAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  authorId: string;
  /** ISO datetime string. */
  createdAt: string;
  pinned: boolean;
}

export interface TeamEvent {
  id: string;
  title: string;
  description: string;
  /** ISO datetime string. */
  startsAt: string;
  location: string;
  attendeeIds: string[];
}

export interface PollOption {
  id: string;
  label: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
}

export interface Kudos {
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
}
