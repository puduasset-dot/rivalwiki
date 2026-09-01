import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { weapons, getWeapon, DATA_SOURCE, MAX_DAMAGE_VALUE } from "@/data/weapons";
import { SourceNote } from "@/components/SourceNote";
import { StatBar } from "@/components/StatBar";

export function generateStaticParams() {
  return weapons.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/weapons/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const weapon = getWeapon(slug);
  if (!weapon) return {};
  return {
    title: `${weapon.name} — RIVALS Weapon Stats`,
    description: weapon.overview
      ? weapon.overview.slice(0, 155)
      : `${weapon.name} stats: damage ${weapon.damage}, fire rate ${weapon.fireRate}.`,
  };
}

const MAX_RPS = 1 / 0.07; // fastest fire rate in the dataset (Uzi, 0.07s)

export default async function WeaponPage(props: PageProps<"/weapons/[slug]">) {
  const { slug } = await props.params;
  const weapon = getWeapon(slug);
  if (!weapon) notFound();

  const stats: [string, string | undefined][] = [
    ["Category", weapon.category],
    ["Cost", weapon.cost],
    ["Damage", weapon.damage],
    ["Fire Rate", weapon.fireRate],
    ["Ammo", weapon.ammo],
    ["Reload", weapon.reload],
  ];

  const rps = weapon.fireRateValue ? 1 / weapon.fireRateValue : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/weapons" className="text-sm text-neutral-400 hover:text-white">
          ← All weapons
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="shrink-0 w-16 h-16 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden">
          <Image src={`/weapons/${weapon.slug}.webp`} alt="" width={64} height={64} className="object-contain p-1.5" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white">{weapon.name}</h1>
          <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
        </div>
      </div>

      {weapon.overview && (
        <div className="space-y-2">
          <h2 className="font-semibold text-white text-lg">Overview</h2>
          <p className="text-sm text-neutral-300 leading-relaxed">{weapon.overview}</p>
        </div>
      )}

      {(weapon.damageValue || rps) && (
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-3">
          {weapon.damageValue && (
            <StatBar
              label="Damage (close range)"
              value={weapon.damageValue}
              max={MAX_DAMAGE_VALUE}
              displayValue={String(weapon.damageValue)}
            />
          )}
          {rps && (
            <StatBar
              label="Fire rate"
              value={rps}
              max={MAX_RPS}
              displayValue={`${rps.toFixed(1)} shots/sec`}
              colorClass="bg-blue-400"
            />
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

      {weapon.notes && (
        <p className="text-sm text-neutral-400 border-l-2 border-neutral-700 pl-3">
          {weapon.notes}
        </p>
      )}

      <Link
        href={`/tools/weapon-comparison?a=${weapon.slug}`}
        className="inline-block text-sm text-amber-400 hover:underline"
      >
        Compare {weapon.name} with another weapon →
      </Link>
    </div>
  );
}
