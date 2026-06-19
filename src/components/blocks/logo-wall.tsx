import { Building2 } from "lucide-react";

/** Mur de logos « à venir » : grille de silhouettes montrant le futur remplissage. */
export function LogoWall({ label, count = 8 }: { label: string; count?: number }) {
  const tiles = Array.from({ length: count }, (_, i) => `logo-${i}`);
  return (
    <figure>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile}
            aria-hidden
            className="flex aspect-[3/2] items-center justify-center rounded-sm border border-hairline border-dashed bg-surface"
          >
            <Building2 className="size-8 text-taupe/40" />
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-small text-subtle">{label}</figcaption>
    </figure>
  );
}
