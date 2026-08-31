export const SKINS_SOURCE = {
  label: "RIVALS Fandom wiki — Skins overview page",
  url: "https://robloxrivals.fandom.com/wiki/Skins",
  lastChecked: "2026-08-31",
};

export interface ObtainMethod {
  method: string;
  detail: string;
}

export const OBTAIN_METHODS: ObtainMethod[] = [
  {
    method: "Skin Cases",
    detail: "Three permanent cases in the Shop (249 Robux each, or 724 Robux for all three — about a 3% discount). Limited-time cases (Spooky, Summer, Festive) return during their yearly events. Any case can also be opened with 10 Skin Tickets, which are earned through the Season Pass (about one free skin per season). ~270 skins are currently obtainable from cases.",
  },
  {
    method: "Daily Shop",
    detail: "5 rotating skins per day, priced by rarity (Common 299 / Rare 449 / Legendary 599 Robux) or 10 Skin Tickets each. Refreshing the shop with Keys costs 3 Keys and doubles each refresh (up to 24); Skin Tickets can't be used again until the next natural daily rotation after a manual refresh.",
  },
  {
    method: "Bundles",
    detail: "Purchased with Robux in the Shop; Skin Bundles typically contain four themed skins. ~36 skins are exclusive to bundles.",
  },
  {
    method: "Currency Bundles",
    detail: "The Legendary Key Bundle and Ultra Key Bundle each include one exclusive Key Skin that rotates roughly every other update. The Legendary Candy, Crystal, and Pearl bundles have each introduced yearly exclusive skins too. ~24 skins total have come from currency bundles, though most are no longer obtainable.",
  },
  {
    method: "Events & Season Pass",
    detail: "Some skins are tied to limited-time events (e.g. completing Zombie Tower Solo, birthday-party quests) or unlocked by leveling the Season Pass / Prime Season Pass.",
  },
];

export interface NotableSkin {
  slug: string;
  name: string;
  weapon: string;
  note: string;
}

export const notableSkins: NotableSkin[] = [
  { slug: "keyblade", name: "Keyblade", weapon: "Key Skin", note: "Included with the Legendary Key Bundle as of Update 21." },
  { slug: "keyshot", name: "Keyshot", weapon: "Key Skin", note: "Included with the Ultra Key Bundle as of Update 21." },
  { slug: "warpeye", name: "Warpeye", weapon: "Mythical", note: "Exclusive to the 2025 Legendary Candy Bundle." },
  { slug: "keyper", name: "Keyper", weapon: "Mythical", note: "2024 Legendary Candy Bundle exclusive, also previously in the Legendary Key Bundle." },
  { slug: "crystal-katana", name: "Crystal Katana", weapon: "Katana", note: "2025 Legendary Crystal Bundle exclusive." },
  { slug: "crystal-daggers", name: "Crystal Daggers", weapon: "Daggers", note: "2024 Legendary Crystal Bundle exclusive." },
  { slug: "riptide-katana", name: "Riptide Katana", weapon: "Katana", note: "2026 Legendary Pearl Bundle exclusive." },
  { slug: "crystal-scythe", name: "Crystal Scythe", weapon: "Scythe", note: "2025 Festive Flash Sale exclusive." },
];
