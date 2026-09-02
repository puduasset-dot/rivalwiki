import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons, DATA_SOURCE, weaponsByCategory, type WeaponCategory } from "@/data/weapons";
import { weaponNamesJa } from "@/data/i18n/ja/weapons";
import { labels } from "@/data/i18n/labels";
import { SourceNote } from "@/components/SourceNote";

const t = labels.ja;

export const metadata: Metadata = {
  title: "RIVALS 武器データベース",
  description: "RIVALS の全武器のダメージ、連射速度、弾数、コストをまとめたデータベース。",
};

const CATEGORIES: { key: WeaponCategory; label: string }[] = [
  { key: "primary", label: t.categories.primary },
  { key: "secondary", label: t.categories.secondary },
  { key: "melee", label: t.categories.melee },
  { key: "utility", label: t.categories.utility },
];

export default function WeaponsPageJa() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{t.weaponsTitle}</h1>
        <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">{t.weaponsTracked(weapons.length)}</p>
      </div>

      {CATEGORIES.map((cat) => {
        const list = weaponsByCategory(cat.key);
        if (list.length === 0) return null;
        return (
          <section key={cat.key} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{cat.label}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {list.map((w) => (
                <Link
                  key={w.slug}
                  href={`/ja/weapons/${w.slug}`}
                  className="flex gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-amber-400/60 transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center overflow-hidden">
                    <Image src={`/weapons/${w.slug}.webp`} alt="" width={36} height={36} className="object-contain p-1" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-medium text-white">{weaponNamesJa[w.slug] ?? w.name}</span>
                      <span className="text-xs text-neutral-500 shrink-0">{w.cost}</span>
                    </div>
                    <p className="text-sm text-neutral-400 mt-1">{t.damage}: {w.damage}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
