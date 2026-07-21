"use client";

import React from "react";
import { PageHeader, Card, EmptyState } from "@/components/ui";
import { useLocalStorage } from "@/lib/useLocalStorage";

interface Kudos {
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
}

const MEMBERS_REGISTRY: Record<string, { name: string }> = {
  "1": { name: "Alice" },
  "2": { name: "Bob" },
  "3": { name: "Charlie" },
  "4": { name: "Dave" }
};

export default function KudosWallPage() {
  const [kudosList] = useLocalStorage<Kudos[]>("kudos", []);

  const getMember = (id: string) => MEMBERS_REGISTRY[id];

  const sortedKudos = [...kudosList].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  return (
    <div className="space-y-4 p-6">
      <PageHeader title="Kudos Wall" subtitle="Shout-outs between teammates." />

      {sortedKudos.length === 0 ? (
        <EmptyState message="No kudos yet. Share some appreciation!" />
      ) : (
        <div className="space-y-2">
          {sortedKudos.map((kudos) => {
            const fromName = getMember(kudos.fromId)?.name || "Unknown";
            const toName = getMember(kudos.toId)?.name || "Unknown";

            return (
              <Card key={kudos.id} data-testid="kudos-card">
                <p className="font-bold">
                  {fromName} → {toName}:
                </p>
                <p className="italic mt-1 text-muted-foreground">
                  {"\""}{kudos.message}{"\""}
                </p>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
