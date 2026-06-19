import { ProgramSchedule } from "@/components/blocks/program-schedule";
import { schedule, type TrackKind } from "@/content/data/program";
import type { Localized } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Libellés des tracks de session (bilingues). */
const TRACK_LABELS: Record<TrackKind, Localized> = {
  policy: { fr: "Politique", en: "Policy" },
  dealflow: { fr: "Deal flow", en: "Deal flow" },
  esg: { fr: "ESG", en: "ESG" },
  networking: { fr: "Réseautage", en: "Networking" },
};

/** Sous-section « Calendrier » : programme jour par jour (composants Event). */
export function ScheduleSection({ locale }: { locale: Locale }) {
  return (
    <ProgramSchedule
      days={schedule.map((day) => ({
        date: pick(day.date, locale),
        location: pick(day.location, locale),
        sessions: day.sessions.map((s) => ({
          time: s.time,
          endTime: s.endTime,
          trackKind: s.track,
          trackLabel: pick(TRACK_LABELS[s.track], locale),
          title: pick(s.title, locale),
          tag: s.tag ? pick(s.tag, locale) : undefined,
          room: s.room ? pick(s.room, locale) : undefined,
        })),
      }))}
    />
  );
}
