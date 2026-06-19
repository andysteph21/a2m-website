import { getTranslations, setRequestLocale } from "next-intl/server";
import { ValuesBand } from "@/components/blocks/business-pictos";
import { CtaBand } from "@/components/blocks/cta-band";
import { EventBandeau } from "@/components/blocks/event-bandeau";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { HeroSlider } from "@/components/blocks/hero-slider";
import { KpiBandeau } from "@/components/blocks/kpi-bandeau";
import { QuickLinks } from "@/components/blocks/quick-links";
import { TwoColumnFeature } from "@/components/blocks/two-column-feature";
import { Section, SectionHeading } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import { heroSlides, kpis, pillars, topReasons, whyDifferent } from "@/content/data/home";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

const COPY = {
  fr: {
    pillarsEyebrow: "Invest · Deal · Decide",
    pillarsTitle: "Trois piliers, une plateforme",
    pillarsDesc:
      "A2M réunit l'offre minière africaine et le capital nord-américain autour d'objectifs concrets.",
    whyEyebrow: "Pourquoi A2M",
    whyTitle: "Ce qui rend A2M différent",
    attendEyebrow: "Participer",
    attendTitle: "Principales raisons de participer",
    ctaTitle: "Réservez votre place à A2M 2027",
    ctaText: "Les inscriptions ouvriront prochainement — consultez les tarifs Early Bird.",
    quickEyebrow: "Accès rapides",
    quickTitle: "Passez à l'action",
    cta: {
      register: "S'inscrire comme délégué",
      schedule: "Calendrier du programme",
      matchmaking: "Maillage d'affaires",
      associate: "Associer votre marque",
      sponsorship: "Opportunités de commandite",
      breakfast: "Déjeuner des investisseurs",
    },
  },
  en: {
    pillarsEyebrow: "Invest · Deal · Decide",
    pillarsTitle: "Three pillars, one platform",
    pillarsDesc:
      "A2M brings African mining supply and North American capital together around concrete goals.",
    whyEyebrow: "Why A2M",
    whyTitle: "Why A2M is different",
    attendEyebrow: "Attend",
    attendTitle: "Top reasons to attend",
    ctaTitle: "Secure your place at A2M 2027",
    ctaText: "Registration opens soon — preview the Early Bird pricing.",
    quickEyebrow: "Quick access",
    quickTitle: "Jump to what matters",
    cta: {
      register: "Register as a Delegate",
      schedule: "Program schedule",
      matchmaking: "Business matchmaking",
      associate: "Associate your brand",
      sponsorship: "Sponsorship opportunities",
      breakfast: "Investors' Breakfast",
    },
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(rawLocale);

  const t = await getTranslations("common");
  const th = await getTranslations("home");
  const c = COPY[locale];

  const ctaLinks = [
    { title: c.cta.register, href: "/plan-your-visit#register" },
    { title: c.cta.schedule, href: "/program#schedule" },
    { title: c.cta.matchmaking, href: "/program#matchmaking" },
    { title: c.cta.associate, href: "/exhibit-sponsor#associate" },
    { title: c.cta.sponsorship, href: "/exhibit-sponsor#sponsorship" },
    { title: c.cta.breakfast, href: "/program#investors-breakfast" },
  ];

  return (
    <>
      <HeroSlider
        slides={heroSlides.map((s) => ({
          eyebrow: pick(s.eyebrow, locale),
          title: pick(s.title, locale),
          text: pick(s.text, locale),
          image: pick(s.image, locale),
        }))}
        registerLabel={t("register")}
        programLabel={t("downloadProgram")}
        programUrl={siteConfig.programPdf}
        prevLabel="←"
        nextLabel="→"
      />

      <EventBandeau
        items={[
          { label: th("eventDates"), value: th("eventDates") },
          { label: th("venue"), value: siteConfig.venue },
          { label: th("honoraryPatron"), value: t("comingSoon") },
        ]}
      />

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

      <Section className="bg-surface">
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

      <ValuesBand locale={locale} />

      <CtaBand
        title={c.ctaTitle}
        text={c.ctaText}
        primary={{ label: t("registerNow"), register: true }}
        secondary={{ label: t("downloadProgram"), href: siteConfig.programPdf }}
      />

      <Section>
        <SectionHeading eyebrow={c.quickEyebrow} title={c.quickTitle} />
        <div className="mt-10">
          <QuickLinks links={ctaLinks} />
        </div>
      </Section>
    </>
  );
}
