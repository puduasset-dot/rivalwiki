import type { Metadata } from "next";
import Link from "next/link";
import { mapGuides } from "@/data/map-guides";
import { mapNamesJa, mapOverviewsJa } from "@/data/i18n/ja/maps";
import { labels } from "@/data/i18n/labels";

const t = labels.ja;

export const metadata: Metadata = {
  title: "RIVALS マップ一覧",
  description: "RIVALS の全マップ紹介 — レギュラー、ビッグ、レガシーローテーション。",
};

export default function MapsPageJa() {
  const regular = mapGuides.filter((m) => m.category === "regular");
  const big = mapGuides.filter((m) => m.category === "big");

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{t.mapsTitle}</h1>
      </div>

      {[{ label: "レギュラー", list: regular }, { label: "ビッグ", list: big }].map(
        (section) =>
          section.list.length > 0 && (
            <section key={section.label} className="space-y-3">
              <h2 className="font-semibold text-white text-lg">{section.label}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {section.list.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/ja/maps/${m.slug}`}
                    className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 block hover:border-amber-400/60 transition-colors"
                  >
                    <p className="font-medium text-white">{mapNamesJa[m.slug] ?? m.name}</p>
                    <p className="text-sm text-neutral-400 mt-1">
                      {(mapOverviewsJa[m.slug] ?? "").slice(0, 60)}…
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )
      )}
    </div>
  );
}
