import { FeatureGrid } from "@/components/blocks/feature-grid";
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

const venues = {
  fr: [
    {
      title: "Business Matchmaking Lounge",
      text: "Lieu principal, avec capsules de rencontre privées et affichage des plannings en temps réel.",
    },
    {
      title: "Capital Markets Lounge",
      text: "Espace de négociation privé pour les discussions avancées (priorité aux Investor Pass et commanditaires).",
    },
    {
      title: "Salles privées",
      text: "Cadres entièrement privés pour les délégations ministérielles et les groupes de travail de haut niveau.",
    },
  ],
  en: [
    {
      title: "Business Matchmaking Lounge",
      text: "Primary venue with private meeting pods and live scheduling displays.",
    },
    {
      title: "Capital Markets Lounge",
      text: "Private negotiation space for advanced discussions (priority for Investor Pass holders and sponsors).",
    },
    {
      title: "Side rooms",
      text: "Fully private settings for ministerial delegations and high-level working groups.",
    },
  ],
} as const;

const tailored = {
  fr: [
    {
      title: "Sociétés minières",
      text: "Rencontres ciblées avec les ministres africains, IFD et sociétés de redevances/streaming.",
    },
    {
      title: "Investisseurs & IFD",
      text: "Badge Investisseur renforcé pour une forte visibilité entrante.",
    },
    {
      title: "Porteurs de projets",
      text: "Placement prioritaire dans l'algorithme après l'Investment Showcase.",
    },
    {
      title: "Gouvernements africains",
      text: "Rencontres protocolaires préprogrammées et maillage ouvert.",
    },
    {
      title: "Fournisseurs",
      text: "Appariement de précision par spécialité technique.",
    },
  ],
  en: [
    {
      title: "Mining companies",
      text: "Targeted meetings with relevant African ministers, DFIs and royalty/streaming companies.",
    },
    {
      title: "Investors & DFIs",
      text: "Enhanced Investor Badge for high inbound visibility.",
    },
    {
      title: "Project holders",
      text: "Priority placement in the algorithm after the Investment Showcase.",
    },
    {
      title: "African governments",
      text: "Pre-scheduled protocol meetings plus open matchmaking.",
    },
    {
      title: "Service providers",
      text: "Precision matching by technical specialty.",
    },
  ],
} as const;

const COPY = {
  fr: {
    intro:
      "La plateforme de maillage ouvre environ 8 semaines avant l'événement. Un agenda de rencontres confirmées vous attend dès votre arrivée.",
    venuesTitle: "Où ont lieu les rencontres",
    tailoredTitle: "Adapté à chaque type de délégué",
  },
  en: {
    intro:
      "The matchmaking platform opens about 8 weeks before the event. A confirmed meeting agenda awaits you on arrival.",
    venuesTitle: "Where meetings happen",
    tailoredTitle: "Tailored for each delegate type",
  },
} as const;

/** Sous-section « Maillage d'affaires » : processus, lieux et adaptation par profil. */
export function MatchmakingSection({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="flex flex-col gap-10">
      <MatchmakingFlow steps={[...steps[locale]]} />
      <p className="max-w-[680px] text-body text-muted">{c.intro}</p>

      <div className="flex flex-col gap-6">
        <h3 className="font-display font-semibold text-h3 text-ink">{c.venuesTitle}</h3>
        <FeatureGrid columns={3} items={[...venues[locale]]} />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-display font-semibold text-h3 text-ink">{c.tailoredTitle}</h3>
        <FeatureGrid columns={3} items={[...tailored[locale]]} />
      </div>
    </div>
  );
}
