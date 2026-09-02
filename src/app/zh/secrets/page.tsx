import type { Metadata } from "next";
import { secrets, SECRETS_SOURCE, type SecretCategory } from "@/data/secrets";
import { secretsZh, secretCategoryLabelsZh } from "@/data/i18n/zh/secrets";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 隐藏机制、彩蛋与秘密",
  description: "普通游玩发现不了的 RIVALS 内容——彩蛋、未公开的武器交互、进阶走位技巧、隐藏区域和开发者冷知识,全部标注来源。",
};

const CATEGORY_ORDER: SecretCategory[] = ["movement-tech", "weapon-quirk", "easter-egg", "secret-area", "dev-trivia"];

export default function SecretsPageZh() {
  return (
    <div className="space-y-8">
      <PageBanner
        src="/media/gameplay-shooting-range.jpg"
        alt="The RIVALS Shooting Range, which hides a secret boss arena behind it"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">隐藏机制、彩蛋与秘密</h1>
        <SourceNote label={SECRETS_SOURCE.label} lastChecked={SECRETS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          {secrets.length} 条普通游玩发现不了的 RIVALS 内容——数据表里没写的机制细节、游戏从不主动教你的技巧、隐藏房间,以及它们背后的开发故事。每一条都附有来源链接。
        </p>
      </div>

      {CATEGORY_ORDER.map((cat) => {
        const list = secrets.filter((s) => s.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{secretCategoryLabelsZh[cat]}</h2>
            <div className="space-y-2">
              {list.map((s) => {
                const tr = secretsZh[s.title];
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
                      来源 →
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
