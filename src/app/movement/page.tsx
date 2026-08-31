import type { Metadata } from "next";
import { movementTechs, MOVEMENT_SOURCE, type MovementTech } from "@/data/movement";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS Movement Guide",
  description: "RIVALS movement techs explained: slide jump, double jump, slide cancel, and more.",
};

const DIFFICULTY_COLOR: Record<MovementTech["difficulty"], string> = {
  Beginner: "bg-green-500/20 text-green-300 border-green-500/40",
  Intermediate: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  Advanced: "bg-red-500/20 text-red-300 border-red-500/40",
};

export default function MovementPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Movement Guide</h1>
        <SourceNote label={MOVEMENT_SOURCE.label} lastChecked={MOVEMENT_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          The game doesn&apos;t teach movement tech directly — start with slide
          jump and double jump before attempting chained techs.
        </p>
      </div>

      <div className="space-y-3">
        {movementTechs.map((t) => (
          <div key={t.name} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <div className="flex items-center gap-2">
              <p className="font-medium text-white">{t.name}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${DIFFICULTY_COLOR[t.difficulty]}`}>
                {t.difficulty}
              </span>
            </div>
            <p className="text-sm text-neutral-400 mt-1">{t.howTo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
