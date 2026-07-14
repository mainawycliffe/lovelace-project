import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #18: Activity Feed
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function ActivityFeedPage() {
  return (
    <div>
      <PageHeader title="Activity Feed" subtitle="Everything that just happened." />
      <FeatureStub slug="activity-feed" />
    </div>
  );
}
