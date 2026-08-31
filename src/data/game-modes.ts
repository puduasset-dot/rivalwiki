export const GAME_MODES_SOURCE = {
  label: "Deltia's Gaming, TechWiser, DungeonPath, Sportskeeda game mode guides",
  lastChecked: "2026-08-31",
};

export interface GameMode {
  name: string;
  category: "Duels" | "Arcade" | "Rotating";
  desc: string;
}

export const gameModes: GameMode[] = [
  { name: "1v1 – 5v5 Duels", category: "Duels", desc: "The core competitive experience — equal team sizes, win by reaching a kill/round target. Includes a dedicated 2v2 beginner queue. Also the basis for Ranked (1v1, 2v2, 3v3)." },
  { name: "Team Deathmatch (TDM)", category: "Arcade", desc: "Teams race to a kill target across continuous rounds." },
  { name: "Free For All (FFA)", category: "Arcade", desc: "No teams — every player for themselves. Best strategy: get a kill, reposition, avoid prolonged fights since a third party can jump in anytime." },
  { name: "Head Honcho", category: "Rotating", desc: "TDM-inspired: each team gets a random leader who can't fight and must survive while teammates try to eliminate the enemy leader. Short, intense matches." },
  { name: "Gun Game", category: "Rotating", desc: "Up to 16 players swap weapons in a random order/pool after each kill — chaotic by design. Win by landing on the Glass Shard weapon and scoring a kill with it." },
  { name: "Limitless Loadout", category: "Rotating", desc: "Loadout restrictions removed — you can pick the same weapon in every slot." },
  { name: "Double Trouble", category: "Rotating", desc: "2v2 mode where players wield two weapons at once." },
  { name: "Hardcore Parkour", category: "Rotating", desc: "No killing — focused purely on movement accuracy and speed." },
  { name: "Mirror Matchup", category: "Rotating", desc: "Every player starts with the same loadout and customization for a level playing field." },
];

export const ZOMBIE_TOWER_NOTE =
  "Zombie Tower was a limited-time PvE mode from the 2025 Spooky Event — 17 floors of enemy waves with no free ammo/health resupply (only level-clear drops). Beating it awarded a Zombie wrap and Chombie Head charm; a Solo clear awarded the Towerstone Handgun skin. It isn't a permanent mode — treat it as an example of the kind of limited-time content RIVALS rotates in, not something currently playable.";
