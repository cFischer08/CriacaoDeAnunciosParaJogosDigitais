"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
};

export default function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={`${alt}. Arquivo não encontrado: ${src}`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden bg-zinc-200 px-3 py-4 text-center text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
      >
        <span className="text-sm font-semibold">Imagem não encontrada</span>
        <code className="max-w-full break-all text-xs">{src}</code>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
