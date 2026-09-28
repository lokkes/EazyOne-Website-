import Link from "next/link";
import type { Product } from "@/backend/catalog/products";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <article className="group">
      <Link href={`/shop/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d0c4]">
          <PremiumImage alt={image.alt} label={image.label} src={image.src} />
        </div>
        <div className="border-b fine-border py-5">
          <p className="eyebrow mb-2 text-black/45">{product.category}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em]">{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#706b63]">{product.shortSpec}</p>
          <div className="mt-5 flex items-center justify-between gap-4 text-sm">
            <span>MOQ: {product.moq}</span>
            <span className="font-bold tracking-[0.12em]">VIEW PRODUCT</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
