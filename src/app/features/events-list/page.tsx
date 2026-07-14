"use client";

import { PageHeader } from "@/components/ui";

const MOCK_EVENTS = [
  {
    id: "ev-10",
    title: "Global AI Summit",
    startsAt: "2026-11-20T09:00:00.000Z",
    location: "Grand Ballroom A",
    attendeesCount: 520,
    image:
      "https://vid.alarabiya.net/images/2022/09/13/acfa9712-0062-41cb-83b8-cb5b93ab0bbd/acfa9712-0062-41cb-83b8-cb5b93ab0bbd_16x9_1200x676.jpg",
    color: "border-sky-500/30 hover:border-sky-500/60 bg-sky-950/20",
  },
  {
    id: "ev-1",
    title: "Community Hackathon 2026",
    startsAt: "2026-07-28T09:00:00.000Z",
    location: "Silicon Valley Hub",
    attendeesCount: 156,
    image:
      "https://www.ardoq.com/hubfs/Blog/hackathon%202026/ardoq%20ai%20hackathon%202026%20innovation%20highlights.png",
    color: "border-blue-500/30 hover:border-blue-500/60 bg-blue-950/20",
  },
  {
    id: "ev-4",
    title: "AI Integrations Workshop",
    startsAt: "2026-09-19T13:00:00.000Z",
    location: "Innovation Lab 1",
    attendeesCount: 75,
    image:
      "https://inkyma.com/wp-content/uploads/2024/09/Benefits-of-AI-Workshops-for-Businesses.jpeg",
    color: "border-amber-500/30 hover:border-amber-500/60 bg-amber-950/20",
  },
  {
    id: "ev-7",
    title: "First tech challenge",
    startsAt: "2026-10-18T08:30:00.000Z",
    location: "Tech Pavilion",
    attendeesCount: 210,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01vaYlUZqeHgqO6vICFGc7lsfRMRuLk4UBBNT24CQCgKPVGW-n9BS3l0&s=10",
    color: "border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-950/20",
  },
  {
    id: "ev-2",
    title: "First lego challenge",
    startsAt: "2026-08-12T14:00:00.000Z",
    location: "Virtual Meeting Room 4",
    attendeesCount: 89,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPH1eipHSPh-lHtaUZd4cb2kwXAjnmkjVdJy66h8mUyEqwEZot_sStfMOJ&s=10",
    color:
      "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/20",
  },
  {
    id: "ev-5",
    title: "Open Source Contributor Night",
    startsAt: "2026-10-02T18:00:00.000Z",
    location: "Community Commons",
    attendeesCount: 64,
    image:
      "https://www.undp.org/sites/g/files/zskgke326/files/styles/image_with_credit_caption_wide_small_448_x_210_/public/2025-05/open_source_article_banner_1.png?itok=41RC3ldW",
    color: "border-rose-500/30 hover:border-rose-500/60 bg-rose-950/20",
  },
];

export default function EventsListPage() {
  const sortedEvents = [...MOCK_EVENTS].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime(),
  );

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
<<<<<<< HEAD
    <div>
      <PageHeader title="Upcoming Events" subtitle="What's happening soon." />

=======
    <div className="p-6 max-w-5xl mx-auto text-white">
      <PageHeader title="UPCOMING EVENTS" subtitle="What's happening soon." />

      <div
        data-testid="events-list"
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className={`flex flex-col border rounded-xl overflow-hidden transition-all duration-300 shadow-md ${event.color}`}
          >
            <div className="h-48 w-full overflow-hidden bg-zinc-800">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h2
                  className="text-xl font-bold text-zinc-100 tracking-tight"
                  data-testid="event-title"
                >
                  {event.title}
                </h2>
                <p className="text-xs font-medium text-zinc-400 mt-1.5">
                  📅 {formatDate(event.startsAt)} • 📍 {event.location}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-medium">
                  👥 {event.attendeesCount} attending
                </span>
                <button
                  onClick={() => alert(`Registered for ${event.title}!`)}
                  className="px-5 py-2 bg-blue-400 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  RSVP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
>>>>>>> main
    </div>
  );
}
