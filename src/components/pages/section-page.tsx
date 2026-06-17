import { getTranslations } from "next-intl/server";
import { ContentRenderer } from "@/components/blocks/content-renderer";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { SectionNav } from "@/components/layout/section-nav";
import { ContactSection } from "@/components/sections/contact-section";
import { MatchmakingSection } from "@/components/sections/matchmaking-section";
import { RegisterSection } from "@/components/sections/register-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { SponsorshipSection } from "@/components/sections/sponsorship-section";
import { getPageContent } from "@/content/pages";
import { type SectionDef, type SubsectionDef, subsectionTitle } from "@/content/sections";
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

/** Page de section : agrège toutes les sous-sections (ancrées) + widget flottant. */
export async function SectionPage({ section, locale }: { section: SectionDef; locale: Locale }) {
  const t = await getTranslations("common");
  const navItems = section.subsections.map((sub) => ({
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

      <SectionNav items={navItems} label={t("onThisPage")} />

      {section.subsections.map((sub, i) => (
        <section
          key={sub.id}
          id={sub.id}
          className={cn("scroll-mt-20 py-14 lg:scroll-mt-32 lg:py-16", i % 2 === 1 && "bg-surface")}
        >
          <Container>
            <h2 className="font-display font-bold text-h2 text-ink tracking-[-0.01em]">
              {pick(subsectionTitle(sub), locale)}
            </h2>
            <div className="mt-8">
              <SubsectionBody sub={sub} locale={locale} />
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
