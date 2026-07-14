import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #25: Accessible Modal
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function ModalPage() {
  return (
    <div>
      <PageHeader title="Accessible Modal" subtitle="A focus-trapping dialog." />
      <FeatureStub slug="modal" />
    </div>
  );
}
