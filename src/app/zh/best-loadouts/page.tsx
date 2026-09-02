import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LOADOUTS_SOURCE } from "@/data/loadouts";
import { curatedLoadoutsZh } from "@/data/i18n/zh/loadouts";
import { getWeapon } from "@/data/weapons";
import { weaponNamesZh } from "@/data/i18n/zh/weapons";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 推荐配装",
  description: "新手、近战突进、对战、团队作战——精选的 RIVALS 配装方案。",
};

const SLOTS = [
  { key: "primary", label: "主武器" },
  { key: "secondary", label: "副武器" },
  { key: "melee", label: "近战" },
  { key: "utility", label: "功能道具" },
] as const;

export default function BestLoadoutsPageZh() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/gameplay-dusk.jpg" alt="RIVALS gameplay screenshot at dusk" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 推荐配装</h1>
        <SourceNote label={LOADOUTS_SOURCE.label} lastChecked={LOADOUTS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          按打法分类的四套起始配装。想自己搭配的话,可以试试
          <Link href="/zh/tools/loadout-builder" className="text-amber-400 hover:underline">配装生成器</Link>
          。
        </p>
      </div>

      <div className="space-y-4">
        {curatedLoadoutsZh.map((l) => (
          <div key={l.name} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-3">
            <div>
              <h2 className="font-semibold text-white">{l.name}</h2>
              <p className="text-xs text-neutral-500">适合:{l.bestFor}</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-3">
              {SLOTS.map((slot) => {
                const weapon = getWeapon(l[slot.key]);
                if (!weapon) return null;
                return (
                  <Link
                    key={slot.key}
                    href={`/zh/weapons/${weapon.slug}`}
                    className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 p-2 hover:border-amber-400/60 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded bg-neutral-800 flex items-center justify-center overflow-hidden">
                      <Image src={`/weapons/${weapon.slug}.webp`} alt="" width={32} height={32} className="object-contain p-0.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-neutral-500">{slot.label}</p>
                      <p className="text-xs text-white truncate">{weaponNamesZh[weapon.slug] ?? weapon.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <p className="text-sm text-neutral-400">{l.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
