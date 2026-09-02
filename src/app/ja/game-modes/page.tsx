import type { Metadata } from "next";
import Link from "next/link";
import { gameModes, type GameMode } from "@/data/game-modes";
import { gameModeNamesJa, gameModeDescJa, zombieTowerNoteJa } from "@/data/i18n/ja/game-modes";
import { labels } from "@/data/i18n/labels";

const t = labels.ja;

export const metadata: Metadata = {
  title: "RIVALS ゲームモード",
  description: "RIVALS の全ゲームモード解説 — デュエル、TDM、FFA、そしてローテーション限定モード。",
};

const CATEGORIES: { key: GameMode["category"]; label: string }[] = [
  { key: "Duels", label: "デュエル" },
  { key: "Arcade", label: "アーケード" },
  { key: "Rotating", label: "ローテーション" },
];

export default function GameModesPageJa() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{t.gameModesTitle}</h1>
      </div>

      {CATEGORIES.map((cat) => {
        const list = gameModes.filter((m) => m.category === cat.key);
        if (list.length === 0) return null;
        return (
          <section key={cat.key} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{cat.label}</h2>
            <div className="space-y-2">
              {list.map((m) => (
                <Link
                  key={m.slug}
                  href={`/ja/game-modes/${m.slug}`}
                  className="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-amber-400/60 transition-colors"
                >
                  <p className="font-medium text-white">{gameModeNamesJa[m.slug] ?? m.name}</p>
                  <p className="text-sm text-neutral-400 mt-1">{gameModeDescJa[m.slug]}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="space-y-2">
        <h2 className="font-semibold text-white text-lg">期間限定モードの例:ゾンビタワー</h2>
        <p className="text-sm text-neutral-400 border-l-2 border-neutral-700 pl-3">{zombieTowerNoteJa}</p>
      </section>
    </div>
  );
}
