import type { Metadata } from "next";
import Link from "next/link";
import { weapons, DATA_SOURCE, weaponsByCategory, type WeaponCategory } from "@/data/weapons";
import { SourceNote } from "@/components/SourceNote";

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
                  className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-amber-400/60 transition-colors"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium text-white">{w.name}</span>
                    <span className="text-xs text-neutral-500">{w.cost}</span>
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">Damage: {w.damage}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
