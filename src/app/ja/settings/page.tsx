import type { Metadata } from "next";
import { SETTINGS_SOURCE } from "@/data/settings";
import { fovGuidanceJa, sensitivityStepsJa, recommendedTogglesJa } from "@/data/i18n/ja/settings";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS おすすめ設定",
  description: "RIVALSのおすすめ設定:モード別FOV、感度の見つけ方、トグル設定。",
};

export default function SettingsPageJa() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/gameplay-shooting-range.jpg" alt="RIVALS shooting range" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS おすすめ設定</h1>
        <SourceNote label={SETTINGS_SOURCE.label} lastChecked={SETTINGS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          唯一絶対の感度というものはない——プロの数値をそのまま真似るのではなく、下の測定方法を使ってほしい。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">モード別FOV</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">モード</th>
                <th className="px-4 py-2 font-medium">FOV</th>
                <th className="px-4 py-2 font-medium">理由</th>
              </tr>
            </thead>
            <tbody>
              {fovGuidanceJa.map((f) => (
                <tr key={f.mode} className="border-t border-neutral-800">
                  <td className="px-4 py-2 font-medium text-white">{f.mode}</td>
                  <td className="px-4 py-2 text-amber-400">{f.range}</td>
                  <td className="px-4 py-2 text-neutral-400">{f.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">感度の見つけ方</h2>
        <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1">
          {sensitivityStepsJa.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">おすすめトグル設定</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">設定</th>
                <th className="px-4 py-2 font-medium">値</th>
                <th className="px-4 py-2 font-medium">理由</th>
              </tr>
            </thead>
            <tbody>
              {recommendedTogglesJa.map((t) => (
                <tr key={t.setting} className="border-t border-neutral-800">
                  <td className="px-4 py-2 font-medium text-white">{t.setting}</td>
                  <td className="px-4 py-2 text-amber-400">{t.value}</td>
                  <td className="px-4 py-2 text-neutral-400">{t.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
