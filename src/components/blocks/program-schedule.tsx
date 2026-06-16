import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ScheduleSessionView {
  time: string;
  title: string;
  tag?: string;
}

export interface ScheduleDayView {
  date: string;
  location: string;
  sessions: ScheduleSessionView[];
}

/** Calendrier jour par jour de l'événement. */
export function ProgramSchedule({ days }: { days: ScheduleDayView[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {days.map((day) => (
        <div key={day.date} className="flex flex-col rounded-sm border border-hairline bg-card">
          <div className="border-hairline border-b bg-surface px-5 py-4">
            <p className="font-display font-bold text-h3 text-emerald-deep">{day.date}</p>
            <p className="mt-1 flex items-center gap-1.5 text-[12px] text-subtle">
              <MapPin className="size-3.5" />
              {day.location}
            </p>
          </div>
          <ul className="flex flex-col divide-y divide-hairline-soft">
            {day.sessions.map((session) => (
              <li
                key={`${session.time}-${session.title}`}
                className="flex flex-col gap-1.5 px-5 py-4"
              >
                <span className="tnum font-semibold text-[12px] text-bronze">{session.time}</span>
                <span className="text-body text-ink">{session.title}</span>
                {session.tag && (
                  <Badge variant="neutral" className="w-fit">
                    {session.tag}
                  </Badge>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
