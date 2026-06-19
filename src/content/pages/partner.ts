import type { PageContent } from "../types";

export const partnerPages: PageContent[] = [
  {
    slug: "partner",
    section: "/partner",
    eyebrow: { fr: "Devenir partenaire", en: "Partner with us" },
    title: { fr: "Devenir partenaire d'A2M", en: "Partner with A2M" },
    lead: {
      fr: "Conférencier, partenaire stratégique ou partenaire média : il existe une façon de contribuer à A2M qui vous correspond.",
      en: "Speaker, strategic partner or media partner: there is a way to contribute to A2M that fits you.",
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Conférencier", en: "Speaker" },
            text: {
              fr: "Partagez votre expertise en keynote ou en panel devant un public de décideurs.",
              en: "Share your expertise in a keynote or panel before an audience of decision-makers.",
            },
          },
          {
            title: { fr: "Partenaire stratégique", en: "Strategic partner" },
            text: {
              fr: "Associez votre organisation à l'événement minier de référence Canada-Afrique.",
              en: "Align your organisation with the flagship Canada-Africa mining event.",
            },
          },
          {
            title: { fr: "Partenaire média", en: "Media partner" },
            text: {
              fr: "Couvrez l'événement avec un accès privilégié au programme et aux intervenants.",
              en: "Cover the event with privileged access to the programme and speakers.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Nous joindre", en: "Get in touch" },
        text: { fr: "info@a2mevent.com", en: "info@a2mevent.com" },
      },
    ],
  },
  {
    slug: "partner/speaker",
    section: "/partner",
    eyebrow: { fr: "Devenir partenaire", en: "Partner with us" },
    title: { fr: "Devenir conférencier", en: "Become a Speaker" },
    lead: {
      fr: "A2M lance un appel à conférenciers et panélistes pour son édition 2027.",
      en: "A2M is calling for speakers and panellists for its 2027 edition.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Soumettre une proposition", en: "Submit a proposal" },
        text: {
          fr: "Écrivez à info@a2mevent.com avec votre biographie et le sujet proposé.",
          en: "Write to info@a2mevent.com with your biography and proposed topic.",
        },
      },
    ],
  },
  {
    slug: "partner/strategic",
    section: "/partner",
    eyebrow: { fr: "Devenir partenaire", en: "Partner with us" },
    title: { fr: "Devenir partenaire stratégique", en: "Become a Strategic Partner" },
    lead: {
      fr: "Des partenariats premium pour les organisations qui partagent la vision d'A2M.",
      en: "Premium partnerships for organisations that share A2M's vision.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Nous joindre", en: "Get in touch" },
        text: { fr: "info@a2mevent.com", en: "info@a2mevent.com" },
      },
    ],
  },
  {
    slug: "partner/media",
    section: "/partner",
    eyebrow: { fr: "Devenir partenaire", en: "Partner with us" },
    title: { fr: "Devenir partenaire média", en: "Become a Media Partner" },
    lead: {
      fr: "Accréditations presse et partenariats média pour couvrir A2M 2027.",
      en: "Press accreditation and media partnerships to cover A2M 2027.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Accréditation", en: "Accreditation" },
        text: { fr: "info@a2mevent.com", en: "info@a2mevent.com" },
      },
    ],
  },
];
