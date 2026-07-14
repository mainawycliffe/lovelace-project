// ─────────────────────────────────────────────────────────────────────────────
// REFERENCE TEST — this is the style of test we want for every feature.
// Run it with `npm test`. Copy this structure for your own component.
// ─────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NotesBoard } from "./NotesBoard";

describe("NotesBoard", () => {
  it("shows an empty state when there are no notes", () => {
    render(<NotesBoard />);
    expect(screen.getByText(/no notes yet/i)).toBeInTheDocument();
  });

  it("adds a note when the form is submitted", async () => {
    const user = userEvent.setup();
    render(<NotesBoard />);

    await user.type(screen.getByLabelText(/new note/i), "Buy milk");
    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.queryByText(/no notes yet/i)).not.toBeInTheDocument();
  });

  it("does not add empty notes", async () => {
    const user = userEvent.setup();
    render(<NotesBoard />);

    await user.type(screen.getByLabelText(/new note/i), "   ");
    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText(/no notes yet/i)).toBeInTheDocument();
  });

  it("deletes a note", async () => {
    const user = userEvent.setup();
    render(<NotesBoard />);

    await user.type(screen.getByLabelText(/new note/i), "Temporary");
    await user.click(screen.getByRole("button", { name: /add/i }));
    await user.click(screen.getByRole("button", { name: /delete note: temporary/i }));

    expect(screen.queryByText("Temporary")).not.toBeInTheDocument();
  });
});
