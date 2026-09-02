import type { Metadata } from "next";
import { rankTiers, RANKS_SOURCE } from "@/data/ranks";
import { RANKED_REQUIREMENTS_ZH, RANKED_MECHANICS_ZH, RANK_TIER_NAMES_ZH, RANK_TIER_NOTES_ZH } from "@/data/i18n/zh/ranks";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS 段位系统",
  description: "RIVALS 排位模式详解:段位梯队、解锁条件、ELO 机制。",
};

export default function RanksPageZh() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 段位系统</h1>
        <SourceNote label={RANKS_SOURCE.label} lastChecked={RANKS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          具体的 ELO 门槛和奖励每个赛季都会变化——本页介绍的是整体结构,最新数值请以游戏内排位页面为准。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">段位梯队</h2>
        <div className="flex flex-wrap gap-2">
          {rankTiers.map((tier) => (
            <div key={tier.name} className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3">
              <p className="font-medium text-white">
                {RANK_TIER_NAMES_ZH[tier.name] ?? tier.name}
                {tier.hasSubTiers && <span className="text-neutral-500 text-sm"> (I–III)</span>}
              </p>
              {RANK_TIER_NOTES_ZH[tier.name] && (
                <p className="text-xs text-neutral-400 mt-1 max-w-xs">{RANK_TIER_NOTES_ZH[tier.name]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">解锁排位赛的条件</h2>
        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
          {RANKED_REQUIREMENTS_ZH.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">运作机制</h2>
        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
          {RANKED_MECHANICS_ZH.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
