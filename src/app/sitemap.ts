import type { MetadataRoute } from "next";
import { products } from "@/backend/catalog/products";
import { SITE_URL } from "@/shared/site";

const staticPages = [
  "",
  "/shop",
  "/how-it-works",
  "/services",
  "/about",
  "/why-eazyone",
  "/contact",
  "/quote"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/shop" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/shop" ? 0.9 : 0.7
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/shop/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...pages, ...productPages];
}
