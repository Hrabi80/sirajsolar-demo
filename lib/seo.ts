import type { Metadata } from "next"

import { siteConfig } from "@/lib/site"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} — ${siteConfig.name}`
  const previewImage = image ?? siteConfig.ogImage

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: previewImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [previewImage],
    },
  }
}
