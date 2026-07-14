"use client";

import { useState } from "react";
import { Card, Input, EmptyState } from "@/components/ui";
import { members } from "@/lib/mock-data";

// Search members by name.
//
// 🐞 BUG (Issue #2): the search only matches when you type the EXACT case.
// Typing "ada" finds nothing, but "Ada" works. Make the search
// case-insensitive. The fix is one or two lines below.
export function MemberSearch() {
  const [query, setQuery] = useState("");

  const results = members.filter((m) => m.name.includes(query));

  return (
    <div className="space-y-4">
      <Card>
        <Input
          id="member-search"
          label="Search members"
          placeholder="Type a name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Card>

      {results.length === 0 ? (
        <EmptyState message={`No members match "${query}".`} />
      ) : (
        <ul className="space-y-2">
          {results.map((m) => (
            <li key={m.id}>
              <Card>
                <p className="font-medium">{m.name}</p>
                <p className="text-sm text-neutral-500">{m.role}</p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
