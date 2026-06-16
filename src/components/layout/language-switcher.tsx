"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Bascule FR/EN en conservant la route courante. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className={cn("inline-flex items-center gap-1 text-[12px] font-semibold", className)}
      aria-busy={isPending}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="mx-1 text-hairline">/</span>}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === locale ? "true" : undefined}
            className={cn(
              "rounded-sm px-1 uppercase tracking-[0.08em] transition-colors",
              loc === locale ? "text-emerald-cta" : "text-muted hover:text-anthracite",
            )}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
