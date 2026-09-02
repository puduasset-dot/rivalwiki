import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LOADOUTS_SOURCE } from "@/data/loadouts";
import { curatedLoadoutsJa } from "@/data/i18n/ja/loadouts";
import { getWeapon } from "@/data/weapons";
import { weaponNamesJa } from "@/data/i18n/ja/weapons";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS おすすめロードアウト",
  description: "初心者、近距離アグレッシブ、デュエル、チーム戦向けの厳選RIVALSロードアウト。",
};

const SLOTS = [
  { key: "primary", label: "プライマリー" },
  { key: "secondary", label: "セカンダリー" },
  { key: "melee", label: "近接" },
  { key: "utility", label: "ユーティリティ" },
] as const;

export default function BestLoadoutsPageJa() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/gameplay-dusk.jpg" alt="RIVALS gameplay screenshot at dusk" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS おすすめロードアウト</h1>
        <SourceNote label={LOADOUTS_SOURCE.label} lastChecked={LOADOUTS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          プレイスタイル別の4つの出発点。自分だけの組み合わせを作りたい場合は
          <Link href="/ja/tools/loadout-builder" className="text-amber-400 hover:underline">ロードアウトビルダー</Link>
          を試してほしい。
        </p>
      </div>

      <div className="space-y-4">
        {curatedLoadoutsJa.map((l) => (
          <div key={l.name} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-3">
            <div>
              <h2 className="font-semibold text-white">{l.name}</h2>
              <p className="text-xs text-neutral-500">おすすめ:{l.bestFor}</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-3">
              {SLOTS.map((slot) => {
                const weapon = getWeapon(l[slot.key]);
                if (!weapon) return null;
                return (
                  <Link
                    key={slot.key}
                    href={`/ja/weapons/${weapon.slug}`}
                    className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 p-2 hover:border-amber-400/60 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded bg-neutral-800 flex items-center justify-center overflow-hidden">
                      <Image src={`/weapons/${weapon.slug}.webp`} alt="" width={32} height={32} className="object-contain p-0.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-neutral-500">{slot.label}</p>
                      <p className="text-xs text-white truncate">{weaponNamesJa[weapon.slug] ?? weapon.name}</p>
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
