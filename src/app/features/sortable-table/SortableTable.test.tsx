import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SortableTable } from "./SortableTable";
import { members } from "@/lib/mock-data";

describe("SortableTable", () => {
  it("renders a row per member", () => {
    render(<SortableTable />);
    for (const m of members) {
      expect(screen.getByText(m.name)).toBeInTheDocument();
    }
  });

  // 👇 THE BUG. Remove `.skip`. This checks that sorting the table did NOT
  //    reorder the shared `members` array. Fix SortableTable.tsx so it sorts
  //    a copy. Do not change the test.
  it.skip("does not mutate the shared members array", async () => {
    const originalOrder = members.map((m) => m.id);
    const user = userEvent.setup();
    render(<SortableTable />);

    await user.click(screen.getByRole("button", { name: /points/i }));

    expect(members.map((m) => m.id)).toEqual(originalOrder);
  });
});
