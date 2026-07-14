import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #12: Toast Messages
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function ToastPage() {
  return (
    <div>
      <PageHeader title="Toast Messages" subtitle="Quick, temporary feedback." />
      <FeatureStub slug="toast" />
    </div>
  );
}
