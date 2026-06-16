import { Card } from "@/components/ui/card";

export interface ColumnFeature {
  title: string;
  text: string;
}

/** Deux colonnes mises en regard (ex. « avantage canadien » vs « position africaine »). */
export function TwoColumnFeature({ left, right }: { left: ColumnFeature; right: ColumnFeature }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {[left, right].map((col, i) => (
        <Card key={col.title} className="flex flex-col gap-3 border-l-2 border-l-gold p-8">
          <span className="tnum font-display font-bold text-data text-bronze">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display font-semibold text-h3 text-ink">{col.title}</h3>
          <p className="text-body text-muted">{col.text}</p>
        </Card>
      ))}
    </div>
  );
}
