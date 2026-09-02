import type { Metadata } from "next";
import { HomeContent, type HomeCopy } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "RivalWiki — RIVALS (Roblox) 攻略・武器データ・ツール",
  description:
    "Roblox版RIVALSのプレイヤー向けツールボックス。武器データベース、Tier表、コード、比較ツールなど。",
  alternates: {
    canonical: "https://rivalwiki.com/ja",
    languages: {
      en: "https://rivalwiki.com/",
      ja: "https://rivalwiki.com/ja",
      zh: "https://rivalwiki.com/zh",
    },
  },
};

const copy: HomeCopy = {
  heroTitle: "RIVALS プレイヤーツールボックス",
  heroDescBefore: "Roblox の",
  heroLinkText: "RIVALS",
  heroDescAfter:
    "の攻略情報とツールをまとめたサイトです。武器データ、コード、Tier表など、それぞれに情報の出典と最終確認日を明記しています。長文の記事は書きません。",
  quickLinks: [
    { href: "/ja/codes", title: "有効なコード", desc: (c) => `現在確認できている ${c} 件のコードと報酬の一覧。` },
    { href: "/ja/weapons", title: "武器データベース", desc: (_c, w) => `${w} 種類の武器のダメージ、連射速度、弾薬、価格。` },
    { href: "/ja/weapon-tier-list", title: "武器 Tier 表", desc: () => "根拠つきの集約Tier表——当てずっぽうではありません。" },
    { href: "/ja/tools/weapon-comparison", title: "武器比較ツール", desc: () => "2つの武器のステータスを並べて比較。" },
  ],
  mapsHref: "/ja/maps",
  mapsTitle: "マップ一覧",
  mapsDesc: "通常ローテーション、Bigマップ、レガシー(プライベートサーバー限定)マップなど35種類を掲載。",
  mapsCta: "全マップを見る →",
  secretsHref: "/ja/secrets",
  secretsTitle: "隠し要素・イースターエッグ",
  secretsDesc: "出典付きの隠し要素56件——未公開の武器の相互作用、上級者向けの移動テク、隠し部屋、ゲームが教えてくれないイースターエッグまで。",
  secretsCta: "隠し要素を見る →",
  moreGuidesTitle: "その他のガイド",
  moreGuides: [
    { href: "/ja/beginner-guide", title: "初心者ガイド" },
    { href: "/ja/maps", title: "マップ" },
    { href: "/ja/ranks", title: "ランク" },
    { href: "/ja/keys", title: "Keys" },
    { href: "/ja/contracts", title: "コントラクト" },
    { href: "/ja/movement", title: "移動テクニック" },
    { href: "/ja/settings", title: "おすすめ設定" },
    { href: "/ja/skins", title: "スキン" },
    { href: "/ja/game-modes", title: "ゲームモード" },
    { href: "/ja/best-loadouts", title: "おすすめロードアウト" },
    { href: "/ja/tools/loadout-builder", title: "ロードアウトビルダー" },
    { href: "/ja/tools/crosshair-generator", title: "照準ジェネレーター" },
  ],
  whyTitle: "このサイトが違う理由",
  whyDesc:
    "RIVALSにはすでに複数のwikiやコード一覧サイトがありますが、サイトごとに数値が食い違っていることが少なくありません。当サイトでは、すべてのステータス・コード・Tier評価に出典と最終確認日を明記し、確認が取れていない武器については「未確認」と表示し、憶測で数値を埋めることはしません。",
};

export default function HomeJa() {
  return <HomeContent copy={copy} />;
}
