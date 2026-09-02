import { weapons, weaponsByCategory, type Weapon, type WeaponCategory } from "./weapons";

// Utility items (grenades, gadgets) aren't naturally "vs" content the way guns/melees
// are, so comparison pages are only generated for these three categories.
const COMPARABLE_CATEGORIES: WeaponCategory[] = ["primary", "secondary", "melee"];

export interface WeaponPair {
  pairSlug: string;
  a: Weapon;
  b: Weapon;
}

export function buildWeaponPairs(): WeaponPair[] {
  const pairs: WeaponPair[] = [];
  for (const category of COMPARABLE_CATEGORIES) {
    const list = weaponsByCategory(category).slice().sort((x, y) => x.slug.localeCompare(y.slug));
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        pairs.push({ pairSlug: `${list[i].slug}-vs-${list[j].slug}`, a: list[i], b: list[j] });
      }
    }
  }
  return pairs;
}

export function getWeaponPair(pairSlug: string): WeaponPair | undefined {
  const parts = pairSlug.split("-vs-");
  if (parts.length !== 2) return undefined;
  const [aSlug, bSlug] = parts;
  const a = weapons.find((w) => w.slug === aSlug);
  const b = weapons.find((w) => w.slug === bSlug);
  if (!a || !b) return undefined;
  return { pairSlug, a, b };
}

/** Extracts a numeric Keys cost for comparison. Returns null for "Free" is handled separately; null means unparseable (e.g. "Unconfirmed"). */
export function parseCostKeys(cost: string): number | null {
  if (/free/i.test(cost)) return 0;
  const match = cost.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

export function buildVerdict(a: Weapon, b: Weapon): string[] {
  const lines: string[] = [];

  if (a.damageValue != null && b.damageValue != null && a.damageValue !== b.damageValue) {
    const [harder, softer] = a.damageValue > b.damageValue ? [a, b] : [b, a];
    const diff = Math.abs(a.damageValue - b.damageValue);
    lines.push(`${harder.name} hits harder per shot — ${harder.damageValue} vs ${softer.damageValue} (a ${diff} point gap).`);
  }

  if (a.fireRateValue && b.fireRateValue && a.fireRateValue !== b.fireRateValue) {
    const rpsA = 1 / a.fireRateValue;
    const rpsB = 1 / b.fireRateValue;
    const [faster, slower] = rpsA > rpsB ? [a, b] : [b, a];
    lines.push(`${faster.name} fires faster — roughly ${(faster === a ? rpsA : rpsB).toFixed(1)} shots/sec vs ${(slower === a ? rpsA : rpsB).toFixed(1)} for ${slower.name}.`);
  }

  if (a.damageValue != null && b.damageValue != null && a.fireRateValue && b.fireRateValue) {
    const dpsA = a.damageValue / a.fireRateValue;
    const dpsB = b.damageValue / b.fireRateValue;
    if (Math.abs(dpsA - dpsB) > 0.5) {
      const [higher, lower] = dpsA > dpsB ? [a, b] : [b, a];
      const hVal = higher === a ? dpsA : dpsB;
      const lVal = lower === a ? dpsA : dpsB;
      lines.push(`On theoretical sustained DPS (damage ÷ time between shots, ignoring falloff and reload), ${higher.name} comes out ahead at ~${hVal.toFixed(0)}/s vs ~${lVal.toFixed(0)}/s for ${lower.name}.`);
    }
  }

  const costA = parseCostKeys(a.cost);
  const costB = parseCostKeys(b.cost);
  if (costA != null && costB != null && costA !== costB) {
    const [cheaper, pricier] = costA < costB ? [a, b] : [b, a];
    lines.push(`${cheaper.name} is the cheaper unlock (${cheaper.cost} vs ${pricier.cost}).`);
  }

  return lines;
}

/** Same numeric logic as buildVerdict, localized sentence templates, name substitution for translated weapon names. */
export function buildVerdictJa(a: Weapon, b: Weapon, nameA: string, nameB: string): string[] {
  const lines: string[] = [];
  const nameOf = (w: Weapon) => (w === a ? nameA : nameB);

  if (a.damageValue != null && b.damageValue != null && a.damageValue !== b.damageValue) {
    const [harder, softer] = a.damageValue > b.damageValue ? [a, b] : [b, a];
    const diff = Math.abs(a.damageValue - b.damageValue);
    lines.push(`${nameOf(harder)}の方が一撃のダメージが高い — ${harder.damageValue} 対 ${softer.damageValue}（差は ${diff}）。`);
  }

  if (a.fireRateValue && b.fireRateValue && a.fireRateValue !== b.fireRateValue) {
    const rpsA = 1 / a.fireRateValue;
    const rpsB = 1 / b.fireRateValue;
    const [faster, slower] = rpsA > rpsB ? [a, b] : [b, a];
    lines.push(`${nameOf(faster)}の方が連射速度が速い — 約 ${(faster === a ? rpsA : rpsB).toFixed(1)} 発/秒 対 ${nameOf(slower)}の ${(slower === a ? rpsA : rpsB).toFixed(1)} 発/秒。`);
  }

  if (a.damageValue != null && b.damageValue != null && a.fireRateValue && b.fireRateValue) {
    const dpsA = a.damageValue / a.fireRateValue;
    const dpsB = b.damageValue / b.fireRateValue;
    if (Math.abs(dpsA - dpsB) > 0.5) {
      const [higher, lower] = dpsA > dpsB ? [a, b] : [b, a];
      const hVal = higher === a ? dpsA : dpsB;
      const lVal = lower === a ? dpsA : dpsB;
      lines.push(`理論上の持続DPS（ダメージ ÷ 発射間隔、被弾距離減衰とリロードを除く）では、${nameOf(higher)}が優勢 — 約 ${hVal.toFixed(0)}/秒 対 ${nameOf(lower)}の約 ${lVal.toFixed(0)}/秒。`);
    }
  }

  const costA = parseCostKeys(a.cost);
  const costB = parseCostKeys(b.cost);
  if (costA != null && costB != null && costA !== costB) {
    const [cheaper, pricier] = costA < costB ? [a, b] : [b, a];
    lines.push(`${nameOf(cheaper)}の方が安く解放できる（${cheaper.cost} 対 ${pricier.cost}）。`);
  }

  return lines;
}

export function buildVerdictZh(a: Weapon, b: Weapon, nameA: string, nameB: string): string[] {
  const lines: string[] = [];
  const nameOf = (w: Weapon) => (w === a ? nameA : nameB);

  if (a.damageValue != null && b.damageValue != null && a.damageValue !== b.damageValue) {
    const [harder, softer] = a.damageValue > b.damageValue ? [a, b] : [b, a];
    const diff = Math.abs(a.damageValue - b.damageValue);
    lines.push(`${nameOf(harder)}的单发伤害更高 —— ${harder.damageValue} 对 ${softer.damageValue}（相差 ${diff} 点）。`);
  }

  if (a.fireRateValue && b.fireRateValue && a.fireRateValue !== b.fireRateValue) {
    const rpsA = 1 / a.fireRateValue;
    const rpsB = 1 / b.fireRateValue;
    const [faster, slower] = rpsA > rpsB ? [a, b] : [b, a];
    lines.push(`${nameOf(faster)}的射速更快 —— 约每秒 ${(faster === a ? rpsA : rpsB).toFixed(1)} 发,而${nameOf(slower)}是每秒 ${(slower === a ? rpsA : rpsB).toFixed(1)} 发。`);
  }

  if (a.damageValue != null && b.damageValue != null && a.fireRateValue && b.fireRateValue) {
    const dpsA = a.damageValue / a.fireRateValue;
    const dpsB = b.damageValue / b.fireRateValue;
    if (Math.abs(dpsA - dpsB) > 0.5) {
      const [higher, lower] = dpsA > dpsB ? [a, b] : [b, a];
      const hVal = higher === a ? dpsA : dpsB;
      const lVal = lower === a ? dpsA : dpsB;
      lines.push(`按理论持续 DPS 计算（伤害 ÷ 射击间隔,不计算距离衰减和装填时间）,${nameOf(higher)}更占优势 —— 约 ${hVal.toFixed(0)}/秒,而${nameOf(lower)}约为 ${lVal.toFixed(0)}/秒。`);
    }
  }

  const costA = parseCostKeys(a.cost);
  const costB = parseCostKeys(b.cost);
  if (costA != null && costB != null && costA !== costB) {
    const [cheaper, pricier] = costA < costB ? [a, b] : [b, a];
    lines.push(`${nameOf(cheaper)}解锁更便宜（${cheaper.cost} 对 ${pricier.cost}）。`);
  }

  return lines;
}
