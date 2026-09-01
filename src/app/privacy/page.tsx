import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RivalWiki handles data: analytics, advertising cookies, and your choices.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
        <p className="text-xs text-neutral-500">Last updated: September 1, 2026</p>
      </div>

      <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
        <p>
          This policy explains what data RivalWiki (&quot;we&quot;, &quot;the site&quot;) collects when
          you visit rivalwiki.com, and what choices you have. We don&apos;t require an
          account, we don&apos;t run our own comment system or forms, and we don&apos;t sell
          personal data.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Data we collect directly</h2>
        <p>
          RivalWiki itself does not collect or store any personal information you enter,
          because there&apos;s nowhere on the site to enter any — no sign-up, no comments, no
          contact forms. The interactive tools (weapon comparison, loadout builder,
          crosshair generator) run entirely in your browser; your selections aren&apos;t sent
          to us or stored anywhere.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Analytics (Google Analytics)</h2>
        <p>
          We use Google Analytics to understand which pages get used, so we know what to
          keep updated. It collects standard usage data — pages viewed, approximate
          location (country/city level), device and browser type, and how you got to the
          site — associated with a cookie identifier, not your name or email. See{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          for how Google handles that data.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Advertising (Google AdSense)</h2>
        <p>
          RivalWiki shows ads served by Google AdSense to help cover hosting costs.
          Google and its advertising partners may use cookies to serve ads based on your
          prior visits to this and other websites. You can opt out of personalized
          advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            aboutads.info/choices
          </a>
          . Third-party vendors, including Google, use cookies to serve ads based on a
          user&apos;s prior visits to this site or other sites on the internet.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Cookies</h2>
        <p>
          Beyond the analytics and advertising cookies described above, RivalWiki does
          not set its own cookies. Your browser lets you block or delete cookies at any
          time; doing so may affect ad personalization but won&apos;t break any page on this
          site.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Children&apos;s privacy</h2>
        <p>
          RivalWiki is a general-audience informational site and is not directed at
          children under 13. We don&apos;t knowingly collect personal information from
          children.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Your choices</h2>
        <p>
          You can use a browser extension or built-in setting to block analytics and
          advertising cookies, use the opt-out links above, or contact us (see the{" "}
          <Link href="/contact" className="text-amber-400 hover:underline">Contact page</Link>) with any
          privacy question.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2">Changes to this policy</h2>
        <p>
          If this policy changes, we&apos;ll update the date at the top of this page.
        </p>
      </div>
    </div>
  );
}
