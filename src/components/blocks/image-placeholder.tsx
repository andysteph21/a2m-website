import { ImageIcon } from "lucide-react";
import type { ImageRatio } from "@/content/types";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  /** Description de l'image attendue (affichée dans le cadre). */
  label: string;
  ratio?: ImageRatio;
  /** Remplit le parent (relative) au lieu d'imposer un ratio — pour les fonds. */
  fill?: boolean;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Emplacement d'image visible : cadre en pointillés indiquant qu'une image
 * doit être fournie, avec une description de ce qui est recherché.
 */
export function ImagePlaceholder({
  label,
  ratio = "16/9",
  fill = false,
  tone = "light",
  className,
}: ImagePlaceholderProps) {
  const dark = tone === "dark";
  return (
    <div
      style={fill ? undefined : { aspectRatio: ratio.replace("/", " / ") }}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-sm border border-dashed p-5 text-center",
        fill ? "absolute inset-0 h-full w-full" : "w-full",
        dark
          ? "border-champagne/35 bg-emerald-deep/40 text-champagne"
          : "border-taupe/45 bg-surface text-muted",
        className,
      )}
    >
      <ImageIcon className={cn("size-7", dark ? "text-champagne/80" : "text-taupe")} />
      <span
        className={cn(
          "font-semibold text-[10px] uppercase tracking-[0.18em]",
          dark ? "text-champagne/80" : "text-taupe",
        )}
      >
        Image · {ratio}
      </span>
      <span className={cn("max-w-[44ch] text-small", dark ? "text-champagne/90" : "text-muted")}>
        {label}
      </span>
    </div>
  );
}
