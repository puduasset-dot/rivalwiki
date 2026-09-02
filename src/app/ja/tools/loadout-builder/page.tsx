import type { Metadata } from "next";
import { LoadoutBuilderClientJa } from "./LoadoutBuilderClientJa";

export const metadata: Metadata = {
  title: "RIVALS ロードアウトビルダー",
  description: "プライマリー、セカンダリー、近接、ユーティリティを選んでRIVALSロードアウトを組み立てる。",
};

export default function LoadoutBuilderPageJa() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">ロードアウトビルダー</h1>
        <p className="text-sm text-neutral-400">各スロットに武器を1つずつ選んでロードアウトを組み立てる。</p>
      </div>
      <LoadoutBuilderClientJa />
    </div>
  );
}
