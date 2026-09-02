import type { Metadata } from "next";
import { LoadoutBuilderClientZh } from "./LoadoutBuilderClientZh";

export const metadata: Metadata = {
  title: "RIVALS 配装生成器",
  description: "选择主武器、副武器、近战和功能道具,组建你的 RIVALS 配装。",
};

export default function LoadoutBuilderPageZh() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">配装生成器</h1>
        <p className="text-sm text-neutral-400">为每个槽位挑一件武器,组建你的配装。</p>
      </div>
      <LoadoutBuilderClientZh />
    </div>
  );
}
