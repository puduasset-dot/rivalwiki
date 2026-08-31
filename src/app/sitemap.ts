import type { MetadataRoute } from "next";
import { weapons } from "@/data/weapons";

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
  "/ranks",
  "/keys",
  "/contracts",
  "/movement",
  "/beginner-guide",
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

  return [...staticEntries, ...weaponEntries];
}
