import type { PageContent } from "../types";

export const planYourVisitPages: PageContent[] = [
  {
    slug: "plan-your-visit",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Lieu & accessibilité", en: "Venue & Accessibility" },
    lead: {
      fr: "A2M 2027 se tient au Centre Mont-Royal, au cœur du centre-ville de Montréal, à quelques pas des hôtels, restaurants et sites culturels.",
      en: "A2M 2027 takes place at the Centre Mont-Royal, in the heart of downtown Montréal, steps from hotels, restaurants and cultural sites.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Tous les événements d'A2M 2027 se tiendront sous un même toit, au Centre Mont-Royal, un lieu prestigieux réputé pour ses installations de calibre mondial et idéal pour accueillir des conférences internationales de premier plan. Situé au cœur du centre-ville de Montréal, le lieu se trouve à distance de marche des principales attractions, des restaurants et des sites culturels, offrant aux participants un mélange harmonieux d'affaires et d'expériences mémorables.",
          en: "All A2M 2027 events will be held under one roof at the Centre Mont-Royal, a prestigious venue renowned for its world-class facilities and ideal for hosting high-profile international conferences. Located in the heart of downtown Montreal, the venue is within walking distance of major attractions, restaurants, and cultural sites, offering participants a seamless blend of business and memorable experiences.",
        },
      },
      {
        type: "heading",
        text: { fr: "Comment s'y rendre", en: "How to Get There" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Le Centre Mont-Royal est situé en plein centre-ville et facilement accessible en voiture, en transport en commun ou par avion.",
          en: "The Centre Mont-Royal is centrally located and easily accessible by car, public transit, or air.",
        },
      },
      {
        type: "features",
        columns: 3,
        items: [
          {
            title: { fr: "En voiture", en: "By Car" },
            text: {
              fr: "Stationnement avec valet : disponible à l'hôtel (XX $ CA par jour). Directions : depuis l'autoroute 40, prenez la sortie boulevard René-Lévesque et poursuivez sur environ 1 km. Tournez à gauche sur la rue Mansfield ; ________.",
              en: "Valet Parking: Available at the hotel ($XX CAD per day). Driving Directions: From Highway 40, take the René-Lévesque Boulevard exit and proceed for approximately 1 km. Turn left onto Mansfield Street; ________.",
            },
          },
          {
            title: { fr: "En transport en commun", en: "By Public Transportation" },
            text: {
              fr: "Métro : à courte distance de marche de la station Peel (ligne verte). Autobus : plusieurs lignes desservent le secteur, dont les circuits 144 et 150.",
              en: "Metro: A short walk from Peel Station (Green Line). Bus: Multiple lines serve the area, including routes 144 and 150.",
            },
          },
          {
            title: { fr: "En avion", en: "By Air" },
            text: {
              fr: "Aéroport international Montréal-Pierre Elliott Trudeau (YUL) : à environ 20 km de l'hôtel. Navette aéroportuaire : disponible pour environ XXX $ CA par personne. Taxi : facilement disponible à la sortie du terminal, avec un tarif estimé à XXX $ CA jusqu'à l'hôtel.",
              en: "Montréal-Pierre Elliott Trudeau International Airport (YUL): Approximately 20 km from the hotel. Airport Shuttle: Available for approximately $XXX CAD per person. Taxi: Readily available outside the terminal, with an estimated fare of $XXX CAD to the hotel.",
            },
          },
        ],
      },
      {
        type: "image",
        label: {
          fr: "Montréal centre-ville — le Centre Mont-Royal se trouve à proximité",
          en: "Downtown Montréal — the Centre Mont-Royal is nearby",
        },
        ratio: "16/9",
        src: "/images/plan/montreal-skyline.jpg",
        alt: {
          fr: "Panorama du centre-ville de Montréal au crépuscule",
          en: "Downtown Montréal skyline at twilight",
        },
        credit: {
          label: "Diliff — Wikimedia Commons",
          license: "CC BY-SA 3.0",
          href: "https://commons.wikimedia.org/wiki/File:Montreal_Twilight_Panorama_2006.jpg",
        },
      },
      {
        type: "callout",
        title: { fr: "À noter", en: "Note" },
        text: {
          fr: "Les tarifs de stationnement et les options de transport sont susceptibles de changer. Nous vous recommandons de confirmer les détails les plus récents directement auprès de l'hôtel ou des prestataires de transport.",
          en: "Parking rates and transportation options are subject to change. We recommend confirming the latest details directly with the hotel or transportation providers.",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/where-to-stay",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Où loger", en: "Where to Stay" },
    lead: {
      fr: "L'hôtel recommandé est le Fairmont Le Reine Elizabeth — hôtel emblématique du centre-ville qui accueille dirigeants et délégations internationales depuis 1958.",
      en: "The recommended hotel is the Fairmont The Queen Elizabeth — a landmark downtown hotel welcoming leaders and international delegations since 1958.",
    },
    blocks: [
      {
        type: "heading",
        text: { fr: "Fairmont Le Reine Elizabeth", en: "Fairmont The Queen Elizabeth" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Situé au cœur du centre-ville de Montréal, le Fairmont Le Reine Elizabeth est un hôtel de luxe emblématique qui accueille des chefs d'État, des célébrités et des dirigeants d'entreprise depuis 1958. Offrant un service exceptionnel, des hébergements élégants et des installations à la fine pointe de la technologie, il constitue le choix idéal tant pour les voyageurs d'affaires exigeants que pour les délégués internationaux.",
          en: "Situated in the heart of downtown Montreal, Fairmont The Queen Elizabeth is a landmark luxury hotel that has welcomed world leaders, celebrities, and business executives since 1958. Offering exceptional service, elegant accommodations, and state-of-the-art facilities, it is the ideal choice for both discerning business travelers and international delegates.",
        },
      },
      {
        type: "image",
        label: {
          fr: "Fairmont Le Reine Elizabeth — façade",
          en: "Fairmont The Queen Elizabeth — façade",
        },
        ratio: "16/9",
        src: "/images/plan/fairmont.jpg",
        alt: {
          fr: "Façade du Fairmont Le Reine Elizabeth à Montréal",
          en: "Façade of the Fairmont The Queen Elizabeth in Montréal",
        },
        credit: {
          label: "Wikimedia Commons",
          license: "CC BY-SA 2.0",
          href: "https://commons.wikimedia.org/wiki/File:Fairmont_The_Queen_Elizabeth,_Montreal,_Quebec_(29984173151).jpg",
        },
      },
      {
        type: "callout",
        title: { fr: "Réserver votre chambre", en: "Book Your Room" },
        text: {
          fr: "Des tarifs préférentiels seront proposés aux délégués — réservez votre chambre → [lien de réservation à insérer].",
          en: "Preferential rates will be offered to delegates — Book Your Room → [Insert Booking Link].",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/discover-montreal",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Découvrir Montréal", en: "Discover Montréal" },
    lead: {
      fr: "Métropole bilingue et créative, Montréal allie charme européen, énergie nord-américaine et joie de vivre québécoise. Juin marque le début de la saison des festivals.",
      en: "A bilingual, creative metropolis, Montréal blends European charm, North American energy and Quebecois joie de vivre. June kicks off festival season.",
    },
    blocks: [
      {
        type: "paragraph",
        text: {
          fr: "Montréal est une ville vibrante et cosmopolite qui marie magistralement le charme européen, l'énergie nord-américaine et la joie de vivre québécoise. À l'occasion de votre participation à A2M 2027, profitez de l'occasion pour découvrir la riche culture de la ville, sa gastronomie de calibre mondial et son atmosphère dynamique.",
          en: "Montreal is a vibrant, cosmopolitan city that masterfully blends European charm, North American energy, and Quebecois joie de vivre. As you attend A2M 2027, take the opportunity to experience the city's rich culture, world-class gastronomy, and dynamic atmosphere.",
        },
      },
      {
        type: "paragraph",
        text: {
          fr: "Le mois de juin marque le début de la célèbre saison des festivals de Montréal, offrant une toile de fond exceptionnelle pour votre visite. Parmi les temps forts :",
          en: "June marks the beginning of Montreal's renowned festival season, offering an exceptional backdrop for your visit. Highlights include:",
        },
      },
      {
        type: "heading",
        text: { fr: "Festivals & événements", en: "Festivals & Events" },
      },
      {
        type: "list",
        items: [
          { fr: "Francofolies de Montréal", en: "Francofolies de Montréal" },
          {
            fr: "Festival international de jazz de Montréal",
            en: "Montréal International Jazz Festival",
          },
          { fr: "Festival MURAL (art urbain)", en: "MURAL Festival (street art)" },
        ],
      },
      {
        type: "heading",
        text: { fr: "Quartiers incontournables", en: "Must-Visit Neighborhoods" },
      },
      {
        type: "list",
        items: [
          {
            fr: "Vieux-Montréal : architecture historique, basilique Notre-Dame et rues pavées.",
            en: "Old Montreal (Vieux-Montréal): Historic architecture, Notre-Dame Basilica, and cobblestone streets.",
          },
          {
            fr: "Plateau Mont-Royal : boutiques tendance, galeries et restaurants.",
            en: "Plateau Mont-Royal: Trendy boutiques, galleries, and restaurants.",
          },
          {
            fr: "Quartier des Spectacles : le quartier de divertissement vibrant de Montréal.",
            en: "Quartier des Spectacles: Montreal's vibrant entertainment district.",
          },
        ],
      },
      {
        type: "heading",
        text: { fr: "Activités de plein air", en: "Outdoor Activities" },
      },
      {
        type: "list",
        items: [
          {
            fr: "Parc du Mont-Royal : vues panoramiques, sentiers de randonnée et vélo.",
            en: "Mount Royal Park: Panoramic views, hiking trails, and cycling.",
          },
          {
            fr: "Canal de Lachine : promenades pittoresques, marché Atwater et artistes de rue.",
            en: "Lachine Canal: Scenic walks, Atwater Market, and street performers.",
          },
          {
            fr: "Parc Jean-Drapeau : jardins, attractions et superbes vues sur le fleuve.",
            en: "Parc Jean-Drapeau: Gardens, attractions, and stunning river views.",
          },
        ],
      },
      {
        type: "heading",
        text: { fr: "Boire & manger", en: "Food & Drink" },
      },
      {
        type: "paragraph",
        text: {
          fr: "La scène culinaire de Montréal reflète son héritage français et québécois. Ne manquez pas des plats classiques comme la poutine, la tourtière ou la tarte au sucre, ainsi que la réputée scène de bières artisanales de la ville et ses marchés publics animés, tel le marché Jean-Talon.",
          en: "Montreal's culinary scene reflects its French and Quebecois heritage. Don't miss classic dishes such as poutine, tourtière, or sugar pie, along with the city's renowned craft beer scene and bustling public markets like Jean-Talon Market.",
        },
      },
      {
        type: "image",
        label: {
          fr: "Basilique Notre-Dame, Vieux-Montréal",
          en: "Notre-Dame Basilica, Old Montréal",
        },
        ratio: "16/9",
        src: "/images/plan/discover-montreal.jpg",
        alt: {
          fr: "Intérieur de la basilique Notre-Dame de Montréal",
          en: "Interior of the Notre-Dame Basilica in Montréal",
        },
        credit: {
          label: "Diego Delso — Wikimedia Commons",
          license: "CC BY-SA 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Bas%C3%ADlica_de_Notre-Dame,_Montreal,_Canad%C3%A1,_2017-08-12,_DD_22-24_HDR.jpg",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/visa",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Délégués internationaux — visa", en: "International Delegates — Visa" },
    lead: {
      fr: "La plupart des visiteurs ont besoin d'un visa de résident temporaire (VRT) ou d'une AVE (eTA). Vérifiez vos exigences sur le site officiel du gouvernement du Canada (IRCC) bien à l'avance.",
      en: "Most visitors need a Temporary Resident Visa (TRV) or an eTA. Verify your requirements on the official Government of Canada (IRCC) website well in advance.",
    },
    blocks: [
      {
        type: "heading",
        text: { fr: "Informations sur les voyages et les visas", en: "Travel & Visa Information" },
      },
      {
        type: "paragraph",
        text: {
          fr: "Les participants internationaux sont responsables de s'assurer qu'ils satisfont à toutes les exigences d'entrée au Canada. La plupart des visiteurs ont besoin d'un visa de résident temporaire (VRT) ou d'une autorisation de voyage électronique (AVE).",
          en: "International participants are responsible for ensuring they meet all Canadian entry requirements. Most visitors require a Temporary Resident Visa (TRV) or an Electronic Travel Authorization (eTA).",
        },
      },
      {
        type: "paragraph",
        text: {
          fr: "Nous vous recommandons fortement de vérifier vos exigences de visa particulières sur le site Web officiel du gouvernement du Canada (IRCC) bien avant votre voyage.",
          en: "We strongly recommend that you verify your specific visa requirements on the official Government of Canada website (IRCC) well in advance of your travel.",
        },
      },
      {
        type: "callout",
        title: { fr: "Lettre d'invitation", en: "Invitation letter" },
        text: {
          fr: "Demandez une lettre d'invitation officielle (formulaire de demande de lettre d'invitation). Une lettre d'invitation officielle peut être fournie sur demande aux délégués inscrits.",
          en: "Request an official invitation letter (invitation letter request form). An official invitation letter can be provided on request to registered delegates.",
        },
      },
      {
        type: "callout",
        title: { fr: "Note importante", en: "Important Note" },
        text: {
          fr: "A2M Events Inc. ne peut garantir la délivrance des visas ni intervenir dans le processus de demande. Les politiques d'annulation standard s'appliqueront dans l'éventualité où un délégué serait incapable d'obtenir les documents de voyage nécessaires. Pour toute question concernant les exigences de voyage, veuillez communiquer avec notre équipe.",
          en: "A2M Events Inc. cannot guarantee the issuance of visas nor intervene in the application process. Standard cancellation policies will apply in the event a delegate is unable to obtain the necessary travel documents. For any questions regarding travel requirements, please contact our team.",
        },
      },
    ],
  },
  {
    slug: "plan-your-visit/useful-info",
    section: "/plan-your-visit",
    eyebrow: { fr: "Préparer votre visite", en: "Plan Your Visit" },
    title: { fr: "Informations utiles", en: "Useful Information" },
    lead: {
      fr: "Devise, fuseau horaire et météo pour préparer sereinement votre déplacement.",
      en: "Currency, time zone and weather to plan your trip with peace of mind.",
    },
    blocks: [
      {
        type: "stats",
        items: [
          { value: "CAD", label: { fr: "dollar canadien", en: "Canadian dollar" } },
          { value: "ET", label: { fr: "heure de l'Est", en: "Eastern Time" } },
          { value: "15–25 °C", label: { fr: "météo de juin", en: "June weather" } },
          { value: "FR / EN", label: { fr: "langues", en: "languages" } },
        ],
      },
    ],
  },
];
