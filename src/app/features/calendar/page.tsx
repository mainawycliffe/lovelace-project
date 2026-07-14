import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #15: Month Calendar
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function CalendarPage() {
  return (
    <div>
      <PageHeader title="Month Calendar" subtitle="Events laid out by day." />
      <FeatureStub slug="calendar" />
    </div>
  );
}
