import type { Metadata } from "next";
import Link from "next/link";
import { tierList, TIER_LIST_SOURCE, type Tier } from "@/data/tier-list";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS Weapon Tier List",
  description: "Aggregated RIVALS weapon tier list, with sourced reasoning per weapon.",
};

const TIER_ORDER: Tier[] = ["S", "A", "B", "C"];
const TIER_COLOR: Record<Tier, string> = {
  S: "bg-red-500/20 text-red-300 border-red-500/40",
  A: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  B: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  C: "bg-neutral-500/20 text-neutral-300 border-neutral-500/40",
};

export default function TierListPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Weapon Tier List</h1>
        <SourceNote label={TIER_LIST_SOURCE.label} lastChecked={TIER_LIST_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          This is an aggregate of what multiple outlets currently say, not an
          in-house playtest ranking — other RIVALS sites disagree with each
          other on placement, so every entry below has its reasoning attached.
          Weapons with no clear meta commentary are left off rather than
          guessed at; see the full <Link href="/weapons" className="text-amber-400 hover:underline">weapon database</Link>.
        </p>
      </div>

      <div className="space-y-4">
        {TIER_ORDER.map((tier) => {
          const entries = tierList.filter((t) => t.tier === tier);
          if (entries.length === 0) return null;
          return (
            <div key={tier} className="flex gap-4">
              <div
                className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-lg border text-2xl font-bold ${TIER_COLOR[tier]}`}
              >
                {tier}
              </div>
              <div className="flex-1 space-y-2">
                {entries.map((e) => (
                  <div key={e.weaponSlug} className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
                    <p className="font-medium text-white">{e.weaponName}</p>
                    <p className="text-sm text-neutral-400 mt-1">{e.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
