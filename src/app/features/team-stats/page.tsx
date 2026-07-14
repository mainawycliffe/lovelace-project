import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #19: Team Stats
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function TeamStatsPage() {
  return (
    <div>
      <PageHeader title="Team Stats" subtitle="The team at a glance." />
      <FeatureStub slug="team-stats" />
    </div>
  );
}
