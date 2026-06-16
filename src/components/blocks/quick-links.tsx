import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface QuickLink {
  title: string;
  href: string;
}

/** Grille de liens rapides vers les sections principales. */
export function QuickLinks({ links }: { links: QuickLink[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center justify-between gap-4 bg-card p-6 transition-colors hover:bg-mist"
        >
          <span className="font-display font-semibold text-h3 text-ink group-hover:text-emerald-deep">
            {link.title}
          </span>
          <ArrowRight className="size-5 text-taupe transition-transform group-hover:translate-x-1 group-hover:text-emerald-cta" />
        </Link>
      ))}
    </div>
  );
}
