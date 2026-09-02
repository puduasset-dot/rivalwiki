import type { Metadata } from "next";
import { Suspense } from "react";
import { WeaponComparisonClientZh } from "./WeaponComparisonClientZh";

export const metadata: Metadata = {
  title: "RIVALS 武器对比工具",
  description: "选择两件 RIVALS 武器,并排对比伤害、射速、弹药、装填时间和价格。",
};

export default function WeaponComparisonPageZh() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">武器对比</h1>
        <p className="text-sm text-neutral-400">选择两件武器,直接对比它们的数据。</p>
      </div>
      <Suspense fallback={<p className="text-sm text-neutral-500">加载中…</p>}>
        <WeaponComparisonClientZh />
      </Suspense>
    </div>
  );
}
