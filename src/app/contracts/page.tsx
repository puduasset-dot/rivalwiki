import type { Metadata } from "next";
import Link from "next/link";
import { CONTRACT_TYPES, ECONOMY_SOURCE } from "@/data/economy";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS Contracts",
  description: "How RIVALS Contracts work — weapon contracts and map contracts.",
};

export default function ContractsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Contracts</h1>
        <SourceNote label={ECONOMY_SOURCE.label} lastChecked={ECONOMY_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          Contracts are in-game objectives that reward Keys, Wraps, Charms, and
          Finishers on completion. Each one is a one-time reward, not repeatable.
        </p>
      </div>

      <section className="space-y-3">
        {CONTRACT_TYPES.map((c) => (
          <div key={c.type} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <p className="font-medium text-white">{c.type}</p>
            <p className="text-sm text-neutral-400 mt-1">{c.detail}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-neutral-400">
        See <Link href="/keys" className="text-amber-400 hover:underline">Keys</Link> for the full list of ways to earn currency.
      </p>
    </div>
  );
}
