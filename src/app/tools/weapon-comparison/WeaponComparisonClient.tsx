"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { weapons, type Weapon } from "@/data/weapons";

const FIELDS: { key: keyof Weapon; label: string }[] = [
  { key: "category", label: "Category" },
  { key: "cost", label: "Cost" },
  { key: "damage", label: "Damage" },
  { key: "fireRate", label: "Fire Rate" },
  { key: "ammo", label: "Ammo" },
  { key: "reload", label: "Reload" },
];

function WeaponSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (slug: string) => void;
}) {
  return (
    <label className="flex-1 space-y-1">
      <span className="text-xs text-neutral-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-white"
      >
        <option value="">Select a weapon…</option>
        {weapons.map((w) => (
          <option key={w.slug} value={w.slug}>
            {w.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export function WeaponComparisonClient() {
  const searchParams = useSearchParams();
  const [slugA, setSlugA] = useState(searchParams.get("a") ?? "");
  const [slugB, setSlugB] = useState(searchParams.get("b") ?? "");

  const weaponA = useMemo(() => weapons.find((w) => w.slug === slugA), [slugA]);
  const weaponB = useMemo(() => weapons.find((w) => w.slug === slugB), [slugB]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <WeaponSelect label="Weapon A" value={slugA} onChange={setSlugA} />
        <span className="text-neutral-500 pb-2 hidden sm:block">vs</span>
        <WeaponSelect label="Weapon B" value={slugB} onChange={setSlugB} />
      </div>

      {weaponA && weaponB ? (
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-neutral-400">Stat</th>
                <th className="px-4 py-2 font-medium text-white">{weaponA.name}</th>
                <th className="px-4 py-2 font-medium text-white">{weaponB.name}</th>
              </tr>
            </thead>
            <tbody>
              {FIELDS.map(({ key, label }) => (
                <tr key={key} className="border-t border-neutral-800">
                  <td className="px-4 py-2 text-neutral-400">{label}</td>
                  <td className="px-4 py-2 text-neutral-200">{weaponA[key] ?? "—"}</td>
                  <td className="px-4 py-2 text-neutral-200">{weaponB[key] ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          Pick two weapons above to see their stats side by side.
        </p>
      )}
    </div>
  );
}
