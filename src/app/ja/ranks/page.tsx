import type { Metadata } from "next";
import { rankTiers, RANKS_SOURCE } from "@/data/ranks";
import { RANKED_REQUIREMENTS_JA, RANKED_MECHANICS_JA, RANK_TIER_NAMES_JA, RANK_TIER_NOTES_JA } from "@/data/i18n/ja/ranks";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS ランク",
  description: "RIVALS のランクモード解説:ティア、参加条件、ELOの仕組み。",
};

export default function RanksPageJa() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS ランク</h1>
        <SourceNote label={RANKS_SOURCE.label} lastChecked={RANKS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          正確なELOしきい値や報酬はシーズンごとに変わる——このページは仕組みの説明で、最新の数値はゲーム内のランクタブを確認してほしい。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">ランクティア</h2>
        <div className="flex flex-wrap gap-2">
          {rankTiers.map((tier) => (
            <div key={tier.name} className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3">
              <p className="font-medium text-white">
                {RANK_TIER_NAMES_JA[tier.name] ?? tier.name}
                {tier.hasSubTiers && <span className="text-neutral-500 text-sm"> (I–III)</span>}
              </p>
              {RANK_TIER_NOTES_JA[tier.name] && (
                <p className="text-xs text-neutral-400 mt-1 max-w-xs">{RANK_TIER_NOTES_JA[tier.name]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">ランクマッチ解放条件</h2>
        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
          {RANKED_REQUIREMENTS_JA.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">仕組み</h2>
        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
          {RANKED_MECHANICS_JA.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
