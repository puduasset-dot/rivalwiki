import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于 RivalWiki",
  description: "RivalWiki 是什么、数据从哪里来,以及和其他 RIVALS 攻略站有什么不同。",
};

export default function AboutPageZh() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white">关于 RivalWiki</h1>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          RivalWiki 是为
          <a href="https://www.roblox.com/games/17625359962/RIVALS" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            Roblox 上的 RIVALS
          </a>
          (Nosniy Games 出品的第一人称射击游戏)打造的玩家工具箱。RIVALS 已经有不少 wiki 和兑换码追踪网站,但它们给出的数字经常互相矛盾,于是我们想做一个能让你清楚知道每个数据来自哪里、什么时候核实过的站点。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">数据来源说明</h2>
        <p>
          本站的每一份数据——武器数据、兑换码、梯度榜、地图、段位——都会在页面上标注来源和「最后核实日期」。由于 Nosniy Games 没有公开的官方文档,我们的数据主要聚合自社区维护的 wiki 和多家攻略媒体的报道(主要是 RIVALS Fandom wiki 以及若干游戏资讯网站)。凡是无法确认的数字,我们会明确标注为「未确认」,而不是靠猜测填补。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">这里和别的攻略站有什么不一样</h2>
        <p>
          我们没有依赖长篇文章,而是用一个小型数据库(武器、兑换码、地图、梯度榜)自动生成页面,再加上几个交互工具——
          <Link href="/zh/tools/weapon-comparison" className="text-amber-400 hover:underline">武器对比</Link>、
          <Link href="/zh/tools/loadout-builder" className="text-amber-400 hover:underline">配装生成器</Link>、
          <Link href="/zh/tools/crosshair-generator" className="text-amber-400 hover:underline">准星生成器</Link>
          。目标是让你搜到具体问题时,直接落地到答案本身,而不是先读两千字的废话。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">与 Nosniy Games 或 Roblox 无关</h2>
        <p>
          RivalWiki 是一个独立的非官方粉丝项目,与 Nosniy Games 或 Roblox Corporation 没有任何隶属、认可或赞助关系。RIVALS 及相关商标归其各自所有者所有。如需官方支持、更新信息或购买,请前往
          <a href="https://www.roblox.com/games/17625359962/RIVALS" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            RIVALS 官方 Roblox 页面
          </a>
          。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">问题或勘误</h2>
        <p>
          发现数据有误或已过期?请查看
          <Link href="/zh/contact" className="text-amber-400 hover:underline">联系页面</Link>
          了解联系方式。
        </p>
      </div>
    </div>
  );
}
