import type { Metadata } from "next";
import Link from "next/link";
import { resolveProductImages } from "@/backend/catalog/product-images";
import { categories, getProductsByCategory } from "@/backend/catalog/products";
import { ProductCard } from "@/frontend/components/ProductCard";
import { SectionHeader } from "@/frontend/components/SectionHeader";
import { createPageMetadata } from "@/shared/site";

export const metadata: Metadata = createPageMetadata({
  title: "Shop Wholesale",
  description:
    "Shop made-to-order flannel shirts, hooded flannels, overshirts, shorts, sleepwear and loungewear.",
  path: "/shop"
});

type ShopPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const activeCategory = params?.category ?? "all";
  const products = getProductsByCategory(activeCategory).map(resolveProductImages);

  return (
    <main className="site-container py-12 md:py-20">
      <SectionHeader
        copy="A premium wholesale catalogue for B2B apparel buyers. Every product is structured for made-to-order production and future private-label programs."
        eyebrow="Shop Wholesale"
        title="Shop Our Collection"
      />

      <div className="mb-12 flex gap-3 overflow-x-auto pb-2">
        <Link className={`shrink-0 border px-4 py-3 text-xs font-bold tracking-[0.14em] ${activeCategory === "all" ? "border-black bg-black text-white" : "fine-border"}`} href="/shop">
          ALL
        </Link>
        {categories.map((category) => {
          const slug = category.slug;
          return (
            <Link
              className={`shrink-0 border px-4 py-3 text-xs font-bold tracking-[0.14em] ${activeCategory === slug ? "border-black bg-black text-white" : "fine-border"}`}
              href={`/shop?category=${slug}`}
              key={category.id}
            >
              {category.name.toUpperCase()}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
