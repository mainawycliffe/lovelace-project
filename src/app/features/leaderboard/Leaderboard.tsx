"use client";

import { Card, Badge } from "@/components/ui";
import { members } from "@/lib/mock-data";

// Rank members by points, highest first.
//
// 🐞 BUG (Issue #5): the leaderboard is upside down — the person with the
// FEWEST points is shown at the top. Fix the sort so the highest scorer
// is ranked #1.
export function Leaderboard() {
  const ranked = [...members].sort((b, a) => a.points - b.points);

  return (
    <ol className="space-y-2">
      {ranked.map((m, i) => (
        <li key={m.id}>
          <Card className="flex items-center justify-between">
            <span className="flex items-center gap-3">
              <span className="w-6 text-center font-bold text-neutral-400">{i + 1}</span>
              <span className="font-medium">{m.name}</span>
            </span>
            <Badge tone="blue">{m.points} pts</Badge>
          </Card>
        </li>
      ))}
    </ol>
  );
}
