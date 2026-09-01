import type { Metadata } from "next";
import { rankTiers, RANKED_REQUIREMENTS, RANKED_MECHANICS, RANKS_SOURCE } from "@/data/ranks";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Ranks",
  description: "RIVALS ranked mode explained: tiers, requirements, and how ELO works.",
};

export default function RanksPage() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/trailer-sniper-scope.jpg" alt="Lining up a precise shot in RIVALS" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Ranks</h1>
        <SourceNote label={RANKS_SOURCE.label} lastChecked={RANKS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          Exact ELO thresholds and rewards shift between seasons — this covers
          the structure, check the in-game ranked tab for current numbers.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">Rank Tiers</h2>
        <div className="flex flex-wrap gap-2">
          {rankTiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3"
            >
              <p className="font-medium text-white">
                {tier.name}
                {tier.hasSubTiers && <span className="text-neutral-500 text-sm"> (I–III)</span>}
              </p>
              {tier.notes && <p className="text-xs text-neutral-400 mt-1 max-w-xs">{tier.notes}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">Requirements to unlock Ranked</h2>
        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
          {RANKED_REQUIREMENTS.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">How it works</h2>
        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
          {RANKED_MECHANICS.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
