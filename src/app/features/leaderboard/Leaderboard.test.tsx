import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Leaderboard } from "./Leaderboard";
import { members } from "@/lib/mock-data";

describe("Leaderboard", () => {
  it("lists every member", () => {
    render(<Leaderboard />);
    for (const m of members) {
      expect(screen.getByText(m.name)).toBeInTheDocument();
    }
  });

  // 👇 THE BUG. Remove `.skip`, run `npm test`, watch it FAIL, then fix the
  //    sort in Leaderboard.tsx. Do not change the test.
  it.skip("ranks the highest scorer first", () => {
    render(<Leaderboard />);
    const items = screen.getAllByRole("listitem");
    const topScorer = [...members].sort((a, b) => b.points - a.points)[0];
    expect(items[0]).toHaveTextContent(topScorer.name);
  });
});
