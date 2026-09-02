"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { weapons, type Weapon } from "@/data/weapons";
import { weaponNamesZh } from "@/data/i18n/zh/weapons";
import { StatBar } from "@/components/StatBar";

const FIELDS: { key: keyof Weapon; label: string }[] = [
  { key: "category", label: "类别" },
  { key: "cost", label: "价格" },
  { key: "damage", label: "伤害" },
  { key: "fireRate", label: "射速" },
  { key: "ammo", label: "弹药" },
  { key: "reload", label: "装填时间" },
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
        <option value="">选择武器…</option>
        {weapons.map((w) => (
          <option key={w.slug} value={w.slug}>
            {weaponNamesZh[w.slug] ?? w.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export function WeaponComparisonClientZh() {
  const searchParams = useSearchParams();
  const [slugA, setSlugA] = useState(searchParams.get("a") ?? "");
  const [slugB, setSlugB] = useState(searchParams.get("b") ?? "");

  const weaponA = useMemo(() => weapons.find((w) => w.slug === slugA), [slugA]);
  const weaponB = useMemo(() => weapons.find((w) => w.slug === slugB), [slugB]);

  const damageMax = Math.max(weaponA?.damageValue ?? 0, weaponB?.damageValue ?? 0);
  const rpsA = weaponA?.fireRateValue ? 1 / weaponA.fireRateValue : undefined;
  const rpsB = weaponB?.fireRateValue ? 1 / weaponB.fireRateValue : undefined;
  const rpsMax = Math.max(rpsA ?? 0, rpsB ?? 0);

  const nameA = weaponA ? weaponNamesZh[weaponA.slug] ?? weaponA.name : "";
  const nameB = weaponB ? weaponNamesZh[weaponB.slug] ?? weaponB.name : "";

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <WeaponSelect label="武器 A" value={slugA} onChange={setSlugA} />
        <span className="text-neutral-500 pb-2 hidden sm:block">对比</span>
        <WeaponSelect label="武器 B" value={slugB} onChange={setSlugB} />
      </div>

      {weaponA && weaponB ? (
        <>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden">
                <Image src={`/weapons/${weaponA.slug}.webp`} alt="" width={48} height={48} className="object-contain p-1" />
              </div>
              <span className="text-sm text-white font-medium">{nameA}</span>
            </div>
            <span className="text-neutral-500 text-sm">对比</span>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden">
                <Image src={`/weapons/${weaponB.slug}.webp`} alt="" width={48} height={48} className="object-contain p-1" />
              </div>
              <span className="text-sm text-white font-medium">{nameB}</span>
            </div>
          </div>

          {(damageMax > 0 || rpsMax > 0) && (
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-4">
              {damageMax > 0 && (
                <div className="space-y-2">
                  <StatBar
                    label={`${nameA} — 伤害`}
                    value={weaponA.damageValue ?? 0}
                    max={damageMax}
                    displayValue={String(weaponA.damageValue ?? "—")}
                  />
                  <StatBar
                    label={`${nameB} — 伤害`}
                    value={weaponB.damageValue ?? 0}
                    max={damageMax}
                    displayValue={String(weaponB.damageValue ?? "—")}
                  />
                </div>
              )}
              {rpsMax > 0 && (
                <div className="space-y-2">
                  <StatBar
                    label={`${nameA} — 射速`}
                    value={rpsA ?? 0}
                    max={rpsMax}
                    displayValue={rpsA ? `${rpsA.toFixed(1)}/秒` : "—"}
                    colorClass="bg-blue-400"
                  />
                  <StatBar
                    label={`${nameB} — 射速`}
                    value={rpsB ?? 0}
                    max={rpsMax}
                    displayValue={rpsB ? `${rpsB.toFixed(1)}/秒` : "—"}
                    colorClass="bg-blue-400"
                  />
                </div>
              )}
            </div>
          )}

          <div className="overflow-hidden rounded-lg border border-neutral-800">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900 text-left">
                <tr>
                  <th className="px-4 py-2 font-medium text-neutral-400">属性</th>
                  <th className="px-4 py-2 font-medium text-white">{nameA}</th>
                  <th className="px-4 py-2 font-medium text-white">{nameB}</th>
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
        </>
      ) : (
        <p className="text-sm text-neutral-500">
          在上方选择两件武器,即可直接对比它们的数据。
        </p>
      )}
    </div>
  );
}
