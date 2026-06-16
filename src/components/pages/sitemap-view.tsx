import { getTranslations } from "next-intl/server";
import { SitemapTree } from "@/components/blocks/sitemap-tree";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { mainNav } from "@/content/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Vue « Plan du site » : arborescence complète. */
export async function SitemapView({ locale }: { locale: Locale }) {
  const t = await getTranslations("common");
  const sections = mainNav.map((s) => ({
    title: pick(s.title, locale),
    href: s.href,
    children: s.children?.map((c) => ({ title: pick(c.title, locale), href: c.href })),
  }));

  return (
    <>
      <PageHeader title={t("sitemap")} breadcrumb={[{ label: t("sitemap") }]} />
      <Section>
        <SitemapTree sections={sections} />
      </Section>
    </>
  );
}
