import type { Metadata } from "next";
import { secrets, SECRETS_SOURCE, SECRET_CATEGORY_LABELS, type SecretCategory } from "@/data/secrets";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Hidden Mechanics, Easter Eggs & Secrets",
  description:
    "Everything hidden in RIVALS that isn't obvious from normal play — easter eggs, undocumented weapon interactions, advanced movement tech, secret areas, and developer trivia, all sourced.",
};

const CATEGORY_ORDER: SecretCategory[] = ["movement-tech", "weapon-quirk", "easter-egg", "secret-area", "dev-trivia"];

export default function SecretsPage() {
  return (
    <div className="space-y-8">
      <PageBanner
        src="/media/gameplay-shooting-range.jpg"
        alt="The RIVALS Shooting Range, which hides a secret boss arena behind it"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">Hidden Mechanics, Easter Eggs &amp; Secrets</h1>
        <SourceNote label={SECRETS_SOURCE.label} lastChecked={SECRETS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          {secrets.length} things about RIVALS that aren&apos;t obvious from normal play — mechanical
          quirks the stat sheets don&apos;t mention, tech the game never teaches you, secret rooms, and
          the developer trivia behind them. Every entry links to where it came from.
        </p>
      </div>

      {CATEGORY_ORDER.map((cat) => {
        const list = secrets.filter((s) => s.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="font-semibold text-white text-lg">{SECRET_CATEGORY_LABELS[cat]}</h2>
            <div className="space-y-2">
              {list.map((s) => (
                <div key={s.title} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                  <p className="font-medium text-white">{s.title}</p>
                  <p className="text-sm text-neutral-400 mt-1">{s.description}</p>
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-neutral-500 hover:text-amber-400 underline"
                  >
                    Source →
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
