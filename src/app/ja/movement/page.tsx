import type { Metadata } from "next";
import { MOVEMENT_SOURCE } from "@/data/movement";
import { movementTechsJa, type MovementTechJa } from "@/data/i18n/ja/movement";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 移動テクガイド",
  description: "RIVALSの移動テク解説:スライドジャンプ、ダブルジャンプ、スライドキャンセルなど。",
};

const DIFFICULTY_COLOR: Record<MovementTechJa["difficulty"], string> = {
  初級: "bg-green-500/20 text-green-300 border-green-500/40",
  中級: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  上級: "bg-red-500/20 text-red-300 border-red-500/40",
};

export default function MovementPageJa() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-range.jpg" alt="RIVALS shooting range gameplay screenshot" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 移動テクガイド</h1>
        <SourceNote label={MOVEMENT_SOURCE.label} lastChecked={MOVEMENT_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          ゲーム内では移動テクを直接教えてくれない——連続技に挑む前に、まずスライドジャンプとダブルジャンプから覚えよう。
        </p>
      </div>

      <div className="space-y-3">
        {movementTechsJa.map((t) => (
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
