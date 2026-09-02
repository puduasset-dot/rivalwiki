import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mapGuides, getMapGuide } from "@/data/map-guides";
import { mapNamesJa, mapOverviewsJa } from "@/data/i18n/ja/maps";
import { labels } from "@/data/i18n/labels";

const t = labels.ja;

export function generateStaticParams() {
  return mapGuides.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/ja/maps/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const map = getMapGuide(slug);
  if (!map) return {};
  const name = mapNamesJa[slug] ?? map.name;
  const overview = mapOverviewsJa[slug] ?? "";
  return {
    title: `${name} — RIVALS マップガイド`,
    description: overview.slice(0, 100),
  };
}

export default async function MapPageJa(props: PageProps<"/ja/maps/[slug]">) {
  const { slug } = await props.params;
  const map = getMapGuide(slug);
  if (!map) notFound();
  const name = mapNamesJa[slug] ?? map.name;
  const overview = mapOverviewsJa[slug];

  const baseSlug = map.category === "big" ? map.slug.replace(/^big-/, "") : undefined;
  const baseMap = baseSlug ? getMapGuide(baseSlug) : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/ja/maps" className="text-sm text-neutral-400 hover:text-white">
          {t.allMaps}
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed">{overview}</p>

      {baseMap && (
        <p className="text-sm text-neutral-400">
          <Link href={`/ja/maps/${baseMap.slug}`} className="text-amber-400 hover:underline">
            {mapNamesJa[baseMap.slug] ?? baseMap.name}
          </Link>
          {t.scaledUpFrom}
        </p>
      )}

      <Link href="/ja/weapons" className="inline-block text-sm text-amber-400 hover:underline">
        {t.checkTierList}
      </Link>
    </div>
  );
}
