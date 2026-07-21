
"use client";

import { Card, EmptyState } from "@/components/ui";
import { useLocalStorage } from "@/lib/useLocalStorage";

const YEAR = 2025;
const MONTH_INDEX = 6; 
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function MonthCalendar() {
  const [events] = useLocalStorage("calendar-events", [
    { id: "1", date: "2025-07-04", title: "Independence Day" },
    { id: "2", date: "2025-07-15", title: "Picnic" },
    { id: "3", date: "2025-07-01", title: "Mom's Birthday" },
  ]);

  const totalDays = new Date(YEAR, MONTH_INDEX + 1, 0).getDate();
  const leadingOffset = new Date(YEAR, MONTH_INDEX, 1).getDay();

  const gridCells = [
    ...Array(leadingOffset).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  function formatDateString(dayNumber) {
    const paddedDay = String(dayNumber).padStart(2, "0");
    const paddedMonth = String(MONTH_INDEX + 1).padStart(2, "0");
    return `${YEAR}-${paddedMonth}-${paddedDay}`;
  }

  return (
    <div className="cal">
      <Card className="jul">
        <div className="cal-jul text-center">
          <h2 className="text-xl font-bold">July 2025</h2>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center font-medium text-gray-500 mb-2">
          {WEEKDAYS.map((day) => (
            <div key={day} className="text-sm py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {gridCells.map((day, index) => {
            if (day === null) {
              return (
                <div 
                  key={`blank-${index}`} 
                  className="bg-gray-50/50 min-h-20 border border-transparent rounded"
                  aria-hidden="true"
                />
              );
            }

            const dateStr = formatDateString(day);
            const dayEvents = events.filter((e) => e.date === dateStr);
            const hasEvent = dayEvents.length > 0;

            return (
              <div
                key={`day-${day}`}
                data-testid={`day-${dateStr}`}
                className={`min-h-20 p-1 border rounded flex flex-col justify-between transition-colors ${
                  hasEvent
                    ? "bg-blue-50/50 border-blue-200 text-blue-900"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
                aria-label={`${day} July 2025${hasEvent ? `, Events: ${dayEvents.map(e => e.title).join(", ")}` : ""}`}
              >
                <span className="text-xs font-medium text-gray-400 self-start">{day}</span>
                
                <div className="flex flex-col gap-1 mt-1 w-full overflow-hidden">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      data-testid="calendar-event-badge"
                      className="bg-purple-600 text-white text-[10px] px-1 py-0.5 rounded truncate font-sans font-medium shadow-sm"
                      title={event.title}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {events.length === 0 && (
        <EmptyState message="No scheduled events ." />
      )}
    </div>
  );
}
