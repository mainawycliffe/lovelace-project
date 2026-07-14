import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PollWidget } from "./PollWidget";
//import type { Poll } from "@/lib/types";

const votedPoll = {
  id: "t1",
  question: "Best language?",
  options: [
    { id: "a", label: "TypeScript", votes: 3 },
    { id: "b", label: "Python", votes: 1 },
  ],
};

const emptyPoll = {
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
  it("shows the percentage of total votes", () => {
    render(<PollWidget poll={votedPoll} />);
    expect(screen.getByTestId("percent-a")).toHaveTextContent("75%");
    expect(screen.getByTestId("percent-b")).toHaveTextContent("25%");
  });

  // 👇 BUG 2. Remove `.skip`. This may already pass at first — but once you fix
  //    BUG 1 to divide by the total *votes*, a zero-vote poll divides by zero and
  //    shows "NaN%". Add a guard so it stays "0%". Keep BOTH tests passing.
  it("shows 0% (not NaN) when there are no votes", () => {
    render(<PollWidget poll={emptyPoll} />);
    expect(screen.getByTestId("percent-a")).toHaveTextContent("0%");
  });
});
