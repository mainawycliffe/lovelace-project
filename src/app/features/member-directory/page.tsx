import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #1: Member Directory
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function MemberDirectoryPage() {
  return (
    <div>
      <PageHeader title="Member Directory" subtitle="Everyone on the team." />
      <FeatureStub slug="member-directory" />
    </div>
  );
}
