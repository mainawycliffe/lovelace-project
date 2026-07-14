import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import EventsListPage from "./page";

vi.spyOn(window, "alert").mockImplementation(() => {});

describe("Upcoming Events", () => {
  it("renders its main content with fields matching acceptance criteria", () => {
    render(<EventsListPage />);

    expect(screen.getByText("UPCOMING EVENTS")).toBeInTheDocument();
    expect(screen.getByText(/Silicon Valley Hub/i)).toBeInTheDocument();
    expect(screen.getByText(/156 attending/i)).toBeInTheDocument();
  });

  it("verifies that the earliest event renders before a later one", () => {
    render(<EventsListPage />);

    const elementNodes = screen.getAllByTestId("event-title");
    const textContents = elementNodes.map((node) => node.textContent);

    expect(textContents[0]).toBe("Community Hackathon 2026");
    expect(textContents[1]).toBe("First lego challenge");
    expect(textContents[2]).toBe("AI Integrations Workshop");
  });
});
