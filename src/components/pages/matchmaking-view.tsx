import { MatchmakingFlow } from "@/components/blocks/matchmaking-flow";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import type { Locale } from "@/i18n/routing";

const steps = {
  fr: [
    { title: "Profil", text: "Créez votre profil et précisez vos objectifs d'affaires." },
    {
      title: "Match",
      text: "Notre moteur propulsé par l'IA propose des correspondances pertinentes.",
    },
    { title: "Rencontre", text: "Confirmez vos rendez-vous B2B de 15 minutes avant l'événement." },
  ],
  en: [
    { title: "Profile", text: "Create your profile and define your business objectives." },
    { title: "Match", text: "Our AI-powered engine suggests relevant matches." },
    { title: "Meet", text: "Confirm your 15-minute B2B meetings ahead of the event." },
  ],
} as const;

/** Vue « Maillage d'affaires » avec le processus en 3 étapes. */
export function MatchmakingView({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader
        eyebrow={locale === "fr" ? "Participer" : "Attend"}
        title={locale === "fr" ? "Maillage d'affaires" : "Business Matchmaking"}
        lead={
          locale === "fr"
            ? "Plus de 5 000 rencontres B2B préprogrammées grâce à une plateforme propulsée par l'IA."
            : "Over 5,000 pre-scheduled B2B meetings powered by an AI-driven platform."
        }
        breadcrumb={[
          { label: locale === "fr" ? "Participer" : "Attend", href: "/attend" },
          { label: locale === "fr" ? "Maillage d'affaires" : "Business Matchmaking" },
        ]}
      />
      <Section>
        <MatchmakingFlow steps={[...steps[locale]]} />
        <p className="mt-10 max-w-[680px] text-body text-muted">
          {locale === "fr"
            ? "La plateforme de maillage ouvre environ 8 semaines avant l'événement. Un agenda de rencontres confirmées vous attend dès votre arrivée."
            : "The matchmaking platform opens about 8 weeks before the event. A confirmed meeting agenda awaits you on arrival."}
        </p>
      </Section>
    </>
  );
}
