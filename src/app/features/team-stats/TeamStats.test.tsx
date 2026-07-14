import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamStatsPage from "./page";

vi.mock("@/lib/mock-data", () => ({
  members: [
    { id: "1", name: "Alice", team: "Engineering", points: 10 },
    { id: "2", name: "Bob", team: "Design", points: 20 },
    { id: "3", name: "Charlie", team: "Engineering", points: 30 },
    { id: "4", name: "Dave", team: "Marketing", points: 40 },
    { id: "5", name: "Eve", team: "Design", points: 50 },
    { id: "6", name: "Frank", team: "Product", points: 60 },
    { id: "7", name: "Grace", team: "Sales", points: 70 },
    { id: "8", name: "Hank", team: "HR", points: 80 }
  ]
}));

describe("TeamStatsPage", () => {
  it("shows total members as 8", () => {
    render(<TeamStatsPage />);
    const membersStat = screen.getByTestId("stat-total-members");
    expect(membersStat.textContent).toBe("8");
  });

  it("shows total points correctly", () => {
    render(<TeamStatsPage />);
    const pointsStat = screen.getByTestId("stat-total-points");
    expect(pointsStat.textContent).toBe("360");
  });
});
