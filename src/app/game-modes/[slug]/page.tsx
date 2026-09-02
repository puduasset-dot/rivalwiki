import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gameModes, getGameMode, GAME_MODES_SOURCE } from "@/data/game-modes";
import { SourceNote } from "@/components/SourceNote";

export function generateStaticParams() {
  return gameModes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/game-modes/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const mode = getGameMode(slug);
  if (!mode) return {};
  return {
    title: `${mode.name} — RIVALS Game Mode`,
    description: mode.desc,
  };
}

export default async function GameModePage(props: PageProps<"/game-modes/[slug]">) {
  const { slug } = await props.params;
  const mode = getGameMode(slug);
  if (!mode) notFound();

  const others = gameModes.filter((m) => m.category === mode.category && m.slug !== mode.slug);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/game-modes" className="text-sm text-neutral-400 hover:text-white">
          ← All game modes
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">{mode.name}</h1>
        <SourceNote label={GAME_MODES_SOURCE.label} lastChecked={GAME_MODES_SOURCE.lastChecked} />
        <p className="text-xs text-neutral-500 uppercase tracking-wide">{mode.category}</p>
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed">{mode.desc}</p>

      {others.length > 0 && (
        <div className="space-y-2">
          <h2 className="font-semibold text-white text-sm">Other {mode.category} modes</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((m) => (
              <Link
                key={m.slug}
                href={`/game-modes/${m.slug}`}
                className="text-sm rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-neutral-300 hover:border-amber-400/60 hover:text-white transition-colors"
              >
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link href="/best-loadouts" className="inline-block text-sm text-amber-400 hover:underline">
        See loadouts built for modes like this →
      </Link>
    </div>
  );
}
