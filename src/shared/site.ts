import type { Metadata } from "next";

export const SITE_NAME = "eazyone";
export const SITE_URL = "https://eazyone.com";
export const SITE_DESCRIPTION =
  "Premium wholesale apparel, private label apparel and made-to-order clothing manufacturing for B2B buyers.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: "/images/hero/homepage.jpg",
          alt: "eazyone premium wholesale apparel"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero/homepage.jpg"]
    },
    robots: noIndex ? { index: false, follow: false } : undefined
  };
}
