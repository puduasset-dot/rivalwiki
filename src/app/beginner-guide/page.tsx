import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RIVALS Beginner Guide",
  description: "Start here: what to do first in RIVALS, from unlocking codes to your first loadout.",
};

const STEPS = [
  {
    title: "1. Redeem codes immediately",
    body: "Codes expire fast, and most give free Keys. Check the ",
    link: { href: "/codes", label: "Codes page" },
    after: " and redeem what's active before it rotates out.",
  },
  {
    title: "2. Learn the free weapons first",
    body: "The Assault Rifle and Handgun are free and reliable at all ranges — see their full stats on the ",
    link: { href: "/weapons/assault-rifle", label: "Assault Rifle page" },
    after: ". You don't need to spend Keys to be competitive early.",
  },
  {
    title: "3. Grind Daily Tasks and Weapon Contracts",
    body: "These are the two fastest repeatable ways to earn Keys — see ",
    link: { href: "/keys", label: "Keys" },
    after: " for the full breakdown.",
  },
  {
    title: "4. Practice slide jump and double jump before anything fancier",
    body: "These are the two beginner-tier movement techs and the foundation for everything else — see the ",
    link: { href: "/movement", label: "Movement Guide" },
    after: ".",
  },
  {
    title: "5. Play 10 unranked duels, then unlock Ranked",
    body: "Ranked needs 10 standard duels plus account verification first. Check ",
    link: { href: "/ranks", label: "Ranks" },
    after: " for the full requirements before you queue.",
  },
  {
    title: "6. Compare weapons before spending Keys",
    body: "Use the ",
    link: { href: "/tools/weapon-comparison", label: "Weapon Comparison Tool" },
    after: " to check stats side by side before committing Keys to a new weapon.",
  },
];

export default function BeginnerGuidePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">RIVALS Beginner Guide</h1>
        <p className="text-sm text-neutral-400">
          Six things to do in your first few sessions, in order.
        </p>
      </div>

      <div className="space-y-3">
        {STEPS.map((s) => (
          <div key={s.title} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <p className="font-medium text-white">{s.title}</p>
            <p className="text-sm text-neutral-400 mt-1">
              {s.body}
              <Link href={s.link.href} className="text-amber-400 hover:underline">
                {s.link.label}
              </Link>
              {s.after}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
