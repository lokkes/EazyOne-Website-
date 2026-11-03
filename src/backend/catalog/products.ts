import {
  ALL_CATALOGUE_SIZES,
  catalogueCategorySources,
  catalogueGroupSources,
  type CatalogueCategoryId
} from "@/backend/catalog/catalogue-data";

export type ProductCategory = (typeof catalogueCategorySources)[number]["name"];

export type Category = {
  id: CatalogueCategoryId;
  slug: string;
  name: ProductCategory;
  summary: string;
  imageSrc?: string;
  imageLabel: string;
};

export type ProductImage = {
  src?: string;
  alt: string;
  label: string;
};

export type ProductVariant = {
  sku: string;
  productName: string;
  color: string;
  sizes: string[];
  fit: string;
  fabric?: string;
  gsm?: string;
  description: string;
  features: string[];
  moq: number;
  production: string;
  images: ProductImage[];
  sourceImageFolder: string;
  sourceGroupReference: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categorySlug: string;
  groupNumber: number;
  groupReference: string;
  defaultVariantSku: string;
  shortSpec: string;
  variants: ProductVariant[];
  images: ProductImage[];
};

const imageFileNames = ["01.webp", "02.webp", "03.webp", "04.webp"];

function createVariantImages(
  sku: string,
  productName: string,
  color: string
): ProductImage[] {
  return imageFileNames.map((fileName, index) => ({
    src: `/images/products/${sku}/${fileName}`,
    alt: `${productName} in ${color}, image ${index + 1}`,
    label: `${sku} IMAGE ${index + 1}`
  }));
}

const categoryNameById = new Map(
  catalogueCategorySources.map((category) => [category.id, category.name])
);

export const categories: Category[] = catalogueCategorySources.map((category) => ({
  ...category,
  imageLabel: `${category.name.toUpperCase()} IMAGE`
}));

export const productCategories: ProductCategory[] = categories.map(
  (category) => category.name
);

export const products: Product[] = catalogueGroupSources.map((group) => {
  const category = categoryNameById.get(group.categoryId);

  if (!category) {
    throw new Error(`Unknown catalogue category: ${group.categoryId}`);
  }

  const variants: ProductVariant[] = group.variants.map((variant) => ({
    sku: variant.sku,
    productName: variant.productName,
    color: variant.color,
    sizes: [...ALL_CATALOGUE_SIZES],
    fit: group.fit,
    fabric:
      variant.fabric === null ? undefined : (variant.fabric ?? group.fabric),
    gsm: variant.gsm === null ? undefined : (variant.gsm ?? group.gsm),
    description: group.description,
    features: variant.features ?? group.features,
    moq: group.moq,
    production: group.production,
    images: createVariantImages(variant.sku, variant.productName, variant.color),
    sourceImageFolder: variant.sourceImageFolder,
    sourceGroupReference: variant.sourceGroupReference
  }));

  return {
    id: `group-${group.groupNumber}`,
    slug: group.slug,
    name: group.displayTitle,
    category,
    categorySlug: group.categoryId,
    groupNumber: group.groupNumber,
    groupReference: group.groupReference,
    defaultVariantSku: variants[0].sku,
    shortSpec: `${variants.length} ${variants.length === 1 ? "color option" : "color variants"}`,
    variants,
    images: variants[0].images
  };
});

function validateCatalogue() {
  const skus = products.flatMap((product) =>
    product.variants.map((variant) => variant.sku)
  );
  const categoryIds = new Set(categories.map((category) => category.id));
  const groupNumbers = new Set(products.map((product) => product.groupNumber));
  const slugs = new Set(products.map((product) => product.slug));
  const uniqueSkus = new Set(skus);
  const errors: string[] = [];

  if (categories.length !== 5) errors.push(`Expected 5 categories, found ${categories.length}.`);
  if (products.length !== 17) errors.push(`Expected 17 product groups, found ${products.length}.`);
  if (skus.length !== 60) errors.push(`Expected 60 SKUs, found ${skus.length}.`);
  if (uniqueSkus.size !== skus.length) errors.push("Duplicate SKU identifiers found.");
  if (groupNumbers.size !== products.length) errors.push("Duplicate product group numbers found.");
  if (slugs.size !== products.length) errors.push("Duplicate product route slugs found.");

  for (const product of products) {
    if (!categoryIds.has(product.categorySlug as CatalogueCategoryId)) {
      errors.push(`Group ${product.groupNumber} has an invalid category.`);
    }

    if (!product.variants.some((variant) => variant.sku === product.defaultVariantSku)) {
      errors.push(`Group ${product.groupNumber} has an invalid default variant.`);
    }

    for (const variant of product.variants) {
      if (!variant.sourceGroupReference || !variant.sourceImageFolder) {
        errors.push(`${variant.sku} is missing source metadata.`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Catalogue validation failed:\n${errors.join("\n")}`);
  }

  return {
    categories: categories.length,
    groups: products.length,
    skus: skus.length
  };
}

export const catalogueValidation = validateCatalogue();

export const legacyProductSlugs = new Set([
  "premium-heavyweight-oversized-sweatshirt",
  "essential-oversized-hoodie",
  "premium-cotton-jogger",
  "heavyweight-streetwear-t-shirt",
  "premium-casual-shirt",
  "classic-formal-shirt",
  "premium-pajama-set",
  "luxury-lounge-set",
  "oversized-sweatpants",
  "premium-crewneck-sweatshirt"
]);

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === "all") {
    return products;
  }

  return products.filter((product) => product.categorySlug === category);
}
