import type { PageContent } from "../types";

export const programPages: PageContent[] = [
  {
    slug: "program/honorary-patron",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Patron d'honneur", en: "Honorary Patron" },
    lead: {
      fr: "Chaque édition d'A2M met à l'honneur une personnalité de premier plan dont l'engagement incarne les valeurs de la conférence.",
      en: "Each A2M edition honours a leading figure whose commitment embodies the conference's values.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Bientôt dévoilé", en: "To be unveiled" },
        text: {
          fr: "Le patron d'honneur d'A2M 2027 sera annoncé prochainement.",
          en: "The Honorary Patron of A2M 2027 will be announced soon.",
        },
      },
      {
        type: "image",
        label: {
          fr: "Portrait officiel du patron d'honneur (nom + titre)",
          en: "Official portrait of the Honorary Patron (name + title)",
        },
        ratio: "4/5",
      },
    ],
  },
  {
    slug: "program/sessions",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Keynotes & panels", en: "Keynotes & Panels" },
    lead: {
      fr: "Thème 2027 — « L'Alliance pour les minéraux de demain : investir, transformer, partager la valeur ».",
      en: '2027 theme — "The Alliance for the Minerals of Tomorrow: Investing, Transforming, and Sharing Value."',
    },
    blocks: [
      { type: "heading", text: { fr: "Keynotes", en: "Keynotes" } },
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Afrique, Canada & ZLECAf", en: "Africa, Canada & AfCFTA" },
            text: {
              fr: "Une alliance pour les minéraux de demain : comment bâtir un partenariat équitable.",
              en: "An alliance for the minerals of tomorrow: building a truly equitable partnership.",
            },
          },
          {
            title: {
              fr: "De l'extraction à la transformation",
              en: "From extraction to transformation",
            },
            text: {
              fr: "Bâtir ensemble les chaînes de valeur (incl. l'Alliance de production de minéraux critiques de 18,5 G$).",
              en: "Building value chains together (incl. the $18.5B Critical Minerals Production Alliance).",
            },
          },
          {
            title: { fr: "Le Québec, partenaire stratégique", en: "Quebec, a strategic partner" },
            text: {
              fr: "Capital, expertise et savoir-faire : un écosystème minier complet pour l'Afrique.",
              en: "Capital, expertise and know-how: a complete mining ecosystem for Africa.",
            },
          },
        ],
      },
      { type: "heading", text: { fr: "Panels", en: "Panels" } },
      {
        type: "paragraph",
        text: {
          fr: "Six panels thématiques couvrent l'investissement, le financement, l'ESG, les codes miniers et le contenu local. Dépliez chacun pour le descriptif et les points de discussion.",
          en: "Six thematic panels span investment, financing, ESG, mining codes and local content. Expand each for its description and discussion points.",
        },
      },
      {
        type: "accordion",
        items: [
          {
            title: {
              fr: "Investissement Canada-Afrique en 2027 : état des lieux",
              en: "Canada-Africa Mining Investment in 2027: Current Landscape",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Le Canada compte parmi les premiers investisseurs miniers étrangers en Afrique : 120+ sociétés cotées au TSX y sont actives, pour plus de 40 G$ d'actifs. Ce panel dresse un état des lieux 2027 — pays ciblés, minéraux en vue, modèles de financement et tendances émergentes.",
                  en: "Canada is among the leading foreign mining investors in Africa: 120+ TSX-listed companies are active, with over CAD 40B in assets. This panel offers a 2027 overview — countries targeted, minerals in focus, financing models and emerging trends.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Facteurs de succès des partenariats Canada-Afrique",
                    en: "Success factors for Canada-Africa partnerships",
                  },
                  {
                    fr: "Obstacles structurels : capital, risques réglementaires, infrastructures, logistique",
                    en: "Structural obstacles: capital, regulatory risk, infrastructure, logistics",
                  },
                  {
                    fr: "Opportunités liées à la demande mondiale en minéraux critiques",
                    en: "Opportunities linked to global demand for critical minerals",
                  },
                ],
              },
            ],
          },
          {
            title: {
              fr: "Minéraux critiques africains & transition énergétique",
              en: "African Critical Minerals & the Global Energy Transition",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "L'Afrique détient une part stratégique des réserves mondiales : 70 %+ du cobalt, 40 % du platine, ainsi que graphite, lithium, bauxite, uranium et terres rares. Comment transformer ce potentiel géologique en levier de développement souverain, au-delà de l'exportation de matières brutes ?",
                  en: "Africa holds a strategic share of world reserves: 70%+ of cobalt, 40% of platinum, plus graphite, lithium, bauxite, uranium and rare earths. How can this geological potential become a lever for sovereign development, beyond exporting raw materials?",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Cartographie des ressources critiques africaines",
                    en: "Mapping of African critical resources",
                  },
                  {
                    fr: "Valorisation locale : raffinage, transformation, composants de batteries",
                    en: "Local value addition: refining, processing, battery components",
                  },
                  {
                    fr: "Partenariats avec le Canada et le Québec pour accélérer cette montée en valeur",
                    en: "Partnerships with Canada and Quebec to accelerate this value upgrade",
                  },
                ],
              },
            ],
          },
          {
            title: {
              fr: "Financer les mines africaines : TSX, IFD et capital local",
              en: "Financing African Mines: TSX, DFIs and Local Capital",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "L'accès au financement reste l'un des principaux freins. Ce panel réunit sociétés cotées au TSX, institutions de financement du développement (FinDev Canada, BAD, AFC) et capital local africain pour examiner les modèles de financement les plus adaptés en 2027.",
                  en: "Access to financing remains a key barrier. This panel brings together TSX-listed companies, development finance institutions (FinDev Canada, AfDB, AFC) and African local capital to examine the most suitable financing models for 2027.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Financement mixte : capitaux propres, dette, co-investissement, capital privé local",
                    en: "Blended finance: equity, debt, co-investment, local private capital",
                  },
                  {
                    fr: "Exigences ESG et accès au capital",
                    en: "ESG requirements and access to capital",
                  },
                  {
                    fr: "Mécanismes de garantie et partage des risques",
                    en: "Guarantee mechanisms and risk sharing",
                  },
                  {
                    fr: "Opportunités créées par la ZLECAf pour les marchés de capitaux africains",
                    en: "Opportunities created by the AfCFTA for African capital markets",
                  },
                ],
              },
            ],
          },
          {
            title: {
              fr: "L'ESG en Afrique : entre standards mondiaux et réalités de terrain",
              en: "ESG in Africa: Global Standards and On-the-Ground Realities",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Comment adapter les standards ESG aux réalités africaines sans en diluer la substance ? Ce panel explore une mise en œuvre exigeante et crédible.",
                  en: "How can ESG standards be adapted to African realities without diluting their substance? This panel explores demanding, credible implementation.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Adapter les cadres ESG aux contextes locaux",
                    en: "Adapting ESG frameworks to local contexts",
                  },
                  {
                    fr: "Impliquer les communautés locales dans les consultations",
                    en: "Involving local communities in consultations",
                  },
                  {
                    fr: "Assurer la cohérence ESG entre siège et opérations de terrain",
                    en: "Ensuring ESG consistency between headquarters and field operations",
                  },
                  {
                    fr: "Faire des certifications ESG un facteur de compétitivité",
                    en: "Turning ESG certifications into a competitiveness driver",
                  },
                ],
              },
            ],
          },
          {
            title: {
              fr: "Codes miniers africains : stabilité, attractivité, souveraineté",
              en: "African Mining Codes: Stability, Attractiveness, Sovereignty",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Les codes miniers sont le contrat fondamental entre un État africain et les investisseurs. Ce panel passe en revue les réformes en cours et identifie les modèles conciliant attractivité, souveraineté, retombées locales et stabilité réglementaire.",
                  en: "Mining codes are the fundamental contract between an African state and investors. This panel reviews ongoing reforms and identifies models reconciling attractiveness, sovereignty, local benefits and regulatory stability.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Réformes des codes miniers en Afrique",
                    en: "Mining code reforms in Africa",
                  },
                  {
                    fr: "Modèles équilibrant intérêts des investisseurs et des nations",
                    en: "Models balancing investor and national interests",
                  },
                  {
                    fr: "Comparaisons entre juridictions africaines et canadiennes",
                    en: "Comparisons between African and Canadian jurisdictions",
                  },
                  {
                    fr: "Leçons des révisions récentes en Afrique de l'Ouest et centrale",
                    en: "Lessons from recent revisions in West and Central Africa",
                  },
                ],
              },
            ],
          },
          {
            title: {
              fr: "Du sous-traitant au partenaire : les entreprises locales africaines",
              en: "From Subcontractor to Partner: African Local Enterprises",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Travailler avec des entreprises locales africaines n'est pas un compromis mais un avantage compétitif : coûts réduits, délais raccourcis, risques abaissés et meilleures relations avec les communautés.",
                  en: "Working with African local enterprises is not a compromise but a competitive advantage: lower costs, shorter lead times, reduced risk and better community relations.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Les entreprises locales africaines offrent de réels avantages compétitifs",
                    en: "African local enterprises offer real competitive advantages",
                  },
                  {
                    fr: "Les sociétés canadiennes et québécoises apportent expertise, technologie et savoir-faire",
                    en: "Canadian and Quebec companies bring expertise, technology and know-how",
                  },
                  {
                    fr: "Des partenariats gagnant-gagnant sont possibles",
                    en: "Win-win partnerships are possible",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "program/ministerial-round-table",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Table ronde ministérielle", en: "Ministerial Round Table" },
    lead: {
      fr: "Le premier dialogue politique Canada-Afrique sur les minéraux critiques tenu en sol nord-américain.",
      en: "The first Canada-Africa political dialogue on critical minerals held on North American soil.",
    },
    blocks: [
      {
        type: "callout",
        title: {
          fr: "6 juin · sur invitation · Fairmont",
          en: "June 6 · by invitation · Fairmont",
        },
        text: {
          fr: "Dialogue à huis clos de trois heures, co-présidé par S.E. Issoufou Mahamadou et le ministre canadien des Ressources naturelles.",
          en: "Three-hour closed-door dialogue co-chaired by H.E. Issoufou Mahamadou and Canada's Minister of Natural Resources.",
        },
      },
      { type: "heading", text: { fr: "Axes du dialogue", en: "Focus areas" } },
      {
        type: "list",
        items: [
          {
            fr: "Certitude réglementaire et conditions fiscales",
            en: "Regulatory certainty and fiscal terms",
          },
          { fr: "Contenu local et valeur ajoutée", en: "Local content and value addition" },
          {
            fr: "Sécurité des chaînes d'approvisionnement en minéraux critiques",
            en: "Critical minerals supply chain security",
          },
          {
            fr: "Standards miniers responsables et dérisquage des projets",
            en: "Responsible mining standards and project de-risking",
          },
          {
            fr: "La ZLECAf comme plateforme de négociation collective",
            en: "The AfCFTA as a collective bargaining platform",
          },
        ],
      },
      {
        type: "heading",
        text: { fr: "Pourquoi cette table ronde compte", en: "Why this roundtable matters" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Selon Ressources naturelles Canada, le Canada figure parmi les plus grands investisseurs miniers étrangers en Afrique — plus de 45 G$ d'actifs et plus de 100 sociétés actives. Si les engagements de haut niveau existent des deux côtés, il manque souvent un cadre opérationnel de gouvernement à gouvernement pour traduire la politique en projets bancables et dérisqués. La table ronde comble ce vide.",
          en: "According to Natural Resources Canada, Canada is among the largest foreign mining investors in Africa — over CAD 45B in assets and more than 100 active companies. While high-level commitments exist on both sides, a government-to-government operational framework to turn policy into de-risked, bankable projects is often missing. The roundtable bridges that gap.",
        },
      },
      {
        type: "list",
        items: [
          {
            fr: "Réduire le risque politique et réglementaire par un dialogue structuré",
            en: "Reduce political and regulatory risk through structured dialogue",
          },
          {
            fr: "Stabiliser le climat d'investissement (contenu local, valeur ajoutée, retombées communautaires)",
            en: "Stabilise the investment climate (local content, value addition, community benefits)",
          },
          {
            fr: "Convertir les partenariats stratégiques en résultats concrets et mutuellement bénéfiques",
            en: "Convert strategic partnerships into concrete, mutually beneficial outcomes",
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Sur invitation officielle", en: "By official invitation" },
        text: {
          fr: "La participation à la Table ronde ministérielle se fait sur invitation officielle uniquement.",
          en: "Attendance at the Ministerial Roundtable is by official invitation only.",
        },
      },
    ],
  },
  {
    slug: "program/women-in-mining",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Forum Femmes & Mines", en: "Women in Mining Forum" },
    lead: {
      fr: "« Autonomiser les femmes, transformer l'industrie » — un forum à fort impact inclus dans l'inscription.",
      en: '"Empowering Women, Reshaping the Industry" — a high-impact forum included with registration.',
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Le secteur minier africain emploie des centaines de milliers de personnes, mais les femmes représentent moins de 15 % des effectifs dans la plupart des pays producteurs — et bien moins aux niveaux techniques, de gestion et de direction. Ce n'est pas qu'un enjeu d'équité : c'est un impératif commercial et de gouvernance. Les secteurs inclusifs attirent un investissement de meilleure qualité, réduisent le risque communautaire et améliorent la performance ESG.",
          en: "Africa's mining sector employs hundreds of thousands, yet women represent less than 15% of the workforce in most producing countries — and far less at technical, managerial and executive levels. This is not only an equity issue: it is a commercial and governance imperative. Inclusive sectors attract higher-quality investment, reduce community risk and improve ESG performance.",
        },
      },
      {
        type: "image",
        label: {
          fr: "Femmes dans le secteur minier — leadership & terrain",
          en: "Women in mining — leadership & field",
        },
        ratio: "16/9",
        src: "/images/program/women-in-mining.jpg",
        alt: {
          fr: "Femme professionnelle du secteur minier avec équipement de protection",
          en: "Woman mining professional wearing protective equipment",
        },
        credit: {
          label: "Nana Ohene Adu — Wikimedia Commons",
          license: "CC BY-SA 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Ghana_-_Woman_Miner_Engagement_Manager_02.jpg",
        },
      },
      {
        type: "stats",
        items: [
          {
            value: "< 15 %",
            label: {
              fr: "des effectifs miniers sont des femmes",
              en: "of the mining workforce are women",
            },
          },
          {
            value: "30–40 %",
            label: { fr: "dans la mine artisanale", en: "in artisanal & small-scale mining" },
          },
        ],
      },
      {
        type: "heading",
        text: { fr: "Thèmes clés du forum", en: "Key forum topics" },
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Leadership & inclusion", en: "Leadership & inclusion" },
            text: {
              fr: "Récits de femmes dirigeant mines, institutions financières et organismes miniers.",
              en: "Stories from women leading mines, financial institutions and mining bodies.",
            },
          },
          {
            title: { fr: "Briser les barrières", en: "Breaking barriers" },
            text: {
              fr: "Défis et solutions concrètes pour accroître la participation des femmes.",
              en: "Challenges and practical solutions to increase women's participation.",
            },
          },
          {
            title: { fr: "Impact communautaire", en: "Community impact" },
            text: {
              fr: "Le rôle clé des femmes dans une mine responsable et un développement durable.",
              en: "The pivotal role of women in responsible mining and sustainable development.",
            },
          },
          {
            title: { fr: "Réseautage", en: "Networking" },
            text: {
              fr: "Connexions stratégiques avec pairs, décideurs et mentors.",
              en: "Strategic connections with peers, decision-makers and mentors.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "program/investors-breakfast",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Déjeuner des investisseurs", en: "Investors' Breakfast" },
    lead: {
      fr: "« Les 90 minutes les plus importantes de votre année d'investissement minier en Afrique. »",
      en: '"The most important 90 minutes of your Africa mining investment year."',
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Il manque cruellement de moments où celles et ceux qui signent réellement les chèques se retrouvent dans une même salle — sans promoteurs de projets pour capter leur attention, sans le bruit d'un parquet de conférence. Le Déjeuner des investisseurs cartographie le capital disponible, identifie les mandats qui se recoupent et bâtit les relations de co-investissement qui rendent finançables les projets africains complexes.",
          en: "There is a serious shortage of moments where the people who actually write the cheques are in one room — without project promoters competing for their attention, without the noise of a conference floor. The Investors' Breakfast maps available capital, identifies overlapping mandates and builds the co-investment relationships that make complex African projects financeable.",
        },
      },
      {
        type: "callout",
        title: { fr: "Session fermée · 90 minutes", en: "Closed session · 90 minutes" },
        text: {
          fr: "Réservé aux institutions de capital (promoteurs et grand public exclus). Gratuit pour les investisseurs qualifiés.",
          en: "Reserved for capital institutions (promoters and general audience excluded). Complimentary for qualified investors.",
        },
      },
      { type: "heading", text: { fr: "Qui participe", en: "Who attends" } },
      {
        type: "list",
        items: [
          {
            fr: "Institutions de financement du développement (IFD)",
            en: "Development Finance Institutions (DFIs)",
          },
          {
            fr: "Fonds de pension, fonds souverains et fondations",
            en: "Pension funds, sovereign wealth funds & endowments",
          },
          { fr: "Sociétés de redevances et de streaming", en: "Royalty & streaming companies" },
          {
            fr: "Capital-investissement & fonds de capital-risque miniers",
            en: "Mining-focused private equity & venture funds",
          },
          {
            fr: "Banques d'investissement et conseillers financiers",
            en: "Investment banks and financial advisors",
          },
        ],
      },
    ],
  },
  {
    slug: "program/networking",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Réseautage & événements sociaux", en: "Networking & Social Events" },
    lead: {
      fr: "« C'est là que les vraies conversations ont lieu » — un programme social conçu pour accélérer les relations de confiance.",
      en: '"Where the real conversations happen" — a social programme designed to accelerate trusted relationships.',
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Réception de bienvenue", en: "Welcome reception" },
            text: {
              fr: "Lancez l'expérience A2M ; les suggestions de l'app de réseautage s'activent en temps réel.",
              en: "Kick off the A2M experience; the networking app's suggestions activate in real time.",
            },
          },
          {
            title: { fr: "Dîner de gala", en: "Gala dinner" },
            text: {
              fr: "Gastronomie et réseautage à haute valeur ; placement Canada/Afrique pensé pour l'affinité d'affaires.",
              en: "Fine dining and high-value networking; Canada/Africa seating curated for business affinity.",
            },
          },
          {
            title: { fr: "Soirée de réseautage", en: "Networking evening" },
            text: {
              fr: "Ambiance informelle, musique, sans agenda — les deals continuent.",
              en: "Informal atmosphere, music, no agenda — deals continue.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Le Marketplace comme hub", en: "The Marketplace as hub" },
        text: {
          fr: "Stands, espaces de discussion et stations café : un environnement de réseautage continu tout au long de l'événement.",
          en: "Stands, lounges and coffee stations: a continuous networking environment throughout the event.",
        },
      },
    ],
  },
  {
    slug: "program/speakers",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Conférenciers & panélistes", en: "Speakers & Panellists" },
    lead: {
      fr: "Des dirigeants et experts de premier plan, du Canada et d'Afrique. La liste sera dévoilée prochainement.",
      en: "Leading executives and experts from Canada and Africa. The line-up will be unveiled soon.",
    },
    blocks: [
      {
        type: "speakers",
        count: 8,
        label: {
          fr: "Conférenciers & panélistes — profils à venir",
          en: "Speakers & panellists — profiles to be announced",
        },
      },
      {
        type: "callout",
        title: { fr: "Devenir conférencier", en: "Become a speaker" },
        text: {
          fr: "Vous souhaitez intervenir ? Soumettez votre proposition à info@a2mevent.com.",
          en: "Would you like to speak? Submit your proposal to info@a2mevent.com.",
        },
      },
    ],
  },
  {
    slug: "program/honorary-country",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "Pays à l'honneur", en: "Honorary Country" },
    lead: {
      fr: "Chaque édition d'A2M désigne un pays africain comme Pays à l'honneur. Pour 2027, c'est la Côte d'Ivoire.",
      en: "Each A2M edition designates one African country as its Guest Honorary Country. For 2027, it is Côte d'Ivoire.",
    },
    blocks: [
      {
        type: "callout",
        title: {
          fr: "Côte d'Ivoire · Pays à l'honneur 2027",
          en: "Côte d'Ivoire · Honorary Country 2027",
        },
        text: {
          fr: "La Côte d'Ivoire conduira une délégation de haut niveau à Montréal pour présenter ses projets phares aux investisseurs et opérateurs canadiens.",
          en: "Côte d'Ivoire will lead a high-level delegation to Montréal to present its flagship projects to Canadian investors and operators.",
        },
      },
      {
        type: "stats",
        items: [
          {
            value: "N° 1",
            label: {
              fr: "destination d'exploration aurifère en Afrique de l'Ouest",
              en: "gold exploration destination in West Africa",
            },
          },
          {
            value: "20+",
            label: {
              fr: "sociétés canadiennes (TSX) déjà présentes",
              en: "Canadian TSX companies already operating",
            },
          },
          {
            value: "58 t",
            label: { fr: "d'or produites en 2024", en: "of gold produced in 2024" },
          },
          {
            value: "100 t/an",
            label: { fr: "objectif de production d'ici 2030", en: "production target by 2030" },
          },
        ],
      },
      {
        type: "image",
        label: {
          fr: "Secteur minier ouest-africain (illustration)",
          en: "West African mining sector (illustrative)",
        },
        ratio: "16/9",
        src: "/images/home/cote-divoire.jpg",
        alt: {
          fr: "Exploitation minière aurifère en Afrique de l'Ouest (illustration)",
          en: "West African gold mining (illustrative)",
        },
        credit: {
          label: "Will Dossett — Wikimedia Commons",
          license: "CC BY-SA 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Chegga_Artisanal_Mining.jpg",
        },
      },
      {
        type: "heading",
        text: {
          fr: "Appel à candidatures — Pays à l'honneur",
          en: "Call for Applications — Honorary Country",
        },
      },
      {
        type: "paragraph",
        text: {
          fr: "Les candidatures sont évaluées par le comité de sélection d'A2M selon un cadre rigoureux de 35 critères quantifiables, organisés en sept catégories pondérées.",
          en: "Applications are evaluated by A2M's selection committee against a rigorous framework of 35 quantifiable criteria, organised into seven weighted categories.",
        },
      },
      {
        type: "list",
        items: [
          {
            fr: "Potentiel du secteur minier et attractivité des investissements",
            en: "Mining sector potential and investment attractiveness",
          },
          { fr: "Stabilité politique et gouvernance", en: "Political stability and governance" },
          { fr: "Relations bilatérales avec le Canada", en: "Bilateral relations with Canada" },
          { fr: "Potentiel économique et commercial", en: "Economic and commercial potential" },
          {
            fr: "Capacité à mobiliser une délégation de haut niveau",
            en: "Capacity to field a high-level delegation",
          },
          {
            fr: "Alignement avec le programme thématique d'A2M",
            en: "Alignment with A2M's thematic programme",
          },
          { fr: "Rayonnement diplomatique continental", en: "Continental diplomatic reach" },
        ],
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Qui devrait postuler ?", en: "Who should apply?" },
            text: {
              fr: "Les gouvernements africains dotés d'un secteur minier actif, engagés dans des pratiques responsables et soucieux d'approfondir leurs partenariats avec le Canada — en particulier ceux accueillant déjà des sociétés canadiennes cotées.",
              en: "African governments with an active mining sector, committed to responsible practices and keen to deepen partnerships with Canada — especially those already hosting Canadian listed companies.",
            },
          },
          {
            title: { fr: "Accompagnement sur mesure", en: "Customised support throughout" },
            text: {
              fr: "Le pays sélectionné bénéficie d'un appui dédié avant, pendant et après l'événement : co-conception du programme, production du stand, logistique de la délégation, coordination média et rapport post-événement certifié.",
              en: "The selected country receives dedicated support before, during and after the event: programme co-design, stand production, delegation logistics, media coordination and a certified post-event report.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Soumettre une candidature", en: "Submit a candidacy" },
        text: {
          fr: "Pour en savoir plus ou soumettre une candidature, écrivez à notre équipe : info@a2mevent.com.",
          en: "To learn more or submit a candidacy, contact our team: info@a2mevent.com.",
        },
      },
    ],
  },
  {
    slug: "program/canada-africa-strategy",
    section: "/program",
    eyebrow: { fr: "Programme", en: "Program" },
    title: { fr: "La Stratégie du Canada pour l'Afrique", en: "Canada's Africa Strategy" },
    lead: {
      fr: "« Un partenariat pour une prospérité et une sécurité partagées » — lancée en mars 2025, A2M 2027 en est la plateforme opérationnelle.",
      en: '"A Partnership for Shared Prosperity and Security" — launched March 2025, A2M 2027 is its operational platform.',
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Le 6 mars 2025, le gouvernement du Canada a dévoilé sa toute première stratégie globale pour l'Afrique, élaborée à l'issue de consultations avec près de 690 parties prenantes africaines, canadiennes et internationales, et alignée sur l'Agenda 2063 de l'Union africaine.",
          en: "On March 6, 2025, the Government of Canada unveiled its first-ever comprehensive Africa Strategy, developed through consultations with nearly 690 African, Canadian and international stakeholders, and fully aligned with the African Union's Agenda 2063.",
        },
      },
      {
        type: "stats",
        items: [
          {
            value: "4,5 G$",
            label: {
              fr: "aide bilatérale à l'Afrique (5 ans)",
              en: "bilateral assistance to Africa (5 yrs)",
            },
          },
          {
            value: "15,1 G$",
            label: { fr: "échanges commerciaux en 2024", en: "merchandise trade in 2024" },
          },
          {
            value: "Mars 2025",
            label: { fr: "lancement de la Stratégie", en: "Strategy launched" },
          },
        ],
      },
      {
        type: "heading",
        text: { fr: "Les cinq axes stratégiques", en: "The five strategic axes" },
      },
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Engagement diplomatique", en: "Diplomatic engagement" },
            text: {
              fr: "Des relations de gouvernement à gouvernement renforcées qui réduisent le risque politique des projets miniers et d'infrastructure.",
              en: "Stronger government-to-government relationships that reduce political risk for mining and infrastructure projects.",
            },
          },
          {
            title: { fr: "Coopération économique", en: "Economic cooperation" },
            text: {
              fr: "L'axe le plus directement pertinent pour A2M : missions commerciales, Carrefour commercial Afrique, appui à la ZLECAf et accords de protection des investissements (APIE).",
              en: "The axis most relevant to A2M: trade missions, an Africa Trade Hub, AfCFTA support and Foreign Investment Promotion and Protection Agreements (FIPAs).",
            },
          },
          {
            title: { fr: "Développement économique", en: "Economic development" },
            text: {
              fr: "Une présence renforcée de FinDev Canada (nouveau bureau en Afrique du Sud) pour cofinancer infrastructures, énergies renouvelables et projets miniers.",
              en: "A strengthened FinDev Canada presence (new South Africa office) to co-finance infrastructure, renewable energy and mining projects.",
            },
          },
          {
            title: { fr: "Paix et sécurité", en: "Peace and security" },
            text: {
              fr: "Prévention des conflits et consolidation de la paix pour un environnement plus prévisible et sûr pour les investissements de long terme.",
              en: "Conflict prevention and peace-building for a more predictable, secure environment for long-term investment.",
            },
          },
          {
            title: { fr: "Engagement multilatéral", en: "Multilateral engagement" },
            text: {
              fr: "Une collaboration accrue avec les organisations internationales et les organismes régionaux pour amplifier l'impact.",
              en: "Enhanced collaboration with international organisations and regional bodies to amplify impact.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Le vide que comble A2M", en: "The gap A2M fills" },
        text: {
          fr: "Ambitieuse, la Stratégie demeure un cadre politique de haut niveau — sans plateforme neutre où gouvernements, investisseurs, IFD et secteur privé structurent des transactions. La Table ronde ministérielle du 6 juin fournit les résultats politiques bilatéraux et le cadre de redevabilité nécessaires pour passer de la vision aux résultats.",
          en: "Ambitious as it is, the Strategy remains a high-level policy framework — without a neutral platform where governments, investors, DFIs and the private sector structure deals. The June 6 Ministerial Roundtable provides the bilateral political outcomes and accountability framework needed to move from vision to results.",
        },
      },
      {
        type: "heading",
        text: { fr: "Ce que cela signifie pour vous", en: "What this means for you" },
      },
      {
        type: "accordion",
        items: [
          {
            title: { fr: "Sociétés minières canadiennes", en: "Canadian mining companies" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Un appui gouvernement à gouvernement plus solide réduit le risque politique et réglementaire, abaisse votre coût du capital et améliore l'accès au co-investissement institutionnel.",
                  en: "Stronger government-to-government backing reduces political and regulatory risk, lowers your cost of capital and improves access to institutional co-investment.",
                },
              },
            ],
          },
          {
            title: { fr: "Investisseurs & IFD", en: "Investors & DFIs" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Un environnement amélioré pour déployer du capital aux côtés de FinDev Canada, dans un cadre moins risqué et mieux aligné.",
                  en: "An enhanced environment to deploy capital alongside FinDev Canada, in a lower-risk, better-aligned setting.",
                },
              },
            ],
          },
          {
            title: { fr: "Gouvernements africains", en: "African governments" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Un partenaire formel engagé via le cadre de la ZLECAf, soutenant la valeur ajoutée locale et la négociation de protections solides des investissements.",
                  en: "A formal partner committed through the AfCFTA framework, supporting local value addition and the negotiation of robust investment protections.",
                },
              },
            ],
          },
          {
            title: { fr: "Fournisseurs & technologies", en: "Service & technology providers" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Un appui politique fort au transfert de technologie, au renforcement des capacités et à l'innovation collaborative dans les opérations minières africaines.",
                  en: "Strong policy support for technology transfer, capacity building and collaborative innovation in African mining operations.",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
