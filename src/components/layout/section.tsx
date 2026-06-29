import type * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

/** Motifs de fond opt-in (signature discrète, voir globals.css). */
export type SectionMotif = "contours" | "aurora" | "contours-light";

const MOTIF_CLASS: Record<SectionMotif, string> = {
  contours: "a2m-motif",
  aurora: "a2m-motif",
  "contours-light": "a2m-motif-light",
};

/** Section verticale standard (rythme : 64px web). */
export function Section({
  className,
  containerClassName,
  motif,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { containerClassName?: string; motif?: SectionMotif }) {
  return (
    <section
      className={cn(
        "a2m-reveal py-14 lg:py-16",
        motif && ["relative overflow-hidden", MOTIF_CLASS[motif]],
        className,
      )}
      {...props}
    >
      <Container className={cn(motif && "relative z-10", containerClassName)}>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** En-tête de section : eyebrow + titre display + description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.26em]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-h2 text-ink tracking-[-0.01em]">{title}</h2>
      {description && (
        <p className={cn("max-w-[640px] text-lead text-muted", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
