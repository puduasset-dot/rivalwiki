import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款",
  description: "使用 RivalWiki 需遵守的条款。",
};

export default function TermsPageZh() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">服务条款</h1>
        <p className="text-xs text-neutral-500">最后更新:2026年9月1日</p>
      </div>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          使用 rivalwiki.com 即表示你同意本条款。如果你不同意,请不要使用本站。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">仅供信息参考</h2>
        <p>
          RivalWiki 提供关于 Roblox 游戏 RIVALS 的攻略、工具和数据,仅供信息参考之用。我们从社区来源聚合数据、兑换码和排名,并努力保持准确和及时,但 RIVALS 会持续更新并进行平衡性调整——请把本站的内容当作尽力而为的快照,而不是保证。凡是我们无法确认的数字,会标注为「未确认」而不是靠猜测填补。关于我们如何获取数据的更多说明,详见
          <Link href="/about" className="text-amber-400 hover:underline">关于页面</Link>
          。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">无隶属关系</h2>
        <p>
          RivalWiki 是一个独立的粉丝项目,与 Nosniy Games 或 Roblox Corporation 没有任何隶属、认可或赞助关系。RIVALS 及相关商标归其各自所有者所有。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">可接受的使用方式</h2>
        <p>
          请将本站用于个人、非商业性质的查阅。请勿大规模抓取或转载本站内容,请勿试图干扰本站服务,也请勿将本站用于任何非法用途。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">第三方链接与广告</h2>
        <p>
          本站链接到外部信息源(RIVALS Fandom wiki、Roblox、新闻媒体等),并展示由 Google AdSense 提供的广告。我们不控制这些第三方网站的内容、可用性或行为方式,也不对其承担责任。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">不作担保</h2>
        <p>
          本站及其工具按「现状」提供,不附带任何形式的担保。我们不保证本站不会出错、始终可用,也不保证任何兑换码、数据或排名当前是准确的。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">条款变更</h2>
        <p>
          我们可能随时更新这些条款或站点内容。变更后继续使用本站,即表示你接受更新后的条款。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">联系我们</h2>
        <p>
          对本条款有疑问?请查看
          <Link href="/contact" className="text-amber-400 hover:underline">联系页面</Link>
          。
        </p>
      </div>
    </div>
  );
}
