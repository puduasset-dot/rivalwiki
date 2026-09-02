import type { Metadata } from "next";
import { Suspense } from "react";
import { WeaponComparisonClientJa } from "./WeaponComparisonClientJa";

export const metadata: Metadata = {
  title: "RIVALS 武器比較ツール",
  description: "RIVALSの武器を2つ選んで、ダメージ、連射速度、弾数、リロード、コストを並べて比較。",
};

export default function WeaponComparisonPageJa() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">武器比較</h1>
        <p className="text-sm text-neutral-400">2つの武器を選んで、ステータスを直接比較する。</p>
      </div>
      <Suspense fallback={<p className="text-sm text-neutral-500">読み込み中…</p>}>
        <WeaponComparisonClientJa />
      </Suspense>
    </div>
  );
}
