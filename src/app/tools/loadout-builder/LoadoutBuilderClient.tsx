"use client";

import { useState } from "react";
import { weaponsByCategory, type WeaponCategory } from "@/data/weapons";

const SLOTS: { key: WeaponCategory; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "melee", label: "Melee" },
  { key: "utility", label: "Utility" },
];

export function LoadoutBuilderClient() {
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
              <option value="">Select {slot.label.toLowerCase()}…</option>
              {weaponsByCategory(slot.key).map((w) => (
                <option key={w.slug} value={w.name}>
                  {w.name}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      {complete ? (
        <div className="rounded-lg border border-amber-400/40 bg-neutral-900 p-5 space-y-2">
          <p className="text-sm text-neutral-500">Your RIVALS Loadout</p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {SLOTS.map((slot) => (
              <p key={slot.key}>
                <span className="text-neutral-500">{slot.label}: </span>
                <span className="text-white font-medium">{selection[slot.key]}</span>
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          Pick a weapon for every slot to see your loadout summary.
        </p>
      )}
    </div>
  );
}
