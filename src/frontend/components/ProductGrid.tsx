import type { Product } from "@/backend/catalog/products";
import { ProductCard } from "@/frontend/components/ProductCard";
import { SectionHeader } from "@/frontend/components/SectionHeader";

type ProductGridProps = {
  products: Product[];
  title?: string;
  copy?: string;
};

export function ProductGrid({
  products,
  title = "Featured Products",
  copy = "Made-to-order apparel built for wholesale programs, private-label collections and premium retail buyers."
}: ProductGridProps) {
  return (
    <section className="site-container py-16 md:py-24">
      <SectionHeader copy={copy} eyebrow="MOQ STARTING AT 500 UNITS" title={title} />
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
