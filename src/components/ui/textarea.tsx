import type * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full rounded-sm border border-hairline bg-card px-[18px] py-4 font-sans text-body text-ink outline-none transition-all duration-[250ms] ease-discret",
        "placeholder:text-anthracite/35",
        "focus:border-emerald-cta focus:shadow-[0_0_0_3px_rgba(22,102,73,0.12)]",
        "aria-[invalid=true]:border-deepred aria-[invalid=true]:shadow-[0_0_0_3px_rgba(122,31,31,0.1)]",
        className,
      )}
      {...props}
    />
  );
}
