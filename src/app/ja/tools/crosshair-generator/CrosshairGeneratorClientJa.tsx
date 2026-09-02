"use client";

import { useState } from "react";

const COLORS = ["#22c55e", "#eab308", "#ffffff", "#ef4444", "#3b82f6", "#ec4899"];

export function CrosshairGeneratorClientJa() {
  const [color, setColor] = useState("#22c55e");
  const [size, setSize] = useState(8);
  const [gap, setGap] = useState(4);
  const [thickness, setThickness] = useState(2);
  const [opacity, setOpacity] = useState(100);
  const [outline, setOutline] = useState(true);
  const [dot, setDot] = useState(true);
  const [copied, setCopied] = useState(false);

  const half = gap;
  const armEnd = gap + size;

  const summary = `Color: ${color} | Size: ${size} | Gap: ${gap} | Thickness: ${thickness} | Opacity: ${opacity}% | Outline: ${outline ? "on" : "off"} | Center dot: ${dot ? "on" : "off"}`;

  function copySettings() {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 flex items-center justify-center h-56">
        <svg width="120" height="120" viewBox="-30 -30 60 60" style={{ opacity: opacity / 100 }}>
          {[
            { x1: 0, y1: -armEnd, x2: 0, y2: -half },
            { x1: 0, y1: half, x2: 0, y2: armEnd },
            { x1: -armEnd, y1: 0, x2: -half, y2: 0 },
            { x1: half, y1: 0, x2: armEnd, y2: 0 },
          ].map((line, i) => (
            <line
              key={i}
              {...line}
              stroke={color}
              strokeWidth={thickness}
              strokeLinecap="square"
              style={outline ? { filter: "drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000)" } : undefined}
            />
          ))}
          {dot && <circle cx={0} cy={0} r={Math.max(1, thickness / 2)} fill={color} />}
        </svg>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs text-neutral-500">色</span>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label={`色を${c}に設定`}
                  onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-full border-2 ${color === c ? "border-white" : "border-neutral-700"}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <label className="block space-y-1">
            <span className="text-xs text-neutral-500">サイズ: {size}</span>
            <input type="range" min={2} max={20} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" />
          </label>

          <label className="block space-y-1">
            <span className="text-xs text-neutral-500">ギャップ: {gap}</span>
            <input type="range" min={0} max={15} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full" />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block space-y-1">
            <span className="text-xs text-neutral-500">太さ: {thickness}</span>
            <input type="range" min={1} max={6} value={thickness} onChange={(e) => setThickness(Number(e.target.value))} className="w-full" />
          </label>

          <label className="block space-y-1">
            <span className="text-xs text-neutral-500">不透明度: {opacity}%</span>
            <input type="range" min={10} max={100} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
          </label>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-neutral-300">
              <input type="checkbox" checked={outline} onChange={(e) => setOutline(e.target.checked)} />
              アウトライン
            </label>
            <label className="flex items-center gap-2 text-sm text-neutral-300">
              <input type="checkbox" checked={dot} onChange={(e) => setDot(e.target.checked)} />
              センタードット
            </label>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-2">
        <p className="text-xs text-neutral-500 font-mono break-all">{summary}</p>
        <button
          type="button"
          onClick={copySettings}
          className="text-sm rounded-md border border-neutral-700 px-3 py-1.5 text-neutral-200 hover:border-amber-400/60 transition-colors"
        >
          {copied ? "コピーしました!" : "設定をコピー"}
        </button>
        <p className="text-xs text-neutral-500">
          RIVALSにはクロスヘアのインポートコードがない——この数値をコピーして、ゲーム内のクロスヘア設定で手動で合わせてほしい。
        </p>
      </div>
    </div>
  );
}
