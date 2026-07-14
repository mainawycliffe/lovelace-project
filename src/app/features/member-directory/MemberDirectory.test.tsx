import { render, screen } from "@testing-library/react";
import MemberDirectoryPage from "./page";
import { members } from "@/lib/mock-data";

test("renders all member names", () => {
  render(<MemberDirectoryPage />);
  members.forEach((member) => {
    expect(screen.getByText(member.name)).toBeInTheDocument();
  });
});

test("renders a role", () => {
  render(<MemberDirectoryPage />);
  // Use getAllByText since multiple members may share the same role
  const roles = screen.getAllByText(members[0].role);
  expect(roles.length).toBeGreaterThan(0);
});

test("renders skills as badges", () => {
  render(<MemberDirectoryPage />);
  // Use getAllByText since multiple members may share the same skill
  const skills = screen.getAllByText(members[0].skills[0]);
  expect(skills.length).toBeGreaterThan(0);
});




// import { describe, it } from "vitest";

// // Issue #1: Member Directory
// // TODO: replace these placeholders with real tests. See the reference test at
// // src/app/features/example-notes/NotesBoard.test.tsx for how.
// describe("Member Directory", () => {
//   it.todo("renders its main content");
//   it.todo("responds to the user");
// });
