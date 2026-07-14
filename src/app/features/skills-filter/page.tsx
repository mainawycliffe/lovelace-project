import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #6: Filter by Skill
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function SkillsFilterPage() {
  return (
    <div>
      <PageHeader title="Filter by Skill" subtitle="Find members by what they do." />
      <FeatureStub slug="skills-filter" />
    </div>
  );
}
