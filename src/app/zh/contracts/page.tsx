import type { Metadata } from "next";
import Link from "next/link";
import { ECONOMY_SOURCE } from "@/data/economy";
import { contractTypesZh } from "@/data/i18n/zh/economy";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 合约任务",
  description: "RIVALS 合约系统详解——武器合约与地图合约。",
};

export default function ContractsPageZh() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-museum-corridor.jpg" alt="RIVALS museum corridor" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 合约任务</h1>
        <SourceNote label={ECONOMY_SOURCE.label} lastChecked={ECONOMY_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          合约是完成后可获得钥匙、涂装、挂饰和终结技的游戏内目标。每个合约都只能领取一次奖励,不可重复完成。
        </p>
      </div>

      <section className="space-y-3">
        {contractTypesZh.map((c) => (
          <div key={c.type} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <p className="font-medium text-white">{c.type}</p>
            <p className="text-sm text-neutral-400 mt-1">{c.detail}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-neutral-400">
        完整的货币获取方式见<Link href="/zh/keys" className="text-amber-400 hover:underline">钥匙</Link>页面。
      </p>
    </div>
  );
}
