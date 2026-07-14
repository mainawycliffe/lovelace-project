import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #26: Settings
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" subtitle="Your preferences." />
      <FeatureStub slug="settings" />
    </div>
  );
}
