import type { Metadata } from "next";
import { CrosshairGeneratorClientZh } from "./CrosshairGeneratorClientZh";

export const metadata: Metadata = {
  title: "RIVALS 准星生成器",
  description: "设计并预览 RIVALS 准星——颜色、大小、间隙、粗细、不透明度。",
};

export default function CrosshairGeneratorPageZh() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">准星生成器</h1>
        <p className="text-sm text-neutral-400">预览准星效果,然后在游戏内手动填入对应数值。</p>
      </div>
      <CrosshairGeneratorClientZh />
    </div>
  );
}
