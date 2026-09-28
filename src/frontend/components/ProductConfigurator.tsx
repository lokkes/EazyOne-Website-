"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product, ProductImage } from "@/backend/catalog/products";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";

type ProductConfiguratorProps = {
  product: Product;
};

function completeGallery(product: Product, color: string): ProductImage[] {
  const selectedImages = product.imageVariants[color] ?? product.images;
  const fallbackLabels = ["MAIN", "SECONDARY", "DETAIL", "LIFESTYLE"];

  return Array.from({ length: 4 }, (_, index) =>
    selectedImages[index] ??
    product.images[index] ?? {
      alt: `${product.name} in ${color}, ${fallbackLabels[index].toLowerCase()} view`,
      label: `${color.toUpperCase()} ${fallbackLabels[index]} IMAGE`
    }
  );
}

export function ProductConfigurator({ product }: ProductConfiguratorProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const gallery = completeGallery(product, selectedColor);
  const quoteProduct = [
    product.name,
    selectedColor,
    selectedSize ? `Size ${selectedSize}` : null
  ]
    .filter(Boolean)
    .join(" - ");
  const quoteHref = `/quote?product=${encodeURIComponent(quoteProduct)}`;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="grid gap-4 md:grid-cols-2" aria-live="polite">
        {gallery.map((image, index) => (
          <div
            className={`relative overflow-hidden bg-[#d8d0c4] ${
              index === 0 ? "aspect-[4/5] md:col-span-2" : "aspect-square"
            }`}
            key={`${selectedColor}-${image.label}-${index}`}
          >
            <PremiumImage
              alt={image.alt}
              label={image.label}
              priority={index === 0}
              src={image.src}
            />
          </div>
        ))}
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-5 text-black/45">{product.category}</p>
        <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
          {product.name}
        </h1>
        <p className="mt-7 text-lg leading-relaxed text-[#706b63]">
          {product.description}
        </p>

        <dl className="mt-10 grid grid-cols-2 border-t fine-border text-sm">
          {[
            ["MOQ", product.moq],
            ["Available Sizes", product.sizes.join(" / ")],
            ["Colors", product.colors.join(" / ")],
            ["Fabric", product.fabric],
            ["GSM", product.gsm ?? "Available by style"],
            ["Fit", product.fit],
            ["Production", product.production],
            ["Customization", "Available"]
          ].map(([label, value]) => (
            <div className="border-b fine-border py-4" key={label}>
              <dt className="text-xs font-bold tracking-[0.14em] text-black/45">
                {label.toUpperCase()}
              </dt>
              <dd className="mt-2">{value}</dd>
            </div>
          ))}
        </dl>

        <fieldset className="mt-10">
          <legend className="text-xs font-bold tracking-[0.14em]">SIZE</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((size) => {
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

        <fieldset className="mt-8">
          <legend className="text-xs font-bold tracking-[0.14em]">COLOR</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.colors.map((color) => {
              const isSelected = selectedColor === color;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`border px-4 py-3 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    isSelected
                      ? "border-black bg-black text-white"
                      : "fine-border hover:border-black"
                  }`}
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  type="button"
                >
                  {color}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8">
          <h2 className="text-xs font-bold tracking-[0.14em]">CUSTOMIZATION</h2>
          <ul className="mt-3 grid gap-2 text-[#706b63]">
            {product.customization.map((item) => (
              <li key={item}>{item}</li>
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
