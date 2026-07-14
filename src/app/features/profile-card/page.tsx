import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #3: Profile Card
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function ProfileCardPage() {
  return (
    <div>
      <PageHeader title="Profile Card" subtitle="A single member in detail." />
      <FeatureStub slug="profile-card" />
    </div>
  );
}
