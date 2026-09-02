import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gameModes, getGameMode } from "@/data/game-modes";
import { gameModeNamesZh, gameModeDescZh } from "@/data/i18n/zh/game-modes";
import { labels } from "@/data/i18n/labels";

const t = labels.zh;

const CATEGORY_LABEL_ZH: Record<string, string> = { Duels: "对战类", Arcade: "街机类", Rotating: "轮换类" };

export function generateStaticParams() {
  return gameModes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/zh/game-modes/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const mode = getGameMode(slug);
  if (!mode) return {};
  const name = gameModeNamesZh[slug] ?? mode.name;
  return {
    title: `${name} — RIVALS 游戏模式`,
    description: gameModeDescZh[slug] ?? mode.desc,
  };
}

export default async function GameModePageZh(props: PageProps<"/zh/game-modes/[slug]">) {
  const { slug } = await props.params;
  const mode = getGameMode(slug);
  if (!mode) notFound();
  const name = gameModeNamesZh[slug] ?? mode.name;
  const desc = gameModeDescZh[slug] ?? mode.desc;

  const others = gameModes.filter((m) => m.category === mode.category && m.slug !== mode.slug);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/zh/game-modes" className="text-sm text-neutral-400 hover:text-white">
          {t.allGameModes}
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <p className="text-xs text-neutral-500 uppercase tracking-wide">{CATEGORY_LABEL_ZH[mode.category]}</p>
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>

      {others.length > 0 && (
        <div className="space-y-2">
          <h2 className="font-semibold text-white text-sm">{t.otherModesIn(CATEGORY_LABEL_ZH[mode.category])}</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((m) => (
              <Link
                key={m.slug}
                href={`/zh/game-modes/${m.slug}`}
                className="text-sm rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-neutral-300 hover:border-amber-400/60 hover:text-white transition-colors"
              >
                {gameModeNamesZh[m.slug] ?? m.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link href="/zh/weapons" className="inline-block text-sm text-amber-400 hover:underline">
        {t.seeLoadouts}
      </Link>
    </div>
  );
}
