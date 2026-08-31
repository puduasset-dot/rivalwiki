export type WeaponCategory = "primary" | "secondary" | "melee" | "utility";

export interface Weapon {
  slug: string;
  name: string;
  category: WeaponCategory;
  cost: string;
  damage: string;
  fireRate: string;
  ammo?: string;
  reload?: string;
  notes?: string;
}

// Source: BloxGuidesGG weapons database (synced from the RIVALS Fandom wiki),
// cross-checked against community reporting. Not pulled from an official
// Nosniy Games stat sheet — treat as community-verified, not first-party.
export const DATA_SOURCE = {
  label: "BloxGuidesGG weapons database (community, synced from RIVALS Fandom wiki)",
  url: "https://bloxguidesgg.com/games/rivals/wiki/weapons",
  lastChecked: "2026-08-31",
};

export const weapons: Weapon[] = [
  {
    slug: "assault-rifle",
    name: "Assault Rifle",
    category: "primary",
    cost: "Free",
    damage: "12 → 3 (falloff)",
    fireRate: "0.10s",
    ammo: "20 / 100",
    reload: "1.56s",
    notes: "Default starter primary, reliable at all ranges.",
  },
  {
    slug: "bow",
    name: "Bow",
    category: "primary",
    cost: "15 Keys",
    damage: "30 / 37.5 / 45 / 60 (draw stages)",
    fireRate: "0.25s",
    ammo: "1 / 30",
    reload: "0.19s",
  },
  {
    slug: "shotgun",
    name: "Shotgun",
    category: "primary",
    cost: "20 Keys",
    damage: "8x10 → 2.5x10 (falloff)",
    fireRate: "0.70s",
    ammo: "7 / 35",
  },
  {
    slug: "burst-rifle",
    name: "Burst Rifle",
    category: "primary",
    cost: "25 Keys",
    damage: "20 → 5 (falloff)",
    fireRate: "0.60s",
    ammo: "12 / 60",
    reload: "1.60s",
    notes: "Body damage was reported nerfed 20→18 in the March 2026 \"Lucky Update\" — pending confirmation against current patch notes.",
  },
  {
    slug: "rpg",
    name: "RPG",
    category: "primary",
    cost: "25 Keys",
    damage: "50",
    fireRate: "0.25s",
    ammo: "1 / 17",
    reload: "1.04s",
    notes: "Explosive splash, applies a movement speed slow on hit.",
  },
  {
    slug: "sniper",
    name: "Sniper",
    category: "primary",
    cost: "75 Keys",
    damage: "50 body / reported one-shot headshot",
    fireRate: "1.50s",
    ammo: "4 / 12",
    reload: "1.80s",
    notes: "Movement speed penalty while equipped.",
  },
  {
    slug: "permafrost",
    name: "Permafrost",
    category: "primary",
    cost: "700 Keys",
    damage: "14 per bullet (2-round burst)",
    fireRate: "Burst",
    notes: "Contraband rarity. On-hit slow (up to -50% move speed) and a freeze ability. Full stat sheet (reload, magazine, range) not yet confirmed from an official source — flagged for follow-up.",
  },
  {
    slug: "paintball-gun",
    name: "Paintball Gun",
    category: "primary",
    cost: "Unconfirmed",
    damage: "22 per shot",
    fireRate: "Fast (exact figure unconfirmed)",
    notes: "Prime rarity. Full stat sheet not yet confirmed from an official source — flagged for follow-up.",
  },
  {
    slug: "compound-bow",
    name: "Compound Bow",
    category: "primary",
    cost: "Unconfirmed",
    damage: "Unconfirmed",
    fireRate: "Unconfirmed",
    notes: "Heavy Draw mechanic pierces Riot Shields. Low projectile velocity requires leading shots. Full stat sheet not yet confirmed — flagged for follow-up.",
  },
  {
    slug: "minigun",
    name: "Minigun",
    category: "primary",
    cost: "Unconfirmed",
    damage: "Unconfirmed",
    fireRate: "Sustained, has spin-up time",
    notes: "Prime rarity. Mobility penalty while firing. Full stat sheet not yet confirmed — flagged for follow-up.",
  },
  {
    slug: "handgun",
    name: "Handgun",
    category: "secondary",
    cost: "Free",
    damage: "12 → 3 (falloff)",
    fireRate: "0.13s",
    ammo: "13 / 91",
    reload: "1.06s",
  },
  {
    slug: "spray",
    name: "Spray",
    category: "secondary",
    cost: "5 Keys",
    damage: "8 → 2 (falloff)",
    fireRate: "0.50s",
    ammo: "30 / 90",
    reload: "1.30s",
  },
  {
    slug: "shorty",
    name: "Shorty",
    category: "secondary",
    cost: "20 Keys",
    damage: "7.5x10 → 2.5x10 (falloff)",
    fireRate: "0.12s",
    ammo: "2 / 18",
    reload: "1.70s",
  },
  {
    slug: "uzi",
    name: "Uzi",
    category: "secondary",
    cost: "20 Keys",
    damage: "8 → 2 (falloff)",
    fireRate: "0.07s",
    ammo: "27 / 108",
    reload: "1.50s",
  },
  {
    slug: "revolver",
    name: "Revolver",
    category: "secondary",
    cost: "25 Keys",
    damage: "30 → 8 (falloff)",
    fireRate: "0.40s",
    ammo: "6 / 36",
    reload: "1.80s",
  },
  {
    slug: "fists",
    name: "Fists",
    category: "melee",
    cost: "Free",
    damage: "30",
    fireRate: "0.35s",
  },
  {
    slug: "chainsaw",
    name: "Chainsaw",
    category: "melee",
    cost: "15 Keys",
    damage: "60",
    fireRate: "0.60s",
    ammo: "150 fuel",
  },
  {
    slug: "knife",
    name: "Knife",
    category: "melee",
    cost: "20 Keys",
    damage: "40",
    fireRate: "0.60s",
  },
  {
    slug: "katana",
    name: "Katana",
    category: "melee",
    cost: "45 Keys",
    damage: "45",
    fireRate: "0.70s",
  },
  {
    slug: "battle-axe",
    name: "Battle Axe",
    category: "melee",
    cost: "50 Keys",
    damage: "55",
    fireRate: "0.70s",
  },
  {
    slug: "flashbang",
    name: "Flashbang",
    category: "utility",
    cost: "15 Keys",
    damage: "—",
    fireRate: "0.50s cooldown",
    ammo: "2",
  },
  {
    slug: "medkit",
    name: "Medkit",
    category: "utility",
    cost: "300 Keys",
    damage: "—",
    fireRate: "90.00s cooldown",
    notes: "Heals over time when activated.",
  },
];

export function getWeapon(slug: string) {
  return weapons.find((w) => w.slug === slug);
}

export function weaponsByCategory(category: WeaponCategory) {
  return weapons.filter((w) => w.category === category);
}
