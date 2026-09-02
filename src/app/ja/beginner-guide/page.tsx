import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 初心者ガイド",
  description: "最初にやるべきこと:コードの引き換えから最初のロードアウトまで。",
};

const STEPS = [
  { title: "1. すぐにコードを引き換える", body: "コードはすぐに失効し、ほとんどが無料のキーをくれる。", link: { href: "/codes", label: "コードページ" }, after: "を確認して、失効する前に有効なものを引き換えよう。" },
  { title: "2. まず無料武器を覚える", body: "アサルトライフルと拳銃はどちらも無料で、どの距離でも信頼できる。詳しいステータスは", link: { href: "/ja/weapons/assault-rifle", label: "アサルトライフルのページ" }, after: "を参照。序盤から戦うのにキーを使う必要はない。" },
  { title: "3. デイリータスクと武器コントラクトを周回する", body: "この2つが最も速く繰り返し稼げるキーの入手法だ——詳しくは", link: { href: "/ja/keys", label: "キー" }, after: "を参照。" },
  { title: "4. 派手な技より先にスライドジャンプとダブルジャンプを練習する", body: "この2つは初心者向けの移動テクで、それ以外すべての基礎になる——詳しくは", link: { href: "/ja/movement", label: "移動テクガイド" }, after: "を参照。" },
  { title: "5. アンランクデュエルを10試合プレイしてからランクを解放する", body: "ランクには10試合の通常デュエルとアカウント認証がまず必要。キューに入る前に", link: { href: "/ja/ranks", label: "ランク" }, after: "で条件を確認しよう。" },
  { title: "6. キーを使う前に武器を比較する", body: "", link: { href: "/ja/tools/weapon-comparison", label: "武器比較ツール" }, after: "を使って、新しい武器にキーを使う前にステータスを並べて確認しよう。" },
];

export default function BeginnerGuidePageJa() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-sky.jpg" alt="RIVALS shooting range gameplay screenshot" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 初心者ガイド</h1>
        <p className="text-sm text-neutral-400">最初の数回のプレイでやるべき6つのことを順番に紹介する。</p>
      </div>

      <div className="space-y-3">
        {STEPS.map((s) => (
          <div key={s.title} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <p className="font-medium text-white">{s.title}</p>
            <p className="text-sm text-neutral-400 mt-1">
              {s.body}
              <Link href={s.link.href} className="text-amber-400 hover:underline">
                {s.link.label}
              </Link>
              {s.after}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
