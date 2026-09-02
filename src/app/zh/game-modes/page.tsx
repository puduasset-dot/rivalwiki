import type { Metadata } from "next";
import Link from "next/link";
import { gameModes, type GameMode } from "@/data/game-modes";
import { gameModeNamesZh, gameModeDescZh, zombieTowerNoteZh } from "@/data/i18n/zh/game-modes";
import { labels } from "@/data/i18n/labels";

const t = labels.zh;

export const metadata: Metadata = {
  title: "RIVALS 游戏模式",
  description: "RIVALS 全部游戏模式说明——对战、团队死斗、大乱斗,以及轮换限时模式。",
};

const CATEGORIES: { key: GameMode["category"]; label: string }[] = [
  { key: "Duels", label: "对战类" },
  { key: "Arcade", label: "街机类" },
  { key: "Rotating", label: "轮换类" },
];

export default function GameModesPageZh() {
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
                  href={`/zh/game-modes/${m.slug}`}
                  className="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-amber-400/60 transition-colors"
                >
                  <p className="font-medium text-white">{gameModeNamesZh[m.slug] ?? m.name}</p>
                  <p className="text-sm text-neutral-400 mt-1">{gameModeDescZh[m.slug]}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="space-y-2">
        <h2 className="font-semibold text-white text-lg">限时模式示例:僵尸之塔</h2>
        <p className="text-sm text-neutral-400 border-l-2 border-neutral-700 pl-3">{zombieTowerNoteZh}</p>
      </section>
    </div>
  );
}
