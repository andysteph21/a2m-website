import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

/** Badge / étiquette — petites pastilles de statut du brand book. */
const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        emerald: "bg-emerald-cta/12 text-emerald-cta",
        gold: "bg-bronze/15 text-copper",
        solid: "bg-emerald-cta text-white",
        neutral: "bg-anthracite/8 text-muted",
        nightblue: "bg-nightblue/8 text-nightblue",
        danger: "bg-deepred/10 text-deepred",
      },
    },
    defaultVariants: { variant: "emerald" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
