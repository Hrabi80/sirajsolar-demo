"use client"

import * as React from "react"
import Image, { type ImageProps } from "next/image"

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string
  fallbackSrc?: string
}

export function SafeImage({
  src,
  fallbackSrc = "/images/fallback-solar.svg",
  alt,
  onError,
  ...props
}: SafeImageProps) {
  const [erroredSource, setErroredSource] = React.useState<string | null>(null)
  const activeSrc = erroredSource === src ? fallbackSrc : src

  return (
    <Image
      {...props}
      src={activeSrc}
      alt={alt}
      onError={(event) => {
        if (activeSrc !== fallbackSrc) {
          setErroredSource(src)
        }
        onError?.(event)
      }}
    />
  )
}
