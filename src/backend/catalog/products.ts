export type ProductCategory =
  | "Nightwear"
  | "Casual Shirts"
  | "Streetwear"
  | "Sweatshirts"
  | "Hoodies"
  | "Joggers"
  | "Formal Shirts";

export type Category = {
  slug: string;
  name: ProductCategory;
  summary: string;
  imageSrc: string;
  imageLabel: string;
};

export type ProductImage = {
  src?: string;
  alt: string;
  label: string;
};

export type ProductSeo = {
  title?: string;
  description?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortSpec: string;
  description: string;
  moq: string;
  sizes: string[];
  colors: string[];
  fabric: string;
  gsm?: string;
  fit: string;
  production: string;
  customization: string[];
  images: ProductImage[];
  imageVariants: Record<string, ProductImage[]>;
  seo?: ProductSeo;
};

type ProductCatalogueEntry = Omit<Product, "imageVariants">;

export const categories: Category[] = [
  {
    slug: "nightwear",
    name: "Nightwear",
    summary: "Premium pajama sets, sleepwear & loungewear",
    imageSrc: "/images/categories/nightwear.jpg",
    imageLabel: "IMAGE PLACEHOLDER - NIGHTWEAR"
  },
  {
    slug: "casual-shirts",
    name: "Casual Shirts",
    summary: "Elevated everyday shirting for wholesale programs",
    imageSrc: "/images/categories/casual-shirts.jpg",
    imageLabel: "IMAGE PLACEHOLDER - CASUAL SHIRTS"
  },
  {
    slug: "streetwear",
    name: "Streetwear",
    summary: "Sweatsuits, heavyweight tees and contemporary fits",
    imageSrc: "/images/categories/streetwear.jpg",
    imageLabel: "IMAGE PLACEHOLDER - STREETWEAR"
  },
  {
    slug: "sweatshirts",
    name: "Sweatshirts",
    summary: "Hoodies, joggers and fleece essentials",
    imageSrc: "/images/categories/sweatshirts.jpg",
    imageLabel: "IMAGE PLACEHOLDER - SWEATSHIRTS"
  },
  {
    slug: "formal-shirts",
    name: "Formal Shirts",
    summary: "Sharp wholesale shirting for uniform and retail buyers",
    imageSrc: "/images/categories/formal-shirts.jpg",
    imageLabel: "IMAGE PLACEHOLDER - FORMAL SHIRTS"
  }
];

export const productCategories: ProductCategory[] = [
  "Nightwear",
  "Casual Shirts",
  "Streetwear",
  "Sweatshirts",
  "Hoodies",
  "Joggers",
  "Formal Shirts"
];

const productCatalogue: ProductCatalogueEntry[] = [
  {
    id: "prod-001",
    slug: "premium-heavyweight-oversized-sweatshirt",
    name: "Premium Heavyweight Oversized Sweatshirt",
    category: "Sweatshirts",
    shortSpec: "400 GSM cotton fleece, oversized fit",
    description:
      "A premium heavyweight sweatshirt designed for wholesale collections, retail brands and private-label programs. Manufactured in India using carefully selected fabrics and production partners.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy", "Cream"],
    fabric: "100% Cotton",
    gsm: "400",
    fit: "Oversized",
    production: "Made to Order",
    customization: [
      "Private label",
      "Custom colors",
      "Custom sizing",
      "Custom branding",
      "Custom packaging"
    ],
    images: [
      {
        src: "/images/products/premium-heavyweight-oversized-sweatshirt/main.jpg",
        alt: "Premium heavyweight oversized sweatshirt",
        label: "MAIN PRODUCT IMAGE"
      },
      {
        src: "/images/products/premium-heavyweight-oversized-sweatshirt/secondary.jpg",
        alt: "Premium heavyweight oversized sweatshirt secondary view",
        label: "SECONDARY IMAGE"
      },
      {
        src: "/images/products/premium-heavyweight-oversized-sweatshirt/detail.jpg",
        alt: "Premium heavyweight oversized sweatshirt detail",
        label: "DETAIL IMAGE"
      },
      {
        src: "/images/products/premium-heavyweight-oversized-sweatshirt/lifestyle.jpg",
        alt: "Premium heavyweight oversized sweatshirt lifestyle",
        label: "LIFESTYLE IMAGE"
      }
    ]
  },
  {
    id: "prod-002",
    slug: "essential-oversized-hoodie",
    name: "Essential Oversized Hoodie",
    category: "Hoodies",
    shortSpec: "Fleece hoodie with premium rib and drawcord options",
    description:
      "A made-to-order hoodie built for brands, boutiques and wholesale buyers who need reliable quality at scale.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey", "Cream"],
    fabric: "Cotton Fleece",
    gsm: "360",
    fit: "Oversized",
    production: "Made to Order",
    customization: ["Private label", "Embroidery", "Printing", "Custom packaging"],
    images: [
      {
        src: "/images/products/essential-oversized-hoodie/main.jpg",
        alt: "Essential oversized hoodie",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-003",
    slug: "premium-cotton-jogger",
    name: "Premium Cotton Jogger",
    category: "Joggers",
    shortSpec: "Structured cotton fleece jogger with bulk color options",
    description:
      "A premium jogger designed for coordinated wholesale sets, private-label collections and retail programs.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Olive", "Cream"],
    fabric: "Cotton Fleece",
    gsm: "340",
    fit: "Relaxed",
    production: "Made to Order",
    customization: ["Custom colors", "Custom sizing", "Private label"],
    images: [
      {
        src: "/images/products/premium-cotton-jogger/main.jpg",
        alt: "Premium cotton jogger",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-004",
    slug: "heavyweight-streetwear-t-shirt",
    name: "Heavyweight Streetwear T-Shirt",
    category: "Streetwear",
    shortSpec: "Boxy cotton tee for premium streetwear collections",
    description:
      "A heavyweight T-shirt produced for brands and retailers building modern wholesale apparel assortments.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Washed Grey", "Cream"],
    fabric: "100% Cotton Jersey",
    gsm: "240",
    fit: "Boxy",
    production: "Made to Order",
    customization: ["Screen printing", "Embroidery", "Neck labels", "Hang tags"],
    images: [
      {
        src: "/images/products/heavyweight-streetwear-t-shirt/main.jpg",
        alt: "Heavyweight streetwear T-shirt",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-005",
    slug: "premium-casual-shirt",
    name: "Premium Casual Shirt",
    category: "Casual Shirts",
    shortSpec: "Clean everyday shirting with custom fabric options",
    description:
      "A refined casual shirt option for wholesale buyers seeking reliable construction and versatile styling.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Sky", "Stone", "Black"],
    fabric: "Cotton Poplin",
    fit: "Regular",
    production: "Made to Order",
    customization: ["Custom fabrics", "Custom buttons", "Private label"],
    images: [
      {
        src: "/images/products/premium-casual-shirt/main.jpg",
        alt: "Premium casual shirt",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-006",
    slug: "classic-formal-shirt",
    name: "Classic Formal Shirt",
    category: "Formal Shirts",
    shortSpec: "Professional shirting for retail, corporate and uniform orders",
    description:
      "A classic formal shirt designed for volume programs where quality, sizing consistency and presentation matter.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Charcoal", "Black"],
    fabric: "Cotton Blend",
    fit: "Tailored",
    production: "Made to Order",
    customization: ["Custom sizing", "Care labels", "Corporate branding"],
    images: [
      {
        src: "/images/products/classic-formal-shirt/main.jpg",
        alt: "Classic formal shirt",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-007",
    slug: "premium-pajama-set",
    name: "Premium Pajama Set",
    category: "Nightwear",
    shortSpec: "Soft coordinated set for sleepwear and lounge programs",
    description:
      "A premium pajama set for wholesale sleepwear collections, with fabric, color and packaging customization.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Ivory", "Navy", "Sage", "Charcoal"],
    fabric: "Cotton Modal",
    fit: "Relaxed",
    production: "Made to Order",
    customization: ["Custom prints", "Private labels", "Custom packaging"],
    images: [
      {
        src: "/images/products/premium-pajama-set/main.jpg",
        alt: "Premium pajama set",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-008",
    slug: "luxury-lounge-set",
    name: "Luxury Lounge Set",
    category: "Nightwear",
    shortSpec: "Elevated loungewear set for private-label collections",
    description:
      "A soft, premium lounge set made for wholesale buyers looking to build high-margin comfort collections.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Taupe", "Black", "Heather Grey"],
    fabric: "Cotton Blend Jersey",
    fit: "Relaxed",
    production: "Made to Order",
    customization: ["Custom colors", "Embroidery", "Hang tags"],
    images: [
      {
        src: "/images/products/luxury-lounge-set/main.jpg",
        alt: "Luxury lounge set",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-009",
    slug: "oversized-sweatpants",
    name: "Oversized Sweatpants",
    category: "Joggers",
    shortSpec: "Heavyweight relaxed sweatpants for streetwear sets",
    description:
      "A relaxed sweatpant designed for premium streetwear and coordinated wholesale fleece programs.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy", "Brown"],
    fabric: "Cotton Fleece",
    gsm: "380",
    fit: "Oversized",
    production: "Made to Order",
    customization: ["Private label", "Custom wash", "Custom packaging"],
    images: [
      {
        src: "/images/products/oversized-sweatpants/main.jpg",
        alt: "Oversized sweatpants",
        label: "PRODUCT IMAGE"
      }
    ]
  },
  {
    id: "prod-010",
    slug: "premium-crewneck-sweatshirt",
    name: "Premium Crewneck Sweatshirt",
    category: "Sweatshirts",
    shortSpec: "Clean crewneck fleece for retail and uniform programs",
    description:
      "A versatile crewneck sweatshirt built for wholesale production, brand merchandising and custom apparel programs.",
    moq: "500 pieces",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy", "Cream"],
    fabric: "Cotton Fleece",
    gsm: "360",
    fit: "Regular",
    production: "Made to Order",
    customization: ["Embroidery", "Printing", "Private labels"],
    images: [
      {
        src: "/images/products/premium-crewneck-sweatshirt/main.jpg",
        alt: "Premium crewneck sweatshirt",
        label: "PRODUCT IMAGE"
      }
    ]
  }
];

const gallerySlots = ["main", "secondary", "detail", "lifestyle"] as const;

function toImageSlug(value: string): string {
  return value.toLowerCase().replaceAll(" ", "-");
}

function createImageVariants(product: ProductCatalogueEntry) {
  return Object.fromEntries(
    product.colors.map((color) => [
      color,
      gallerySlots.map((slot) => ({
        src: `/images/products/${product.slug}/${toImageSlug(color)}/${slot}.jpg`,
        alt: `${product.name} in ${color}, ${slot} view`,
        label: `${color.toUpperCase()} ${slot.toUpperCase()} IMAGE`
      }))
    ])
  );
}

export const products: Product[] = productCatalogue.map((product) => ({
  ...product,
  imageVariants: createImageVariants(product)
}));

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

  return products.filter(
    (product) => product.category.toLowerCase().replaceAll(" ", "-") === category
  );
}
