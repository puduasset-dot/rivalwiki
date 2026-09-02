import type { Metadata } from "next";
import { SETTINGS_SOURCE } from "@/data/settings";
import { fovGuidanceZh, sensitivityStepsZh, recommendedTogglesZh } from "@/data/i18n/zh/settings";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS 推荐设置",
  description: "RIVALS 推荐设置:各模式 FOV、灵敏度测试方法、开关项建议。",
};

export default function SettingsPageZh() {
  return (
    <div className="space-y-8">
      <PageBanner src="/media/gameplay-shooting-range.jpg" alt="RIVALS shooting range" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS 推荐设置</h1>
        <SourceNote label={SETTINGS_SOURCE.label} lastChecked={SETTINGS_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          没有唯一的最佳灵敏度——与其照搬职业选手的数值,不如用下面的方法自己测出来。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">各模式推荐 FOV</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">模式</th>
                <th className="px-4 py-2 font-medium">FOV</th>
                <th className="px-4 py-2 font-medium">原因</th>
              </tr>
            </thead>
            <tbody>
              {fovGuidanceZh.map((f) => (
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
        <h2 className="font-semibold text-white text-lg">如何找到自己的灵敏度</h2>
        <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1">
          {sensitivityStepsZh.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">推荐开关设置</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">设置项</th>
                <th className="px-4 py-2 font-medium">建议值</th>
                <th className="px-4 py-2 font-medium">原因</th>
              </tr>
            </thead>
            <tbody>
              {recommendedTogglesZh.map((t) => (
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
