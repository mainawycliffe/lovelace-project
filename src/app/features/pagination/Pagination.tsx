"use client";

import { useState } from "react";
import { Card, Button } from "@/components/ui";
import { members } from "@/lib/mock-data";

const PAGE_SIZE = 3;

// Show members one page at a time.
//
// 🐞 BUG (Issue #23): the first page skips the first 3 members, and the last
// members are unreachable. It's an off-by-one error in how the page slice is
// calculated. Page 1 should show members 1–3.
export function Pagination() {
  const [page, setPage] = useState(1); // pages are 1-indexed
  const totalPages = Math.ceil(members.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE; 
  const visible = members.slice(start, start + PAGE_SIZE);

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {visible.map((m) => (
          <li key={m.id}>
            <Card>{m.name}</Card>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span className="text-sm text-neutral-500">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
