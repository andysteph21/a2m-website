# A2M 2027 — Site web

Site web d'information de la conférence **A2M 2027** (*Africa Mining in Montréal*), la
plateforme nord-américaine de référence pour l'investissement minier en Afrique.
**7–9 juin 2027 · Centre Mont-Royal, Montréal.**

Site vitrine bilingue (FR/EN), construit avec une séparation nette entre le **thème** (design
system « Mineral »), les **composants** et les **pages**.

---

## Stack technique

| Domaine | Choix |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) · React 19 |
| Styles | [Tailwind CSS v4](https://tailwindcss.com) (tokens dans le CSS) |
| i18n | [next-intl 4](https://next-intl.dev) — FR (défaut) / EN |
| UI | Primitives [Radix](https://www.radix-ui.com) restylées (approche shadcn/ui) |
| Formulaires | react-hook-form + zod |
| Qualité | [Biome](https://biomejs.dev) (lint + format) · Husky + lint-staged |
| Gestionnaire | pnpm · Node 24 (voir `.nvmrc`) |
| Déploiement | [Vercel](https://vercel.com) |

## Prérequis

- **Node.js 24** (`nvm use` lit `.nvmrc`)
- **pnpm 11+** (`corepack enable` puis `corepack prepare pnpm@latest`)

## Démarrage

```bash
pnpm install      # installe les dépendances
pnpm dev          # serveur de développement
```

Ouvrir **http://localhost:3000** — la racine redirige vers la langue par défaut (`/fr`).

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Serveur de développement (Turbopack) |
| `pnpm build` | Build de production |
| `pnpm start` | Sert le build de production |
| `pnpm lint` | Lint Biome (échoue s'il y a des erreurs) |
| `pnpm lint:fix` | Lint + corrections automatiques sûres |
| `pnpm format` | Formate le code avec Biome |
| `pnpm typecheck` | Vérification TypeScript (`tsc --noEmit`) |

## Structure du projet

```
src/
├── app/
│   ├── [locale]/            # segment i18n (fr | en)
│   │   ├── layout.tsx       # layout racine : polices, providers, Header/Footer
│   │   ├── page.tsx         # page d'accueil
│   │   ├── not-found.tsx    # 404 localisée
│   │   └── [...slug]/       # route catch-all (contenu + pages spéciales)
│   └── globals.css          # import Tailwind + thème + styles de base
├── components/
│   ├── ui/                  # primitives (Button, Card, Badge, Input, Sheet…)
│   ├── layout/              # Header, Footer, Nav, Breadcrumb, Container…
│   ├── blocks/              # blocs composés (Hero, KPI, tarifs, formulaires…)
│   └── pages/               # vues des pages spéciales (inscription, contact…)
├── content/                 # contenu bilingue typé (pas de CMS)
│   ├── navigation.ts        # arborescence de navigation (source unique)
│   ├── data/                # données structurées (tarifs, programme, commandites)
│   └── pages/               # contenu éditorial des pages intérieures
├── config/site.ts           # constantes du site (URL, courriels, dates…)
├── i18n/                    # routing, requête et navigation next-intl
├── lib/                     # utilitaires (cn, sélecteur de locale)
├── styles/theme.css         # design system « Mineral » (tokens Tailwind)
└── proxy.ts                 # middleware i18n (convention Next 16)
messages/                    # libellés d'UI (fr.json / en.json)
```

Principe de dépendances : **`ui/` → `layout/` → `blocks/` → `app/`**. Les pages ne contiennent
pas de style brut ; elles composent des blocks alimentés par `content/`.

## Thème « Mineral »

Source de vérité unique du design dans [`src/styles/theme.css`](src/styles/theme.css) : couleurs,
typographie (Inter + Source Serif 4 via `next/font`), échelle d'espacement 8 px, rayon 2 px,
ombres et courbes d'animation — traduits du brand book en tokens Tailwind. Les utilitaires en
découlent automatiquement (`bg-emerald-cta`, `text-anthracite`, `font-display`, etc.).

## Internationalisation

- Locales : **`fr`** (défaut) et **`en`**, routes préfixées (`/fr`, `/en`).
- **Libellés d'UI** (boutons, footer, formulaires) dans `messages/{fr,en}.json`.
- **Contenu éditorial** bilingue colocalisé dans `src/content/` (champs `{ fr, en }`).
- Le sélecteur de langue conserve la route courante.

## Contenu et routage

- La **navigation** est définie une seule fois dans `src/content/navigation.ts` et alimente le
  header, le footer et le plan du site.
- Les **pages éditoriales** sont décrites dans `src/content/pages/*` (registre) et rendues par
  une route **catch-all** unique (`app/[locale]/[...slug]`).
- Les **pages spéciales** (inscription/tarifs, maillage, programme, contact, commandites, plan du
  site) sont des composants sur mesure dans `src/components/pages/`, dispatchés par la même route.

> Ne pas créer de dossiers de section littéraux (`program/`, `attend/`…) : ils masqueraient la
> route catch-all et les sous-pages renverraient un 404.

## Responsive

Mobile-first. La navigation desktop bascule en **menu hamburger / Sheet** sous 1024 px ; les
grilles, tarifs, programme et footer s'adaptent du mobile (~375 px) au desktop (~1280 px).

## Qualité de code

- **Biome** assure le lint et le format (`biome.json`). Le CSS est géré par Tailwind (exclu de Biome).
- **Husky** impose deux barrières :
  - **pre-commit** → `lint-staged` lance Biome sur les fichiers indexés ; aucune erreur n'est tolérée.
  - **pre-push** → `next build` doit réussir.

> Sur Windows/pnpm 11, `verifyDepsBeforeRun: false` et `onlyBuiltDependencies` sont définis dans
> `pnpm-workspace.yaml` pour que `pnpm run`/`pnpm exec` n'échouent pas sur les scripts de build.

## Déploiement

Hébergement prévu sur **Vercel** (déploiement de production sur `main`, prévisualisations sur les
autres branches). Restent à configurer pour la production : domaine/DNS, variables
d'environnement, traitement serveur des formulaires, SEO (sitemap, robots, OpenGraph) et
conformité Loi 25 (Québec) / RGPD.

## État du contenu

Le contenu source fourni était majoritairement en anglais ; la version française a été rédigée et
**doit être relue**. Plusieurs valeurs sont des **substituts** à remplacer (lien d'inscription,
PDF du programme, domaine et courriels, images, logo). Le site ne comporte encore **aucune image**
(rendu typographique). Voir la feuille de route des tâches restantes pour le détail.
