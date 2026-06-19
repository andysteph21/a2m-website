import { Check } from "lucide-react";
import type { ContentBlock } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";
import { FeatureGrid } from "./feature-grid";
import { ImagePlaceholder } from "./image-placeholder";
import { LogoWall } from "./logo-wall";
import { MatchmakingFlow } from "./matchmaking-flow";
import { SpeakerGrid } from "./speaker-grid";

const imageColumns: Record<1 | 2 | 3, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
};

/** Clé stable dérivée du contenu (évite les clés basées sur l'index). */
function blockKey(block: ContentBlock): string {
  switch (block.type) {
    case "heading":
    case "paragraph":
      return `${block.type}-${block.text.en}`;
    case "callout":
      return `callout-${block.text.en}`;
    case "list":
      return `list-${block.items.map((i) => i.en).join("|")}`;
    case "image":
      return `image-${block.label.en}`;
    case "stats":
      return `stats-${block.items.map((i) => i.label.en).join("|")}`;
    case "features":
      return `features-${block.items.map((i) => i.title.en).join("|")}`;
    case "steps":
      return `steps-${block.items.map((i) => i.title.en).join("|")}`;
    case "logos":
      return `logos-${block.label?.en ?? "default"}`;
    case "speakers":
      return `speakers-${block.label?.en ?? "default"}`;
  }
}

/** Rend un bloc selon son type (aiguillage cartes/icônes vs prose). */
function renderBlock(block: ContentBlock, locale: Locale) {
  const key = blockKey(block);
  switch (block.type) {
    case "heading":
      return (
        <h3 key={key} className="max-w-[760px] font-display font-semibold text-h3 text-ink">
          {pick(block.text, locale)}
        </h3>
      );
    case "paragraph":
      return (
        <p key={key} className="max-w-[760px] text-lead text-muted leading-[1.7]">
          {pick(block.text, locale)}
        </p>
      );
    case "list":
      return (
        <ul key={key} className="flex max-w-[760px] flex-col gap-3">
          {block.items.map((item) => (
            <li key={item.en} className="flex items-start gap-3 text-body text-muted">
              <Check className="mt-1 size-4 shrink-0 text-emerald-cta" />
              <span>{pick(item, locale)}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={key}
          className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5"
        >
          {block.title && (
            <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              {pick(block.title, locale)}
            </p>
          )}
          <p className="text-body text-muted">{pick(block.text, locale)}</p>
        </div>
      );
    case "stats":
      return (
        <div key={key} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {block.items.map((item) => (
            <div
              key={item.label.en}
              className="rounded-sm border border-hairline bg-card p-5 shadow-card"
            >
              <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                {item.value}
              </span>
              <span className="mt-1 block text-small text-muted">{pick(item.label, locale)}</span>
            </div>
          ))}
        </div>
      );
    case "features":
      return (
        <FeatureGrid
          key={key}
          columns={block.columns ?? 3}
          numbered={block.numbered}
          items={block.items.map((i) => ({
            title: pick(i.title, locale),
            text: pick(i.text, locale),
          }))}
        />
      );
    case "steps":
      return (
        <MatchmakingFlow
          key={key}
          steps={block.items.map((i) => ({
            title: pick(i.title, locale),
            text: pick(i.text, locale),
          }))}
        />
      );
    case "logos":
      return (
        <LogoWall
          key={key}
          count={block.count}
          label={
            block.label
              ? pick(block.label, locale)
              : locale === "fr"
                ? "Logos à venir"
                : "Logos coming soon"
          }
        />
      );
    case "speakers":
      return (
        <SpeakerGrid
          key={key}
          count={block.count}
          label={
            block.label
              ? pick(block.label, locale)
              : locale === "fr"
                ? "Conférenciers à venir"
                : "Speakers to be announced"
          }
        />
      );
    case "image": {
      const cols = block.columns ?? 1;
      const label = pick(block.label, locale);
      const tiles = Array.from({ length: cols }, (_, i) => ({
        key: `${label}-${i + 1}`,
        label: cols > 1 ? `${label} (${i + 1})` : label,
      }));
      return (
        <div key={key} className={cn("grid gap-4", imageColumns[cols])}>
          {tiles.map((tile) => (
            <ImagePlaceholder key={tile.key} label={tile.label} ratio={block.ratio} />
          ))}
        </div>
      );
    }
    default:
      return null;
  }
}

/** Rend une liste de blocs de contenu éditorial dans la locale courante. */
export function ContentRenderer({ blocks, locale }: { blocks: ContentBlock[]; locale: Locale }) {
  return (
    <div className="flex flex-col gap-8">{blocks.map((block) => renderBlock(block, locale))}</div>
  );
}
