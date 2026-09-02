import type { Metadata } from "next";
import Link from "next/link";
import { ECONOMY_SOURCE } from "@/data/economy";
import { contractTypesJa } from "@/data/i18n/ja/economy";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS コントラクト",
  description: "RIVALSのコントラクトの仕組み——武器コントラクトとマップコントラクト。",
};

export default function ContractsPageJa() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-museum-corridor.jpg" alt="RIVALS museum corridor" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS コントラクト</h1>
        <SourceNote label={ECONOMY_SOURCE.label} lastChecked={ECONOMY_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          コントラクトは達成するとキー・ラップ・チャーム・フィニッシャーがもらえるゲーム内目標。それぞれ一度きりの報酬で、繰り返しは不可。
        </p>
      </div>

      <section className="space-y-3">
        {contractTypesJa.map((c) => (
          <div key={c.type} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <p className="font-medium text-white">{c.type}</p>
            <p className="text-sm text-neutral-400 mt-1">{c.detail}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-neutral-400">
        通貨獲得手段の一覧は<Link href="/ja/keys" className="text-amber-400 hover:underline">キー</Link>のページを参照。
      </p>
    </div>
  );
}
