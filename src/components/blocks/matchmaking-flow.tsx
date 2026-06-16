import { ArrowRight } from "lucide-react";
import { Fragment } from "react";

export interface FlowStep {
  title: string;
  text: string;
}

/** Processus en étapes (ex. maillage d'affaires : Profil → Match → Rencontre). */
export function MatchmakingFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
      {steps.map((step, i) => (
        <Fragment key={step.title}>
          <div className="flex flex-1 flex-col gap-3 rounded-sm border border-hairline bg-card p-6 shadow-card">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-cta font-semibold text-[14px] text-white tnum">
              {i + 1}
            </span>
            <h3 className="font-display font-semibold text-h3 text-ink">{step.title}</h3>
            <p className="text-body text-muted">{step.text}</p>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight
              className="mx-auto size-6 shrink-0 rotate-90 text-taupe lg:rotate-0"
              aria-hidden
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
