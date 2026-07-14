import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #9: Kudos Wall
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function KudosWallPage() {
  return (
    <div>
      <PageHeader title="Kudos Wall" subtitle="Shout-outs between teammates." />
      <FeatureStub slug="kudos-wall" />
    </div>
  );
}
