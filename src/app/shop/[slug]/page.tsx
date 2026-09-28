import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveProductImages } from "@/backend/catalog/product-images";
import { getProductBySlug, products } from "@/backend/catalog/products";
import { ProductConfigurator } from "@/frontend/components/ProductConfigurator";
import { SITE_NAME, SITE_URL } from "@/shared/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: false }
    };
  }

  const title =
    product.seo?.title ?? `${product.name} | Eazyone Wholesale Clothing`;
  const description =
    product.seo?.description ??
    `${product.name} for wholesale apparel buyers. MOQ ${product.moq}. ${product.shortSpec}.`;
  const path = `/shop/${product.slug}`;

  return {
    title: { absolute: title },
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
          alt: product.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero/homepage.jpg"]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const displayProduct = resolveProductImages(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    material: product.fabric,
    color: product.colors,
    size: product.sizes,
    sku: product.id,
    url: `${SITE_URL}/shop/${product.slug}`
  };

  return (
    <main className="site-container py-8 md:py-14">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c")
        }}
        type="application/ld+json"
      />
      <ProductConfigurator product={displayProduct} />
    </main>
  );
}
