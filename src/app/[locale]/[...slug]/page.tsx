import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { SectionPage } from "@/components/pages/section-page";
import { SitemapView } from "@/components/pages/sitemap-view";
import { getSection, sectionHrefs, sections } from "@/content/sections";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { pick } from "@/lib/content";

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

export function generateStaticParams() {
  const slugs = [...sectionHrefs.map((h) => h.replace(/^\//, "")), "sitemap-page"];
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug: slug.split("/") })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const section = getSection(`/${slug.join("/")}`);
  if (!section) return {};
  return {
    title: pick(section.title, locale as Locale),
    description: pick(section.lead, locale as Locale),
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(rawLocale);

  const path = slug.join("/");

  if (path === "sitemap-page") return <SitemapView locale={locale} />;

  const section = getSection(`/${path}`);
  if (section) return <SectionPage section={section} locale={locale} />;

  // Anciennes URL de sous-pages -> ancre sur la page de section.
  for (const s of sections) {
    const sub = s.subsections.find((ss) => ss.contentSlug === path);
    if (sub) redirect(`/${locale}${s.href}#${sub.id}`);
  }

  notFound();
}
