export interface RivalsCode {
  code: string;
  reward: string;
  status: "active" | "expired";
}

// Aggregated from PCGamesN, GamesRadar, PC Gamer, Dexerto, RobloxDen, Beebom,
// and Destructoid's August 2026 code round-ups. Codes expire quickly and
// individual outlets disagree on status — treat "active" as "reported active
// by at least one outlet as of lastChecked", not a guarantee.
export const CODES_SOURCE = {
  label: "Aggregated from PCGamesN, PC Gamer, Dexerto, RobloxDen, Beebom, Destructoid",
  lastChecked: "2026-08-31",
};

export const codes: RivalsCode[] = [
  { code: "RIVALSSUMMER", reward: "3x Tropical Chest", status: "active" },
  { code: "COCONUTBONK", reward: "250x Pearls", status: "active" },
  { code: "CANNONBALLLLL", reward: "5x Goodie Bag", status: "active" },
  { code: "FREE194", reward: "3x Keys", status: "active" },
  { code: "FREE191", reward: "3x Keys", status: "active" },
  { code: "COMMUNITY24", reward: "1x Community Wrap", status: "active" },
  { code: "BONUS", reward: "1x Key", status: "active" },
  { code: "BOOST", reward: "1x Key", status: "active" },
];

export const HOW_TO_REDEEM = [
  "Reach the shooting range tutorial and complete the first six tasks — this unlocks the Rewards feature.",
  'Open the menu, select "Rewards", and follow the developer accounts it prompts you to follow.',
  "Enter your Roblox username in the text box and hit Redeem to verify.",
  "Enter a code above and hit Redeem again.",
];
