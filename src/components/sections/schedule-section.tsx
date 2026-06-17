import { ProgramSchedule } from "@/components/blocks/program-schedule";
import { schedule } from "@/content/data/program";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Sous-section « Calendrier » : programme jour par jour. */
export function ScheduleSection({ locale }: { locale: Locale }) {
  return (
    <ProgramSchedule
      days={schedule.map((day) => ({
        date: pick(day.date, locale),
        location: pick(day.location, locale),
        sessions: day.sessions.map((s) => ({
          time: s.time,
          title: pick(s.title, locale),
          tag: s.tag ? pick(s.tag, locale) : undefined,
        })),
      }))}
    />
  );
}
