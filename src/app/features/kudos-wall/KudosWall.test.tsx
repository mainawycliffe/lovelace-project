import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import KudosWallPage from "./page";

vi.mock("@/lib/useLocalStorage", () => ({
  useLocalStorage: () => [
    [
      { id: "1", fromId: "1", toId: "2", message: "Old review", createdAt: "2026-01-01" },
      { id: "2", fromId: "2", toId: "1", message: "New review", createdAt: "2026-01-02" },
    ],
    vi.fn(),
  ],
}));

describe("Kudos Wall", () => {
  it("renders names, messages, and elements newest first", () => {
    render(<KudosWallPage />);

    expect(screen.getByText("Alice → Bob:")).toBeInTheDocument();
    expect(screen.getByText("Bob → Alice:")).toBeInTheDocument();

    expect(screen.getByText((content) => content.includes("Old review"))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes("New review"))).toBeInTheDocument();
  });
});
