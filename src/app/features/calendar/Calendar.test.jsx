
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MonthCalendar } from "./MonthCalendar";

test("renders July 2025 grid with correct leading offset and days", () => {
  render(<MonthCalendar />);

  expect(screen.getByText("July 2025")).toBeInTheDocument();

  const activeEventDay = screen.getByTestId("day-2025-07-15");
  expect(activeEventDay).toBeInTheDocument();
  
  expect(activeEventDay).toHaveClass("bg-blue-50");
  
  const normalDay = screen.getByTestId("day-2025-07-01");
  expect(normalDay).toBeInTheDocument();
  expect(normalDay).not.toHaveClass("bg-blue-50");
});
