"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import type * as React from "react";
import { cn } from "@/lib/utils";

/** Libellé de champ — fixe au-dessus, style « eyebrow » du brand book. */
export function Label({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={cn(
        "mb-2 block font-sans font-semibold text-[11px] text-muted uppercase tracking-[0.1em]",
        className,
      )}
      {...props}
    />
  );
}
