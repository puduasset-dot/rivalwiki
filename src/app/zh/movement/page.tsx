import type { Metadata } from "next";
import { MOVEMENT_SOURCE } from "@/data/movement";
import { movementTechsZh, type MovementTechZh } from "@/data/i18n/zh/movement";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 移动技巧攻略",
  description: "RIVALS 移动技巧详解:滑铲跳、双跳、滑铲取消等。",
};

const DIFFICULTY_COLOR: Record<MovementTechZh["difficulty"], string> = {
  新手: "bg-green-500/20 text-green-300 border-green-500/40",
  进阶: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  高阶: "bg-red-500/20 text-red-300 border-red-500/40",
};

export default function MovementPageZh() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-range.jpg" alt="RIVALS shooting range gameplay screenshot" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 移动技巧攻略</h1>
        <SourceNote label={MOVEMENT_SOURCE.label} lastChecked={MOVEMENT_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          游戏本身不会直接教你这些移动技巧——在尝试连招之前,先练熟滑铲跳和双跳。
        </p>
      </div>

      <div className="space-y-3">
        {movementTechsZh.map((t) => (
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
