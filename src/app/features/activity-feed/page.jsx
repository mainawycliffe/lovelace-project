import { PageHeader } from "@/components/ui";

// Issue #18: Activity Feed
// TODO: build this feature, then delete <FeatureStub /> below.
// See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
export default function ActivityFeedPage({ announcements = [], events = [], kudos = [] }) {
  const mergedTimeline = [
    ...announcements.map(item => ({ ...item, type: 'Announcement' })),
    ...events.map(item => ({ ...item, type: 'Event' })),
    ...kudos.map(item => ({ ...item, type: 'Kudos' }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <PageHeader title="Activity Feed" subtitle="Everything that just happened." />
      <div>
        {mergedTimeline.map(item => (
          <div key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span>{item.date}</span>
            </div>
            <span>{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
