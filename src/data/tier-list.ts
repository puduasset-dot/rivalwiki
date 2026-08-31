export type Tier = "S" | "A" | "B" | "C";

export interface TierEntry {
  weaponSlug: string;
  weaponName: string;
  tier: Tier;
  reason: string;
}

// This is explicitly an AGGREGATE of what multiple outlets are currently
// saying, not an in-house playtest ranking — other RIVALS sites disagree
// with each other on tier placement, so we cite reasoning per entry instead
// of presenting a bare list. Weapons we found no meta commentary for are
// left off rather than guessed at; see /weapons for the full roster.
export const TIER_LIST_SOURCE = {
  label: "Aggregated from BloxSpot, U7BUY, DungeonPath, community reporting",
  lastChecked: "2026-08-31",
};

export const tierList: TierEntry[] = [
  {
    weaponSlug: "permafrost",
    weaponName: "Permafrost",
    tier: "S",
    reason: "2-round burst at 14 dmg/bullet with a freeze/slow effect (up to -50% move speed) that locks opponents down. Contraband rarity, 700 Keys.",
  },
  {
    weaponSlug: "paintball-gun",
    weaponName: "Paintball Gun",
    tier: "S",
    reason: "22 damage per shot with the fastest practical fire rate among primaries; rewards tracking aim at the mid-range most fights happen at.",
  },
  {
    weaponSlug: "sniper",
    weaponName: "Sniper",
    tier: "A",
    reason: "50 body damage, reportedly a guaranteed kill on headshot. High skill ceiling — the -20% move speed penalty punishes bad positioning.",
  },
  {
    weaponSlug: "assault-rifle",
    weaponName: "Assault Rifle",
    tier: "A",
    reason: "Best free weapon in the game: 12 dmg at a 0.10s fire rate with a 20/100 ammo pool. Season 3 traded a damage nerf (13→12) for a fire-rate buff (0.11s→0.10s).",
  },
  {
    weaponSlug: "compound-bow",
    weaponName: "Compound Bow",
    tier: "A",
    reason: "High skill/high reward: pierces Riot Shields via its Heavy Draw mechanic, but low projectile velocity means shots must be heavily led.",
  },
  {
    weaponSlug: "burst-rifle",
    weaponName: "Burst Rifle",
    tier: "B",
    reason: "Strong close-mid range value at only 25 Keys, even after the March 2026 Lucky Update nerfed body damage.",
  },
  {
    weaponSlug: "minigun",
    weaponName: "Minigun",
    tier: "B",
    reason: "Shreds groups on sustained fire, but spin-up time and a mobility penalty make it weak in 1v1 openings.",
  },
];
