import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using RivalWiki.",
};

export default function TermsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
        <p className="text-xs text-neutral-500">Last updated: September 1, 2026</p>
      </div>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          By using rivalwiki.com, you agree to these terms. If you don&apos;t agree, please
          don&apos;t use the site.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Informational use only</h2>
        <p>
          RivalWiki provides guides, tools, and data about the Roblox game RIVALS for
          informational purposes. We aggregate stats, codes, and rankings from community
          sources and try to keep them accurate and dated, but RIVALS is actively updated
          and balance patches happen — treat everything here as a best-effort snapshot,
          not a guarantee. Where we couldn&apos;t confirm a number, we mark it &quot;Unconfirmed&quot;
          rather than guess. See <Link href="/about" className="text-amber-400 hover:underline">About</Link> for more on how we source data.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">No affiliation</h2>
        <p>
          RivalWiki is an independent fan project and is not affiliated with, endorsed
          by, or sponsored by Nosniy Games or Roblox Corporation. RIVALS and related
          marks belong to their respective owners.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Acceptable use</h2>
        <p>
          Use the site for personal, non-commercial reference. Don&apos;t scrape or
          republish the site&apos;s content at scale, attempt to disrupt the service, or use
          it for any unlawful purpose.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Third-party links and ads</h2>
        <p>
          The site links to external sources (the RIVALS Fandom wiki, Roblox, news
          outlets) and displays ads served by Google AdSense. We don&apos;t control and
          aren&apos;t responsible for the content, availability, or practices of those
          third-party sites.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">No warranty</h2>
        <p>
          The site and its tools are provided &quot;as is,&quot; without warranties of any kind.
          We don&apos;t guarantee the site will be error-free, always available, or that any
          code, stat, or ranking is currently accurate.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Changes</h2>
        <p>
          We may update these terms or the site&apos;s content at any time. Continued use
          after a change means you accept the updated terms.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Contact</h2>
        <p>
          Questions about these terms? See the <Link href="/contact" className="text-amber-400 hover:underline">Contact page</Link>.
        </p>
      </div>
    </div>
  );
}
