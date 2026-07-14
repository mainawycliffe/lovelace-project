import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import TaskBoardPage from "./page";

vi.mock("@/lib/useLocalStorage", () => ({
  useLocalStorage: <T,>(_key: string, initialValue: T) => {
    // Uses real React state inside the test mock to trigger tree re-renders
    const [state, setState] = useState<T>(initialValue);
    return [state, setState];
  },
}));

describe("Task Board", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders its main content and initial column headers", () => {
    render(<TaskBoardPage />);
    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("Doing")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("handles the creation lifecycle of a task card", () => {
    render(<TaskBoardPage />);

    const input = screen.getByPlaceholderText("New task title...");
    const submitBtn = screen.getByRole("button", { name: /Add Task/i });

    fireEvent.change(input, {
      target: { value: "Verify enterprise configurations" },
    });
    fireEvent.click(submitBtn);
    expect(
      screen.getByText("Verify enterprise configurations"),
    ).toBeInTheDocument();

    const moveForwardBtn = screen.getByRole("button", { name: "▶" });
    fireEvent.click(moveForwardBtn);

    expect(screen.getByRole("button", { name: "◀" })).toBeInTheDocument();
  });

  it("handles modifications via the inline editing subsystem", () => {
    render(<TaskBoardPage />);

    const input = screen.getByPlaceholderText("New task title...");
    const submitBtn = screen.getByRole("button", { name: /Add Task/i });

    fireEvent.change(input, { target: { value: "Baseline Feature Document" } });
    fireEvent.click(submitBtn);

    const editBtn = screen.getByRole("button", { name: /Edit/i });
    fireEvent.click(editBtn);

    const editInput = screen.getByDisplayValue("Baseline Feature Document");
    fireEvent.change(editInput, {
      target: { value: "Polished Feature Document" },
    });

    const saveBtn = screen.getByRole("button", { name: /Save/i });
    fireEvent.click(saveBtn);

    expect(screen.getByText("Polished Feature Document")).toBeInTheDocument();
    expect(
      screen.queryByText("Baseline Feature Document"),
    ).not.toBeInTheDocument();
  });
});
