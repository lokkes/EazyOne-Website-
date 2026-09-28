import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";
import type { Product, ProductImage } from "@/backend/catalog/products";

function publicFileExists(src?: string): boolean {
  if (!src || !src.startsWith("/")) {
    return false;
  }

  return existsSync(path.join(process.cwd(), "public", src.slice(1)));
}

export function resolveProductImage(image: ProductImage): ProductImage {
  return publicFileExists(image.src) ? image : { ...image, src: undefined };
}

export function resolveProductImages(product: Product): Product {
  return {
    ...product,
    images: product.images.map(resolveProductImage),
    imageVariants: Object.fromEntries(
      Object.entries(product.imageVariants).map(([color, images]) => [
        color,
        images.map(resolveProductImage)
      ])
    )
  };
}
