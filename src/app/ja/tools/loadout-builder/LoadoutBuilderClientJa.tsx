"use client";

import { useState } from "react";
import Image from "next/image";
import { weaponsByCategory, getWeapon, type WeaponCategory } from "@/data/weapons";
import { weaponNamesJa } from "@/data/i18n/ja/weapons";

const SLOTS: { key: WeaponCategory; label: string }[] = [
  { key: "primary", label: "プライマリー" },
  { key: "secondary", label: "セカンダリー" },
  { key: "melee", label: "近接" },
  { key: "utility", label: "ユーティリティ" },
];

export function LoadoutBuilderClientJa() {
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
              <option value="">{slot.label}を選択…</option>
              {weaponsByCategory(slot.key).map((w) => (
                <option key={w.slug} value={w.slug}>
                  {weaponNamesJa[w.slug] ?? w.name}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      {complete ? (
        <div className="rounded-lg border border-amber-400/40 bg-neutral-900 p-5 space-y-3">
          <p className="text-sm text-neutral-500">あなたのRIVALSロードアウト</p>
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
                    <p className="text-white font-medium">{weaponNamesJa[weapon.slug] ?? weapon.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          全スロットに武器を選ぶと、ロードアウトの概要が表示される。
        </p>
      )}
    </div>
  );
}
