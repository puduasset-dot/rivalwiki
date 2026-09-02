import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { weapons, getWeapon, DATA_SOURCE, MAX_DAMAGE_VALUE } from "@/data/weapons";
import { weaponNamesJa, weaponOverviewsJa } from "@/data/i18n/ja/weapons";
import { labels } from "@/data/i18n/labels";
import { SourceNote } from "@/components/SourceNote";
import { StatBar } from "@/components/StatBar";

const t = labels.ja;

export function generateStaticParams() {
  return weapons.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/ja/weapons/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const weapon = getWeapon(slug);
  if (!weapon) return {};
  const name = weaponNamesJa[slug] ?? weapon.name;
  const overview = weaponOverviewsJa[slug];
  return {
    title: `${name} — RIVALS 武器ステータス`,
    description: overview ? overview.slice(0, 100) : `${name} のステータス: ダメージ ${weapon.damage}、連射速度 ${weapon.fireRate}。`,
  };
}

const MAX_RPS = 1 / 0.07;

export default async function WeaponPageJa(props: PageProps<"/ja/weapons/[slug]">) {
  const { slug } = await props.params;
  const weapon = getWeapon(slug);
  if (!weapon) notFound();
  const name = weaponNamesJa[slug] ?? weapon.name;
  const overview = weaponOverviewsJa[slug];

  const stats: [string, string | undefined][] = [
    [t.category, t.categories[weapon.category]],
    [t.cost, weapon.cost],
    [t.damage, weapon.damage],
    [t.fireRate, weapon.fireRate],
    [t.ammo, weapon.ammo],
    [t.reload, weapon.reload],
  ];

  const rps = weapon.fireRateValue ? 1 / weapon.fireRateValue : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/ja/weapons" className="text-sm text-neutral-400 hover:text-white">
          {t.allWeapons}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="shrink-0 w-16 h-16 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden">
          <Image src={`/weapons/${weapon.slug}.webp`} alt="" width={64} height={64} className="object-contain p-1.5" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white">{name}</h1>
          <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
        </div>
      </div>

      {overview && (
        <div className="space-y-2">
          <h2 className="font-semibold text-white text-lg">{t.overview}</h2>
          <p className="text-sm text-neutral-300 leading-relaxed">{overview}</p>
        </div>
      )}

      {(weapon.damageValue || rps) && (
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-3">
          {weapon.damageValue && (
            <StatBar label={`${t.damage}（近距離）`} value={weapon.damageValue} max={MAX_DAMAGE_VALUE} displayValue={String(weapon.damageValue)} />
          )}
          {rps && (
            <StatBar label={t.fireRate} value={rps} max={MAX_RPS} displayValue={`${rps.toFixed(1)} 発/秒`} colorClass="bg-blue-400" />
          )}
        </div>
      )}

      <div className="rounded-lg border border-neutral-800 overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {stats
              .filter(([, v]) => v)
              .map(([label, value]) => (
                <tr key={label} className="border-t border-neutral-800 first:border-t-0">
                  <td className="px-4 py-2 text-neutral-400 w-1/3">{label}</td>
                  <td className="px-4 py-2 text-white">{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Link href={`/tools/weapon-comparison?a=${weapon.slug}`} className="inline-block text-sm text-amber-400 hover:underline">
        {t.compareWith(name)}
      </Link>
    </div>
  );
}
