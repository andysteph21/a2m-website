import { UserRound } from "lucide-react";

/** Grille de panélistes « à venir » : silhouettes de personnes + barres grisées. */
export function SpeakerGrid({ label, count = 8 }: { label: string; count?: number }) {
  const tiles = Array.from({ length: count }, (_, i) => `speaker-${i}`);
  return (
    <figure>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile}
            aria-hidden
            className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-mist text-emerald-deep/30">
              <UserRound className="size-8" />
            </span>
            <span className="h-2.5 w-20 rounded-full bg-hairline" />
            <span className="h-2 w-14 rounded-full bg-hairline-soft" />
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-small text-subtle">{label}</figcaption>
    </figure>
  );
}
