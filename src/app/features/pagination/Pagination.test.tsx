import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";
import { members } from "@/lib/mock-data";

describe("Pagination", () => {
  it("shows the page indicator", () => {
    render(<Pagination />);
    expect(screen.getByText(/page 1 of/i)).toBeInTheDocument();
  });

  // 👇 THE BUG. Remove `.skip`. Page 1 must show the first three members.
  it.skip("shows the first three members on page 1", () => {
    render(<Pagination />);
    expect(screen.getByText(members[0].name)).toBeInTheDocument();
    expect(screen.getByText(members[1].name)).toBeInTheDocument();
    expect(screen.getByText(members[2].name)).toBeInTheDocument();
  });

  it.skip("reaches the last member on the final page", async () => {
    const user = userEvent.setup();
    render(<Pagination />);
    const next = screen.getByRole("button", { name: /next/i });
    while (!next.hasAttribute("disabled")) {
      await user.click(next);
    }
    expect(screen.getByText(members[members.length - 1].name)).toBeInTheDocument();
  });
});
