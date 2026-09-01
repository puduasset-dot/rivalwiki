import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach RivalWiki with corrections, questions, or removal requests.",
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white">Contact</h1>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          Found a wrong stat, an expired code that&apos;s still listed as active, or
          something that needs a correction? The fastest way to reach us is to open an
          issue on the site&apos;s GitHub repository:
        </p>

        <a
          href="https://github.com/puduasset-dot/rivalwiki/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-amber-400 hover:border-amber-400/60 transition-colors"
        >
          github.com/puduasset-dot/rivalwiki/issues →
        </a>

        <p>
          This covers data corrections, bug reports, privacy questions, and content
          removal requests (for example, if you&apos;re a rights holder with a concern about
          an image or asset used on this site).
        </p>

        <p>
          RivalWiki is an independent fan project, not an official RIVALS or Roblox
          support channel — for account issues, purchases, or in-game support, use{" "}
          <a
            href="https://www.roblox.com/games/17625359962/RIVALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            Roblox&apos;s own support
          </a>{" "}
          instead.
        </p>
      </div>
    </div>
  );
}
