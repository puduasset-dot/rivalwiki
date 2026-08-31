export const MOVEMENT_SOURCE = {
  label: "Aggregated from RIVALS Fandom Mechanics/Techs page, Gamically, community guides",
  lastChecked: "2026-08-31",
};

export interface MovementTech {
  name: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  howTo: string;
}

export const movementTechs: MovementTech[] = [
  {
    name: "Slide Jump",
    difficulty: "Beginner",
    howTo: "Sprint, press slide, then immediately jump. Makes you faster and harder to hit — works anywhere, no requirements. Pairs well with speed weapons like Knife or Daggers.",
  },
  {
    name: "Double Jump",
    difficulty: "Beginner",
    howTo: "Equip Fists or Bow — either one grants a double jump. Sprint toward a platform, jump, then jump again at peak height.",
  },
  {
    name: "Slide Cancel",
    difficulty: "Intermediate",
    howTo: "Slide (Ctrl), then immediately jump (Space) to cancel the slide's slow-down animation while keeping sprint speed. Chaining slide → jump → slide → jump moves faster than plain sprinting.",
  },
  {
    name: "Triple Jump",
    difficulty: "Intermediate",
    howTo: "While double-jump eligible (Fists or Bow equipped), quickly switch between Fists and Bow mid-air to chain a third jump.",
  },
  {
    name: "Wall Slide",
    difficulty: "Intermediate",
    howTo: "Sprint at a wall at an angle and hold Ctrl to slide along it while keeping speed — useful for tight corners without losing momentum.",
  },
  {
    name: "Quadruple Jump",
    difficulty: "Advanced",
    howTo: "Cook a grenade, slide jump to get a grenade boost, then rapidly swap between Bow, Daggers, and Fists — timing each jump with a weapon swap — to chain a fourth jump.",
  },
  {
    name: "Battle Axe Dash",
    difficulty: "Advanced",
    howTo: "While aiming down sights with Sniper, strafe left and right-click with Battle Axe equipped to dash ~10 studs in your strafe direction without breaking your scope — useful for dodging shots.",
  },
];
