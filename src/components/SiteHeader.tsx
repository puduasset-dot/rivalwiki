"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "en" | "ja" | "zh";

const NAV_LINKS: Record<Locale, { path: string; label: string }[]> = {
  en: [
    { path: "/beginner-guide", label: "Beginner Guide" },
    { path: "/codes", label: "Codes" },
    { path: "/weapons", label: "Weapons" },
    { path: "/weapon-tier-list", label: "Tier List" },
    { path: "/tools/weapon-comparison", label: "Compare Tool" },
    { path: "/maps", label: "Maps" },
    { path: "/secrets", label: "Secrets" },
    { path: "/ranks", label: "Ranks" },
  ],
  ja: [
    { path: "/beginner-guide", label: "初心者ガイド" },
    { path: "/codes", label: "コード" },
    { path: "/weapons", label: "武器" },
    { path: "/weapon-tier-list", label: "Tier表" },
    { path: "/tools/weapon-comparison", label: "比較ツール" },
    { path: "/maps", label: "マップ" },
    { path: "/secrets", label: "隠し要素" },
    { path: "/ranks", label: "ランク" },
  ],
  zh: [
    { path: "/beginner-guide", label: "新手指南" },
    { path: "/codes", label: "兑换码" },
    { path: "/weapons", label: "武器" },
    { path: "/weapon-tier-list", label: "Tier 榜单" },
    { path: "/tools/weapon-comparison", label: "对比工具" },
    { path: "/maps", label: "地图" },
    { path: "/secrets", label: "隐藏内容" },
    { path: "/ranks", label: "段位" },
  ],
};

function localeFromPathname(pathname: string): Locale {
  if (pathname === "/ja" || pathname.startsWith("/ja/")) return "ja";
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  return "en";
}

/** Strips the locale prefix to get the path shared across all three locales (route trees are 1:1). */
function bareePath(pathname: string, locale: Locale): string {
  if (locale === "en") return pathname;
  const rest = pathname.slice(`/${locale}`.length);
  return rest === "" ? "/" : rest;
}

function localizedHref(barePath: string, locale: Locale): string {
  if (locale === "en") return barePath === "/" ? "/" : barePath;
  return barePath === "/" ? `/${locale}` : `/${locale}${barePath}`;
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPathname(pathname);
  const bare = bareePath(pathname, locale);
  const homeHref = locale === "en" ? "/" : `/${locale}`;

  return (
    <header className="border-b border-neutral-800 bg-neutral-950/95 sticky top-0 z-10">
      <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
        <Link href={homeHref} className="font-bold text-lg tracking-tight text-white">
          Rival<span className="text-amber-400">Wiki</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {NAV_LINKS[locale].map((link) => (
            <Link
              key={link.path}
              href={locale === "en" ? link.path : `/${locale}${link.path}`}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 text-xs text-neutral-500">
          <Link href={localizedHref(bare, "en")} className={locale === "en" ? "text-white" : "hover:text-white transition-colors"}>EN</Link>
          <span>·</span>
          <Link href={localizedHref(bare, "ja")} className={locale === "ja" ? "text-white" : "hover:text-white transition-colors"}>日本語</Link>
          <span>·</span>
          <Link href={localizedHref(bare, "zh")} className={locale === "zh" ? "text-white" : "hover:text-white transition-colors"}>中文</Link>
        </div>
      </div>
    </header>
  );
}
