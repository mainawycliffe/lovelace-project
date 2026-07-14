import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #16: Event Countdown
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function CountdownPage() {
  return (
    <div>
      <PageHeader title="Event Countdown" subtitle="Time until the next event." />
      <FeatureStub slug="countdown" />
    </div>
  );
}
