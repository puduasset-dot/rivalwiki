export function StatBar({
  label,
  value,
  max,
  displayValue,
  colorClass = "bg-amber-400",
}: {
  label: string;
  value: number;
  max: number;
  displayValue: string;
  colorClass?: string;
}) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-neutral-400">
        <span>{label}</span>
        <span className="text-neutral-300">{displayValue}</span>
      </div>
      <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
        <div className={`h-full rounded-full ${colorClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
