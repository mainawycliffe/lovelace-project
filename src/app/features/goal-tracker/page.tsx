import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #20: Goal Tracker
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function GoalTrackerPage() {
  return (
    <div>
      <PageHeader title="Goal Tracker" subtitle="Progress toward a team goal." />
      <FeatureStub slug="goal-tracker" />
    </div>
  );
}
