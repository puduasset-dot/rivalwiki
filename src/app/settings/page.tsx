import type { Metadata } from "next";
import { FOV_GUIDANCE, SENSITIVITY_STEPS, RECOMMENDED_TOGGLES, SETTINGS_SOURCE } from "@/data/settings";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Best Settings",
  description: "Recommended RIVALS settings: FOV by mode, sensitivity testing method, and toggle recommendations.",
};

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/gameplay-shooting-range.jpg" alt="RIVALS shooting range" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Best Settings</h1>
        <SourceNote label={SETTINGS_SOURCE.label} lastChecked={SETTINGS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          There&apos;s no single best sensitivity — it depends on your mouse
          DPI. Use the testing method below instead of copying a pro&apos;s
          exact numbers.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">FOV by mode</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">Mode</th>
                <th className="px-4 py-2 font-medium">FOV</th>
                <th className="px-4 py-2 font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              {FOV_GUIDANCE.map((f) => (
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
        <h2 className="font-semibold text-white text-lg">Finding your sensitivity</h2>
        <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1">
          {SENSITIVITY_STEPS.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">Recommended toggles</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">Setting</th>
                <th className="px-4 py-2 font-medium">Value</th>
                <th className="px-4 py-2 font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              {RECOMMENDED_TOGGLES.map((t) => (
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
