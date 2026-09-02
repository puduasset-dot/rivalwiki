import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description: "如何联系 RivalWiki 提出勘误、疑问或下架请求。",
};

export default function ContactPageZh() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white">联系我们</h1>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          发现数据有误、某个兑换码明明已经失效却还标着「有效」,或者有其他需要更正的地方?最快的联系方式是在本站的 GitHub 仓库提交一个 issue:
        </p>

        <a
          href="https://github.com/puduasset-dot/rivalwiki/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-amber-400 hover:border-amber-400/60 transition-colors"
        >
          github.com/puduasset-dot/rivalwiki/issues →
        </a>

        <p>
          这个渠道可以用于数据勘误、问题反馈、隐私相关疑问,以及内容下架请求(例如,如果你是权利方,对本站使用的某张图片或素材有异议)。
        </p>

        <p>
          RivalWiki 是一个独立的粉丝项目,并非 RIVALS 或 Roblox 的官方客服渠道——如果涉及账号问题、购买或游戏内支持,请前往
          <a
            href="https://www.roblox.com/games/17625359962/RIVALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            Roblox 官方客服
          </a>
          。
        </p>
      </div>
    </div>
  );
}
