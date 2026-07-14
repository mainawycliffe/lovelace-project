import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PollWidget } from "./PollWidget";
import type { Poll } from "@/lib/types";

const votedPoll: Poll = {
  id: "t1",
  question: "Best language?",
  options: [
    { id: "a", label: "TypeScript", votes: 3 },
    { id: "b", label: "Python", votes: 1 },
  ],
};

const emptyPoll: Poll = {
  id: "t2",
  question: "Nobody voted yet",
  options: [
    { id: "a", label: "Option A", votes: 0 },
    { id: "b", label: "Option B", votes: 0 },
  ],
};

describe("PollWidget", () => {
  it("renders the question and options", () => {
    render(<PollWidget poll={votedPoll} />);
    expect(screen.getByText("Best language?")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  // 👇 BUG 1. Remove `.skip` and fix the total. 3 of 4 votes = 75%.
  it.skip("shows the percentage of total votes", () => {
    render(<PollWidget poll={votedPoll} />);
    expect(screen.getByTestId("percent-a")).toHaveTextContent("75%");
    expect(screen.getByTestId("percent-b")).toHaveTextContent("25%");
  });

  // 👇 BUG 2. Remove `.skip` and guard against divide-by-zero.
  it.skip("shows 0% (not NaN) when there are no votes", () => {
    render(<PollWidget poll={emptyPoll} />);
    expect(screen.getByTestId("percent-a")).toHaveTextContent("0%");
  });
});
