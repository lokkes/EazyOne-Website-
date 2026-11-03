import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { resolveProductImages } from "@/backend/catalog/product-images";
import {
  getProductBySlug,
  legacyProductSlugs,
  products
} from "@/backend/catalog/products";
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

  const defaultVariant = product.variants[0];
  const title = `${product.name} | Eazyone Wholesale Clothing`;
  const description = `${product.name} for wholesale apparel buyers. MOQ ${defaultVariant.moq} pieces. ${product.shortSpec}.`;
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
    if (legacyProductSlugs.has(slug)) {
      redirect("/shop");
    }

    notFound();
  }

  const displayProduct = resolveProductImages(product);
  const defaultVariant = product.variants[0];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: defaultVariant.description,
    category: product.category,
    ...(defaultVariant.fabric ? { material: defaultVariant.fabric } : {}),
    color: product.variants.map((variant) => variant.color),
    size: defaultVariant.sizes,
    sku: defaultVariant.sku,
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
