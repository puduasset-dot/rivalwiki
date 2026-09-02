import type { Metadata } from "next";
import Image from "next/image";
import { notableSkins, SKINS_SOURCE } from "@/data/skins";
import { obtainMethodsZh, notableSkinsNotesZh } from "@/data/i18n/zh/skins";
import { SourceNote } from "@/components/SourceNote";

export const metadata: Metadata = {
  title: "RIVALS 皮肤",
  description: "RIVALS 皮肤系统详解——箱子、每日商店、礼包,以及值得关注的限定皮肤。",
};

export default function SkinsPageZh() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 皮肤</h1>
        <SourceNote label={SKINS_SOURCE.label} url={SKINS_SOURCE.url} lastChecked={SKINS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          皮肤是武器的外观装饰,大多数需要花费 Robux。游戏里共有270多款皮肤,这里不会逐一罗列,而是介绍获取机制和几款值得关注的限定皮肤。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">皮肤获取方式</h2>
        <div className="space-y-2">
          {obtainMethodsZh.map((m) => (
            <div key={m.method} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <p className="font-medium text-white">{m.method}</p>
              <p className="text-sm text-neutral-400 mt-1">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">值得关注的限定皮肤</h2>
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
                <p className="text-sm text-neutral-400 mt-1">{notableSkinsNotesZh[s.slug] ?? s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
