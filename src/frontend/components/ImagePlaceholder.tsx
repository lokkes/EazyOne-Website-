"use client";

import Image from "next/image";
import { useState } from "react";

type PremiumImageProps = {
  src?: string;
  alt: string;
  label: string;
  priority?: boolean;
  className?: string;
};

export function PremiumImage({
  src,
  alt,
  label,
  priority = false,
  className = ""
}: PremiumImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`relative flex h-full min-h-[260px] w-full items-end overflow-hidden bg-[#d8d0c4] ${className}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,16,16,0.10),rgba(255,255,255,0.20)),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.34),transparent_28%)]" />
        <div className="relative flex w-full items-end justify-between gap-4 p-5 text-[0.68rem] font-bold tracking-[0.18em] text-black/60">
          <span>{label}</span>
          <span>REPLACEABLE</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${className}`}
      fill
      onError={() => setFailed(true)}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      src={src}
    />
  );
}
