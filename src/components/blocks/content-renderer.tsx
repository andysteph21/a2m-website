import { Check } from "lucide-react";
import type { ContentBlock } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./image-placeholder";

const gridColumns: Record<1 | 2 | 3, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
};

/** Rend une liste de blocs de contenu éditorial dans la locale courante. */
export function ContentRenderer({ blocks, locale }: { blocks: ContentBlock[]; locale: Locale }) {
  return (
    <div className="flex max-w-[760px] flex-col gap-6">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            return (
              <h3 key={block.text.en} className="mt-4 font-display font-semibold text-h3 text-ink">
                {pick(block.text, locale)}
              </h3>
            );
          case "paragraph":
            return (
              <p key={block.text.en} className="text-lead text-muted leading-[1.7]">
                {pick(block.text, locale)}
              </p>
            );
          case "list":
            return (
              <ul key={block.items.map((it) => it.en).join("|")} className="flex flex-col gap-3">
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
                key={block.text.en}
                className="rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5"
              >
                {block.title && (
                  <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                    {pick(block.title, locale)}
                  </p>
                )}
                <p className="text-body text-muted">{pick(block.text, locale)}</p>
              </div>
            );
          case "image": {
            const cols = block.columns ?? 1;
            const label = pick(block.label, locale);
            const tiles = Array.from({ length: cols }, (_, i) => ({
              key: `${label}-${i + 1}`,
              label: cols > 1 ? `${label} (${i + 1})` : label,
            }));
            return (
              <div key={`img-${label}`} className={cn("grid gap-4", gridColumns[cols])}>
                {tiles.map((tile) => (
                  <ImagePlaceholder key={tile.key} label={tile.label} ratio={block.ratio} />
                ))}
              </div>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
