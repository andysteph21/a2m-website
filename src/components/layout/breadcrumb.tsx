import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export interface Crumb {
  label: string;
  href?: string;
}

/** Fil d'Ariane contextuel d'une page. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const t = useTranslations("common");
  return (
    <nav aria-label={t("breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-subtle">
        <li>
          <Link href="/" className="transition-colors hover:text-emerald-cta">
            {t("home")}
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 text-hairline" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-emerald-cta">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-muted">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
