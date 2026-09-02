import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gameModes, getGameMode } from "@/data/game-modes";
import { gameModeNamesJa, gameModeDescJa } from "@/data/i18n/ja/game-modes";
import { labels } from "@/data/i18n/labels";

const t = labels.ja;

const CATEGORY_LABEL_JA: Record<string, string> = { Duels: "デュエル", Arcade: "アーケード", Rotating: "ローテーション" };

export function generateStaticParams() {
  return gameModes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/ja/game-modes/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const mode = getGameMode(slug);
  if (!mode) return {};
  const name = gameModeNamesJa[slug] ?? mode.name;
  return {
    title: `${name} — RIVALS ゲームモード`,
    description: gameModeDescJa[slug] ?? mode.desc,
  };
}

export default async function GameModePageJa(props: PageProps<"/ja/game-modes/[slug]">) {
  const { slug } = await props.params;
  const mode = getGameMode(slug);
  if (!mode) notFound();
  const name = gameModeNamesJa[slug] ?? mode.name;
  const desc = gameModeDescJa[slug] ?? mode.desc;

  const others = gameModes.filter((m) => m.category === mode.category && m.slug !== mode.slug);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/ja/game-modes" className="text-sm text-neutral-400 hover:text-white">
          {t.allGameModes}
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <p className="text-xs text-neutral-500 uppercase tracking-wide">{CATEGORY_LABEL_JA[mode.category]}</p>
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>

      {others.length > 0 && (
        <div className="space-y-2">
          <h2 className="font-semibold text-white text-sm">{t.otherModesIn(CATEGORY_LABEL_JA[mode.category])}</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((m) => (
              <Link
                key={m.slug}
                href={`/ja/game-modes/${m.slug}`}
                className="text-sm rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-neutral-300 hover:border-amber-400/60 hover:text-white transition-colors"
              >
                {gameModeNamesJa[m.slug] ?? m.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link href="/ja/weapons" className="inline-block text-sm text-amber-400 hover:underline">
        {t.seeLoadouts}
      </Link>
    </div>
  );
}
