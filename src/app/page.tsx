import Image from "next/image";
import Link from "next/link";
import { codes } from "@/data/codes";
import { weapons } from "@/data/weapons";

const QUICK_LINKS = [
  { href: "/codes", title: "Active Codes", desc: `${codes.length} codes tracked right now, with rewards and source.` },
  { href: "/weapons", title: "Weapon Database", desc: `${weapons.length} weapons with damage, fire rate, ammo, and cost.` },
  { href: "/weapon-tier-list", title: "Weapon Tier List", desc: "Cited, aggregated meta rankings — not a guess." },
  { href: "/tools/weapon-comparison", title: "Weapon Comparison Tool", desc: "Pick two weapons, see the stats side by side." },
];

const MORE_GUIDES = [
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
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative rounded-2xl overflow-hidden border border-neutral-800 h-72 sm:h-80">
        <Image
          src="/media/gameplay-duel.jpg"
          alt="RIVALS gameplay screenshot"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/10" />
        <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <Image
              src="/rivals-game-icon.png"
              alt="RIVALS official game icon"
              width={64}
              height={64}
              className="rounded-xl border border-neutral-700 shrink-0"
            />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow">
              RIVALS player toolbox
            </h1>
          </div>
          <p className="text-neutral-300 max-w-2xl drop-shadow">
            Straight answers and tools for{" "}
            <a
              href="https://www.roblox.com/games/17625359962/RIVALS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              RIVALS on Roblox
            </a>{" "}
            — weapon stats, codes, and a tier list, each one tagged with where
            the data came from and when it was last checked. No 2,000-word filler.
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-4">
        {QUICK_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg border border-neutral-800 bg-neutral-900 p-5 hover:border-amber-400/60 transition-colors"
          >
            <h2 className="font-semibold text-white">{item.title}</h2>
            <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
          </Link>
        ))}
      </section>

      <section className="relative rounded-xl overflow-hidden border border-neutral-800 h-40">
        <Image
          src="/media/gameplay-docks.jpg"
          alt="RIVALS gameplay screenshot"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6 max-w-md">
          <h2 className="font-semibold text-white text-lg">Explore the maps</h2>
          <p className="text-sm text-neutral-300">
            35 maps tracked — regular rotation, big variants, and legacy private-server maps.
          </p>
          <Link href="/maps" className="text-sm text-amber-400 hover:underline w-fit">
            See all maps →
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">More guides</h2>
        <div className="flex flex-wrap gap-2">
          {MORE_GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="text-sm rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-neutral-300 hover:border-amber-400/60 hover:text-white transition-colors"
            >
              {g.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5 space-y-2">
        <h2 className="font-semibold text-white">Why this site is different</h2>
        <p className="text-sm text-neutral-400">
          RIVALS already has several wikis and code lists, and their numbers
          often disagree with each other. Every stat, code, and tier ranking
          here carries a source and a last-checked date, and weapons we
          couldn&apos;t confirm are marked as unconfirmed instead of guessed at.
        </p>
      </section>
    </div>
  );
}
