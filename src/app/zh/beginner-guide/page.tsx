import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 新手指南",
  description: "从这里开始:RIVALS 里最先该做的事,从兑换码到第一套配装。",
};

const STEPS = [
  { title: "1. 立刻兑换兑换码", body: "兑换码失效很快,大多数都能领钥匙。去", link: { href: "/codes", label: "Codes 页面" }, after: "看看,在轮换掉之前把还有效的都换了。" },
  { title: "2. 先摸清免费武器", body: "突击步枪和手枪都是免费的,在任何距离都很可靠——完整数据见", link: { href: "/zh/weapons/assault-rifle", label: "突击步枪页面" }, after: "。前期不用花一分钱钥匙也能有竞争力。" },
  { title: "3. 刷每日任务和武器合约", body: "这是获取钥匙最快、最可重复的两种方式——完整说明见", link: { href: "/zh/keys", label: "钥匙" }, after: "。" },
  { title: "4. 先练熟滑铲跳和双跳,再学花哨的", body: "这是新手级的两个移动技巧,也是其他一切的基础——详见", link: { href: "/zh/movement", label: "移动技巧攻略" }, after: "。" },
  { title: "5. 先打10场非排位对战,再解锁排位", body: "排位赛需要先完成10场普通对战外加账号验证。进队列前先看看", link: { href: "/zh/ranks", label: "段位系统" }, after: "的完整条件。" },
  { title: "6. 花钥匙之前先对比武器", body: "使用", link: { href: "/zh/tools/weapon-comparison", label: "武器对比工具" }, after: "在把钥匙砸在新武器上之前,先把数据摆在一起看看。" },
];

export default function BeginnerGuidePageZh() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/gameplay-sky.jpg" alt="RIVALS shooting range gameplay screenshot" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 新手指南</h1>
        <p className="text-sm text-neutral-400">前几局游戏该按顺序做的六件事。</p>
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
