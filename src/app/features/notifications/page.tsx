import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #11: Notifications
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function NotificationsPage() {
  return (
    <div>
      <PageHeader title="Notifications" subtitle="Stay up to date." />
      <FeatureStub slug="notifications" />
    </div>
  );
}
