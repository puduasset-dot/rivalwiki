export interface RankTier {
  name: string;
  hasSubTiers: boolean;
  notes?: string;
}

// Source: aggregated from allthings.how, GeekChamp, and RivalsHub ranked
// guides. Exact ELO thresholds/rewards shift between seasons — check the
// in-game ranked tab for the current numbers, this page covers the
// structure, not live thresholds.
export const RANKS_SOURCE = {
  label: "Aggregated from allthings.how, GeekChamp, RivalsHub ranked guides",
  lastChecked: "2026-08-31",
};

export const rankTiers: RankTier[] = [
  { name: "Bronze", hasSubTiers: true },
  { name: "Silver", hasSubTiers: true },
  { name: "Gold", hasSubTiers: true },
  { name: "Platinum", hasSubTiers: true, notes: "Rank protection starts to fade here — losing at the bottom of the tier can demote you quickly." },
  { name: "Diamond", hasSubTiers: true },
  { name: "Onyx", hasSubTiers: true },
  { name: "Nemesis", hasSubTiers: false, notes: "No sub-tiers, above Onyx." },
  { name: "Archnemesis", hasSubTiers: false, notes: "Top of the ladder. Global Top 200 Archnemesis players can earn Mythical cosmetics each season." },
];

export const RANKED_REQUIREMENTS = [
  "Complete 10 standard (unranked) duels first — wins and losses both count.",
  "Verify your account: phone number, Robux spend, or ID verification (email verification does not count).",
  "Your Roblox account must be at least 14 days old.",
  "Complete 10 placement matches to reveal your initial rank.",
];

export const RANKED_MECHANICS = [
  "Every ranked match adds or subtracts ELO. The amount depends on the gap between your ELO and your opponent's — beating someone several tiers above you swings your ELO more than beating someone near your level.",
  "Match outcome matters more than raw stats — high kills or damage don't fully offset a loss, especially at higher ranks.",
  "Party members must stay within 4 tiers (≈800 ELO) of each other to queue together, and matchmaking averages party MMR — queueing with a much higher-ranked friend can put you against tougher opponents.",
  "Modes: 1v1, 2v2, and 3v3 are all part of Ranked.",
];
