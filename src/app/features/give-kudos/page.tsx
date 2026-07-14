import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #10: Give Kudos
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function GiveKudosPage() {
  return (
    <div>
      <PageHeader title="Give Kudos" subtitle="Recognise a teammate." />
      <FeatureStub slug="give-kudos" />
    </div>
  );
}
