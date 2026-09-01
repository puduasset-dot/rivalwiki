import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons, DATA_SOURCE, weaponsByCategory, type WeaponCategory } from "@/data/weapons";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Weapons Database",
  description: "All RIVALS weapons with damage, fire rate, ammo, and cost.",
};

const CATEGORIES: { key: WeaponCategory; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "melee", label: "Melee" },
  { key: "utility", label: "Utility" },
];

export default function WeaponsPage() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/trailer-assault-rifle.jpg" alt="RIVALS weapon in hand" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Weapons Database</h1>
        <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">{weapons.length} weapons tracked.</p>
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
                  href={`/weapons/${w.slug}`}
                  className="flex gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-amber-400/60 transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center overflow-hidden">
                    <Image src={`/weapons/${w.slug}.webp`} alt="" width={36} height={36} className="object-contain p-1" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-medium text-white">{w.name}</span>
                      <span className="text-xs text-neutral-500 shrink-0">{w.cost}</span>
                    </div>
                    <p className="text-sm text-neutral-400 mt-1">Damage: {w.damage}</p>
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
