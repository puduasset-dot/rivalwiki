import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA_SOURCE, MAX_DAMAGE_VALUE } from "@/data/weapons";
import { buildWeaponPairs, getWeaponPair, buildVerdict } from "@/data/weapon-compare";
import { SourceNote } from "@/components/SourceNote";
import { StatBar } from "@/components/StatBar";

export function generateStaticParams() {
  return buildWeaponPairs().map((p) => ({ pair: p.pairSlug }));
}

export async function generateMetadata(props: PageProps<"/weapons/compare/[pair]">): Promise<Metadata> {
  const { pair } = await props.params;
  const found = getWeaponPair(pair);
  if (!found) return {};
  const { a, b } = found;
  return {
    title: `${a.name} vs ${b.name} — RIVALS Weapon Comparison`,
    description: `${a.name} vs ${b.name} in RIVALS: damage, fire rate, ammo, reload, and cost compared side by side.`,
  };
}

const MAX_RPS = 1 / 0.07;

export default async function WeaponComparePage(props: PageProps<"/weapons/compare/[pair]">) {
  const { pair } = await props.params;
  const found = getWeaponPair(pair);
  if (!found) notFound();
  const { a, b } = found;

  const verdict = buildVerdict(a, b);
  const fields: [string, string | undefined, string | undefined][] = [
    ["Category", a.category, b.category],
    ["Cost", a.cost, b.cost],
    ["Damage", a.damage, b.damage],
    ["Fire Rate", a.fireRate, b.fireRate],
    ["Ammo", a.ammo, b.ammo],
    ["Reload", a.reload, b.reload],
  ];

  const rpsA = a.fireRateValue ? 1 / a.fireRateValue : undefined;
  const rpsB = b.fireRateValue ? 1 / b.fireRateValue : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/weapons" className="text-sm text-neutral-400 hover:text-white">
          ← All weapons
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">
          {a.name} vs {b.name}
        </h1>
        <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
      </div>

      <div className="flex items-center justify-center gap-6">
        {[a, b].map((w, i) => (
          <div key={w.slug} className="flex items-center gap-3">
            <Link href={`/weapons/${w.slug}`} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden group-hover:ring-1 group-hover:ring-amber-400/60">
                <Image src={`/weapons/${w.slug}.webp`} alt="" width={56} height={56} className="object-contain p-1.5" />
              </div>
              <span className="text-sm text-white font-medium">{w.name}</span>
            </Link>
            {i === 0 && <span className="text-neutral-500 text-sm">vs</span>}
          </div>
        ))}
      </div>

      {verdict.length > 0 && (
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/5 p-4 space-y-1.5">
          <h2 className="font-semibold text-white text-sm">The numbers say</h2>
          {verdict.map((line, i) => (
            <p key={i} className="text-sm text-neutral-300">{line}</p>
          ))}
        </div>
      )}

      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-3">
        {a.damageValue != null && b.damageValue != null && (
          <div className="space-y-2">
            <StatBar label={`${a.name} — damage`} value={a.damageValue} max={MAX_DAMAGE_VALUE} displayValue={String(a.damageValue)} />
            <StatBar label={`${b.name} — damage`} value={b.damageValue} max={MAX_DAMAGE_VALUE} displayValue={String(b.damageValue)} />
          </div>
        )}
        {rpsA && rpsB && (
          <div className="space-y-2">
            <StatBar label={`${a.name} — fire rate`} value={rpsA} max={MAX_RPS} displayValue={`${rpsA.toFixed(1)}/s`} colorClass="bg-blue-400" />
            <StatBar label={`${b.name} — fire rate`} value={rpsB} max={MAX_RPS} displayValue={`${rpsB.toFixed(1)}/s`} colorClass="bg-blue-400" />
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead className="bg-neutral-900 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-neutral-400">Stat</th>
              <th className="px-4 py-2 font-medium text-white">{a.name}</th>
              <th className="px-4 py-2 font-medium text-white">{b.name}</th>
            </tr>
          </thead>
          <tbody>
            {fields.map(([label, va, vb]) => (
              <tr key={label} className="border-t border-neutral-800">
                <td className="px-4 py-2 text-neutral-400">{label}</td>
                <td className="px-4 py-2 text-neutral-200">{va ?? "—"}</td>
                <td className="px-4 py-2 text-neutral-200">{vb ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[a, b].map((w) => (
          <div key={w.slug} className="space-y-1.5">
            <h3 className="font-medium text-white text-sm">{w.name}</h3>
            {w.overview ? (
              <p className="text-sm text-neutral-400 leading-relaxed">{w.overview}</p>
            ) : (
              <p className="text-sm text-neutral-500 italic">No overview written up yet.</p>
            )}
            {w.notes && <p className="text-xs text-neutral-500 border-l-2 border-neutral-700 pl-2">{w.notes}</p>}
          </div>
        ))}
      </div>

      <Link href="/tools/weapon-comparison" className="inline-block text-sm text-amber-400 hover:underline">
        Compare a different pair of weapons →
      </Link>
    </div>
  );
}
