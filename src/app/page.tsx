import type { Metadata } from "next";
import { HomeContent, type HomeCopy } from "@/components/HomeContent";

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "https://rivalwiki.com/",
      ja: "https://rivalwiki.com/ja",
      zh: "https://rivalwiki.com/zh",
    },
  },
};

const copy: HomeCopy = {
  heroTitle: "RIVALS player toolbox",
  heroDescBefore: "Straight answers and tools for",
  heroLinkText: "RIVALS on Roblox",
  heroDescAfter:
    "— weapon stats, codes, and a tier list, each one tagged with where the data came from and when it was last checked. No 2,000-word filler.",
  quickLinks: [
    { href: "/codes", title: "Active Codes", desc: (c) => `${c} codes tracked right now, with rewards and source.` },
    { href: "/weapons", title: "Weapon Database", desc: (_c, w) => `${w} weapons with damage, fire rate, ammo, and cost.` },
    { href: "/weapon-tier-list", title: "Weapon Tier List", desc: () => "Cited, aggregated meta rankings — not a guess." },
    { href: "/tools/weapon-comparison", title: "Weapon Comparison Tool", desc: () => "Pick two weapons, see the stats side by side." },
  ],
  mapsHref: "/maps",
  mapsTitle: "Explore the maps",
  mapsDesc: "35 maps tracked — regular rotation, big variants, and legacy private-server maps.",
  mapsCta: "See all maps →",
  secretsHref: "/secrets",
  secretsTitle: "Hidden mechanics & easter eggs",
  secretsDesc: "56 sourced secrets — undocumented weapon interactions, advanced movement tech, hidden rooms, and easter eggs the game never tells you about.",
  secretsCta: "Uncover the secrets →",
  moreGuidesTitle: "More guides",
  moreGuides: [
    { href: "/beginner-guide", title: "Beginner Guide" },
    { href: "/maps", title: "Maps" },
    { href: "/ranks", title: "Ranks" },
    { href: "/keys", title: "Keys" },
    { href: "/contracts", title: "Contracts" },
    { href: "/movement", title: "Movement Guide" },
    { href: "/settings", title: "Best Settings" },
    { href: "/skins", title: "Skins" },
    { href: "/game-modes", title: "Game Modes" },
    { href: "/best-loadouts", title: "Best Loadouts" },
    { href: "/tools/loadout-builder", title: "Loadout Builder" },
    { href: "/tools/crosshair-generator", title: "Crosshair Generator" },
  ],
  whyTitle: "Why this site is different",
  whyDesc:
    "RIVALS already has several wikis and code lists, and their numbers often disagree with each other. Every stat, code, and tier ranking here carries a source and a last-checked date, and weapons we couldn't confirm are marked as unconfirmed instead of guessed at.",
};

export default function Home() {
  return <HomeContent copy={copy} />;
}
