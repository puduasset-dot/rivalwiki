import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RivalWikiについて",
  description: "RivalWikiとは何か、データの出典、他のRIVALS攻略サイトとの違い。",
};

export default function AboutPageJa() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white">RivalWikiについて</h1>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          RivalWikiは、Nosniy Gamesによる
          <a href="https://www.roblox.com/games/17625359962/RIVALS" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            Roblox版RIVALS
          </a>
          のファーストパーソンシューターのプレイヤー向けツールボックスです。RIVALSにはすでに複数のwikiやコード追跡サイトがあり、それぞれの数値がしばしば食い違っていたため、どの統計値がどこから来て、いつ最終確認されたかを明確にできるサイトを作ろうと考えました。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">データの出典について</h2>
        <p>
          このサイトのすべてのデータセット——武器ステータス、コード、ティアリスト、マップ、ランク——には、出典と「最終確認日」がページ上に明記されています。公式のNosniy Gamesドキュメントは一般公開されていないため、コミュニティのwikiや複数の攻略サイトの情報(主にRIVALS Fandom wikiといくつかのゲームニュースサイト)を集約しています。数値を確認できなかった場合は、憶測で埋めるのではなく「未確認」と表示しています。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">このサイトが違う理由</h2>
        <p>
          長い記事に頼る代わりに、小規模なデータベース(武器・コード・マップ・ティアリスト)からページを自動生成する仕組みと、いくつかのインタラクティブツール——
          <Link href="/tools/weapon-comparison" className="text-amber-400 hover:underline">武器比較</Link>、
          <Link href="/tools/loadout-builder" className="text-amber-400 hover:underline">ロードアウトビルダー</Link>、
          <Link href="/tools/crosshair-generator" className="text-amber-400 hover:underline">照準ジェネレーター</Link>
          ——を用意しています。具体的な質問で検索したときに、2,000語の埋め草文章ではなく、直接的な答えにたどり着けることを目指しています。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Nosniy GamesやRobloxとは無関係です</h2>
        <p>
          RivalWikiは独立した非公式のファンプロジェクトです。Nosniy GamesまたはRoblox Corporationと提携・承認・スポンサー関係にはありません。RIVALSおよび関連する商標はそれぞれの権利者に帰属します。公式サポート、アップデート情報、購入については
          <a href="https://www.roblox.com/games/17625359962/RIVALS" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            公式RIVALS Robloxページ
          </a>
          をご利用ください。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">質問・訂正について</h2>
        <p>
          間違っている、または古くなっているデータを見つけた場合は、
          <Link href="/contact" className="text-amber-400 hover:underline">Contactページ</Link>
          を参照して連絡方法を確認してください。
        </p>
      </div>
    </div>
  );
}
