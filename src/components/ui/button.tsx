import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Bouton A2M — variantes issues du brand book Mineral.
 * primary (émeraude), prestige (or), secondary (contour), ghost, danger.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-emerald-cta text-white hover:bg-emerald-deep hover:shadow-emerald",
        prestige: "bg-gold text-anthracite hover:bg-champagne hover:shadow-gold",
        secondary:
          "border border-emerald-cta bg-transparent text-emerald-cta hover:bg-emerald-cta hover:text-white",
        ghost: "bg-transparent text-muted hover:bg-anthracite/5 hover:text-anthracite",
        danger:
          "border border-deepred/45 bg-transparent text-deepred hover:bg-deepred hover:text-white",
      },
      size: {
        default: "h-12 px-7 text-[12px]",
        sm: "h-10 px-5 text-[11px]",
        lg: "h-14 px-9 text-[13px]",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
