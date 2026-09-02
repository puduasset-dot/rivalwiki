import type { Metadata } from "next";
import Link from "next/link";
import { maps, MAPS_SOURCE, type MapCategory } from "@/data/maps";
import { getMapGuide } from "@/data/map-guides";
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
              {list.map((m) => {
                const guide = getMapGuide(
                  m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
                );
                const cardClass =
                  "rounded-lg border border-neutral-800 bg-neutral-900 p-4 block hover:border-amber-400/60 transition-colors";
                const body = (
                  <>
                    <p className="font-medium text-white">{m.name}</p>
                    <p className="text-sm text-neutral-400 mt-1">
                      {guide ? guide.overview.slice(0, 110) + "…" : m.notes}
                    </p>
                  </>
                );
                return guide ? (
                  <Link key={m.name} href={`/maps/${guide.slug}`} className={cardClass}>
                    {body}
                  </Link>
                ) : (
                  <div key={m.name} className={cardClass}>
                    {body}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
