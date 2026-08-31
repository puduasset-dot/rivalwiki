export const SETTINGS_SOURCE = {
  label: "Aggregated from Roblox Den, DungeonPath, Pixel Twelve settings guides",
  lastChecked: "2026-08-31",
};

export const FOV_GUIDANCE = [
  { mode: "1v1 / 2v2 (duels)", range: "90 – 100", note: "Lower FOV works well in smaller modes — some guides suggest ~97 specifically." },
  { mode: "TDM / FFA (larger modes)", range: "105 – 110", note: "Wider FOV helps track more players on screen." },
  { mode: "General baseline", range: "85 – 95", note: "Balances situational awareness against target size if you don't want to tune per mode." },
];

export const SENSITIVITY_STEPS = [
  "There's no universal best sensitivity — it depends on your mouse DPI and Roblox's in-game sensitivity multiplier together, so a pro's exact number won't transfer to your setup.",
  "Test in the Shooting Range: start from your current value, pick a repeatable swipe distance, and aim for about a 180° turn across it.",
  "If you consistently over-flick past targets, lower it. If you can't clear nearby angles fast enough, raise it. Change one variable at a time.",
  "A modest DPI with a lower in-game slider tends to give more predictable crosshair placement than a high sensitivity chasing flashy 360° turns.",
];

export const RECOMMENDED_TOGGLES = [
  { setting: "Camera Shake", value: "Off", why: "Removes visual clutter during sprinting/boosting." },
  { setting: "Muzzle Flash", value: "Hidden", why: "Keeps sightlines clear when firing." },
  { setting: "Damage Indicator", value: "Outline flash", why: "Confirms hits without obscuring the target." },
  { setting: "Auto Sprint", value: "On", why: "One less key to hold in a movement-heavy game." },
  { setting: "Easy Slide", value: "On", why: "Lowers the input precision needed for slide tech." },
  { setting: "Padded HUD", value: "On", why: "Keeps HUD elements clear of the action." },
  { setting: "Crosshair", value: "Small dot with outline", why: "Best all-around visibility across maps and backgrounds." },
];
