"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "en" | "ja" | "zh";

function localeFromPathname(pathname: string): Locale {
  if (pathname === "/ja" || pathname.startsWith("/ja/")) return "ja";
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  return "en";
}

const COPY: Record<Locale, {
  disclaimer: string;
  creditsBefore: string;
  creditsAfter: string;
  links: { path: string; label: string }[];
}> = {
  en: {
    disclaimer:
      "RivalWiki is an unofficial fan-made resource and is not affiliated with, endorsed by, or sponsored by Nosniy Games or Roblox Corporation. RIVALS is a trademark of its respective owner.",
    creditsBefore:
      "Game icon via Roblox's official thumbnail API. Some screenshots are stills from RIVALS' official Roblox store page preview video; others are real gameplay captured by the site owner while playing. Weapon icons sourced from the community-maintained ",
    creditsAfter: ".",
    links: [
      { path: "/about", label: "About" },
      { path: "/privacy", label: "Privacy Policy" },
      { path: "/terms", label: "Terms of Service" },
      { path: "/contact", label: "Contact" },
    ],
  },
  ja: {
    disclaimer:
      "RivalWikiは非公式のファンメイド・リソースであり、Nosniy GamesまたはRoblox Corporationと提携・承認・スポンサー関係にはありません。RIVALSはそれぞれの権利者の商標です。",
    creditsBefore:
      "ゲームアイコンはRoblox公式サムネイルAPI経由。一部のスクリーンショットはRIVALS公式Robloxストアページのプレビュー動画からの静止画、その他はサイト運営者が実際にプレイして撮影した実写のゲームプレイです。武器アイコンはコミュニティ運営の",
    creditsAfter: "から取得しています。",
    links: [
      { path: "/about", label: "About" },
      { path: "/privacy", label: "プライバシーポリシー" },
      { path: "/terms", label: "利用規約" },
      { path: "/contact", label: "お問い合わせ" },
    ],
  },
  zh: {
    disclaimer:
      "RivalWiki 是一个非官方的粉丝制作资源站,与 Nosniy Games 或 Roblox Corporation 没有任何隶属、认可或赞助关系。RIVALS 是其各自权利人的商标。",
    creditsBefore:
      "游戏图标来自 Roblox 官方缩略图 API。部分截图取自 RIVALS 官方 Roblox 商店页面的预览视频静帧,其余为站长实际游玩时截取的真实游戏画面。武器图标取自社区维护的",
    creditsAfter: "。",
    links: [
      { path: "/about", label: "关于" },
      { path: "/privacy", label: "隐私政策" },
      { path: "/terms", label: "服务条款" },
      { path: "/contact", label: "联系我们" },
    ],
  },
};

export function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPathname(pathname);
  const copy = COPY[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-neutral-500 space-y-2">
        <p>{copy.disclaimer}</p>
        <p>
          {copy.creditsBefore}
          <a
            href="https://robloxrivals.fandom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 underline"
          >
            RIVALS Fandom wiki
          </a>
          {copy.creditsAfter}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
          {copy.links.map((l) => (
            <Link key={l.path} href={`${prefix}${l.path}`} className="hover:text-neutral-300 underline">
              {l.label}
            </Link>
          ))}
        </div>
        <p>© {new Date().getFullYear()} RivalWiki.</p>
      </div>
    </footer>
  );
}
