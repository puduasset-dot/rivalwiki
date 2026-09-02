import type { Metadata } from "next";
import { secrets, SECRETS_SOURCE, type SecretCategory } from "@/data/secrets";
import { secretsJa, secretCategoryLabelsJa } from "@/data/i18n/ja/secrets";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 隠し要素・イースターエッグ・裏技",
  description: "通常プレイでは気づかないRIVALSの隠し要素——イースターエッグ、非公開の武器の相互作用、上級移動テク、隠しエリア、開発者トリビアを出典付きで紹介。",
};

const CATEGORY_ORDER: SecretCategory[] = ["movement-tech", "weapon-quirk", "easter-egg", "secret-area", "dev-trivia"];

export default function SecretsPageJa() {
  return (
    <div className="space-y-8">
      <PageBanner
        src="/media/gameplay-shooting-range.jpg"
        alt="The RIVALS Shooting Range, which hides a secret boss arena behind it"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">隠し要素・イースターエッグ・裏技</h1>
        <SourceNote label={SECRETS_SOURCE.label} lastChecked={SECRETS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          {secrets.length} 件の、通常プレイでは気づかないRIVALSの要素——ステータス表に載っていない仕様上の癖、ゲームが教えてくれないテク、隠し部屋、そしてその裏にある開発者トリビア。各項目には出典元へのリンクがある。
        </p>
      </div>

      {CATEGORY_ORDER.map((cat) => {
        const list = secrets.filter((s) => s.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{secretCategoryLabelsJa[cat]}</h2>
            <div className="space-y-2">
              {list.map((s) => {
                const tr = secretsJa[s.title];
                return (
                  <div key={s.title} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                    <p className="font-medium text-white">{tr?.title ?? s.title}</p>
                    <p className="text-sm text-neutral-400 mt-1">{tr?.description ?? s.description}</p>
                    <a
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-neutral-500 hover:text-amber-400 underline"
                    >
                      出典 →
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
