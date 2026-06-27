import { FeatureGrid } from "@/components/blocks/feature-grid";
import { MatchmakingFlow } from "@/components/blocks/matchmaking-flow";
import type { Locale } from "@/i18n/routing";

const steps = {
  fr: [
    {
      title: "Créez votre profil",
      text: "Huit semaines avant l'événement (à partir du 12 avril 2027), les délégués inscrits accèdent à la plateforme. Créez un profil puissant en 5 minutes : vos objectifs, vos projets, votre déploiement de capital, vos pays cibles et les partenaires recherchés. Plus c'est précis, meilleurs sont les appariements.",
    },
    {
      title: "Consultez les suggestions par IA",
      text: "Un algorithme intelligent analyse l'intégralité de la liste des délégués et fait remonter vos contreparties les plus pertinentes, classées et filtrables par pays, type d'organisation, secteur et mandat d'investissement.",
    },
    {
      title: "Envoyez et acceptez des demandes de rencontre",
      text: "Demandez des rendez-vous directement. Les rencontres acceptées sont automatiquement planifiées dans votre agenda personnel, sur des créneaux dédiés.",
    },
    {
      title: "Arrivez avec un agenda complet",
      text: "Entrez à l'A2M avec un calendrier confirmé de rencontres stratégiques de 20 minutes.",
    },
    {
      title: "Rencontrez, documentez et assurez le suivi",
      text: "Les rencontres se déroulent dans les espaces désignés.",
    },
  ],
  en: [
    {
      title: "Build your profile",
      text: "Eight weeks before the event (starting April 12, 2027), registered delegates gain access to the platform. Create a powerful profile in 5 minutes — your objectives, projects, capital deployment, target countries, and desired partners. The more specific, the better the matches.",
    },
    {
      title: "Review AI-powered matches",
      text: "An intelligent algorithm analyses the full delegate list and surfaces your highest-relevance counterparts, ranked and filterable by country, organisation type, sector, and investment mandate.",
    },
    {
      title: "Send & accept meeting requests",
      text: "Request meetings directly. Accepted meetings are automatically scheduled into your personal agenda during dedicated slots.",
    },
    {
      title: "Arrive with a full agenda",
      text: "Walk into the A2M with a confirmed schedule of strategic 20-minute meetings.",
    },
    {
      title: "Meet, document & follow up",
      text: "Meetings take place in designated areas.",
    },
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
      text: "Espace de négociation privé exclusif pour les discussions avancées (priorité aux détenteurs d'Investor Pass et aux commanditaires).",
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
      text: "Exclusive private negotiation space for advanced discussions (priority for Investor Pass holders and sponsors).",
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
      text: "Rencontres ciblées avec les ministres africains concernés, les IFD et les sociétés de redevances/streaming.",
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
      text: "Rencontres protocolaires préprogrammées, en plus du maillage ouvert.",
    },
    {
      title: "Fournisseurs de services",
      text: "Appariement de précision par spécialité technique.",
    },
  ],
  en: [
    {
      title: "Mining companies",
      text: "Targeted meetings with relevant African Ministers, DFIs, and royalty/streaming companies.",
    },
    {
      title: "Investors & DFIs",
      text: "Enhanced Investor Badge for high inbound visibility.",
    },
    {
      title: "Project holders",
      text: "Priority placement in the algorithm post-Investment Showcase.",
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

const demo = {
  fr: [
    {
      title: "Profil",
      text: "Définissez vos objectifs, vos secteurs et vos critères d'investissement.",
    },
    {
      title: "Appariement",
      text: "Recevez des recommandations de rencontres ciblées, propulsées par l'IA.",
    },
    {
      title: "Rencontre",
      text: "Rendez-vous planifiés de 15 minutes aux tables B2B dédiées.",
    },
  ],
  en: [
    {
      title: "Profile",
      text: "Define your goals, sectors, and investment criteria.",
    },
    {
      title: "Match",
      text: "Receive targeted meeting recommendations powered by AI.",
    },
    {
      title: "Meet",
      text: "Scheduled 15-min meetings at dedicated B2B tables.",
    },
  ],
} as const;

const COPY = {
  fr: {
    intro:
      "La plateforme de maillage A2M est conçue pour vous connecter aux bonnes personnes, au bon moment, transformant le réseautage traditionnel — tâche chronophage — en une expérience hautement ciblée et axée sur les résultats.",
    intro2:
      "La plateforme ouvre huit semaines avant l'événement. Les délégués inscrits peuvent créer des profils détaillés, définir clairement leurs objectifs d'affaires et recevoir des recommandations de rencontres personnalisées issues de l'ensemble du bassin de délégués. À votre arrivée à Montréal, votre agenda optimisé de rencontres B2B est déjà confirmé et prêt à générer de la valeur.",
    howTitle: "Comment ça fonctionne",
    venuesTitle: "Où ont lieu les rencontres",
    tailoredTitle: "Des résultats adaptés à chaque type de délégué",
    demoTitle: "Démo",
  },
  en: {
    intro:
      "The A2M Matchmaking Platform is designed to connect you with the right people, at the right time, transforming traditional networking from a time-consuming task into a highly targeted, results-driven experience.",
    intro2:
      "The platform opens eight weeks before the event. Registered delegates can create detailed profiles, clearly define their business objectives, and receive personalized meeting recommendations drawn from the entire delegate pool. By the time you arrive in Montreal, your optimized B2B meeting agenda is already confirmed and ready to deliver value.",
    howTitle: "How it works",
    venuesTitle: "Where meetings happen",
    tailoredTitle: "Tailored for results by delegate type",
    demoTitle: "Demo",
  },
} as const;

/** Sous-section « Maillage d'affaires » : processus, lieux et adaptation par profil. */
export function MatchmakingSection({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p className="max-w-[680px] text-body text-muted">{c.intro}</p>
        <p className="max-w-[680px] text-body text-muted">{c.intro2}</p>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-display font-semibold text-h3 text-ink">{c.howTitle}</h3>
        <MatchmakingFlow steps={[...steps[locale]]} />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-display font-semibold text-h3 text-ink">{c.venuesTitle}</h3>
        <FeatureGrid columns={3} items={[...venues[locale]]} />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-display font-semibold text-h3 text-ink">{c.tailoredTitle}</h3>
        <FeatureGrid columns={3} items={[...tailored[locale]]} />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-display font-semibold text-h3 text-ink">{c.demoTitle}</h3>
        <FeatureGrid columns={3} items={[...demo[locale]]} />
      </div>
    </div>
  );
}
