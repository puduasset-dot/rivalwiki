import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About RivalWiki",
  description: "What RivalWiki is, how it sources data, and how it's different from other RIVALS guide sites.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white">About RivalWiki</h1>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          RivalWiki is a player toolbox for{" "}
          <a
            href="https://www.roblox.com/games/17625359962/RIVALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            RIVALS
          </a>
          , the Roblox first-person shooter by Nosniy Games. We built it because RIVALS
          already has several wikis and code-tracking sites, and their numbers often
          disagree with each other — so we set out to make one where you can tell
          exactly where a stat came from and when it was last checked.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">How we source data</h2>
        <p>
          Every dataset on this site — weapon stats, codes, the tier list, maps, ranks —
          carries a source line and a &quot;last checked&quot; date, visible right on the page.
          We aggregate from community wikis and outlet round-ups (mainly the RIVALS Fandom
          wiki and a handful of gaming news sites), not from official Nosniy Games
          documentation, since none is publicly available. Where we couldn&apos;t confirm a
          number, we mark it &quot;Unconfirmed&quot; instead of guessing.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">What makes this different</h2>
        <p>
          Instead of long articles, we lean on a small database (weapons, codes, maps,
          tier list) that auto-generates pages, plus a few interactive tools — a{" "}
          <Link href="/tools/weapon-comparison" className="text-amber-400 hover:underline">weapon comparison</Link>,{" "}
          a <Link href="/tools/loadout-builder" className="text-amber-400 hover:underline">loadout builder</Link>, and a{" "}
          <Link href="/tools/crosshair-generator" className="text-amber-400 hover:underline">crosshair generator</Link>.
          The goal is that if you search a specific question, you land on a direct
          answer, not 2,000 words of filler.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Not affiliated with Nosniy Games or Roblox</h2>
        <p>
          RivalWiki is an independent, unofficial fan project. We are not affiliated
          with, endorsed by, or sponsored by Nosniy Games or Roblox Corporation. RIVALS
          and all related trademarks belong to their respective owners. For official
          support, updates, or purchases, go through the{" "}
          <a
            href="https://www.roblox.com/games/17625359962/RIVALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            official RIVALS Roblox page
          </a>.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Questions or corrections</h2>
        <p>
          Found a stat that&apos;s wrong or out of date? See the{" "}
          <Link href="/contact" className="text-amber-400 hover:underline">Contact page</Link> for how to reach us.
        </p>
      </div>
    </div>
  );
}
