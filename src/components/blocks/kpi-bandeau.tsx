import { Container } from "@/components/layout/container";

export interface KpiView {
  value: string;
  label: string;
}

/** Bandeau de chiffres-clés (KPI) sur fond émeraude profond. */
export function KpiBandeau({ items }: { items: KpiView[] }) {
  return (
    <section className="bg-emerald-deep text-ivory">
      <Container className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center">
            <span className="tnum font-display font-bold text-data-xl text-champagne">
              {item.value}
            </span>
            <span className="mt-2 font-semibold text-[11px] text-ivory/80 uppercase tracking-[0.18em]">
              {item.label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
