import { Check } from "lucide-react";
import type { ContentBlock } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

/** Rend une liste de blocs de contenu éditorial dans la locale courante. */
export function ContentRenderer({ blocks, locale }: { blocks: ContentBlock[]; locale: Locale }) {
  return (
    <div className="flex max-w-[760px] flex-col gap-6">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={block.text.en}
                className="mt-4 font-display font-bold text-h2 text-ink tracking-[-0.01em]"
              >
                {pick(block.text, locale)}
              </h2>
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
          default:
            return null;
        }
      })}
    </div>
  );
}
