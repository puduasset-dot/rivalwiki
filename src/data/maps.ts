export type MapCategory = "regular" | "big" | "legacy";

export interface RivalsMap {
  name: string;
  category: MapCategory;
  notes?: string;
}

// Source: RIVALS Fandom wiki (updated 2026-07-29) cross-checked against
// bloxodes.com (updated 2026-06-28). Total map count differs slightly
// between sources depending on update timing — treat the exact count as
// approximate, not a guaranteed live total.
export const MAPS_SOURCE = {
  label: "RIVALS Fandom wiki + bloxodes.com map listings",
  lastChecked: "2026-08-31",
};

export const maps: RivalsMap[] = [
  { name: "Arena", category: "regular" },
  { name: "Backrooms", category: "regular" },
  { name: "Battleground", category: "regular" },
  { name: "Bridge", category: "regular" },
  { name: "Chess", category: "regular", notes: "Giant chessboard with numbered edges for orientation; open layout with chess pieces as cover, works for both long-range and close-quarters." },
  { name: "Crossroads", category: "regular" },
  { name: "Construction", category: "regular", notes: "Mirrored map with a crane and dangling crate; players spawn on a gap-filled second-floor area that's easy to fall through." },
  { name: "Dimension", category: "regular" },
  { name: "Docks", category: "regular" },
  { name: "Graveyard", category: "regular" },
  { name: "Iceberg", category: "regular" },
  { name: "Onyx", category: "regular" },
  { name: "Playground", category: "regular" },
  { name: "Splash", category: "regular" },
  { name: "Station", category: "regular", notes: "Former battle-royale lobby, revamped for RIVALS in early 2024; Western-themed train station with two buildings and breakable windows." },
  { name: "Shooting Range", category: "regular", notes: "Tutorial map; also where the Codes/Rewards feature gets unlocked." },
  { name: "Village", category: "regular" },
  { name: "Diorama Westown", category: "regular", notes: "Added in Season 3 (April 2026), Hollywood-themed." },
  { name: "Diorama Museum", category: "regular", notes: "Added in Season 3 (April 2026), Hollywood-themed." },
  { name: "Diorama Studio", category: "regular", notes: "Added in Season 3 (April 2026), Hollywood-themed." },
  { name: "Big Arena", category: "big" },
  { name: "Big Backrooms", category: "big" },
  { name: "Big Crossroads", category: "big" },
  { name: "Big Graveyard", category: "big" },
  { name: "Big Onyx", category: "big" },
  { name: "Big Splash", category: "big" },
  { name: "Big Station", category: "big" },
  { name: "Legacy Backrooms", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Battleground", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Crossroads", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Docks", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Onyx", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Sandbox", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Splash", category: "legacy", notes: "Private servers only." },
  { name: "Legacy Big Splash", category: "legacy", notes: "Private servers only." },
];
