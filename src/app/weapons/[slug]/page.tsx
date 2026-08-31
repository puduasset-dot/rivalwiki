import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { weapons, getWeapon, DATA_SOURCE } from "@/data/weapons";
import { SourceNote } from "@/components/SourceNote";

export function generateStaticParams() {
  return weapons.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/weapons/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const weapon = getWeapon(slug);
  if (!weapon) return {};
  return {
    title: `${weapon.name} — RIVALS Weapon Stats`,
    description: `${weapon.name} stats: damage ${weapon.damage}, fire rate ${weapon.fireRate}.`,
  };
}

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

  return (
    <div className="space-y-6">
      <div>
        <Link href="/weapons" className="text-sm text-neutral-400 hover:text-white">
          ← All weapons
        </Link>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{weapon.name}</h1>
        <SourceNote label={DATA_SOURCE.label} url={DATA_SOURCE.url} lastChecked={DATA_SOURCE.lastChecked} />
      </div>

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
