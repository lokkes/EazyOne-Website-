import type { Category, Product } from "@/backend/catalog/products";
import { CategoryCard } from "@/frontend/components/CategoryCard";
import { Hero } from "@/frontend/components/Hero";
import { ProductGrid } from "@/frontend/components/ProductGrid";
import { QuoteSection } from "@/frontend/components/QuoteSection";
import { SectionHeader } from "@/frontend/components/SectionHeader";

type HomePageProps = {
  categories: Category[];
  featuredProducts: Product[];
};

export function HomePage({ categories, featuredProducts }: HomePageProps) {
  return (
    <main>
      <Hero />

      <section className="site-container py-16 md:py-24">
        <SectionHeader
          copy="Premium wholesale apparel manufactured to order."
          eyebrow="Shop Our Collection"
          title="Shop Our Collection"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.slug} />
          ))}
        </div>
      </section>

      <ProductGrid products={featuredProducts} />

      <QuoteSection />
    </main>
  );
}
