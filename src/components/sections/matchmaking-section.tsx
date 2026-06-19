import { MatchmakingFlow } from "@/components/blocks/matchmaking-flow";
import type { Locale } from "@/i18n/routing";

const steps = {
  fr: [
    { title: "Profil", text: "Créez votre profil en 5 minutes : objectifs, projets, pays cibles." },
    {
      title: "Suggestions IA",
      text: "L'algorithme analyse la liste et propose les contreparties les plus pertinentes.",
    },
    {
      title: "Demandes",
      text: "Envoyez et acceptez des demandes de rencontre, planifiées automatiquement.",
    },
    {
      title: "Agenda complet",
      text: "Arrivez avec un calendrier de rendez-vous B2B de 20 minutes confirmés.",
    },
    {
      title: "Rencontre & suivi",
      text: "Rencontrez, documentez et assurez le suivi dans les espaces dédiés.",
    },
  ],
  en: [
    {
      title: "Profile",
      text: "Build your profile in 5 minutes: objectives, projects, target countries.",
    },
    {
      title: "AI matches",
      text: "The algorithm analyses the list and surfaces the most relevant counterparts.",
    },
    {
      title: "Requests",
      text: "Send and accept meeting requests, auto-scheduled into your agenda.",
    },
    { title: "Full agenda", text: "Arrive with a confirmed schedule of 20-minute B2B meetings." },
    { title: "Meet & follow up", text: "Meet, document and follow up in the dedicated areas." },
  ],
} as const;

/** Sous-section « Maillage d'affaires » : processus en 3 étapes. */
export function MatchmakingSection({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-8">
      <MatchmakingFlow steps={[...steps[locale]]} />
      <p className="max-w-[680px] text-body text-muted">
        {locale === "fr"
          ? "La plateforme de maillage ouvre environ 8 semaines avant l'événement. Un agenda de rencontres confirmées vous attend dès votre arrivée."
          : "The matchmaking platform opens about 8 weeks before the event. A confirmed meeting agenda awaits you on arrival."}
      </p>
    </div>
  );
}
