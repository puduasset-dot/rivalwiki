import type { Metadata } from "next";
import { codes, CODES_SOURCE, HOW_TO_REDEEM } from "@/data/codes";
import { SourceNote } from "@/components/SourceNote";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "RIVALS Codes",
  description: "All active RIVALS (Roblox) codes and what each one rewards.",
};

export default function CodesPage() {
  return (
    <div className="space-y-6">
      <PageBanner src="/media/rivals-logo-screen.jpg" alt="RIVALS title screen" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Codes</h1>
        <SourceNote label={CODES_SOURCE.label} lastChecked={CODES_SOURCE.lastChecked} />
        <p className="text-sm text-neutral-400">
          Codes expire quickly and outlets don&apos;t always agree on what&apos;s
          still live — try a code immediately if you want it to land.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead className="bg-neutral-900 text-neutral-400 text-left">
            <tr>
              <th className="px-4 py-2 font-medium">Code</th>
              <th className="px-4 py-2 font-medium">Reward</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => (
              <tr key={c.code} className="border-t border-neutral-800">
                <td className="px-4 py-2 font-mono text-amber-400">{c.code}</td>
                <td className="px-4 py-2 text-neutral-200">{c.reward}</td>
                <td className="px-4 py-2">
                  <span
                    className={
                      c.status === "active"
                        ? "text-green-400"
                        : "text-neutral-500"
                    }
                  >
                    {c.status === "active" ? "Active" : "Expired"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-white">How to redeem</h2>
        <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1">
          {HOW_TO_REDEEM.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
