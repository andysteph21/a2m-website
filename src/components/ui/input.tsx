import type * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "h-14 w-full rounded-sm border border-hairline bg-card px-[18px] font-sans text-body text-ink outline-none transition-all duration-[250ms] ease-discret",
        "placeholder:text-anthracite/35",
        "focus:border-emerald-cta focus:shadow-[0_0_0_3px_rgba(22,102,73,0.12)]",
        "aria-[invalid=true]:border-deepred aria-[invalid=true]:shadow-[0_0_0_3px_rgba(122,31,31,0.1)]",
        "disabled:cursor-not-allowed disabled:bg-anthracite/4 disabled:text-subtle",
        className,
      )}
      {...props}
    />
  );
}
