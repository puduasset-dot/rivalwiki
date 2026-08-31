import type { Metadata } from "next";
import { LoadoutBuilderClient } from "./LoadoutBuilderClient";

export const metadata: Metadata = {
  title: "RIVALS Loadout Builder",
  description: "Build a RIVALS loadout by picking a primary, secondary, melee, and utility.",
};

export default function LoadoutBuilderPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">Loadout Builder</h1>
        <p className="text-sm text-neutral-400">
          Pick one weapon per slot to put together a loadout.
        </p>
      </div>
      <LoadoutBuilderClient />
    </div>
  );
}
