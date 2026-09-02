import type { MetadataRoute } from "next";
import { weapons } from "@/data/weapons";
import { buildWeaponPairs } from "@/data/weapon-compare";
import { mapGuides } from "@/data/map-guides";
import { gameModes } from "@/data/game-modes";

export const dynamic = "force-static";

const BASE_URL = "https://rivalwiki.com";

const STATIC_ROUTES = [
  "",
  "/codes",
  "/weapons",
  "/weapon-tier-list",
  "/tools/weapon-comparison",
  "/tools/loadout-builder",
  "/maps",
  "/secrets",
  "/ranks",
  "/keys",
  "/contracts",
  "/movement",
  "/beginner-guide",
  "/settings",
  "/skins",
  "/game-modes",
  "/best-loadouts",
  "/tools/crosshair-generator",
  "/ja",
  "/zh",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: "2026-08-31",
  }));

  const weaponEntries = weapons.map((w) => ({
    url: `${BASE_URL}/weapons/${w.slug}`,
    lastModified: "2026-08-31",
  }));

  const compareEntries = buildWeaponPairs().map((p) => ({
    url: `${BASE_URL}/weapons/compare/${p.pairSlug}`,
    lastModified: "2026-09-02",
  }));

  const mapEntries = mapGuides.map((m) => ({
    url: `${BASE_URL}/maps/${m.slug}`,
    lastModified: "2026-09-02",
  }));

  const gameModeEntries = gameModes.map((m) => ({
    url: `${BASE_URL}/game-modes/${m.slug}`,
    lastModified: "2026-09-02",
  }));

  const LOCALIZED_STATIC_ROUTES = [
    "/weapons",
    "/maps",
    "/game-modes",
    "/secrets",
    "/ranks",
    "/keys",
    "/contracts",
    "/settings",
    "/skins",
    "/weapon-tier-list",
    "/movement",
    "/beginner-guide",
    "/best-loadouts",
    "/codes",
    "/tools/weapon-comparison",
    "/tools/loadout-builder",
    "/tools/crosshair-generator",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];

  const LOCALES = ["ja", "zh"];
  const localizedEntries = LOCALES.flatMap((locale) => [
    ...LOCALIZED_STATIC_ROUTES.map((route) => ({ url: `${BASE_URL}/${locale}${route}`, lastModified: "2026-09-02" })),
    ...weapons.map((w) => ({ url: `${BASE_URL}/${locale}/weapons/${w.slug}`, lastModified: "2026-09-02" })),
    ...buildWeaponPairs().map((p) => ({ url: `${BASE_URL}/${locale}/weapons/compare/${p.pairSlug}`, lastModified: "2026-09-02" })),
    ...mapGuides.map((m) => ({ url: `${BASE_URL}/${locale}/maps/${m.slug}`, lastModified: "2026-09-02" })),
    ...gameModes.map((m) => ({ url: `${BASE_URL}/${locale}/game-modes/${m.slug}`, lastModified: "2026-09-02" })),
  ]);

  return [...staticEntries, ...weaponEntries, ...compareEntries, ...mapEntries, ...gameModeEntries, ...localizedEntries];
}
