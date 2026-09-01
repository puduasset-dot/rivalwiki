import type { Metadata } from "next";
import { gameModes, ZOMBIE_TOWER_NOTE, GAME_MODES_SOURCE, type GameMode } from "@/data/game-modes";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Game Modes",
  description: "Every RIVALS game mode explained — Duels, TDM, FFA, and rotating limited-time modes.",
};

const CATEGORIES: GameMode["category"][] = ["Duels", "Arcade", "Rotating"];

export default function GameModesPage() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/trailer-alley-standoff.jpg" alt="Standoff in a RIVALS alley map" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Game Modes</h1>
        <SourceNote label={GAME_MODES_SOURCE.label} lastChecked={GAME_MODES_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          RIVALS has 21 modes total across permanent Duels/Arcade queues and
          rotating limited-time modes — this covers the ones with staying power.
        </p>
      </div>

      {CATEGORIES.map((cat) => {
        const list = gameModes.filter((m) => m.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{cat}</h2>
            <div className="space-y-2">
              {list.map((m) => (
                <div key={m.name} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                  <p className="font-medium text-white">{m.name}</p>
                  <p className="text-sm text-neutral-400 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <section className="space-y-2">
        <h2 className="font-semibold text-white text-lg">Limited-time example: Zombie Tower</h2>
        <p className="text-sm text-neutral-400 border-l-2 border-neutral-700 pl-3">{ZOMBIE_TOWER_NOTE}</p>
      </section>
    </div>
  );
}
