"use client";

import { useState } from "react";
import { Card } from "@/components/ui";

const FAQ = [
  { q: "How do I claim an issue?", a: "Assign the GitHub issue to yourself, then start a branch." },
  { q: "Can I use AI?", a: "No. Googling and reading docs is fine — writing it yourself is the point." },
  { q: "How do I open a PR?", a: "Push your branch and open a pull request against main." },
];

// A FAQ accordion: click a question to reveal its answer.
//
// 🐞 BUG (Issue #24): clicking ONE question opens ALL of them, because a single
// boolean controls every item. Track which item is open instead, so only the
// clicked answer shows. Bonus: add `aria-expanded` to each question button.
export function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <Card className="divide-y divide-black/10 dark:divide-white/10">
      {FAQ.map((item, i) => (
        <div key={i} className="py-2">
          <button
            className="flex w-full items-center justify-between text-left font-medium"
            onClick={() => setOpen((o) => !o)}
          >
            {item.q}
            <span aria-hidden>{open ? "−" : "+"}</span>
          </button>
          {open && (
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.a}</p>
          )}
        </div>
      ))}
    </Card>
  );
}
