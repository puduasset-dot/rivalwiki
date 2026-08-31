export const ECONOMY_SOURCE = {
  label: "RIVALS Fandom wiki (Keys/Contracts pages) + GameRant, Gamepur guides",
  lastChecked: "2026-08-31",
};

export interface KeyMethod {
  method: string;
  detail: string;
  repeatable: boolean;
}

export const keyMethods: KeyMethod[] = [
  { method: "Daily Tasks", detail: "9 Keys per day, resets every 24 hours. Simple objectives like getting eliminations or winning matches.", repeatable: true },
  { method: "Contracts", detail: "Weapon and Map contracts, one-time completion each — a large but finite pool of Keys.", repeatable: false },
  { method: "Winning matches", detail: "Keys accumulate naturally from playing and winning.", repeatable: true },
  { method: "Codes", detail: "Amount varies by code — see the Codes page. Not guaranteed to include Keys.", repeatable: false },
  { method: "Liking the game", detail: "One-time 3 Keys for liking RIVALS on Roblox.", repeatable: false },
  { method: "Robux purchases", detail: "Key Bundle (49 Robux) up to Legendary Key Bundle (4,999 Robux); higher bundles include bonus Wraps/Charms.", repeatable: true },
];

export const CONTRACT_TYPES = [
  {
    type: "Weapon Contracts",
    detail: "Found per-weapon in the weapon menu. Usually require a number of kills or a certain amount of playtime with that weapon — you only need to use one weapon to complete these.",
  },
  {
    type: "Map Contracts",
    detail: "Tied to objectives on specific maps rather than specific weapons.",
  },
];
