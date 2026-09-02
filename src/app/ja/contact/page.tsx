import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "訂正・質問・削除依頼など、RivalWikiへの連絡方法。",
};

export default function ContactPageJa() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white">お問い合わせ</h1>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          間違った統計値、失効しているのに有効と表示されているコード、その他訂正が必要な点を見つけましたか？最も早く連絡が取れる方法は、当サイトのGitHubリポジトリでIssueを立てることです:
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
          データの訂正、バグ報告、プライバシーに関する質問、コンテンツの削除依頼(たとえば、当サイトで使用されている画像や素材について権利者として懸念がある場合など)は、こちらで対応しています。
        </p>

        <p>
          RivalWikiは独立したファンプロジェクトであり、公式のRIVALSまたはRobloxサポート窓口ではありません。アカウントの問題、購入、ゲーム内サポートについては、
          <a
            href="https://www.roblox.com/games/17625359962/RIVALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            Roblox公式サポート
          </a>
          をご利用ください。
        </p>
      </div>
    </div>
  );
}
