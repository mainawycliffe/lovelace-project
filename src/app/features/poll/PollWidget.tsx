"use client";

import { useState } from "react";
import { Card, Button } from "@/components/ui";
import { polls } from "@/lib/mock-data";
import type { Poll } from "@/lib/types";

// Vote in a poll and see the result as a percentage bar.
//
// 🐞 BUGS (Issue #17): the percentages are wrong.
//   1. The total is calculated from the number of OPTIONS, not the number of
//      votes, so the percentages don't add up to 100%.
//   2. When a poll has zero votes, it shows "NaN%" instead of "0%".
// Fix both so each bar shows votes / (total votes) as a whole percentage.
export function PollWidget({ poll = polls[0] }: { poll?: Poll }) {
  const [options, setOptions] = useState(poll.options);

  const total = options.length; // 🐞 should be the sum of all votes

  function vote(id: string) {
    setOptions((prev) =>
      prev.map((o) => (o.id === id ? { ...o, votes: o.votes + 1 } : o)),
    );
  }

  return (
    <Card className="space-y-4">
      <p className="font-semibold">{poll.question}</p>
      <ul className="space-y-3">
        {options.map((o) => {
          const percent = Math.round((o.votes / total) * 100);
          return (
            <li key={o.id}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => vote(o.id)}
                >
                  {o.label}
                </button>
                <span data-testid={`percent-${o.id}`}>{percent}%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <Button variant="secondary" onClick={() => setOptions(poll.options)}>
        Reset
      </Button>
    </Card>
  );
}
