import type { Metadata } from "next";
import Link from "next/link";
import { ECONOMY_SOURCE } from "@/data/economy";
import { keyMethodsZh } from "@/data/i18n/zh/economy";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 钥匙获取攻略",
  description: "RIVALS 主要货币「钥匙」的所有获取方式。",
};

export default function KeysPageZh() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-museum-arches.jpg" alt="RIVALS museum map" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 钥匙</h1>
        <SourceNote label={ECONOMY_SOURCE.label} lastChecked={ECONOMY_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          钥匙是 RIVALS 的主要货币——用于购买武器、武器升级、涂装礼盒、挂饰胶囊、终结技礼包、连胜恢复,以及刷新商店。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">获取钥匙的方式</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">方式</th>
                <th className="px-4 py-2 font-medium">详情</th>
              </tr>
            </thead>
            <tbody>
              {keyMethodsZh.map((m) => (
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
        当前有效兑换码见<Link href="/codes" className="text-amber-400 hover:underline">Codes 页面</Link>,武器/地图合约刷取见<Link href="/zh/contracts" className="text-amber-400 hover:underline">合约任务</Link>。
      </p>
    </div>
  );
}
