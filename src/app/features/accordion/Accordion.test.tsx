import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("renders every question", () => {
    render(<Accordion />);
    expect(screen.getByRole("button", { name: /claim an issue/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /use ai/i })).toBeInTheDocument();
  });

  // 👇 THE BUG. Remove `.skip`. Opening the first question must NOT reveal the
  //    second question's answer.
  it.skip("only opens the clicked item", async () => {
    const user = userEvent.setup();
    render(<Accordion />);

    await user.click(screen.getByRole("button", { name: /claim an issue/i }));

    expect(screen.getByText(/assign the github issue/i)).toBeInTheDocument();
    expect(screen.queryByText(/googling and reading docs/i)).not.toBeInTheDocument();
  });
});
