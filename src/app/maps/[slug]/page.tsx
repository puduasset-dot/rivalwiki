import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mapGuides, getMapGuide } from "@/data/map-guides";
import { SourceNote } from "@/components/SourceNote";

export function generateStaticParams() {
  return mapGuides.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/maps/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const map = getMapGuide(slug);
  if (!map) return {};
  return {
    title: `${map.name} — RIVALS Map Guide`,
    description: map.overview.slice(0, 155),
  };
}

export default async function MapPage(props: PageProps<"/maps/[slug]">) {
  const { slug } = await props.params;
  const map = getMapGuide(slug);
  if (!map) notFound();

  const baseSlug = map.category === "big" ? map.slug.replace(/^big-/, "") : undefined;
  const baseMap = baseSlug ? getMapGuide(baseSlug) : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/maps" className="text-sm text-neutral-400 hover:text-white">
          ← All maps
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">{map.name}</h1>
        <SourceNote label="RIVALS Fandom wiki" url={map.sourceUrl} lastChecked="2026-09-02" />
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed">{map.overview}</p>

      {baseMap && (
        <p className="text-sm text-neutral-400">
          Scaled-up version of{" "}
          <Link href={`/maps/${baseMap.slug}`} className="text-amber-400 hover:underline">
            {baseMap.name}
          </Link>
          .
        </p>
      )}

      <Link href="/weapon-tier-list" className="inline-block text-sm text-amber-400 hover:underline">
        Check the weapon tier list before you drop in →
      </Link>
    </div>
  );
}
