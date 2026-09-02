import type { Metadata } from "next";
import Image from "next/image";
import { notableSkins, SKINS_SOURCE } from "@/data/skins";
import { obtainMethodsJa, notableSkinsNotesJa } from "@/data/i18n/ja/skins";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS スキン",
  description: "RIVALSのスキンの仕組み——ケース、デイリーショップ、バンドル、注目の限定スキン。",
};

export default function SkinsPageJa() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS スキン</h1>
        <SourceNote label={SKINS_SOURCE.label} url={SKINS_SOURCE.url} lastChecked={SKINS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          スキンは武器の見た目を変える装飾要素——ほとんどはRobuxが必要。全270種以上あるため、すべてを網羅する代わりに、仕組みの説明といくつかの注目限定スキンを紹介する。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">スキンの入手方法</h2>
        <div className="space-y-2">
          {obtainMethodsJa.map((m) => (
            <div key={m.method} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <p className="font-medium text-white">{m.method}</p>
              <p className="text-sm text-neutral-400 mt-1">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">注目の限定スキン</h2>
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
                <p className="text-sm text-neutral-400 mt-1">{notableSkinsNotesJa[s.slug] ?? s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
