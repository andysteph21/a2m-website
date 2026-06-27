import Image from "next/image";
import type { ImageRatio } from "@/content/types";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./image-placeholder";

export interface A2MImageCredit {
  label: string;
  license?: string;
  href?: string;
}

interface A2MImageProps {
  /** Source réelle (chemin /public). Sans `src`, un placeholder est rendu. */
  src?: string;
  /** Texte alternatif accessible. */
  alt: string;
  /** Description du placeholder (utilisée aussi comme alt de repli). */
  label: string;
  ratio?: ImageRatio;
  /** Remplit le parent (relative) au lieu d'imposer un ratio. */
  fill?: boolean;
  tone?: "light" | "dark";
  credit?: A2MImageCredit;
  /** Taille responsive passée à next/image (sizes). */
  sizes?: string;
  /** Priorité de chargement (above-the-fold). */
  priority?: boolean;
  className?: string;
}

/**
 * Image éditoriale : rend une vraie image (next/image) lorsqu'une source est
 * fournie, avec attribution optionnelle ; sinon, retombe sur le placeholder en
 * pointillés existant. Composant serveur.
 */
export function A2MImage({
  src,
  alt,
  label,
  ratio = "16/9",
  fill = false,
  tone = "light",
  credit,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  className,
}: A2MImageProps) {
  if (!src) {
    return (
      <ImagePlaceholder label={label} ratio={ratio} fill={fill} tone={tone} className={className} />
    );
  }

  const img = (
    <div
      style={fill ? undefined : { aspectRatio: ratio.replace("/", " / ") }}
      className={cn(
        "relative overflow-hidden rounded-sm border border-hairline bg-surface",
        fill ? "absolute inset-0 h-full w-full" : "w-full",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt || label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );

  if (!credit) return img;

  return (
    <figure className="flex flex-col gap-1.5">
      {img}
      <figcaption className="text-[11px] text-subtle">
        {credit.href ? (
          <a
            href={credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 transition-colors hover:text-muted hover:underline"
          >
            {credit.label}
            {credit.license ? ` · ${credit.license}` : ""}
          </a>
        ) : (
          <>
            {credit.label}
            {credit.license ? ` · ${credit.license}` : ""}
          </>
        )}
      </figcaption>
    </figure>
  );
}
