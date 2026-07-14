import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemberSearch } from "./MemberSearch";

describe("MemberSearch", () => {
  it("shows all members before searching", () => {
    render(<MemberSearch />);
    expect(screen.getByText("Ada Ochieng")).toBeInTheDocument();
    expect(screen.getByText("Brian Kamau")).toBeInTheDocument();
  });

  it("matches an exact-case query", async () => {
    const user = userEvent.setup();
    render(<MemberSearch />);
    await user.type(screen.getByLabelText(/search members/i), "Ada");
    expect(screen.getByText("Ada Ochieng")).toBeInTheDocument();
    expect(screen.queryByText("Brian Kamau")).not.toBeInTheDocument();
  });

  // 👇 THE BUG. Remove `.skip`, run `npm test`, watch it FAIL, then fix
  //    MemberSearch.tsx until it passes. Do not change the test.
  it.skip("matches regardless of letter case", async () => {
    const user = userEvent.setup();
    render(<MemberSearch />);
    await user.type(screen.getByLabelText(/search members/i), "ada");
    expect(screen.getByText("Ada Ochieng")).toBeInTheDocument();
  });
});
