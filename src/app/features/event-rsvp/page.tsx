// import { PageHeader } from "@/components/ui";
// import { FeatureStub } from "@/components/FeatureStub";

// // Issue #14: Event RSVP
// // TODO: build this feature, then delete <FeatureStub /> below.
// // See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
// export default function EventRsvpPage() {
//   return (
//     <div>
//       <PageHeader title="Event RSVP" subtitle="Let people know you're coming." />
//       <FeatureStub slug="event-rsvp" />
//     </div>
//   );
// }
"use client";

import { PageHeader, Card, Button, Badge } from "@/components/ui";
import { events } from "@/lib/mock-data";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { TeamEvent } from "@/lib/types";

export default function EventRsvpPage() {
  
  const [rsvps, setRsvps] = useLocalStorage<Record<string, boolean>>("event-rsvps", {});

  const toggleRsvp = (eventId: string) => {
    setRsvps((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Event RSVP"
        subtitle="Let people know you're coming."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {events.map((event: TeamEvent) => {
          const isAttending = !!rsvps[event.id];
          const displayCount = event.attendeeIds.length + (isAttending ? 1 : 0);

          return (
            <Card key={event.id} className="p-4 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <Badge tone={isAttending ? "green" : "neutral"}>
                    {displayCount} {displayCount === 1 ? "Attendee" : "Attendees"}
                  </Badge>
                </div>
                <p className="text-sm text-neutral-500 mt-1">{event.description}</p>
                <p className="text-xs text-neutral-400 mt-2"> 📍{event.location}</p>
              </div>

              <Button
                variant={isAttending ? "secondary" : "primary"}
                onClick={() => toggleRsvp(event.id)}
              >
                {isAttending ? "Cancel RSVP" : "RSVP Now"}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}