import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tierList, TIER_LIST_SOURCE, type Tier } from "@/data/tier-list";
import { tierReasonsZh } from "@/data/i18n/zh/tier-list";
import { weaponNamesZh } from "@/data/i18n/zh/weapons";
import { SourceNote } from "@/components/SourceNote";

const TIER_ORDER: Tier[] = ["S", "A", "B", "C"];
const TIER_COLOR: Record<Tier, string> = {
  S: "bg-red-500/20 text-red-300 border-red-500/40",
  A: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  B: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  C: "bg-neutral-500/20 text-neutral-300 border-neutral-500/40",
};

export const metadata: Metadata = {
  title: "RIVALS 武器梯度榜",
  description: "有据可查的 RIVALS 武器梯度榜——每件武器都附有评级理由。",
};

export default function TierListPageZh() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 武器梯度榜</h1>
        <SourceNote label={TIER_LIST_SOURCE.label} lastChecked={TIER_LIST_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          这是多方观点的聚合结果,并非本站自行实测排出的名次——不同的 RIVALS 攻略站在梯度划分上也常有分歧,所以每一条都附上了理由,而不是简单罗列名次。找不到明确评价依据的武器会直接不列入,而不是靠猜测填补。完整武器名单见
          <Link href="/zh/weapons" className="text-amber-400 hover:underline">武器数据库</Link>
          。
        </p>
      </div>

      <div className="space-y-4">
        {TIER_ORDER.map((tier) => {
          const entries = tierList.filter((t) => t.tier === tier);
          if (entries.length === 0) return null;
          return (
            <div key={tier} className="flex gap-4">
              <div className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-lg border text-2xl font-bold ${TIER_COLOR[tier]}`}>
                {tier}
              </div>
              <div className="flex-1 space-y-2">
                {entries.map((e) => (
                  <div key={e.weaponSlug} className="flex gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center overflow-hidden">
                      <Image src={`/weapons/${e.weaponSlug}.webp`} alt="" width={36} height={36} className="object-contain p-1" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{weaponNamesZh[e.weaponSlug] ?? e.weaponName}</p>
                      <p className="text-sm text-neutral-400 mt-1">{tierReasonsZh[e.weaponSlug] ?? e.reason}</p>
                    </div>
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
