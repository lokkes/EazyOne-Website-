import type { Metadata } from "next";
import { categories, getFeaturedProducts } from "@/backend/catalog/products";
import { HomePage } from "@/frontend/pages/HomePage";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Premium Wholesale Apparel. Made to Order. Made Easy.",
  description:
    "U.S.-based wholesale apparel sourcing, made-to-order clothing and private label manufacturing for retailers, brands and business buyers.",
  path: "/"
});

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return <HomePage categories={categories} featuredProducts={featuredProducts} />;
}
