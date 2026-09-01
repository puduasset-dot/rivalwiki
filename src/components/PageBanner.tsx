import Image from "next/image";

export function PageBanner({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-neutral-800 h-40 sm:h-48">
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/10 to-transparent" />
      {caption && (
        <p className="absolute bottom-2 right-3 text-xs text-neutral-300 drop-shadow">
          {caption}
        </p>
      )}
    </div>
  );
}
