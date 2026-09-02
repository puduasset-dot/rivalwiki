import type { Metadata } from "next";
import Link from "next/link";
import { ECONOMY_SOURCE } from "@/data/economy";
import { keyMethodsJa } from "@/data/i18n/ja/economy";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS キーの集め方",
  description: "RIVALS のメイン通貨「キー」を集めるすべての方法。",
};

export default function KeysPageJa() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-museum-arches.jpg" alt="RIVALS museum map" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS のキー</h1>
        <SourceNote label={ECONOMY_SOURCE.label} lastChecked={ECONOMY_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          キーはRIVALSのメイン通貨——武器、武器アップグレード、ラップボックス、チャームカプセル、フィニッシャーパック、連勝リカバリー、ショップ更新に使われる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">キーの集め方</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">方法</th>
                <th className="px-4 py-2 font-medium">詳細</th>
              </tr>
            </thead>
            <tbody>
              {keyMethodsJa.map((m) => (
                <tr key={m.method} className="border-t border-neutral-800">
                  <td className="px-4 py-2 font-medium text-white">{m.method}</td>
                  <td className="px-4 py-2 text-neutral-400">{m.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="text-sm text-neutral-400">
        現在有効なコードは<Link href="/codes" className="text-amber-400 hover:underline">Codesページ</Link>を、武器・マップコントラクトの周回については<Link href="/ja/contracts" className="text-amber-400 hover:underline">コントラクト</Link>を参照。
      </p>
    </div>
  );
}
