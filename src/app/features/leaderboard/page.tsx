import { PageHeader } from "@/components/ui";
import { Leaderboard } from "./Leaderboard";

export default function LeaderboardPage() {
  return (
    <div>
      <PageHeader title="Points Leaderboard" subtitle="Who's leading the team?" />
      <Leaderboard />
    </div>
  );
}
