import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { curatedLoadouts, LOADOUTS_SOURCE } from "@/data/loadouts";
import { getWeapon } from "@/data/weapons";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Best Loadouts",
  description: "Curated RIVALS loadouts for beginners, close-range aggression, duels, and team fights.",
};

const SLOTS = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "melee", label: "Melee" },
  { key: "utility", label: "Utility" },
] as const;

export default function BestLoadoutsPage() {
  return (
    <div className="space-y-8">
      <PageBanner
        src="/media/gameplay-dusk.jpg"
        alt="RIVALS gameplay screenshot at dusk"
        caption="Loadout in action during a real match"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Best Loadouts</h1>
        <SourceNote label={LOADOUTS_SOURCE.label} lastChecked={LOADOUTS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          Four starting points by playstyle. Want to build your own?{" "}
          <Link href="/tools/loadout-builder" className="text-amber-400 hover:underline">
            Try the Loadout Builder
          </Link>
          .
        </p>
      </div>

      <div className="space-y-4">
        {curatedLoadouts.map((l) => (
          <div key={l.name} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-3">
            <div>
              <h2 className="font-semibold text-white">{l.name}</h2>
              <p className="text-xs text-neutral-500">Best for: {l.bestFor}</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-3">
              {SLOTS.map((slot) => {
                const weapon = getWeapon(l[slot.key]);
                if (!weapon) return null;
                return (
                  <Link
                    key={slot.key}
                    href={`/weapons/${weapon.slug}`}
                    className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 p-2 hover:border-amber-400/60 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded bg-neutral-800 flex items-center justify-center overflow-hidden">
                      <Image src={`/weapons/${weapon.slug}.webp`} alt="" width={32} height={32} className="object-contain p-0.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-neutral-500">{slot.label}</p>
                      <p className="text-xs text-white truncate">{weapon.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <p className="text-sm text-neutral-400">{l.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
