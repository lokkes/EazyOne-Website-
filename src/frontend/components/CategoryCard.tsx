import Link from "next/link";
import type { Category } from "@/backend/catalog/products";
import { PremiumImage } from "@/frontend/components/ImagePlaceholder";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link className="group block" href={`/shop?category=${category.slug}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d0c4]">
        <PremiumImage alt={category.name} label={category.imageLabel} src={category.imageSrc} />
      </div>
      <div className="mt-5 flex items-start justify-between gap-5 border-t fine-border pt-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em]">{category.name}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#706b63]">
            {category.summary}
          </p>
        </div>
        <span className="text-xl transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
