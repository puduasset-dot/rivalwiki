import type { Metadata } from "next";
import { HomeContent, type HomeCopy } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "RivalWiki — RIVALS(Roblox)攻略、武器数据与工具",
  description: "Roblox 游戏 RIVALS 的玩家工具箱:武器数据库、Tier 榜单、兑换码、对比工具。",
  alternates: {
    canonical: "https://rivalwiki.com/zh",
    languages: {
      en: "https://rivalwiki.com/",
      ja: "https://rivalwiki.com/ja",
      zh: "https://rivalwiki.com/zh",
    },
  },
};

const copy: HomeCopy = {
  heroTitle: "RIVALS 玩家工具箱",
  heroDescBefore: "为 Roblox 上的",
  heroLinkText: "RIVALS",
  heroDescAfter:
    "提供直接的攻略答案和工具——武器数据、兑换码、Tier 榜单,每一条都标注了数据来源和最后核实时间,不写两千字的废话文章。",
  quickLinks: [
    { href: "/codes", title: "当前兑换码", desc: (c) => `实时跟踪 ${c} 个有效兑换码,附奖励和来源。` },
    { href: "/weapons", title: "武器数据库", desc: (_c, w) => `${w} 件武器的伤害、射速、弹药和价格。` },
    { href: "/weapon-tier-list", title: "武器 Tier 榜单", desc: () => "有据可查的聚合排名,不是瞎猜的。" },
    { href: "/tools/weapon-comparison", title: "武器对比工具", desc: () => "选两件武器,直接对比数据。" },
  ],
  mapsTitle: "浏览地图",
  mapsDesc: "收录 35 张地图——常规轮换图、Big 变体图,以及仅限私服的 Legacy 地图。",
  mapsCta: "查看全部地图 →",
  moreGuidesTitle: "更多攻略",
  moreGuides: [
    { href: "/beginner-guide", title: "新手指南" },
    { href: "/maps", title: "地图" },
    { href: "/ranks", title: "段位" },
    { href: "/keys", title: "Keys 货币" },
    { href: "/contracts", title: "合约任务" },
    { href: "/movement", title: "移动技巧" },
    { href: "/settings", title: "推荐设置" },
    { href: "/skins", title: "皮肤" },
    { href: "/game-modes", title: "游戏模式" },
    { href: "/best-loadouts", title: "推荐构筑" },
    { href: "/tools/loadout-builder", title: "构筑生成器" },
    { href: "/tools/crosshair-generator", title: "准星生成器" },
  ],
  whyTitle: "这个网站有什么不一样",
  whyDesc:
    "RIVALS 已经有好几个 wiki 和兑换码列表网站,但它们给出的数字经常互相矛盾。我们这里的每一条数据、兑换码和 Tier 排名都标注了来源和最后核实日期;没能确认的武器数据会明确标为「未确认」,而不是靠猜。",
  languageNote:
    "目前中文版仅完成首页,点击进入的详情页(武器、地图等)仍是英文内容。等英文站内容做到约 300 页后,会陆续推出完整的中文版。",
};

export default function HomeZh() {
  return <HomeContent copy={copy} />;
}
