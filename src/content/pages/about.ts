import type { PageContent } from "../types";

export const aboutPages: PageContent[] = [
  {
    slug: "about",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "La conférence A2M", en: "The A2M Conference" },
    lead: {
      fr: "A2M 2027 est la première plateforme nord-américaine dédiée exclusivement à l'investissement, au deal-making et au dialogue politique de haut niveau entre le Canada et l'Afrique dans les minéraux critiques.",
      en: "A2M 2027 is the first North American platform dedicated exclusively to investment, deal-making and high-level political dialogue between Canada and Africa in critical minerals.",
    },
    blocks: [
      {
        type: "stats",
        items: [
          { value: "1 500+", label: { fr: "délégués · 35 pays", en: "delegates · 35 countries" } },
          { value: "30+", label: { fr: "ministres africains", en: "African ministers" } },
          {
            value: "100+",
            label: { fr: "sociétés cotées (TSX/TSX-V)", en: "listed companies (TSX/TSX-V)" },
          },
          { value: "3 000+", label: { fr: "rencontres B2B", en: "B2B meetings" } },
        ],
      },
      {
        type: "paragraph",
        text: {
          fr: "Trois jours, une ville, un objectif commun : forger le partenariat stratégique que le Canada et l'Afrique bâtissent séparément depuis des années — un partenariat qu'aucun des deux ne peut pleinement réaliser seul.",
          en: "Three days, one city, one shared purpose: to forge the strategic partnership that Canada and Africa have been building separately for years — one neither can fully realize alone.",
        },
      },
      {
        type: "paragraph",
        text: {
          fr: "A2M n'est pas une énième conférence minière généraliste. C'est une plateforme conçue pour une relation précise : relier un continent qui détient 30 % des minéraux critiques du monde à un pays dont les sociétés, les marchés de capitaux et l'expertise technique comptent parmi les meilleurs au monde pour transformer une ressource en actif productif.",
          en: "A2M is not another general mining conference. It is a purpose-built platform for a specific relationship: connecting a continent that holds 30% of the world's critical minerals with a country whose companies, capital markets and technical expertise are among the best in the world at turning resources into producing assets.",
        },
      },
      {
        type: "heading",
        text: { fr: "Notre vision", en: "Our vision" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Un partenariat Canada-Afrique défini par l'équité, la transparence, le respect mutuel et la prospérité partagée — où le capital, l'expertise et les standards canadiens rencontrent l'extraordinaire dotation minérale africaine pour livrer un développement durable et inclusif des deux côtés de l'Atlantique.",
          en: "A Canada-Africa partnership defined by equity, transparency, mutual respect and shared prosperity — where Canada's capital, expertise and standards meet Africa's extraordinary mineral endowment to deliver durable, inclusive development on both sides of the Atlantic.",
        },
      },
      {
        type: "heading",
        text: { fr: "Notre mission", en: "Our mission" },
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Connecter", en: "Connect" },
            text: {
              fr: "Identifier précisément qui doit se rencontrer et créer les moments propices à ces conversations.",
              en: "Identify precisely who needs to meet and engineer the right moments for those conversations.",
            },
          },
          {
            title: { fr: "Faciliter", en: "Facilitate" },
            text: {
              fr: "Structurer sessions, tables rondes et salles de deals pour passer de l'introduction à la négociation concrète.",
              en: "Structure sessions, roundtables and deal rooms to move from introduction to concrete negotiation.",
            },
          },
          {
            title: { fr: "Légitimer", en: "Legitimise" },
            text: {
              fr: "Le succès commercial exige un cadre politique : la table ronde ministérielle aligne les politiques au plus haut niveau.",
              en: "Commercial success requires political enablement: the Ministerial Roundtable aligns policy at the highest level.",
            },
          },
          {
            title: { fr: "Inscrire dans la durée", en: "Build continuity" },
            text: {
              fr: "A2M est une plateforme pérenne : suivi des projets, bilans annuels, mesure des résultats.",
              en: "A2M is an enduring platform: project tracking, annual reporting, measured outcomes.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "about/why-participate",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Pourquoi participer ?", en: "Why Participate?" },
    lead: {
      fr: "Quel que soit votre profil, A2M offre un accès direct aux décideurs, au capital et aux opportunités du secteur minier africain.",
      en: "Whatever your profile, A2M offers direct access to the decision-makers, capital and opportunities of the African mining sector.",
    },
    blocks: [
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "Majors & mid-tiers", en: "Majors & mid-tier" },
            text: {
              fr: "Vos opérations africaines reposent sur des relations — gérez-les au plus haut niveau (ministres, IFD, intelligence réglementaire).",
              en: "Your African operations run on relationships — manage them at the highest level (ministers, DFIs, regulatory intelligence).",
            },
          },
          {
            title: { fr: "Juniors & exploration", en: "Juniors & exploration" },
            text: {
              fr: "Investment Showcase, Capital Markets Lounge et Deal Flow Package diffusé à 40+ investisseurs qualifiés avant l'événement.",
              en: "Investment Showcase, Capital Markets Lounge and a Deal Flow Package shared with 40+ qualified investors before the event.",
            },
          },
          {
            title: { fr: "Investisseurs & IFD", en: "Investors & DFIs" },
            text: {
              fr: "Projets pré-sélectionnés, Déjeuner des investisseurs à huis clos et inscription gratuite pour les investisseurs qualifiés.",
              en: "Pre-screened projects, closed-door Investors' Breakfast and complimentary registration for qualified investors.",
            },
          },
          {
            title: { fr: "Fournisseurs & technologies", en: "Service providers & tech" },
            text: {
              fr: "Les contrats qui financeront votre croissance africaine s'attribuent ici : rencontres ciblées et stand au cœur des flux.",
              en: "The contracts that will fund your Africa growth are awarded here: targeted meetings and a stand at the heart of the flow.",
            },
          },
          {
            title: { fr: "Gouvernements & ministères", en: "Governments & ministries" },
            text: {
              fr: "Rencontrez les dirigeants du TSX qui ont votre pays sur leur liste et devenez membre fondateur du cadre Canada-Afrique.",
              en: "Meet the TSX executives with your country on their shortlist and become a founding member of the Canada-Africa framework.",
            },
          },
          {
            title: { fr: "Acheteurs & négociants", en: "Buyers & traders" },
            text: {
              fr: "Réunissez les trois parties d'une négociation d'offtake au même endroit, au même moment.",
              en: "Assemble all three parties to an offtake negotiation in one place, at one time.",
            },
          },
        ],
      },
      {
        type: "heading",
        text: { fr: "Votre profil en détail", en: "Your profile in detail" },
      },
      {
        type: "accordion",
        items: [
          {
            title: { fr: "Majors & sociétés mid-tier", en: "Majors & mid-tier companies" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Vos opérations africaines reposent sur des relations — et les plus importantes se gèrent dans des moments de proximité. A2M en crée trente simultanément : trente ministres des Mines réunis, une table ronde ministérielle au résultat politique concret, et un Investment Showcase qui expose votre équipe de développement à des projets pré-sélectionnés dans des juridictions voisines.",
                  en: "Your African operations run on relationships — and the most important ones are managed in moments of proximity. A2M creates thirty of them simultaneously: thirty Mining Ministers in one building, a Ministerial Roundtable that produces a concrete political outcome, and an Investment Showcase that exposes your corporate-development team to pre-screened projects in adjacent jurisdictions.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Rencontres bilatérales avec les ministres des Mines de vos pays d'opération",
                    en: "Bilateral meetings with the Mining Ministers of your operating countries",
                  },
                  {
                    fr: "Mises en relation de co-investissement avec les IFD actives dans vos régions",
                    en: "Co-investment introductions from DFIs active in your regions",
                  },
                  {
                    fr: "Intelligence de marché sur l'orientation réglementaire des juridictions africaines prioritaires",
                    en: "Market intelligence on regulatory direction across priority African jurisdictions",
                  },
                  {
                    fr: "Visibilité de marque comme partenaire engagé de long terme du secteur minier africain",
                    en: "Brand visibility as a committed long-term partner of African mining",
                  },
                ],
              },
            ],
          },
          {
            title: { fr: "Juniors & exploration", en: "Juniors & exploration" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Une semaine de roadshows ne bouclera pas votre tour de table — trois jours à A2M le pourraient. L'Investment Showcase présente des projets rigoureusement sélectionnés aux investisseurs institutionnels, sociétés de redevances et bureaux de ressources naturelles des banques ; le Capital Markets Lounge transforme l'intérêt en sessions privées le jour même ; et le Deal Flow Package diffuse votre résumé à quarante investisseurs qualifiés avant leur arrivée.",
                  en: "One week of roadshows will not raise your round — three days at A2M might. The Investment Showcase presents rigorously screened projects to institutional investors, royalty companies and bank natural-resource desks; the Capital Markets Lounge turns interest into private same-day sessions; and the Deal Flow Package puts your summary in front of forty qualified investors before they land.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Rencontres de suivi confirmées avec investisseurs institutionnels, sociétés de redevances et IFD ayant vu votre projet",
                    en: "Confirmed follow-up meetings with institutional investors, royalty companies and DFIs who have seen your project",
                  },
                  {
                    fr: "Mises en relation directes avec des partenaires de co-développement et des acheteurs d'offtake",
                    en: "Direct introductions to potential co-development partners and offtake buyers",
                  },
                  {
                    fr: "Contacts de relations gouvernementales dans votre juridiction d'opération",
                    en: "Government-relations contacts in your operating jurisdiction",
                  },
                  {
                    fr: "Couverture médiatique via le corps de presse accrédité de l'événement",
                    en: "Media coverage through the event's accredited press corps",
                  },
                  {
                    fr: "Un récit d'investissement validé par la crédibilité de la plateforme A2M",
                    en: "A validated investment narrative built on the credibility of the A2M platform",
                  },
                ],
              },
            ],
          },
          {
            title: { fr: "Investisseurs, banques & IFD", en: "Investors, banks & DFIs" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Le défi n'est pas de trouver des projets, mais d'en trouver des bancables, portés par des opérateurs crédibles et un profil ESG défendable. Les projets de l'Investment Showcase sont évalués selon des critères documentés et bénéficient de l'appui de leur gouvernement hôte, tandis que le Déjeuner des investisseurs à huis clos cartographie les mandats et les synergies de co-investissement. Les investisseurs qualifiés participent gratuitement.",
                  en: "The challenge is not finding projects — it is finding bankable ones with credible operators and defensible ESG. Investment Showcase projects are screened against documented criteria and carry host-government endorsement, while the closed Investors' Breakfast maps mandates and co-investment synergies. Qualified investors attend on a complimentary basis.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Un pipeline organisé de projets sélectionnés avec accès direct aux porteurs",
                    en: "A curated pipeline of screened projects with direct access to project holders",
                  },
                  {
                    fr: "Quarante relations de co-investisseurs aux mandats documentés",
                    en: "Forty co-investor relationships with documented mandates",
                  },
                  {
                    fr: "Intelligence réglementaire de niveau ministériel issue de trente juridictions africaines",
                    en: "Ministerial-level regulatory intelligence from thirty African jurisdictions",
                  },
                  {
                    fr: "Un Deal Flow Package quatre semaines avant l'arrivée, et des rapports de suivi post-événement",
                    en: "A Deal Flow Package four weeks before arrival, plus post-event tracking reports",
                  },
                  {
                    fr: "Accès prioritaire au Capital Markets Lounge pendant les trois jours",
                    en: "Priority access to the Capital Markets Lounge for all three days",
                  },
                ],
              },
            ],
          },
          {
            title: {
              fr: "Fournisseurs, équipementiers & technologies",
              en: "Service providers, suppliers & technology",
            },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Les contrats qui financeront votre croissance africaine sont attribués par les personnes présentes ici. Chaque société cotée active en Afrique est un client potentiel, et chaque gouvernement développant son programme de fournisseurs locaux cherche des partenaires québécois et canadiens. Vous arrivez avec un agenda de rencontres confirmé et repartez avec un pipeline que votre équipe convertira au trimestre suivant.",
                  en: "The contracts that will fund your Africa growth are awarded by the people in this room. Every listed company developing in Africa is a potential client, and every government building a local-supplier programme is looking for Québec and Canadian partners. You arrive with a confirmed meeting agenda and leave with a pipeline your business-development team will spend the next quarter converting.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Un pipeline confirmé de rencontres avec les sociétés du TSX en développement et production",
                    en: "A confirmed pipeline of follow-up meetings with TSX development and production companies",
                  },
                  {
                    fr: "Mises en relation avec des développeurs de projets africains qui ont besoin de vos services",
                    en: "Introductions to African project developers who need your services",
                  },
                  {
                    fr: "Relations avec les responsables des achats et du contenu local des gouvernements africains",
                    en: "Relationships with African government procurement and local-content officials",
                  },
                  {
                    fr: "Visibilité de marque avant, pendant et après l'événement",
                    en: "Brand visibility before, during and after the event",
                  },
                  {
                    fr: "Accès à l'annuaire des délégués post-événement pour un suivi durable",
                    en: "Access to the post-event delegate directory for sustained follow-up",
                  },
                ],
              },
            ],
          },
          {
            title: { fr: "Gouvernements & ministères", en: "Governments & ministries" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Plus de 120 sociétés cotées au TSX sont actives en Afrique, dotées du capital, de l'expertise et des standards ESG pour croître — ce qu'elles recherchent, c'est un dialogue crédible avec votre gouvernement. En trois jours, A2M offre cet engagement à grande échelle à votre délégation, et la table ronde ministérielle fait de votre pays un membre fondateur d'un cadre qui façonnera les relations minières Canada-Afrique pour des années.",
                  en: "More than 120 TSX-listed companies are active in Africa, with the capital, expertise and ESG standards to grow — what they need is credible engagement with your government. In three days A2M gives your delegation that engagement at scale, and the Ministerial Roundtable makes your country a founding member of a framework shaping Canada-Africa mining ties for years.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Relations directes avec les directions des sociétés du TSX actives dans votre juridiction",
                    en: "Direct relationships with TSX company leadership teams active in your jurisdiction",
                  },
                  {
                    fr: "Engagements de suivi confirmés avec les IFD et investisseurs examinant des projets dans votre pays",
                    en: "Confirmed follow-up engagements with DFIs and institutional investors reviewing projects in your country",
                  },
                  {
                    fr: "Mises en relation de partenariats techniques avec les firmes d'ingénierie et de services du Québec",
                    en: "Technical-partnership introductions with Québec engineering and service firms",
                  },
                  {
                    fr: "Visibilité médiatique via le corps de presse international accrédité",
                    en: "Media visibility through the event's accredited international press corps",
                  },
                ],
              },
            ],
          },
          {
            title: { fr: "Acheteurs & négociants", en: "Downstream buyers & traders" },
            blocks: [
              {
                type: "paragraph",
                text: {
                  fr: "Les minéraux qui alimentent votre chaîne d'approvisionnement viennent d'Afrique — et A2M réunit en un même lieu les trois parties d'une négociation d'offtake : les développeurs qui les produisent, les gouvernements qui les réglementent et les financiers qui en structurent le capital. La poussée de la ZLECAf vers la transformation locale fait de la compréhension de cet agenda une intelligence stratégique pour vos équipes d'approvisionnement.",
                  en: "The minerals that power your supply chain come from Africa — and A2M assembles all three parties to an offtake negotiation in one place: the developers who produce them, the governments who regulate them, and the financiers who structure the capital. The AfCFTA's push toward local processing makes understanding where that agenda is heading strategic intelligence for your procurement teams.",
                },
              },
              {
                type: "list",
                items: [
                  {
                    fr: "Relations directes avec les opérateurs et développeurs africains sur tout le spectre des minéraux critiques",
                    en: "Direct relationships with African project operators and developers across the critical-minerals spectrum",
                  },
                  {
                    fr: "Discussions d'offtake et d'accords d'approvisionnement amorcées au Capital Markets Lounge",
                    en: "Offtake and supply-agreement discussions initiated in the Capital Markets Lounge",
                  },
                  {
                    fr: "Intelligence réglementaire sur l'agenda de transformation de la ZLECAf et ses implications",
                    en: "Regulatory intelligence on the AfCFTA transformation agenda and its supply-chain implications",
                  },
                  {
                    fr: "Intelligence de marché issue des sessions thématiques, de la politique à la production",
                    en: "Market intelligence from thematic sessions spanning policy to production",
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
    slug: "about/advisory-board",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Comité consultatif", en: "Advisory Board" },
    lead: {
      fr: "Un comité de personnalités reconnues du secteur minier, financier et institutionnel oriente la programmation et la portée stratégique d'A2M.",
      en: "A board of recognised figures from the mining, finance and institutional worlds guides A2M's programming and strategic reach.",
    },
    blocks: [
      {
        type: "speakers",
        count: 8,
        label: {
          fr: "Membres du comité consultatif — profils à venir",
          en: "Advisory board members — profiles to be announced",
        },
      },
    ],
  },
  {
    slug: "about/strategic-partners",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Partenaires stratégiques", en: "Strategic Partners" },
    lead: {
      fr: "A2M s'appuie sur un réseau de partenaires institutionnels, financiers et industriels qui partagent sa vision d'un secteur minier responsable.",
      en: "A2M is built on a network of institutional, financial and industrial partners who share its vision of a responsible mining sector.",
    },
    blocks: [
      {
        type: "logos",
        count: 8,
        label: {
          fr: "Partenaires & soutiens — logos à venir",
          en: "Partners & endorsements — logos coming soon",
        },
      },
      {
        type: "callout",
        title: { fr: "Devenir partenaire", en: "Become a partner" },
        text: {
          fr: "Votre organisation souhaite s'associer à A2M ? Écrivez-nous à info@a2mevent.com.",
          en: "Would your organisation like to partner with A2M? Write to us at info@a2mevent.com.",
        },
      },
    ],
  },
  {
    slug: "about/sustainability",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "Programme de durabilité", en: "Sustainability Programme" },
    lead: {
      fr: "Un événement d'investissement minier responsable a le devoir de créer une valeur durable pour les communautés africaines et l'industrie.",
      en: "A responsible mining investment event has a duty to deliver lasting value to African communities and the industry.",
    },
    blocks: [
      {
        type: "callout",
        title: { fr: "Jusqu'à 10 % des revenus", en: "Up to 10% of revenues" },
        text: {
          fr: "À chaque édition, A2M s'engage à allouer jusqu'à 10 % des revenus à des programmes à fort impact en Afrique.",
          en: "With each edition, A2M commits up to 10% of revenues to high-impact programmes across Africa.",
        },
      },
      {
        type: "features",
        columns: 2,
        items: [
          {
            title: { fr: "Éducation des enfants", en: "Children's education" },
            text: {
              fr: "Soutien aux organisations communautaires locales et aux programmes de formation technique.",
              en: "Support for local community organisations and technical training programmes.",
            },
          },
          {
            title: { fr: "Autonomisation des femmes", en: "Women's empowerment" },
            text: {
              fr: "Programmes de développement des compétences minières, en cohérence avec le Forum Femmes & Mines.",
              en: "Mining skills development programmes, in line with the Women in Mining Forum.",
            },
          },
        ],
      },
      {
        type: "callout",
        title: { fr: "Rejoignez la cause", en: "Join the cause" },
        text: {
          fr: "Associez-vous à nous pour bâtir un avenir plus durable et inclusif pour les communautés minières d'Afrique.",
          en: "Partner with us to build a more sustainable and inclusive future for Africa's mining communities.",
        },
      },
    ],
  },
  {
    slug: "about/meet-the-team",
    section: "/about",
    eyebrow: { fr: "À propos", en: "About" },
    title: { fr: "L'équipe", en: "Meet the Team" },
    lead: {
      fr: "L'équipe d'A2M Events Inc. qui conçoit et orchestre la conférence, des contenus à la logistique des délégations.",
      en: "The A2M Events Inc. team that designs and orchestrates the conference, from programming to delegation logistics.",
    },
    blocks: [
      {
        type: "speakers",
        count: 6,
        label: {
          fr: "Membres de l'équipe — photos & profils à venir",
          en: "Team members — photos & profiles to be announced",
        },
      },
    ],
  },
];
