"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/blocks/article-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ArticleCategory, articles } from "@/content/data/news";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

export type NewsCategory = ArticleCategory;

const UI: Record<Locale, { all: string; internal: string; external: string; empty: string }> = {
  fr: {
    all: "Tous",
    internal: "Internes",
    external: "Externes",
    empty: "Aucun article pour ce filtre.",
  },
  en: {
    all: "All",
    internal: "Internal",
    external: "External",
    empty: "No articles for this filter.",
  },
};

/**
 * Grille d'actualités filtrable. Sans `category` : onglets Tous / Internes /
 * Externes + sujets. Avec `category` (News Release = internal, Market News =
 * external) : pré-filtrée, onglets par sujet uniquement.
 */
export function NewsSection({ locale, category }: { locale: Locale; category?: NewsCategory }) {
  const t = UI[locale];

  const base = useMemo(
    () => (category ? articles.filter((a) => a.category === category) : [...articles]),
    [category],
  );

  const topics = useMemo(() => {
    const seen = new Map<string, string>();
    for (const a of base) {
      if (!seen.has(a.topic.en)) seen.set(a.topic.en, pick(a.topic, locale));
    }
    return Array.from(seen, ([en, label]) => ({ en, label }));
  }, [base, locale]);

  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (!category && filter === "internal") return base.filter((a) => a.category === "internal");
    if (!category && filter === "external") return base.filter((a) => a.category === "external");
    if (filter.startsWith("topic:")) {
      const en = filter.slice("topic:".length);
      return base.filter((a) => a.topic.en === en);
    }
    return base;
  }, [filter, base, category]);

  return (
    <div className="flex flex-col gap-8">
      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">{t.all}</TabsTrigger>
          {!category && <TabsTrigger value="internal">{t.internal}</TabsTrigger>}
          {!category && <TabsTrigger value="external">{t.external}</TabsTrigger>}
          {topics.map((tp) => (
            <TabsTrigger key={tp.en} value={`topic:${tp.en}`}>
              {tp.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {filtered.map((a) => (
            <ArticleCard key={a.id} article={a} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="text-body text-muted">{t.empty}</p>
      )}
    </div>
  );
}
