import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #8: Post Announcement
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function CreateAnnouncementPage() {
  return (
    <div>
      <PageHeader title="Post Announcement" subtitle="Share something with the team." />
      <FeatureStub slug="create-announcement" />
    </div>
  );
}
