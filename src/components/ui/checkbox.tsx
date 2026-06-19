"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

/** Case à cocher — case 20px, cochée = émeraude (brand book). */
export function Checkbox({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-sm border-[1.5px] border-taupe bg-card transition-colors duration-200 ease-discret outline-none",
        "data-[state=checked]:border-emerald-cta data-[state=checked]:bg-emerald-cta data-[state=checked]:text-white",
        "focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="size-3.5" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
