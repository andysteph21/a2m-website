import type { PageContent } from "../types";

export const partnerPages: PageContent[] = [
  {
    slug: "partner",
    section: "/partner",
    eyebrow: { fr: "Devenir partenaire", en: "Partner with us" },
    title: { fr: "Devenir partenaire d'A2M", en: "Partner with A2M" },
    lead: {
      fr: "Conférencier, partenaire stratégique ou partenaire média : il existe une façon de contribuer à A2M qui vous correspond. Quelle que soit la formule, une seule adresse — notre équipe vous répond.",
      en: "Speaker, strategic partner or media partner: there is a way to contribute to A2M that fits you. Whichever it is, there's a single point of contact — our team handles it.",
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
        type: "heading",
        text: { fr: "Ce qu'implique chaque rôle", en: "What each role involves" },
      },
      {
        type: "accordion",
        items: [
          {
            title: { fr: "Devenir conférencier", en: "Become a speaker" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "A2M offre aux experts et leaders d'opinion une tribune pour partager leurs connaissances à travers des keynotes et des panels. Les conférenciers sont sélectionnés sur leur expertise et leur capacité à offrir des interventions engageantes et instructives ; le processus est compétitif et les propositions sont évaluées sur leur pertinence, leur originalité et leur qualité.",
                  en: "A2M offers experts and thought leaders a platform to share their knowledge through keynote presentations and panel discussions. Speakers are selected on their expertise and their ability to deliver engaging, informative sessions; the process is competitive, and proposals are evaluated on relevance, originality and overall quality.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Une tribune en keynote et en panel",
                    en: "A platform via keynotes and panel discussions",
                  },
                  {
                    fr: "Sélection sur l'expertise, l'originalité et la qualité",
                    en: "Selected on expertise, originality and quality",
                  },
                  {
                    fr: "Soumettez une proposition avec votre biographie et le sujet",
                    en: "Submit a proposal with your biography and topic",
                  },
                ],
              },
            ],
          },
          {
            title: { fr: "Devenir partenaire stratégique", en: "Become a strategic partner" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Rejoignez le cercle des partenaires stratégiques d'A2M — une plateforme exclusive et sur mesure pour le leadership d'opinion, l'amplification de marque et le réseautage de haut niveau. En vous associant à A2M, vous accédez à un public trié sur le volet de décideurs, d'innovateurs et d'experts du secteur ; nos programmes sur mesure favorisent la croissance, les connexions de valeur et la mise en avant de votre expertise.",
                  en: "Join the elite group of A2M Strategic Partners — an exclusive, tailored platform for thought leadership, brand amplification and high-level networking. Partnering with A2M gives you unparalleled access to a curated audience of decision-makers, innovators and industry experts, and our bespoke programmes are designed to drive growth, foster meaningful connections and showcase your expertise.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Leadership d'opinion et amplification de marque",
                    en: "Thought leadership and brand amplification",
                  },
                  {
                    fr: "Accès à un public trié de décideurs et d'innovateurs",
                    en: "Access to a curated audience of decision-makers and innovators",
                  },
                  {
                    fr: "Programmes de partenariat sur mesure",
                    en: "Bespoke, tailored partnership programmes",
                  },
                ],
              },
            ],
          },
          {
            title: { fr: "Devenir partenaire média", en: "Become a media partner" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "En tant que partenaire média, vous bénéficiez d'un accès exclusif au programme, aux conférenciers et aux participants — autant d'occasions d'entrevues, de couverture et de création de contenu. A2M accrédite les journalistes professionnels couvrant les industries minières africaine et canadienne ; les médias accrédités reçoivent un laissez-passer média gratuit. L'accréditation est réservée aux membres de la rédaction.",
                  en: "As a Media Partner you gain exclusive access to the programme, speakers and attendees — valuable opportunities for interviews, coverage and content creation. A2M accredits professional journalists reporting on the African and Canadian mining industries; accredited media receive a complimentary Media Pass. Accreditation is reserved for editorial staff members.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Accès au programme, aux conférenciers et aux participants",
                    en: "Access to the programme, speakers and attendees",
                  },
                  {
                    fr: "Laissez-passer média gratuit pour les accrédités",
                    en: "Complimentary Media Pass for accredited media",
                  },
                  {
                    fr: "Réservé aux journalistes professionnels de la rédaction",
                    en: "Open to professional editorial journalists",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Nous joindre", en: "Get in touch" },
        text: {
          fr: "Quel que soit le rôle qui vous correspond — conférencier, partenaire stratégique ou média — écrivez à notre équipe à info@a2mevent.com.",
          en: "Whatever role fits you — speaker, strategic partner or media — write to our team at info@a2mevent.com.",
        },
      },
    ],
  },
];
