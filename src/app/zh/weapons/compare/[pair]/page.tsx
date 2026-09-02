import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA_SOURCE, MAX_DAMAGE_VALUE } from "@/data/weapons";
import { buildWeaponPairs, getWeaponPair, buildVerdictZh } from "@/data/weapon-compare";
import { weaponNamesZh, weaponOverviewsZh } from "@/data/i18n/zh/weapons";
import { labels } from "@/data/i18n/labels";
import { SourceNote } from "@/components/SourceNote";
import { StatBar } from "@/components/StatBar";

const t = labels.zh;

export function generateStaticParams() {
  return buildWeaponPairs().map((p) => ({ pair: p.pairSlug }));
}

export async function generateMetadata(props: PageProps<"/zh/weapons/compare/[pair]">): Promise<Metadata> {
  const { pair } = await props.params;
  const found = getWeaponPair(pair);
  if (!found) return {};
  const nameA = weaponNamesZh[found.a.slug] ?? found.a.name;
  const nameB = weaponNamesZh[found.b.slug] ?? found.b.name;
  return {
    title: `${nameA} 对比 ${nameB} — RIVALS 武器对比`,
    description: `${nameA} 与 ${nameB} 对比：伤害、射速、弹药、装填时间和价格一目了然。`,
  };
}

const MAX_RPS = 1 / 0.07;

export default async function WeaponComparePageZh(props: PageProps<"/zh/weapons/compare/[pair]">) {
  const { pair } = await props.params;
  const found = getWeaponPair(pair);
  if (!found) notFound();
  const { a, b } = found;
  const nameA = weaponNamesZh[a.slug] ?? a.name;
  const nameB = weaponNamesZh[b.slug] ?? b.name;

  const verdict = buildVerdictZh(a, b, nameA, nameB);
  const fields: [string, string | undefined, string | undefined][] = [
    [t.category, t.categories[a.category], t.categories[b.category]],
    [t.cost, a.cost, b.cost],
    [t.damage, a.damage, b.damage],
    [t.fireRate, a.fireRate, b.fireRate],
    [t.ammo, a.ammo, b.ammo],
    [t.reload, a.reload, b.reload],
  ];

  const rpsA = a.fireRateValue ? 1 / a.fireRateValue : undefined;
  const rpsB = b.fireRateValue ? 1 / b.fireRateValue : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/zh/weapons" className="text-sm text-neutral-400 hover:text-white">
          {t.allWeapons}
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">
          {nameA} {t.vs} {nameB}
        </h1>
        <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
      </div>

      <div className="flex items-center justify-center gap-6">
        {[{ w: a, name: nameA }, { w: b, name: nameB }].map(({ w, name }, i) => (
          <div key={w.slug} className="flex items-center gap-3">
            <Link href={`/zh/weapons/${w.slug}`} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden group-hover:ring-1 group-hover:ring-amber-400/60">
                <Image src={`/weapons/${w.slug}.webp`} alt="" width={56} height={56} className="object-contain p-1.5" />
              </div>
              <span className="text-sm text-white font-medium">{name}</span>
            </Link>
            {i === 0 && <span className="text-neutral-500 text-sm">{t.vs}</span>}
          </div>
        ))}
      </div>

      {verdict.length > 0 && (
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/5 p-4 space-y-1.5">
          <h2 className="font-semibold text-white text-sm">{t.theNumbersSay}</h2>
          {verdict.map((line, i) => (
            <p key={i} className="text-sm text-neutral-300">{line}</p>
          ))}
        </div>
      )}

      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-3">
        {a.damageValue != null && b.damageValue != null && (
          <div className="space-y-2">
            <StatBar label={`${nameA} — ${t.damage}`} value={a.damageValue} max={MAX_DAMAGE_VALUE} displayValue={String(a.damageValue)} />
            <StatBar label={`${nameB} — ${t.damage}`} value={b.damageValue} max={MAX_DAMAGE_VALUE} displayValue={String(b.damageValue)} />
          </div>
        )}
        {rpsA && rpsB && (
          <div className="space-y-2">
            <StatBar label={`${nameA} — ${t.fireRate}`} value={rpsA} max={MAX_RPS} displayValue={`${rpsA.toFixed(1)}/秒`} colorClass="bg-blue-400" />
            <StatBar label={`${nameB} — ${t.fireRate}`} value={rpsB} max={MAX_RPS} displayValue={`${rpsB.toFixed(1)}/秒`} colorClass="bg-blue-400" />
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead className="bg-neutral-900 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-neutral-400">属性</th>
              <th className="px-4 py-2 font-medium text-white">{nameA}</th>
              <th className="px-4 py-2 font-medium text-white">{nameB}</th>
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
        {[{ w: a, name: nameA }, { w: b, name: nameB }].map(({ w, name }) => (
          <div key={w.slug} className="space-y-1.5">
            <h3 className="font-medium text-white text-sm">{name}</h3>
            {weaponOverviewsZh[w.slug] ? (
              <p className="text-sm text-neutral-400 leading-relaxed">{weaponOverviewsZh[w.slug]}</p>
            ) : (
              <p className="text-sm text-neutral-500 italic">{t.noOverview}</p>
            )}
          </div>
        ))}
      </div>

      <Link href="/zh/tools/weapon-comparison" className="inline-block text-sm text-amber-400 hover:underline">
        {t.compareAnother}
      </Link>
    </div>
  );
}
