import type { Metadata } from "next";
import { Footer } from "@/frontend/components/Footer";
import { Header } from "@/frontend/components/Header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/shared/site";
import "@/frontend/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "eazyone | Premium Wholesale Apparel",
    template: "%s | eazyone"
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "eazyone | Premium Wholesale Apparel",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/hero/homepage.jpg",
        alt: "eazyone premium wholesale apparel"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "eazyone | Premium Wholesale Apparel",
    description: SITE_DESCRIPTION,
    images: ["/images/hero/homepage.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION
  };

  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c")
          }}
          type="application/ld+json"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
