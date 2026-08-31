export function SourceNote({ label, lastChecked, url }: { label: string; lastChecked: string; url?: string }) {
  return (
    <p className="text-xs text-neutral-500 border-l-2 border-neutral-700 pl-3">
      Source: {url ? (
        <a href={url} className="underline hover:text-neutral-300" target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        label
      )}{" "}
      · Last checked: {lastChecked}
    </p>
  );
}
