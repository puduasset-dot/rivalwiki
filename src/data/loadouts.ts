export interface CuratedLoadout {
  name: string;
  bestFor: string;
  primary: string;
  secondary: string;
  melee: string;
  utility: string;
  reason: string;
}

export const LOADOUTS_SOURCE = {
  label: "Built from this site's weapon database and tier list — see /weapons and /weapon-tier-list for sourcing per weapon",
  lastChecked: "2026-08-31",
};

export const curatedLoadouts: CuratedLoadout[] = [
  {
    name: "Beginner / free-to-start",
    bestFor: "New players who haven't spent Keys yet",
    primary: "assault-rifle",
    secondary: "handgun",
    melee: "fists",
    utility: "flashbang",
    reason: "Assault Rifle and Handgun are both free and reliable at every range, so you can compete without spending a single Key. Fists give you a free double jump for movement practice too.",
  },
  {
    name: "Close-range aggression",
    bestFor: "Rushing, tight maps like Backrooms or Construction",
    primary: "shotgun",
    secondary: "uzi",
    melee: "knife",
    utility: "flashbang",
    reason: "Shotgun and Uzi both front-load damage at close range, Knife adds a fast finisher, and Flashbang covers your approach into a room.",
  },
  {
    name: "Long-range / duel-focused",
    bestFor: "1v1s and open maps like Bridge or Chess",
    primary: "sniper",
    secondary: "revolver",
    melee: "katana",
    utility: "medkit",
    reason: "Sniper rewards the precision that duels demand, Revolver covers you if a fight closes distance, and Medkit sustains you through a best-of-5 set.",
  },
  {
    name: "Team fights (4v4 / 5v5)",
    bestFor: "Larger team modes and TDM",
    primary: "burst-rifle",
    secondary: "spray",
    melee: "chainsaw",
    utility: "medkit",
    reason: "Burst Rifle is strong value for its cost in the mid-range chaos of team fights, Spray backs you up in close quarters, and Medkit keeps you in the fight through repeated engagements.",
  },
];
