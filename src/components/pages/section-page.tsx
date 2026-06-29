import { getTranslations } from "next-intl/server";
import { ContentRenderer } from "@/components/blocks/content-renderer";
import { NewsletterForm } from "@/components/blocks/newsletter-form";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { SectionNav } from "@/components/layout/section-nav";
import { ContactSection } from "@/components/sections/contact-section";
import { MatchmakingSection } from "@/components/sections/matchmaking-section";
import { type NewsCategory, NewsSection } from "@/components/sections/news-section";
import { RegisterSection } from "@/components/sections/register-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { SponsorshipSection } from "@/components/sections/sponsorship-section";
import { getPageContent } from "@/content/pages";
import {
  flattenSubsections,
  type SectionDef,
  type SubsectionDef,
  subsectionTitle,
} from "@/content/sections";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

function SubsectionBody({ sub, locale }: { sub: SubsectionDef; locale: Locale }) {
  switch (sub.kind) {
    case "register":
      return <RegisterSection locale={locale} />;
    case "matchmaking":
      return <MatchmakingSection locale={locale} />;
    case "contact":
      return <ContactSection locale={locale} />;
    case "sponsorship":
      return <SponsorshipSection locale={locale} />;
    case "schedule":
      return <ScheduleSection locale={locale} />;
    case "news":
      return <NewsSection locale={locale} category={sub.variant as NewsCategory | undefined} />;
    case "newsletter":
      return (
        <div className="flex max-w-[620px] flex-col gap-4">
          <p className="text-lead text-muted">
            {locale === "fr"
              ? "Abonnez-vous pour recevoir les annonces, le programme et les actualités d'A2M 2027."
              : "Subscribe to receive A2M 2027 announcements, the programme and the latest news."}
          </p>
          <NewsletterForm />
        </div>
      );
    default: {
      const content = sub.contentSlug ? getPageContent(sub.contentSlug) : undefined;
      if (!content) return null;
      return (
        <div className="flex flex-col gap-6">
          {content.lead && (
            <p className="max-w-[760px] text-lead text-muted">{pick(content.lead, locale)}</p>
          )}
          <ContentRenderer blocks={content.blocks} locale={locale} />
        </div>
      );
    }
  }
}

/** Page de section : agrège les sous-sections (ancrées, jusqu'à 3 niveaux) + widget flottant. */
export async function SectionPage({ section, locale }: { section: SectionDef; locale: Locale }) {
  const t = await getTranslations("common");
  const flat = flattenSubsections(section.subsections);
  // La sous-barre / le widget ne listent que le 1er niveau ; les petits-enfants
  // (groupes) restent dans la page comme sections empilées, façon page « Partenaire ».
  const navItems = flat
    .filter(({ depth }) => depth === 0)
    .map(({ sub }) => ({
      id: sub.id,
      label: pick(subsectionTitle(sub), locale),
    }));

  return (
    <>
      <PageHeader
        eyebrow={pick(section.eyebrow, locale)}
        title={pick(section.title, locale)}
        lead={pick(section.lead, locale)}
        breadcrumb={[{ label: pick(section.title, locale) }]}
      />

      <SectionNav
        items={navItems}
        label={t("onThisPage")}
        prevLabel={locale === "fr" ? "Défiler vers la gauche" : "Scroll left"}
        nextLabel={locale === "fr" ? "Défiler vers la droite" : "Scroll right"}
      />

      {flat.map(({ sub, depth }, i) => {
        const isGroup = !!sub.children?.length && !sub.kind && !sub.contentSlug;
        // Bandes claires alternées : signature topographique discrète (sauf en-têtes de groupe).
        const surface = !isGroup && i % 2 === 1;

        if (isGroup) {
          return (
            <section
              key={sub.id}
              id={sub.id}
              className="a2m-reveal scroll-mt-24 pt-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:pt-16"
            >
              <Container>
                <h2 className="font-display font-bold text-h2 text-ink tracking-[-0.01em]">
                  {pick(subsectionTitle(sub), locale)}
                </h2>
              </Container>
            </section>
          );
        }

        return (
          <section
            key={sub.id}
            id={sub.id}
            className={cn(
              "a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16",
              surface && "a2m-motif-light relative overflow-hidden bg-surface",
            )}
          >
            <Container className={cn(surface && "relative z-10")}>
              <h2
                className={cn(
                  "font-display font-bold text-ink tracking-[-0.01em]",
                  depth > 0 ? "text-h3" : "text-h2",
                )}
              >
                {pick(subsectionTitle(sub), locale)}
              </h2>
              <div className="mt-8">
                <SubsectionBody sub={sub} locale={locale} />
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
