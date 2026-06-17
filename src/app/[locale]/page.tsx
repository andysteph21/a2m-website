import { getTranslations, setRequestLocale } from "next-intl/server";
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
import { mainNav } from "@/content/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(rawLocale);

  const t = await getTranslations("common");
  const th = await getTranslations("home");

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
          eyebrow="Invest · Deal · Decide"
          title={locale === "fr" ? "Trois piliers, une plateforme" : "Three pillars, one platform"}
          description={
            locale === "fr"
              ? "A2M réunit l'offre minière africaine et le capital nord-américain autour d'objectifs concrets."
              : "A2M brings African mining supply and North American capital together around concrete goals."
          }
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
        <SectionHeading
          eyebrow={locale === "fr" ? "Pourquoi A2M" : "Why A2M"}
          title={locale === "fr" ? "Ce qui rend A2M différent" : "Why A2M is different"}
        />
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
        <SectionHeading
          eyebrow={locale === "fr" ? "Participer" : "Attend"}
          title={locale === "fr" ? "Principales raisons de participer" : "Top reasons to attend"}
        />
        <FeatureGrid
          className="mt-12"
          numbered
          items={topReasons.map((r) => ({
            title: pick(r.title, locale),
            text: pick(r.text, locale),
          }))}
        />
      </Section>

      <CtaBand
        title={
          locale === "fr" ? "Réservez votre place à A2M 2027" : "Secure your place at A2M 2027"
        }
        text={
          locale === "fr"
            ? "Les inscriptions ouvriront prochainement — consultez les tarifs Early Bird."
            : "Registration opens soon — preview the Early Bird pricing."
        }
        primary={{ label: t("registerNow"), register: true }}
        secondary={{ label: t("downloadProgram"), href: siteConfig.programPdf }}
      />

      <Section>
        <SectionHeading
          eyebrow={locale === "fr" ? "Explorer" : "Explore"}
          title={locale === "fr" ? "Liens rapides" : "Quick links"}
        />
        <div className="mt-10">
          <QuickLinks
            links={mainNav.map((s) => ({ title: pick(s.title, locale), href: s.href }))}
          />
        </div>
      </Section>
    </>
  );
}
