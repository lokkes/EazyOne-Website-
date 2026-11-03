"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/backend/catalog/products";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";

type ProductConfiguratorProps = {
  product: Product;
};

export function ProductConfigurator({ product }: ProductConfiguratorProps) {
  const [selectedSku, setSelectedSku] = useState(product.defaultVariantSku);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const selectedVariant =
    product.variants.find((variant) => variant.sku === selectedSku) ??
    product.variants[0];
  const duplicateColors = new Set(
    product.variants
      .filter(
        (variant, index, variants) =>
          variants.findIndex((item) => item.color === variant.color) !== index
      )
      .map((variant) => variant.color)
  );

  const quoteProduct = [
    product.name,
    selectedVariant.sku,
    selectedVariant.color,
    selectedSize ? `Size ${selectedSize}` : null
  ]
    .filter(Boolean)
    .join(" - ");
  const quoteHref = `/quote?product=${encodeURIComponent(quoteProduct)}`;

  function selectVariant(sku: string) {
    const nextVariant = product.variants.find((variant) => variant.sku === sku);

    setSelectedSku(sku);
    if (selectedSize && !nextVariant?.sizes.includes(selectedSize)) {
      setSelectedSize(null);
    }
  }

  const specifications = [
    ["SKU", selectedVariant.sku],
    ["Minimum Order Quantity", `${selectedVariant.moq} pieces`],
    ["Available Sizes", selectedVariant.sizes.join(" / ")],
    ["Fit", selectedVariant.fit],
    ["Fabric", selectedVariant.fabric],
    ["GSM", selectedVariant.gsm],
    ["Production", selectedVariant.production]
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="grid gap-4 md:grid-cols-2" aria-live="polite">
        {selectedVariant.images.map((image, index) => (
          <div
            className={`relative overflow-hidden bg-[#d8d0c4] ${
              index === 0 ? "aspect-[4/5] md:col-span-2" : "aspect-square"
            }`}
            key={`${selectedVariant.sku}-${image.label}`}
          >
            <PremiumImage
              alt={image.alt}
              className={
                product.slug === "thin-check-flannel-shirt" ? "object-top" : ""
              }
              label={image.label}
              priority={index === 0}
              src={image.src}
            />
          </div>
        ))}
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <Link
          className="text-xs font-bold tracking-[0.14em] text-black/55 transition hover:text-black"
          href={`/shop?category=${product.categorySlug}`}
        >
          ← BACK TO COLLECTION
        </Link>
        <p className="eyebrow mb-5 mt-8 text-black/45">{product.category}</p>
        <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
          {product.name}
        </h1>
        <p className="mt-5 text-sm font-bold tracking-[0.12em] text-black/55" aria-live="polite">
          {selectedVariant.productName} · {selectedVariant.sku}
        </p>
        <p className="mt-7 text-lg leading-relaxed text-[#706b63]">
          {selectedVariant.description}
        </p>

        <fieldset className="mt-10">
          <legend className="text-xs font-bold tracking-[0.14em]">COLOR / VARIANT</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.sku === variant.sku;
              const label = duplicateColors.has(variant.color)
                ? `${variant.color} (${variant.sku})`
                : variant.color;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`border px-4 py-3 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    isSelected
                      ? "border-black bg-black text-white"
                      : "fine-border hover:border-black"
                  }`}
                  key={variant.sku}
                  onClick={() => selectVariant(variant.sku)}
                  type="button"
                >
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-8">
          <legend className="text-xs font-bold tracking-[0.14em]">SIZE</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedVariant.sizes.map((size) => {
              const isSelected = selectedSize === size;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`border px-4 py-3 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    isSelected
                      ? "border-black bg-black text-white"
                      : "fine-border hover:border-black"
                  }`}
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {size}
                </button>
              );
            })}
          </div>
        </fieldset>

        <dl className="mt-10 grid grid-cols-2 border-t fine-border text-sm">
          {specifications.map(([label, value]) => (
            <div className="border-b fine-border py-4" key={label}>
              <dt className="text-xs font-bold tracking-[0.14em] text-black/45">
                {label.toUpperCase()}
              </dt>
              <dd className="mt-2">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <h2 className="text-xs font-bold tracking-[0.14em]">FEATURES</h2>
          <ul className="mt-3 grid gap-2 text-[#706b63]">
            {selectedVariant.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-3">
          <Link
            className="bg-black px-6 py-5 text-center text-xs font-bold tracking-[0.16em] text-white transition hover:bg-[#2a2a2a]"
            href={quoteHref}
          >
            REQUEST WHOLESALE PRICING
          </Link>
          <Link
            className="border border-black px-6 py-5 text-center text-xs font-bold tracking-[0.16em] transition hover:bg-black hover:text-white"
            href={quoteHref}
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </aside>
    </div>
  );
}
