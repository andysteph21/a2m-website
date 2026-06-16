import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ContentRenderer } from "@/components/blocks/content-renderer";
import { QuickLinks } from "@/components/blocks/quick-links";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/layout/section";
import { ContactView } from "@/components/pages/contact-view";
import { MatchmakingView } from "@/components/pages/matchmaking-view";
import { ProgramView } from "@/components/pages/program-view";
import { RegisterView } from "@/components/pages/register-view";
import { SitemapView } from "@/components/pages/sitemap-view";
import { SponsorshipView } from "@/components/pages/sponsorship-view";
import { mainNav } from "@/content/navigation";
import { allSlugs, getPageContent } from "@/content/pages";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Pages spéciales (composants sur mesure) dispatchées par la route catch-all. */
const specialComponents: Record<string, React.ComponentType<{ locale: Locale }>> = {
  program: ProgramView,
  "attend/register": RegisterView,
  "attend/matchmaking": MatchmakingView,
  "about/contact": ContactView,
  "exhibit-sponsor/sponsorship": SponsorshipView,
  "sitemap-page": SitemapView,
};

const specialSlugs = Object.keys(specialComponents);

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

export function generateStaticParams() {
  const slugs = [...allSlugs, ...specialSlugs];
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug: slug.split("/") })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getPageContent(slug.join("/"));
  if (!content) return {};
  return {
    title: pick(content.title, locale as Locale),
    description: content.lead ? pick(content.lead, locale as Locale) : undefined,
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(rawLocale);

  const path = slug.join("/");

  // Pages spéciales (formulaires, tarifs, programme, plan du site…)
  const Special = specialComponents[path];
  if (Special) return <Special locale={locale} />;

  // Pages éditoriales pilotées par le registre
  const content = getPageContent(path);
  if (!content) notFound();

  const navSection = mainNav.find((s) => s.href === content.section);
  const isSectionRoot = content.section === `/${path}`;
  const childLinks =
    isSectionRoot && navSection?.children
      ? navSection.children
          .filter((c) => c.href !== content.section)
          .map((c) => ({ title: pick(c.title, locale), href: c.href }))
      : [];

  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow ? pick(content.eyebrow, locale) : undefined}
        title={pick(content.title, locale)}
        lead={content.lead ? pick(content.lead, locale) : undefined}
        breadcrumb={[
          ...(navSection && !isSectionRoot
            ? [{ label: pick(navSection.title, locale), href: navSection.href }]
            : []),
          { label: pick(content.title, locale) },
        ]}
      />

      <Section>
        <ContentRenderer blocks={content.blocks} locale={locale} />
      </Section>

      {childLinks.length > 0 && navSection && (
        <Section className="bg-surface">
          <SectionHeading
            eyebrow={pick(navSection.title, locale)}
            title={locale === "fr" ? "Explorer cette section" : "Explore this section"}
          />
          <div className="mt-10">
            <QuickLinks links={childLinks} />
          </div>
        </Section>
      )}
    </>
  );
}
