import { getTranslations, setRequestLocale } from "next-intl/server";
import { A2MImage } from "@/components/blocks/a2m-image";
import { ArticleCard } from "@/components/blocks/article-card";
import { CtaBand } from "@/components/blocks/cta-band";
import { EventBandeau } from "@/components/blocks/event-bandeau";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { HeroSlider } from "@/components/blocks/hero-slider";
import { KpiBandeau } from "@/components/blocks/kpi-bandeau";
import { LogoWall } from "@/components/blocks/logo-wall";
import { PreviewSection } from "@/components/blocks/preview-section";
import { SpeakerGrid } from "@/components/blocks/speaker-grid";
import { TwoColumnFeature } from "@/components/blocks/two-column-feature";
import { Section, SectionHeading } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  eventDetails,
  exhibitionPreview,
  heroSlides,
  heroSubHeadline,
  homeIntro,
  honoraryCountry,
  introBand,
  kpis,
  pillars,
  programPreview,
  topReasons,
  whatTheyComeFor,
  whoAttends,
  whyDifferent,
} from "@/content/data/home";
import { articles } from "@/content/data/news";
import { delegateTiers } from "@/content/data/pricing";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

const COPY = {
  fr: {
    pillarsEyebrow: "Invest · Deal · Decide",
    pillarsTitle: "Trois piliers, une plateforme",
    pillarsDesc:
      "A2M réunit l'offre minière africaine et le capital nord-américain autour d'objectifs concrets.",
    sectorsEyebrow: "Qui participe",
    sectorsTitle: "Les secteurs représentés",
    sectorsDesc: "A2M réunit l'ensemble de l'écosystème minier africain et nord-américain.",
    comeForTitle: "Ce qu'ils viennent chercher",
    whyEyebrow: "Pourquoi A2M",
    whyTitle: "Ce qui rend A2M différent",
    attendEyebrow: "Participer",
    attendTitle: "Principales raisons de participer",
    ctaTitle: "Réservez votre place à A2M 2027",
    ctaText: "Les inscriptions ouvriront prochainement — consultez les tarifs Early Bird.",
    previews: {
      programEyebrow: "Programme",
      programTitle: "Un aperçu du programme",
      programDesc: "Keynotes et panels qui façonnent l'agenda minier Canada-Afrique.",
      programSeeAll: "Voir tout le programme",
      speakersEyebrow: "Conférenciers",
      speakersTitle: "Conférenciers & panélistes",
      speakersDesc:
        "Des dirigeants et experts de premier plan du Canada et d'Afrique — la liste complète sera dévoilée prochainement.",
      speakersSeeAll: "Voir tous les conférenciers",
      speakersPlaceholder: "Conférenciers à venir",
      exhibitEyebrow: "Exposer",
      exhibitTitle: "Opportunités d'exposition",
      exhibitDesc: "Du A2M Marketplace au Village des explorateurs — trouvez le format adapté.",
      exhibitSeeAll: "Découvrir l'exposition",
      sponsorsEyebrow: "Commanditaires",
      sponsorsTitle: "Commanditaires & partenaires",
      sponsorsDesc: "Associez votre marque à l'événement minier de référence Canada-Afrique.",
      sponsorsSeeAll: "Voir les commandites",
      sponsorsPlaceholder: "Commanditaires & partenaires à venir",
      pricingEyebrow: "Inscription",
      pricingTitle: "Passes délégués — tarifs Early Bird",
      pricingDesc: "Profitez du meilleur tarif avant l'ouverture des inscriptions.",
      pricingSeeAll: "Voir les tarifs & s'inscrire",
      pricingNote: "*Prix en CAD, hors TPS (5 %) et TVQ (9,975 %).",
      newsEyebrow: "Actualités",
      newsTitle: "Dernières actualités",
      newsDesc: "Annonces et couverture médiatique autour d'A2M 2027.",
      newsSeeAll: "Voir toutes les actualités",
    },
  },
  en: {
    pillarsEyebrow: "Invest · Deal · Decide",
    pillarsTitle: "Three pillars, one platform",
    pillarsDesc:
      "A2M brings African mining supply and North American capital together around concrete goals.",
    sectorsEyebrow: "Who attends",
    sectorsTitle: "The sectors represented",
    sectorsDesc: "A2M brings together the entire African and North American mining ecosystem.",
    comeForTitle: "What they come for",
    whyEyebrow: "Why A2M",
    whyTitle: "Why A2M is different",
    attendEyebrow: "Attend",
    attendTitle: "Top reasons to attend",
    ctaTitle: "Secure your place at A2M 2027",
    ctaText: "Registration opens soon — preview the Early Bird pricing.",
    previews: {
      programEyebrow: "Program",
      programTitle: "A glimpse of the program",
      programDesc: "Keynotes and panels shaping the Canada–Africa mining agenda.",
      programSeeAll: "See the full program",
      speakersEyebrow: "Speakers",
      speakersTitle: "Speakers & panellists",
      speakersDesc:
        "Leading executives and experts from Canada and Africa — the full line-up is unveiled soon.",
      speakersSeeAll: "See all speakers",
      speakersPlaceholder: "Speakers to be announced",
      exhibitEyebrow: "Exhibit",
      exhibitTitle: "Exhibition opportunities",
      exhibitDesc: "From the A2M Marketplace to the Explorer Village — find the format that fits.",
      exhibitSeeAll: "Explore exhibiting",
      sponsorsEyebrow: "Sponsors",
      sponsorsTitle: "Sponsors & partners",
      sponsorsDesc: "Associate your brand with the flagship Canada–Africa mining event.",
      sponsorsSeeAll: "See sponsorship options",
      sponsorsPlaceholder: "Sponsors & partners to be announced",
      pricingEyebrow: "Register",
      pricingTitle: "Delegate passes — Early Bird",
      pricingDesc: "Secure the best rate before registration opens.",
      pricingSeeAll: "See pricing & register",
      pricingNote: "*Prices in CAD, excluding GST (5%) and QST (9.975%).",
      newsEyebrow: "News",
      newsTitle: "Latest news",
      newsDesc: "Announcements and media coverage around A2M 2027.",
      newsSeeAll: "See all news",
    },
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(rawLocale);

  const t = await getTranslations("common");
  const c = COPY[locale];

  const p = c.previews;
  const latestNews = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <>
      <HeroSlider
        slides={heroSlides.map((s) => ({
          eyebrow: pick(s.eyebrow, locale),
          title: pick(s.title, locale),
          text: pick(s.text, locale),
          image: pick(s.image, locale),
          src: s.src,
        }))}
        registerLabel={t("register")}
        programLabel={t("downloadProgram")}
        programUrl={siteConfig.programPdf}
        prevLabel="←"
        nextLabel="→"
      />

      <Section className="py-10 lg:py-12">
        <p className="mx-auto max-w-[860px] text-center text-lead text-muted">
          {pick(heroSubHeadline, locale)}
        </p>
      </Section>

      <EventBandeau
        items={eventDetails.map((d) => ({
          label: pick(d.label, locale),
          value: pick(d.value, locale),
        }))}
      />

      <Section className="bg-surface" motif="contours-light">
        <SectionHeading
          align="center"
          eyebrow={pick(homeIntro.eyebrow, locale)}
          title={pick(homeIntro.title, locale)}
        />
        <p className="mx-auto mt-6 max-w-[820px] text-center text-lead text-muted">
          {pick(homeIntro.text, locale)}
        </p>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow={c.pillarsEyebrow}
          title={c.pillarsTitle}
          description={c.pillarsDesc}
        />
        <FeatureGrid
          className="mt-12"
          items={pillars.map((p) => ({
            title: pick(p.title, locale),
            text: pick(p.text, locale),
          }))}
        />
      </Section>

      <KpiBandeau items={kpis.map((k) => ({ value: k.value, label: pick(k.label, locale) }))} />

      <Section>
        <SectionHeading
          eyebrow={pick(introBand.eyebrow, locale)}
          title={pick(introBand.title, locale)}
        />
        <p className="mt-6 max-w-[820px] text-lead text-muted">{pick(introBand.text, locale)}</p>
        <div className="mt-16">
          <SectionHeading
            eyebrow={c.sectorsEyebrow}
            title={c.sectorsTitle}
            description={c.sectorsDesc}
          />
          <FeatureGrid
            className="mt-12"
            items={whoAttends.map((s) => ({
              title: pick(s.title, locale),
              text: pick(s.text, locale),
            }))}
          />
        </div>
        <div className="mt-16">
          <SectionHeading eyebrow={c.attendEyebrow} title={c.comeForTitle} />
          <FeatureGrid
            className="mt-12"
            items={whatTheyComeFor.map((s) => ({
              title: pick(s.title, locale),
              text: pick(s.text, locale),
            }))}
          />
        </div>
      </Section>

      <Section className="bg-surface" motif="contours-light">
        <SectionHeading eyebrow={c.whyEyebrow} title={c.whyTitle} />
        <div className="mt-10">
          <TwoColumnFeature
            left={{
              title: pick(whyDifferent.canada.title, locale),
              text: pick(whyDifferent.canada.text, locale),
            }}
            right={{
              title: pick(whyDifferent.africa.title, locale),
              text: pick(whyDifferent.africa.text, locale),
            }}
          />
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              {pick(honoraryCountry.eyebrow, locale)}
            </span>
            <h2 className="font-display font-bold text-h2 text-ink tracking-[-0.01em]">
              {pick(honoraryCountry.title, locale)}
            </h2>
            <p className="text-lead text-muted">{pick(honoraryCountry.text, locale)}</p>
            <div className="grid w-full grid-cols-2 gap-4">
              {honoraryCountry.stats.map((s) => (
                <div
                  key={s.label.en}
                  className="rounded-sm border border-hairline bg-card p-4 shadow-card"
                >
                  <span className="tnum block font-display font-bold text-data text-emerald-deep">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-small text-muted">{pick(s.label, locale)}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="prestige">
              <Link href={honoraryCountry.href}>{pick(honoraryCountry.cta, locale)}</Link>
            </Button>
          </div>
          <A2MImage
            src={honoraryCountry.image.src}
            alt={pick(honoraryCountry.image.alt, locale)}
            label={pick(honoraryCountry.image.label, locale)}
            credit={honoraryCountry.image.credit}
            ratio="4/5"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </Section>

      <Section className="bg-surface" motif="contours-light">
        <SectionHeading eyebrow={c.attendEyebrow} title={c.attendTitle} />
        <FeatureGrid
          className="mt-12"
          numbered
          items={topReasons.map((r) => ({
            title: pick(r.title, locale),
            text: pick(r.text, locale),
          }))}
        />
      </Section>

      <PreviewSection
        eyebrow={p.programEyebrow}
        title={p.programTitle}
        description={p.programDesc}
        seeAllLabel={p.programSeeAll}
        seeAllHref="/about#sessions"
      >
        <FeatureGrid
          items={programPreview.map((i) => ({
            title: pick(i.title, locale),
            text: pick(i.text, locale),
          }))}
        />
      </PreviewSection>

      <PreviewSection
        className="bg-surface"
        motif="contours-light"
        eyebrow={p.speakersEyebrow}
        title={p.speakersTitle}
        description={p.speakersDesc}
        seeAllLabel={p.speakersSeeAll}
        seeAllHref="/about#speakers"
      >
        <SpeakerGrid count={4} label={p.speakersPlaceholder} />
      </PreviewSection>

      <PreviewSection
        eyebrow={p.exhibitEyebrow}
        title={p.exhibitTitle}
        description={p.exhibitDesc}
        seeAllLabel={p.exhibitSeeAll}
        seeAllHref="/exhibit-sponsor#exhibition"
      >
        <FeatureGrid
          columns={2}
          items={exhibitionPreview.map((i) => ({
            title: pick(i.title, locale),
            text: pick(i.text, locale),
          }))}
        />
      </PreviewSection>

      <PreviewSection
        className="bg-surface"
        motif="contours-light"
        eyebrow={p.sponsorsEyebrow}
        title={p.sponsorsTitle}
        description={p.sponsorsDesc}
        seeAllLabel={p.sponsorsSeeAll}
        seeAllHref="/exhibit-sponsor#sponsorship"
      >
        <LogoWall count={6} label={p.sponsorsPlaceholder} />
      </PreviewSection>

      <PreviewSection
        eyebrow={p.pricingEyebrow}
        title={p.pricingTitle}
        description={p.pricingDesc}
        seeAllLabel={p.pricingSeeAll}
        seeAllHref="/plan-your-visit#register"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {delegateTiers.map((tier) => (
            <div
              key={tier.name.en}
              className={cn(
                "flex flex-col gap-1 rounded-sm border bg-card p-5 shadow-card",
                tier.featured ? "border-gold" : "border-hairline",
              )}
            >
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.14em]">
                {pick(tier.name, locale)}
              </span>
              <span className="tnum font-display font-bold text-data text-emerald-deep">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-small text-muted">{pick(tier.period, locale)}</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-small text-subtle">{p.pricingNote}</p>
      </PreviewSection>

      <PreviewSection
        className="bg-surface"
        motif="contours-light"
        eyebrow={p.newsEyebrow}
        title={p.newsTitle}
        description={p.newsDesc}
        seeAllLabel={p.newsSeeAll}
        seeAllHref="/news"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((article) => (
            <ArticleCard key={article.id} article={article} locale={locale} />
          ))}
        </div>
      </PreviewSection>

      <CtaBand
        title={c.ctaTitle}
        text={c.ctaText}
        primary={{ label: t("registerNow"), register: true }}
        secondary={{ label: t("downloadProgram"), href: siteConfig.programPdf }}
      />
    </>
  );
}
