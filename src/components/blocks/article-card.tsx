import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Article } from "@/content/data/news";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { A2MImage } from "./a2m-image";

const LABELS: Record<Locale, { internal: string; external: string; readMore: string }> = {
  fr: { internal: "Interne", external: "Externe", readMore: "Lire la suite" },
  en: { internal: "Internal", external: "External", readMore: "Read more" },
};

/** Carte d'article d'actualité (vignette, badge catégorie, date, extrait, lien). */
export function ArticleCard({ article, locale }: { article: Article; locale: Locale }) {
  const t = LABELS[locale];
  const title = pick(article.title, locale);
  const excerpt = pick(article.excerpt, locale);
  const topic = pick(article.topic, locale);
  const date = new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(article.date));

  const imageLabel = article.image ? pick(article.image.label, locale) : title;
  const imageAlt = article.image?.alt ? pick(article.image.alt, locale) : imageLabel;

  return (
    <Card interactive className="flex flex-col overflow-hidden p-0">
      <A2MImage
        src={article.image?.src}
        alt={imageAlt}
        label={imageLabel}
        ratio="16/9"
        className="rounded-none border-0"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={article.external ? "gold" : "neutral"}>
            {article.external ? t.external : t.internal}
          </Badge>
          <span className="text-small text-subtle">
            {topic} · {date}
          </span>
        </div>
        <h3 className="font-display font-semibold text-h3 text-ink">{title}</h3>
        <p className="text-body text-muted">{excerpt}</p>
        <div className="mt-auto pt-2">
          {article.external ? (
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep"
            >
              {t.readMore}
              <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <Link
              href={article.href}
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep"
            >
              {t.readMore}
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
