"use client";

import React from "react";
import { Card, PageHeader } from "@/components/ui";
import { members } from "@/lib/mock-data";

export default function TeamStatsPage() {
  const totalMembers = members.length;

  const totalPoints = members.reduce((sum, m) => sum + (m.points || 0), 0);

  const averagePoints = totalMembers > 0 ? totalPoints / totalMembers : 0;

  const teamNames = members.map(m => m.team).filter(Boolean);
  const distinctTeams = new Set(teamNames).size;

  return (
    <div className="space-y-6 p-6">
      <PageHeader 
        title="Team Stats" 
      subtitle="Workspace overview metrics aggregated from team members."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <h3>Total Members</h3>
          <p data-testid="stat-total-members">{totalMembers}</p>
        </Card>

        <Card className="p-4">
          <h3>Total Points</h3>
          <p data-testid="stat-total-points">{totalPoints}</p>
        </Card>

        <Card className="p-4">
          <h3>Average Points</h3>
          <p data-testid="stat-average-points">{averagePoints.toFixed(1)}</p>
        </Card>

        <Card className="p-4">
          <h3>Distinct Teams</h3>
          <p data-testid="stat-distinct-teams">{distinctTeams}</p>
        </Card>
      </div>
    </div>
  );
}
