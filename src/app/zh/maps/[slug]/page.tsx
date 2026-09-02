import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mapGuides, getMapGuide } from "@/data/map-guides";
import { mapNamesZh, mapOverviewsZh } from "@/data/i18n/zh/maps";
import { labels } from "@/data/i18n/labels";

const t = labels.zh;

export function generateStaticParams() {
  return mapGuides.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/zh/maps/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const map = getMapGuide(slug);
  if (!map) return {};
  const name = mapNamesZh[slug] ?? map.name;
  const overview = mapOverviewsZh[slug] ?? "";
  return {
    title: `${name} — RIVALS 地图攻略`,
    description: overview.slice(0, 100),
  };
}

export default async function MapPageZh(props: PageProps<"/zh/maps/[slug]">) {
  const { slug } = await props.params;
  const map = getMapGuide(slug);
  if (!map) notFound();
  const name = mapNamesZh[slug] ?? map.name;
  const overview = mapOverviewsZh[slug];

  const baseSlug = map.category === "big" ? map.slug.replace(/^big-/, "") : undefined;
  const baseMap = baseSlug ? getMapGuide(baseSlug) : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/zh/maps" className="text-sm text-neutral-400 hover:text-white">
          {t.allMaps}
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed">{overview}</p>

      {baseMap && (
        <p className="text-sm text-neutral-400">
          <Link href={`/zh/maps/${baseMap.slug}`} className="text-amber-400 hover:underline">
            {mapNamesZh[baseMap.slug] ?? baseMap.name}
          </Link>
          {t.scaledUpFrom}
        </p>
      )}

      <Link href="/zh/weapons" className="inline-block text-sm text-amber-400 hover:underline">
        {t.checkTierList}
      </Link>
    </div>
  );
}
