"use client";

import { useState } from "react";
import { Card } from "@/components/ui";
import { members } from "@/lib/mock-data";
import type { Member } from "@/lib/types";

type SortKey = "name" | "points";

// A table of members you can sort by clicking a column header.
//
// 🐞 BUG (Issue #22): sorting works on screen, but it SECRETLY REORDERS the
// shared `members` array (see mock-data.ts) because `.sort()` mutates the array
// it's called on. That corrupts the data for every OTHER feature that reads
// `members` (the sidebar, the leaderboard, the directory…). Sort a COPY instead
// so the shared data is never mutated.
export function SortableTable() {
  const [rows, setRows] = useState<Member[]>(members);
  const [key, setKey] = useState<SortKey>("name");
  const [asc, setAsc] = useState(true);

  function sortBy(nextKey: SortKey) {
    const nextAsc = nextKey === key ? !asc : true;
    const sorted = members.sort((a, b) => {
      const cmp =
        nextKey === "points" ? a.points - b.points : a.name.localeCompare(b.name);
      return nextAsc ? cmp : -cmp;
    });
    setRows([...sorted]);
    setKey(nextKey);
    setAsc(nextAsc);
  }

  return (
    <Card>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-black/10 dark:border-white/10">
            <th className="py-2">
              <button className="font-semibold hover:underline" onClick={() => sortBy("name")}>
                Name
              </button>
            </th>
            <th className="py-2">
              <button className="font-semibold hover:underline" onClick={() => sortBy("points")}>
                Points
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((m) => (
            <tr key={m.id} className="border-b border-black/5 dark:border-white/5">
              <td className="py-2">{m.name}</td>
              <td className="py-2">{m.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
