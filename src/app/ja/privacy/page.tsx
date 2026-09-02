import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "RivalWikiのデータの取り扱い:アナリティクス、広告Cookie、選択肢について。",
};

export default function PrivacyPageJa() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">プライバシーポリシー</h1>
        <p className="text-xs text-neutral-500">最終更新日:2026年9月1日</p>
      </div>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          このポリシーは、rivalwiki.comを訪問した際にRivalWiki(「当サイト」)がどのようなデータを収集するか、そしてどのような選択肢があるかを説明します。当サイトはアカウントを必要とせず、独自のコメントシステムやフォームも運営しておらず、個人データを販売することもありません。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">直接収集するデータ</h2>
        <p>
          RivalWiki自体は、あなたが入力する個人情報を収集・保存しません——サインアップ、コメント、問い合わせフォームなど、そもそも入力する場所がないためです。インタラクティブツール(武器比較、ロードアウトビルダー、照準ジェネレーター)はすべてブラウザ内で完結しており、選択内容が当サイトに送信されたり保存されたりすることはありません。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">アナリティクス(Google Analytics)</h2>
        <p>
          当サイトはどのページが利用されているかを把握するためにGoogle Analyticsを使用しています。閲覧ページ、おおよその位置情報(国/都市レベル)、デバイス・ブラウザの種類、サイトへの流入経路といった標準的な利用データをCookie識別子に紐づけて収集しますが、氏名やメールアドレスとは紐づきません。Googleがそのデータをどう扱うかについては
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            Googleのプライバシーポリシー
          </a>
          を参照してください。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">広告(Google AdSense)</h2>
        <p>
          RivalWikiはホスティング費用を賄うため、Google AdSense配信の広告を表示しています。GoogleおよびGoogleの広告パートナーは、このサイトや他のサイトへの過去の訪問履歴に基づいて広告を配信するためにCookieを使用する場合があります。パーソナライズ広告を無効にするには
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            Google広告設定
          </a>
          または
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
            aboutads.info/choices
          </a>
          をご利用ください。Googleを含む第三者ベンダーは、ユーザーの当サイトまたはインターネット上の他サイトへの過去の訪問に基づいて広告を配信するためにCookieを使用します。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Cookieについて</h2>
        <p>
          上記のアナリティクス・広告用Cookie以外に、RivalWiki独自のCookieは設定していません。ブラウザの設定でいつでもCookieをブロック・削除できます——広告のパーソナライズには影響しますが、当サイトのページが利用できなくなることはありません。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">子どものプライバシーについて</h2>
        <p>
          RivalWikiは一般向けの情報サイトであり、13歳未満の子どもを対象としていません。子どもから故意に個人情報を収集することはありません。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">選択肢について</h2>
        <p>
          ブラウザ拡張機能や標準機能を使ってアナリティクス・広告用Cookieをブロックしたり、上記のオプトアウトリンクを利用したり、プライバシーに関する質問があれば
          <Link href="/ja/contact" className="text-amber-400 hover:underline">Contactページ</Link>
          からお問い合わせください。
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">本ポリシーの変更について</h2>
        <p>
          本ポリシーが変更された場合は、このページ上部の日付を更新します。
        </p>
      </div>
    </div>
  );
}
