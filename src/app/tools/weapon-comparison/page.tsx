import type { Metadata } from "next";
import { Suspense } from "react";
import { WeaponComparisonClient } from "./WeaponComparisonClient";

export const metadata: Metadata = {
  title: "RIVALS Weapon Comparison Tool",
  description: "Compare any two RIVALS weapons side by side — damage, fire rate, ammo, reload, and cost.",
};

export default function WeaponComparisonPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">Weapon Comparison</h1>
        <p className="text-sm text-neutral-400">
          Pick two weapons to compare their stats directly.
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-neutral-500">Loading…</p>}>
        <WeaponComparisonClient />
      </Suspense>
    </div>
  );
}
