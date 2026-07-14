import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #27: Avatar
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function AvatarPage() {
  return (
    <div>
      <PageHeader title="Avatar" subtitle="A picture, or initials." />
      <FeatureStub slug="avatar" />
    </div>
  );
}
