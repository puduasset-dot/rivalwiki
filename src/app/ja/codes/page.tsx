import type { Metadata } from "next";
import { codes, CODES_SOURCE } from "@/data/codes";
import { howToRedeemJa, codeStatusJa } from "@/data/i18n/ja/codes";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS コード",
  description: "現在有効なRIVALS(Roblox)コードと報酬の一覧。",
};

export default function CodesPageJa() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/rivals-logo-screen.jpg" alt="RIVALS title screen" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS コード</h1>
        <SourceNote label={CODES_SOURCE.label} lastChecked={CODES_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          コードはすぐに失効し、情報源によって有効かどうかの見解が一致しないこともある——欲しいコードはすぐに試そう。
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead className="bg-neutral-900 text-neutral-400 text-left">
            <tr>
              <th className="px-4 py-2 font-medium">コード</th>
              <th className="px-4 py-2 font-medium">報酬</th>
              <th className="px-4 py-2 font-medium">状態</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => (
              <tr key={c.code} className="border-t border-neutral-800">
                <td className="px-4 py-2 font-mono text-amber-400">{c.code}</td>
                <td className="px-4 py-2 text-neutral-200">{c.reward}</td>
                <td className="px-4 py-2">
                  <span className={c.status === "active" ? "text-green-400" : "text-neutral-500"}>
                    {codeStatusJa[c.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-white">引き換え方法</h2>
        <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1">
          {howToRedeemJa.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
