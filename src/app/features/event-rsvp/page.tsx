import { PageHeader } from "@/components/ui";
import { FeatureStub } from "@/components/FeatureStub";

// Issue #14: Event RSVP
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function EventRsvpPage() {
  return (
    <div>
      <PageHeader title="Event RSVP" subtitle="Let people know you're coming." />
      <FeatureStub slug="event-rsvp" />
    </div>
  );
}
