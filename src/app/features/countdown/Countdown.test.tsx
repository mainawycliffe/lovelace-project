

// Issue #16: Event Countdown
// TODO: replace these placeholders with real tests. See the reference test at
// src/app/features/example-notes/NotesBoard.test.tsx for how.
import { render, screen, act } from "@testing-library/react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import Countdown from "./page";

describe("Countdown Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(1767312000000));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the initial calculated countdown time correctly", () => {
    render(<Countdown />);
    expect(screen.getByTestId("days-label").textContent).toBe("02 days");
  });

  it("decrements the countdown display by 1 second after time passes", () => {
    render(<Countdown />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId("seconds-label").textContent).toBe("59 seconds");
    expect(screen.getByTestId("minutes-label").textContent).toBe("59 minutes");
    expect(screen.getByTestId("hours-label").textContent).toBe("23 hours");
    expect(screen.getByTestId("days-label").textContent).toBe("01 days");
  });
});
