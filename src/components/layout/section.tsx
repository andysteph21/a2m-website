import type * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

/** Section verticale standard (rythme : 64px web). */
export function Section({
  className,
  containerClassName,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { containerClassName?: string }) {
  return (
    <section className={cn("py-14 lg:py-16", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
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
