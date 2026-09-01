import type { Metadata } from "next";
import Link from "next/link";
import { keyMethods, ECONOMY_SOURCE } from "@/data/economy";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Keys — How to Get More",
  description: "Every way to earn Keys in RIVALS, RIVALS' main currency.",
};

export default function KeysPage() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-museum-arches.jpg" alt="RIVALS museum map" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Keys</h1>
        <SourceNote label={ECONOMY_SOURCE.label} lastChecked={ECONOMY_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          Keys are RIVALS&apos; main currency — used for weapons, weapon
          upgrades, Wrap Boxes, Charm Capsules, Finisher Packs, winstreak
          recovery, and shop refreshes.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">Ways to earn Keys</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">Method</th>
                <th className="px-4 py-2 font-medium">Detail</th>
                <th className="px-4 py-2 font-medium">Repeatable</th>
              </tr>
            </thead>
            <tbody>
              {keyMethods.map((m) => (
                <tr key={m.method} className="border-t border-neutral-800">
                  <td className="px-4 py-2 font-medium text-white">{m.method}</td>
                  <td className="px-4 py-2 text-neutral-400">{m.detail}</td>
                  <td className="px-4 py-2">
                    {m.repeatable ? (
                      <span className="text-green-400">Yes</span>
                    ) : (
                      <span className="text-neutral-500">One-time</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="text-sm text-neutral-400">
        See the <Link href="/codes" className="text-amber-400 hover:underline">codes page</Link> for currently active codes, and{" "}
        <Link href="/contracts" className="text-amber-400 hover:underline">contracts</Link> for the weapon/map objective grind.
      </p>
    </div>
  );
}
