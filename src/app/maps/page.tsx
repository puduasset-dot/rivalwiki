import type { Metadata } from "next";
import { maps, MAPS_SOURCE, type MapCategory } from "@/data/maps";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Maps",
  description: "All RIVALS maps — regular, big, and legacy rotations.",
};

const CATEGORIES: { key: MapCategory; label: string }[] = [
  { key: "regular", label: "Regular" },
  { key: "big", label: "Big" },
  { key: "legacy", label: "Legacy (Private Servers Only)" },
];

export default function MapsPage() {
  return (
    <div className="space-y-8">
      <PageBanner
        src="/media/gameplay-snow.jpg"
        alt="RIVALS snowy map gameplay screenshot"
        caption="Real match, one of the winter-themed maps"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Maps</h1>
        <SourceNote label={MAPS_SOURCE.label} lastChecked={MAPS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          {maps.length} maps tracked. Exact totals vary between sources depending on
          when they were last updated — new maps ship with seasonal content.
        </p>
      </div>

      {CATEGORIES.map((cat) => {
        const list = maps.filter((m) => m.category === cat.key);
        if (list.length === 0) return null;
        return (
          <section key={cat.key} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{cat.label}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {list.map((m) => (
                <div key={m.name} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                  <p className="font-medium text-white">{m.name}</p>
                  {m.notes && <p className="text-sm text-neutral-400 mt-1">{m.notes}</p>}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
