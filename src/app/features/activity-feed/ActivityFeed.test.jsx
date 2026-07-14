import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ActivityFeedPage from './page';

// Issue #18: Activity Feed
// TODO: replace these placeholders with real tests. See the reference test at
// src/app/features/example-notes/NotesBoard.test.tsx for how.

describe("Activity Feed", () => {
  it("renders its main content", () => {
    render(<ActivityFeedPage />);
    
    expect(screen.getByText("Activity Feed")).toBeInTheDocument();
    expect(screen.getByText("Announcement")).toBeInTheDocument();
    expect(screen.getByText("Event")).toBeInTheDocument();
    expect(screen.getByText("Kudos")).toBeInTheDocument();
  });

  it("responds to the user", async () => {
    render(<ActivityFeedPage />);
    
    expect(screen.queryByText("Non-existent Content")).not.toBeInTheDocument();
  });
});
