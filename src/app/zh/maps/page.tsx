import type { Metadata } from "next";
import Link from "next/link";
import { mapGuides } from "@/data/map-guides";
import { mapNamesZh, mapOverviewsZh } from "@/data/i18n/zh/maps";
import { labels } from "@/data/i18n/labels";

const t = labels.zh;

export const metadata: Metadata = {
  title: "RIVALS 地图一览",
  description: "RIVALS 全部地图介绍——常规、加大版和旧版轮换地图。",
};

export default function MapsPageZh() {
  const regular = mapGuides.filter((m) => m.category === "regular");
  const big = mapGuides.filter((m) => m.category === "big");

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{t.mapsTitle}</h1>
      </div>

      {[{ label: "常规地图", list: regular }, { label: "加大版地图", list: big }].map(
        (section) =>
          section.list.length > 0 && (
            <section key={section.label} className="space-y-3">
              <h2 className="font-semibold text-white text-lg">{section.label}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {section.list.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/zh/maps/${m.slug}`}
                    className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 block hover:border-amber-400/60 transition-colors"
                  >
                    <p className="font-medium text-white">{mapNamesZh[m.slug] ?? m.name}</p>
                    <p className="text-sm text-neutral-400 mt-1">
                      {(mapOverviewsZh[m.slug] ?? "").slice(0, 60)}…
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
