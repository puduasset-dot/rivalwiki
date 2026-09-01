import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rivalwiki.com"),
  title: {
    default: "RivalWiki — RIVALS (Roblox) Guides, Weapons & Tools",
    template: "%s | RivalWiki",
  },
  description:
    "Player toolbox for RIVALS on Roblox: weapon database, tier list, codes, and interactive tools like the weapon comparison calculator.",
};

const NAV_LINKS = [
  { href: "/beginner-guide", label: "Beginner Guide" },
  { href: "/codes", label: "Codes" },
  { href: "/weapons", label: "Weapons" },
  { href: "/weapon-tier-list", label: "Tier List" },
  { href: "/tools/weapon-comparison", label: "Compare Tool" },
  { href: "/maps", label: "Maps" },
  { href: "/ranks", label: "Ranks" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3013629120968191"
          crossOrigin="anonymous"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QXZEHT9JWH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QXZEHT9JWH');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">
        <header className="border-b border-neutral-800 bg-neutral-950/95 sticky top-0 z-10">
          <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
            <Link href="/" className="font-bold text-lg tracking-tight text-white">
              Rival<span className="text-amber-400">Wiki</span>
            </Link>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-neutral-800 mt-12">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-neutral-500 space-y-2">
            <p>
              RivalWiki is an unofficial fan-made resource and is not affiliated
              with, endorsed by, or sponsored by Nosniy Games or Roblox
              Corporation. RIVALS is a trademark of its respective owner.
            </p>
            <p>
              Game icon via Roblox&apos;s official thumbnail API. Homepage
              screenshots are stills from RIVALS&apos; official Roblox store
              page preview video. Weapon icons sourced from the community-maintained{" "}
              <a
                href="https://robloxrivals.fandom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 underline"
              >
                RIVALS Fandom wiki
              </a>
              .
            </p>
            <p>© {new Date().getFullYear()} RivalWiki.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
