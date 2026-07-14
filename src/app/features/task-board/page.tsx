import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #21: Task Board
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function TaskBoardPage() {
  return (
    <div>
      <PageHeader title="Task Board" subtitle="Track work across columns." />
      <FeatureStub slug="task-board" />
    </div>
  );
}
