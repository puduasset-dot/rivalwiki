import type { Metadata } from "next";
import { CrosshairGeneratorClientJa } from "./CrosshairGeneratorClientJa";

export const metadata: Metadata = {
  title: "RIVALS 照準ジェネレーター",
  description: "RIVALSのクロスヘアをデザイン・プレビュー——色、サイズ、ギャップ、太さ、不透明度。",
};

export default function CrosshairGeneratorPageJa() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">照準ジェネレーター</h1>
        <p className="text-sm text-neutral-400">クロスヘアをプレビューして、設定値をゲーム内で手動で合わせよう。</p>
      </div>
      <CrosshairGeneratorClientJa />
    </div>
  );
}
