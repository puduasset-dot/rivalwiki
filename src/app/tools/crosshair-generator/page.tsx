import type { Metadata } from "next";
import { CrosshairGeneratorClient } from "./CrosshairGeneratorClient";

export const metadata: Metadata = {
  title: "RIVALS Crosshair Generator",
  description: "Design and preview a RIVALS crosshair — color, size, gap, thickness, and opacity.",
};

export default function CrosshairGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">Crosshair Generator</h1>
        <p className="text-sm text-neutral-400">
          Preview a crosshair and copy the settings to match manually in-game.
        </p>
      </div>
      <CrosshairGeneratorClient />
    </div>
  );
}
