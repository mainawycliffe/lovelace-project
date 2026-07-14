import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EditProfileForm } from "./EditProfileForm";

describe("EditProfileForm", () => {
  it("shows error for empty name", async () => {
    const user = userEvent.setup();
    render(<EditProfileForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.clear(nameInput);
    await user.click(screen.getByRole("button", { name: /save profile/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });

  it("shows error for bad email", async () => {
    const user = userEvent.setup();
    render(<EditProfileForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await user.clear(emailInput);
    await user.type(emailInput, "bad-email");
    await user.click(screen.getByRole("button", { name: /save profile/i }));

    expect(screen.getByText(/email must contain @/i)).toBeInTheDocument();
  });

  it("shows success on valid input", async () => {
    const user = userEvent.setup();
    render(<EditProfileForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.clear(nameInput);
    await user.type(nameInput, "Ada Updated");

    const emailInput = screen.getByLabelText(/email/i);
    await user.clear(emailInput);
    await user.type(emailInput, "ada@example.com");

    await user.click(screen.getByRole("button", { name: /save profile/i }));

    expect(screen.getByText(/profile updated/i)).toBeInTheDocument();
    expect(screen.getByText("Ada Updated")).toBeInTheDocument();
    expect(screen.getByText("ada@example.com")).toBeInTheDocument();
  });
});
