import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #7: Announcements
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function AnnouncementsFeedPage() {
  return (
    <div>
      <PageHeader title="Announcements" subtitle="What's new on the team." />
      <FeatureStub slug="announcements-feed" />
    </div>
  );
}
