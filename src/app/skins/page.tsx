import type { Metadata } from "next";
import Image from "next/image";
import { OBTAIN_METHODS, notableSkins, SKINS_SOURCE } from "@/data/skins";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Skins",
  description: "How skins work in RIVALS — cases, Daily Shop, bundles, and notable exclusive skins.",
};

export default function SkinsPage() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/trailer-crossfire.jpg" alt="RIVALS gunfight with tracer rounds" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Skins</h1>
        <SourceNote label={SKINS_SOURCE.label} url={SKINS_SOURCE.url} lastChecked={SKINS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          Skins are cosmetic weapon reskins — most cost Robux. There are 270+
          in the game, so instead of cataloguing all of them, here&apos;s how
          the system works and a handful of notable exclusives.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">How to get skins</h2>
        <div className="space-y-2">
          {OBTAIN_METHODS.map((m) => (
            <div key={m.method} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <p className="font-medium text-white">{m.method}</p>
              <p className="text-sm text-neutral-400 mt-1">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">Notable exclusive skins</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {notableSkins.map((s) => (
            <div key={s.slug} className="flex gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <div className="shrink-0 w-14 h-14 rounded-md bg-neutral-800 flex items-center justify-center overflow-hidden">
                <Image src={`/skins/${s.slug}.webp`} alt="" width={56} height={56} className="object-contain p-1" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-medium text-white">{s.name}</span>
                  <span className="text-xs text-neutral-500">{s.weapon}</span>
                </div>
                <p className="text-sm text-neutral-400 mt-1">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
