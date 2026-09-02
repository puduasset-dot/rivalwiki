import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "RivalWiki 如何处理数据:统计分析、广告 Cookie,以及你的选择。",
};

export default function PrivacyPageZh() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">隐私政策</h1>
        <p className="text-xs text-neutral-500">最后更新:2026年9月1日</p>
      </div>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          本政策说明了你访问 rivalwiki.com 时,RivalWiki(「我们」「本站」)会收集哪些数据,以及你有哪些选择。我们不需要账号,不运营自己的评论系统或表单,也不会出售个人数据。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">我们直接收集的数据</h2>
        <p>
          RivalWiki 本身不会收集或存储你输入的任何个人信息,因为本站根本没有可以输入信息的地方——没有注册、没有评论区、没有联系表单。交互工具(武器对比、配装生成器、准星生成器)完全在你的浏览器本地运行;你的选择不会被发送到我们这里,也不会被存储在任何地方。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">统计分析(Google Analytics)</h2>
        <p>
          我们使用 Google Analytics 来了解哪些页面被访问,以便知道该优先更新哪些内容。它收集的是标准的使用数据——浏览了哪些页面、大致地理位置(国家/城市级别)、设备和浏览器类型,以及你是如何进入本站的——这些数据与一个 Cookie 标识符相关联,而不是与你的姓名或邮箱关联。关于 Google 如何处理这些数据,详见
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            Google 隐私政策
          </a>
          。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">广告(Google AdSense)</h2>
        <p>
          RivalWiki 展示由 Google AdSense 提供的广告,以帮助支付托管费用。Google 及其广告合作伙伴可能会使用 Cookie,根据你之前访问本站或其他网站的记录来投放广告。你可以通过
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            Google 广告设置
          </a>
          或
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            aboutads.info/choices
          </a>
          选择退出个性化广告。包括 Google 在内的第三方供应商,会根据用户此前对本站或互联网上其他网站的访问记录,使用 Cookie 投放广告。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">关于 Cookie</h2>
        <p>
          除上述统计分析和广告用途的 Cookie 外,RivalWiki 不会设置其他自有 Cookie。你可以随时通过浏览器阻止或删除 Cookie;这样做可能会影响广告个性化,但不会导致本站任何页面无法使用。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">儿童隐私</h2>
        <p>
          RivalWiki 是面向大众的信息类网站,并非面向13岁以下儿童。我们不会在知情的情况下收集儿童的个人信息。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">你的选择</h2>
        <p>
          你可以使用浏览器扩展或内置设置来阻止统计分析和广告 Cookie,使用上方的退出链接,或通过
          <Link href="/contact" className="text-amber-400 hover:underline">联系页面</Link>
          就任何隐私问题联系我们。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">政策变更</h2>
        <p>
          如果本政策发生变化,我们会更新本页顶部的日期。
        </p>
      </div>
    </div>
  );
}
