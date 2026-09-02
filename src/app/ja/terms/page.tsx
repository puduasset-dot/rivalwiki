import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "RivalWiki利用規約。",
};

export default function TermsPageJa() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">利用規約</h1>
        <p className="text-xs text-neutral-500">最終更新日:2026年9月1日</p>
      </div>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          rivalwiki.comを利用することで、本規約に同意したものとみなされます。同意いただけない場合は、当サイトのご利用をお控えください。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">情報提供目的のみ</h2>
        <p>
          RivalWikiは、Robloxのゲーム「RIVALS」に関するガイド・ツール・データを情報提供目的で提供しています。統計値・コード・ランキングはコミュニティの情報源から集約し、正確性と最新性の維持に努めていますが、RIVALSは頻繁にアップデートされバランス調整も行われるため、ここに掲載されている内容はあくまでベストエフォートによるスナップショットであり、保証されるものではありません。数値を確認できなかった場合は、憶測ではなく「未確認」と表示しています。データの出典についての詳細は
          <Link href="/ja/about" className="text-amber-400 hover:underline">About</Link>
          をご覧ください。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">提携関係について</h2>
        <p>
          RivalWikiは独立したファンプロジェクトであり、Nosniy GamesまたはRoblox Corporationと提携・承認・スポンサー関係にはありません。RIVALSおよび関連する商標はそれぞれの権利者に帰属します。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">利用範囲</h2>
        <p>
          当サイトは個人的・非商業的な参照目的でご利用ください。当サイトのコンテンツを大規模にスクレイピングまたは再配布したり、サービスの妨害を試みたり、違法な目的で利用したりしないでください。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">第三者リンクと広告</h2>
        <p>
          当サイトは外部情報源(RIVALS Fandom wiki、Roblox、ニュースサイトなど)にリンクし、Google AdSense配信の広告を表示しています。これら第三者サイトのコンテンツ、可用性、運営方針について、当サイトは管理する立場になく責任も負いません。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">保証の否認</h2>
        <p>
          当サイトおよびそのツールは「現状有姿」で提供され、いかなる保証もありません。エラーがないこと、常時利用可能であること、掲載されているコード・統計値・ランキングが現時点で正確であることを保証するものではありません。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">変更について</h2>
        <p>
          本規約またはサイトのコンテンツは予告なく変更されることがあります。変更後も継続してご利用いただいた場合、更新された規約に同意したものとみなします。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">お問い合わせ</h2>
        <p>
          本規約に関するご質問は
          <Link href="/ja/contact" className="text-amber-400 hover:underline">Contactページ</Link>
          をご覧ください。
        </p>
      </div>
    </div>
  );
}
