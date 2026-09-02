"use client";

import { useState } from "react";
import Image from "next/image";
import { weaponsByCategory, getWeapon, type WeaponCategory } from "@/data/weapons";
import { weaponNamesZh } from "@/data/i18n/zh/weapons";

const SLOTS: { key: WeaponCategory; label: string }[] = [
  { key: "primary", label: "主武器" },
  { key: "secondary", label: "副武器" },
  { key: "melee", label: "近战" },
  { key: "utility", label: "功能道具" },
];

export function LoadoutBuilderClientZh() {
  const [selection, setSelection] = useState<Record<WeaponCategory, string>>({
    primary: "",
    secondary: "",
    melee: "",
    utility: "",
  });

  const complete = SLOTS.every((s) => selection[s.key]);

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        {SLOTS.map((slot) => (
          <label key={slot.key} className="space-y-1">
            <span className="text-xs text-neutral-500">{slot.label}</span>
            <select
              value={selection[slot.key]}
              onChange={(e) =>
                setSelection((prev) => ({ ...prev, [slot.key]: e.target.value }))
              }
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-white"
            >
              <option value="">选择{slot.label}…</option>
              {weaponsByCategory(slot.key).map((w) => (
                <option key={w.slug} value={w.slug}>
                  {weaponNamesZh[w.slug] ?? w.name}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      {complete ? (
        <div className="rounded-lg border border-amber-400/40 bg-neutral-900 p-5 space-y-3">
          <p className="text-sm text-neutral-500">你的 RIVALS 配装</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {SLOTS.map((slot) => {
              const weapon = getWeapon(selection[slot.key]);
              if (!weapon) return null;
              return (
                <div key={slot.key} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                    <Image src={`/weapons/${weapon.slug}.webp`} alt="" width={36} height={36} className="object-contain p-1" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs">{slot.label}</p>
                    <p className="text-white font-medium">{weaponNamesZh[weapon.slug] ?? weapon.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          为每个槽位选择一件武器,即可看到配装总览。
        </p>
      )}
    </div>
  );
}
