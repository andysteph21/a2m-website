import { MapPin } from "lucide-react";
import type { TrackKind } from "@/content/data/program";
import { cn } from "@/lib/utils";

export interface AgendaSessionView {
  time: string;
  endTime?: string;
  trackKind: TrackKind;
  trackLabel: string;
  title: string;
  tag?: string;
  room?: string;
}

export interface ScheduleDayView {
  date: string;
  location: string;
  sessions: AgendaSessionView[];
}

/** Couleurs de track (palette événementielle v1.0 — zéro collision avec les rôles). */
const trackStyles: Record<TrackKind, { border: string; label: string; dot: string }> = {
  policy: { border: "border-l-gold", label: "text-copper", dot: "bg-gold" },
  dealflow: { border: "border-l-bronze", label: "text-bronze", dot: "bg-bronze" },
  esg: { border: "border-l-sage", label: "text-emerald-deep", dot: "bg-sage" },
  networking: { border: "border-l-champagne", label: "text-copper", dot: "bg-champagne" },
};

/** Calendrier jour par jour — composant « Event / agenda » du brand book. */
export function ProgramSchedule({ days }: { days: ScheduleDayView[] }) {
  // Légende des tracks réellement présents, dans l'ordre d'apparition.
  const tracks = Array.from(
    new Map(days.flatMap((d) => d.sessions).map((s) => [s.trackKind, s.trackLabel])).entries(),
  );

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-x-5 gap-y-2">
        {tracks.map(([kind, label]) => (
          <span
            key={kind}
            className="flex items-center gap-2 font-semibold text-[11px] text-muted uppercase tracking-[0.12em]"
          >
            <span className={cn("size-2.5 rounded-full", trackStyles[kind].dot)} aria-hidden />
            {label}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        {days.map((day) => (
          <div key={day.date}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-hairline border-b pb-3">
              <h3 className="font-display font-bold text-h3 text-emerald-deep">{day.date}</h3>
              <span className="flex items-center gap-1.5 text-small text-subtle">
                <MapPin className="size-3.5" />
                {day.location}
              </span>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {day.sessions.map((s) => {
                const style = trackStyles[s.trackKind];
                return (
                  <li
                    key={`${s.time}-${s.title}`}
                    className={cn(
                      "a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5",
                      style.border,
                    )}
                  >
                    <div className="w-14 shrink-0 sm:w-16">
                      <b className="tnum block font-semibold text-[15px] text-ink">{s.time}</b>
                      {s.endTime && (
                        <span className="tnum block text-[12px] text-subtle">{s.endTime}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className={cn(
                          "font-semibold text-[10px] uppercase tracking-[0.14em]",
                          style.label,
                        )}
                      >
                        <span aria-hidden>● </span>
                        {s.trackLabel}
                      </div>
                      <div className="mt-1 font-semibold text-body text-ink">{s.title}</div>
                      {s.tag && (
                        <span className="mt-1.5 inline-flex rounded-sm bg-surface px-2 py-0.5 text-[11px] text-muted">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    {s.room && (
                      <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                        {s.room}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
