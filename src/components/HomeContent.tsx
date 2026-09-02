import Image from "next/image";
import Link from "next/link";
import { codes } from "@/data/codes";
import { weapons } from "@/data/weapons";

export interface HomeCopy {
  heroTitle: string;
  heroDescBefore: string;
  heroLinkText: string;
  heroDescAfter: string;
  quickLinks: {
    href: string;
    title: string;
    desc: (codesCount: number, weaponsCount: number) => string;
  }[];
  mapsHref: string;
  mapsTitle: string;
  mapsDesc: string;
  mapsCta: string;
  secretsHref: string;
  secretsTitle: string;
  secretsDesc: string;
  secretsCta: string;
  moreGuidesTitle: string;
  moreGuides: { href: string; title: string }[];
  whyTitle: string;
  whyDesc: string;
  languageNote?: string;
}

export function HomeContent({ copy }: { copy: HomeCopy }) {
  return (
    <div className="space-y-12">
      {copy.languageNote && (
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/5 px-4 py-3 text-sm text-amber-200">
          {copy.languageNote}
        </div>
      )}

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
              {copy.heroTitle}
            </h1>
          </div>
          <p className="text-neutral-300 max-w-2xl drop-shadow">
            {copy.heroDescBefore}{" "}
            <a
              href="https://www.roblox.com/games/17625359962/RIVALS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              {copy.heroLinkText}
            </a>{" "}
            {copy.heroDescAfter}
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-4">
        {copy.quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg border border-neutral-800 bg-neutral-900 p-5 hover:border-amber-400/60 transition-colors"
          >
            <h2 className="font-semibold text-white">{item.title}</h2>
            <p className="text-sm text-neutral-400 mt-1">{item.desc(codes.length, weapons.length)}</p>
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
          <h2 className="font-semibold text-white text-lg">{copy.mapsTitle}</h2>
          <p className="text-sm text-neutral-300">{copy.mapsDesc}</p>
          <Link href={copy.mapsHref} className="text-sm text-amber-400 hover:underline w-fit">
            {copy.mapsCta}
          </Link>
        </div>
      </section>

      <section className="relative rounded-xl overflow-hidden border border-amber-400/30 h-40">
        <Image
          src="/media/gameplay-shooting-range.jpg"
          alt="RIVALS gameplay screenshot"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6 max-w-md">
          <h2 className="font-semibold text-white text-lg">{copy.secretsTitle}</h2>
          <p className="text-sm text-neutral-300">{copy.secretsDesc}</p>
          <Link href={copy.secretsHref} className="text-sm text-amber-400 hover:underline w-fit">
            {copy.secretsCta}
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-white text-lg">{copy.moreGuidesTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {copy.moreGuides.map((g) => (
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
        <h2 className="font-semibold text-white">{copy.whyTitle}</h2>
        <p className="text-sm text-neutral-400">{copy.whyDesc}</p>
      </section>
    </div>
  );
}
