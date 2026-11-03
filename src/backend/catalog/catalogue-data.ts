export const ALL_CATALOGUE_SIZES = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "7XL",
  "8XL",
  "9XL"
] as const;

export type CatalogueCategoryId =
  | "flannel-shirts"
  | "hooded-flannels"
  | "overshirts"
  | "shorts"
  | "sleepwear-loungewear";

export type CatalogueVariantSource = {
  sku: string;
  productName: string;
  color: string;
  sourceImageFolder: string;
  sourceGroupReference: string;
  fabric?: string | null;
  gsm?: string | null;
  features?: string[];
};

export type CatalogueGroupSource = {
  groupNumber: number;
  groupReference: string;
  slug: string;
  displayTitle: string;
  categoryId: CatalogueCategoryId;
  fit: string;
  fabric?: string;
  gsm?: string;
  description: string;
  features: string[];
  moq: number;
  production: string;
  variants: CatalogueVariantSource[];
};

export const catalogueCategorySources = [
  {
    id: "flannel-shirts",
    name: "Flannel Shirts",
    slug: "flannel-shirts",
    summary: "Short-sleeve checks and made-to-order flannel shirts",
    imageSrc: "/images/categories/flannel-shirts.webp"
  },
  {
    id: "hooded-flannels",
    name: "Hooded Flannels",
    slug: "hooded-flannels",
    summary: "Layer-ready hooded shirts and flannel styles",
    imageSrc: "/images/categories/hooded-flannels.webp"
  },
  {
    id: "overshirts",
    name: "Overshirts",
    slug: "overshirts",
    summary: "Heavy flannel, twill and zip-front overshirts",
    imageSrc: "/images/categories/overshirts.webp"
  },
  {
    id: "shorts",
    name: "Shorts",
    slug: "shorts",
    summary: "Pique, lounge, sweat and swim shorts",
    imageSrc: "/images/categories/shorts.webp"
  },
  {
    id: "sleepwear-loungewear",
    name: "Sleepwear & Loungewear",
    slug: "sleepwear-loungewear",
    summary: "Dressing gowns and relaxed pyjama pants",
    imageSrc: "/images/categories/sleepwear-loungewear.webp"
  }
] as const;

const regularFit = "Regular fit";
const relaxedFit = "Relaxed fit";
const madeToOrder = "Made to Order";
const moq = 500;

export const catalogueGroupSources: CatalogueGroupSource[] = [
  {
    groupNumber: 1,
    groupReference: "SET FS-1 · Short-Sleeve Poplin Check",
    slug: "short-sleeve-poplin-check-shirt",
    displayTitle: "Short-Sleeve Poplin Check Shirt",
    categoryId: "flannel-shirts",
    fit: regularFit,
    fabric: "55% Cotton / 45% Polyester",
    description:
      "Your new go-to short-sleeve shirt: classic collar, button front, curved hem, bold yarn-dyed check. Buttoned up or thrown open over a plain tee — either way, it does the work.",
    features: ["Short sleeves", "Button front", "Classic collar"],
    moq,
    production: madeToOrder,
    variants: [
      {
        sku: "EZO-FS-001",
        productName: "Short Sleeve Check Shirt – Teal",
        color: "Teal",
        features: ["Short sleeves", "Button front", "Classic collar", "Single chest pocket"],
        sourceImageFolder: "https://drive.google.com/drive/folders/1pEPso_LY-8X9FsBrJL3b0GUTBkCNPgwE",
        sourceGroupReference: "SET FS-1 · Short-Sleeve Poplin Check · Colour 1 of 3"
      },
      {
        sku: "EZO-FS-002",
        productName: "Short Sleeve Madras Check Shirt – Navy",
        color: "Navy",
        sourceImageFolder: "https://drive.google.com/drive/folders/1xQqx9nyI70Io6SQUN1IEYbUS2pvcexxB",
        sourceGroupReference: "SET FS-1 · Short-Sleeve Poplin Check · Colour 2 of 3"
      },
      {
        sku: "EZO-FS-003",
        productName: "Short Sleeve Check Shirt – Blue",
        color: "Blue",
        features: ["Short sleeves", "Button front", "Classic collar", "Single chest pocket"],
        sourceImageFolder: "https://drive.google.com/drive/folders/1bzmqgbHbmQ4REhf3th9B6o2YG-KxAYd3",
        sourceGroupReference: "SET FS-1 · Short-Sleeve Poplin Check · Colour 3 of 3"
      }
    ]
  },
  {
    groupNumber: 2,
    groupReference: "SET FS-2 · Thin Check Flannel 180 GSM",
    slug: "thin-check-flannel-shirt",
    displayTitle: "Thin Check Flannel Shirt",
    categoryId: "flannel-shirts",
    fit: regularFit,
    gsm: "180 GSM",
    description:
      "A long-sleeve thin-check shirt with a brushed finish and a clean classic collar. Tuck it in for polish, leave it loose for off-duty — a sharp staple that never tries too hard.",
    features: ["Long sleeves", "Button front", "Classic collar"],
    moq,
    production: madeToOrder,
    variants: [
      {
        sku: "EZO-FS-004",
        productName: "Thin Check Flannel Shirt – Navy",
        color: "Navy",
        sourceImageFolder: "https://drive.google.com/drive/folders/1S5g7TdaEHMYkGYjyzrIQubT--knfWEia",
        sourceGroupReference: "SET FS-2 · Thin Check Flannel 180 GSM · Colour 1 of 2"
      },
      {
        sku: "EZO-FS-005",
        productName: "Thin Check Flannel Shirt – Grey",
        color: "Grey",
        sourceImageFolder: "https://drive.google.com/drive/folders/1aMLNE9HApGytBzIjxY3XLqVJrWChqLwK",
        sourceGroupReference: "SET FS-2 · Thin Check Flannel 180 GSM · Colour 2 of 2"
      }
    ]
  },
  {
    groupNumber: 3,
    groupReference: "SET FS-3 · Classic Flannel Check 180 GSM",
    slug: "classic-flannel-check-shirt",
    displayTitle: "Classic Flannel Check Shirt",
    categoryId: "flannel-shirts",
    fit: regularFit,
    gsm: "180 GSM",
    description:
      "The check shirt, done right: yarn-dyed pattern, soft brushed finish, classic collar, easy regular fit. Button it up or wear it open as a light layer — the one you'll reach for on repeat.",
    features: ["Long sleeves", "Button front", "Classic collar"],
    moq,
    production: madeToOrder,
    variants: [
      {
        sku: "EZO-FS-006",
        productName: "Classic Flannel Check Shirt – Burgundy",
        color: "Burgundy",
        sourceImageFolder: "https://drive.google.com/drive/folders/1BnHyAB2R1tUBjWefVYriNRj8pG-JSC58",
        sourceGroupReference: "SET FS-3 · Classic Flannel Check 180 GSM · Colour 1 of 6"
      },
      {
        sku: "EZO-FS-007",
        productName: "Classic Flannel Check Shirt – Grey",
        color: "Grey",
        features: ["Long sleeves", "Button front", "Classic collar", "Single chest pocket"],
        sourceImageFolder: "https://drive.google.com/drive/folders/1disubhubHBG_aht3AHA7XvdC1hAjPa2X",
        sourceGroupReference: "SET FS-3 · Classic Flannel Check 180 GSM · Colour 2 of 6"
      },
      {
        sku: "EZO-FS-008",
        productName: "Classic Flannel Check Shirt – Navy",
        color: "Navy",
        sourceImageFolder: "https://drive.google.com/drive/folders/1i0ozcCSRERdw5BUV3thQWprMnq5TAKZM",
        sourceGroupReference: "SET FS-3 · Classic Flannel Check 180 GSM · Colour 3 of 6"
      },
      {
        sku: "EZO-FS-009",
        productName: "Classic Flannel Check Shirt – Orange Red",
        color: "Orange Red",
        features: ["Long sleeves", "Button front", "Classic collar", "Single chest pocket"],
        sourceImageFolder: "https://drive.google.com/drive/folders/11SDiLEpXYhAhEC4GolOT-2u3MdJlv-kk",
        sourceGroupReference: "SET FS-3 · Classic Flannel Check 180 GSM · Colour 4 of 6"
      },
      {
        sku: "EZO-FS-010",
        productName: "Classic Flannel Check Shirt – Green",
        color: "Green",
        sourceImageFolder: "https://drive.google.com/drive/folders/1di2MSyZSjg0ViirtFq7rOs51AF7kUITb",
        sourceGroupReference: "SET FS-3 · Classic Flannel Check 180 GSM · Colour 5 of 6"
      },
      {
        sku: "EZO-FS-011",
        productName: "Classic Flannel Check Shirt – Green",
        color: "Green",
        features: ["Long sleeves", "Button front", "Classic collar", "Single chest pocket"],
        sourceImageFolder: "https://drive.google.com/drive/folders/1qzFKCu3KT7QXpSufvvVuOwwCaFnxQ8v1",
        sourceGroupReference: "SET FS-3 · Classic Flannel Check 180 GSM · Colour 6 of 6"
      }
    ]
  },
  {
    groupNumber: 4,
    groupReference: "SET FS-4 · Poppy Long-Sleeve Flannel",
    slug: "poppy-long-sleeve-flannel-shirt",
    displayTitle: "Poppy Long-Sleeve Flannel Shirt",
    categoryId: "flannel-shirts",
    fit: regularFit,
    fabric: "50% Cotton / 40% Polyester / 10% Viscose",
    description:
      "A long-sleeve shirt in a bold yarn-dyed check with a smooth drape and soft-touch finish. Classic collar, button front, zero effort required — just throw it on and go.",
    features: ["Long sleeves", "Button front", "Classic collar"],
    moq,
    production: madeToOrder,
    variants: [
      ["EZO-FS-012", "Flannel Check Shirt – Black Grey", "Black Grey", "18MSxhfZHLTdT9vCYFWV6b4678LryU3Uz", 1],
      ["EZO-FS-013", "Flannel Check Shirt – Green Grey", "Green Grey", "1_ztjdthp_mZCRAafpTPzBHw3pShYMO3Z", 2],
      ["EZO-FS-014", "Flannel Check Shirt – Green Navy", "Green Navy", "1l5i8SB3HCK-C6nOB52A0cJQh25KxAKK3", 3],
      ["EZO-FS-015", "Flannel Check Shirt – Black Red", "Black Red", "1f92H6B2Gq7B3bB-UkzJgeBi24PeIXfr9", 4],
      ["EZO-FS-016", "Flannel Check Shirt – Blue Black", "Blue Black", "1HrDM0THPyCQpacH1jxSAc7lokmkbHuhQ", 5],
      ["EZO-FS-017", "Flannel Check Shirt – Cherry Red", "Cherry Red", "1MhJiqKfEXBycd7lIpsDDjLd5KUFI6GtD", 6],
      ["EZO-FS-018", "Flannel Check Shirt – Dusty Blue", "Dusty Blue", "1SSxCeZ40QWR_FEsfKrPG_WtJOyLHGOpb", 7],
      ["EZO-FS-019", "Flannel Check Shirt – Grey", "Grey", "1lAS-QxLsQlxrbqAkW-Hl_PK8CYkcLmAI", 8],
      ["EZO-FS-020", "Flannel Check Shirt – Pepper Red", "Pepper Red", "1nH73xuzSj0ve3vZ5SHbQrkYoTmDJA0d0", 9],
      ["EZO-FS-021", "Flannel Check Shirt – Red", "Red", "1EiWZgYErIVRZdy93CEja2vvr7iD9lyxE", 10],
      ["EZO-FS-022", "Flannel Check Shirt – Red Black", "Red Black", "1ogZkuew79U9OMHQYGGlu6WOL-FZ2vyYa", 11],
      ["EZO-FS-023", "Flannel Check Shirt – Red Cherry", "Red Cherry", "1VOTwA-fztycFnOjKWImJrWg9sK7IS2kp", 12]
    ].map(([sku, productName, color, folderId, number]) => ({
      sku: String(sku),
      productName: String(productName),
      color: String(color),
      ...(sku === "EZO-FS-020" ? { gsm: "180 GSM" } : {}),
      ...(["EZO-FS-016", "EZO-FS-018", "EZO-FS-022"].includes(String(sku))
        ? { features: ["Long sleeves", "Button front", "Classic collar", "Single chest pocket"] }
        : {}),
      sourceImageFolder: `https://drive.google.com/drive/folders/${folderId}`,
      sourceGroupReference: `SET FS-4 · Poppy Long-Sleeve Flannel · Colour ${number} of 12`
    }))
  },
  {
    groupNumber: 5,
    groupReference: "SET FS-5 · Light Flannel",
    slug: "light-flannel-check-shirt",
    displayTitle: "Light Flannel Check Shirt",
    categoryId: "flannel-shirts",
    fit: regularFit,
    description:
      "Lightweight, loose, laid-back: a long-sleeve check shirt with a fluid drape that sits perfectly over a tee. Relaxed fit, top buttons undone — that's the look.",
    features: ["Long sleeves", "Button front", "Classic collar"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-FS-024", productName: "Light Flannel Check Shirt – Blue", color: "Blue", sourceImageFolder: "https://drive.google.com/drive/folders/1Xrc7G1nZgMJub-UoJkiAYLtAipZlspQF", sourceGroupReference: "SET FS-5 · Light Flannel · Colour 1 of 4" },
      { sku: "EZO-FS-025", productName: "Light Flannel Check Shirt – Blue Red", color: "Blue Red", gsm: "180 GSM", sourceImageFolder: "https://drive.google.com/drive/folders/1Cf2CyHIw9BBRsxY5O6MYN66Ru5F0sZa1", sourceGroupReference: "SET FS-5 · Light Flannel · Colour 2 of 4" },
      { sku: "EZO-FS-026", productName: "Light Flannel Check Shirt – Green", color: "Green", features: ["Long sleeves", "Button front", "Classic collar", "Single chest pocket"], sourceImageFolder: "https://drive.google.com/drive/folders/1eZwNiYl6Xm8YMdrCg_kDffLa1lTUVdLx", sourceGroupReference: "SET FS-5 · Light Flannel · Colour 3 of 4" },
      { sku: "EZO-FS-027", productName: "Light Flannel Check Shirt – Red", color: "Red", sourceImageFolder: "https://drive.google.com/drive/folders/18YZ-_Z7Zdxy96xw0D2A-ph_3Qb-P1hIW", sourceGroupReference: "SET FS-5 · Light Flannel · Colour 4 of 4" }
    ]
  },
  {
    groupNumber: 6,
    groupReference: "SET HF-1 · Plain Hooded Flannel Shirt",
    slug: "plain-hooded-flannel-shirt",
    displayTitle: "Plain Hooded Flannel Shirt",
    categoryId: "hooded-flannels",
    fit: regularFit,
    fabric: "50% Cotton / 40% Polyester / 10% Viscose",
    description:
      "Part shirt, part hoodie, all attitude: a solid shirt with a grey hood, white drawstrings and two flap chest pockets. Wear it open over a white tee for instant street style.",
    features: ["Attached jersey hood with drawstrings", "Button front", "Long sleeves", "Two flap chest pockets"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-HF-001", productName: "Plain Hooded Flannel Shirt – Olive", color: "Olive", sourceImageFolder: "https://drive.google.com/drive/folders/1t4mbbWXeHv2_3HoQMYF_se33a0TdxWj0", sourceGroupReference: "SET HF-1 · Plain Hooded Flannel Shirt · Colour 1 of 3" },
      { sku: "EZO-HF-002", productName: "Plain Hooded Flannel Shirt – Navy", color: "Navy", sourceImageFolder: "https://drive.google.com/drive/folders/1SomaudOhLsNM-o1dFQs7If4xUfKoOcHo", sourceGroupReference: "SET HF-1 · Plain Hooded Flannel Shirt · Colour 2 of 3" },
      { sku: "EZO-HF-003", productName: "Plain Hooded Flannel Shirt – Charcoal Grey", color: "Charcoal Grey", fabric: null, sourceImageFolder: "https://drive.google.com/drive/folders/1DKTU5bbZf_t0rJ1nI21nDUvPN98gzTm9", sourceGroupReference: "SET HF-1 · Plain Hooded Flannel Shirt · Colour 3 of 3" }
    ]
  },
  {
    groupNumber: 7,
    groupReference: "SET HF-2 · Hooded Checked Shirt",
    slug: "hooded-check-flannel-shirt",
    displayTitle: "Hooded Check Flannel Shirt",
    categoryId: "hooded-flannels",
    fit: regularFit,
    fabric: "50% Cotton / 40% Polyester / 10% Viscose",
    description:
      "The overshirt everyone's wearing: a yarn-dyed check with a grey hood, drawstrings and two flap pockets, made to layer open over a tee with the sleeves rolled. Street-ready, zero effort.",
    features: ["Attached jersey hood with drawstrings", "Button front", "Long sleeves", "Two flap chest pockets"],
    moq,
    production: madeToOrder,
    variants: [
      ["EZO-HF-004", "Hooded Check Flannel Shirt – Black", "Black", "1Ve1jGioa7AtjcWNMX2knqUtNmbgJI2dd", 1],
      ["EZO-HF-005", "Hooded Check Flannel Shirt – Dusty Blue", "Dusty Blue", "14W2UOJeTN7lBvEdcAwdddnh6Tc5z-0MB", 2],
      ["EZO-HF-006", "Hooded Check Flannel Shirt – Green", "Green", "11-Lh7CKXn0ml0oaQfhPkSoICQ_Zka1Jl", 3],
      ["EZO-HF-007", "Hooded Check Flannel Shirt – Grey", "Grey", "1_uX-k7xhhQ4gok8_nLMGZI4IW6G08NkR", 4],
      ["EZO-HF-008", "Hooded Check Flannel Shirt – Navy", "Navy", "1JnytX_6nfi-MpBQRrV6prvuII4K7HcJZ", 5],
      ["EZO-HF-009", "Hooded Check Flannel Shirt – Red", "Red", "1LLWdjweOT6UHYrJAAzb1aDTsys6dPRpQ", 6]
    ].map(([sku, productName, color, folderId, number]) => ({
      sku: String(sku),
      productName: String(productName),
      color: String(color),
      sourceImageFolder: `https://drive.google.com/drive/folders/${folderId}`,
      sourceGroupReference: `SET HF-2 · Hooded Checked Shirt · Colour ${number} of 6`
    }))
  },
  {
    groupNumber: 8,
    groupReference: "SET HF-3 · Pullover Hoody",
    slug: "pullover-hoodie",
    displayTitle: "Pullover Hoodie",
    categoryId: "hooded-flannels",
    fit: regularFit,
    fabric: "50% Cotton / 50% Polyester",
    description:
      "Not your basic hoodie: a charcoal heather pullover with a two-button placket, kangaroo pocket and ribbed trims. Hood down, shades on — clean, minimal, cool.",
    features: ["Pullover hood", "Two-button neck placket", "Kangaroo pocket", "Ribbed cuffs and hem"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-HF-010", productName: "Pullover Hoodie", color: "Charcoal", sourceImageFolder: "https://drive.google.com/drive/folders/18K7LZyr1Me3PRqOO6zw4f4b48WT6yitd", sourceGroupReference: "SET HF-3 · Pullover Hoody · Single product" }
    ]
  },
  {
    groupNumber: 9,
    groupReference: "SET OS-1 · Heavy Flannel Overshirt",
    slug: "heavy-flannel-overshirt",
    displayTitle: "Heavy Flannel Overshirt",
    categoryId: "overshirts",
    fit: "Relaxed fit (layering)",
    description:
      "A bold large-check overshirt built to wear open as a shirt-jacket over tees. Button front, serious layering energy.",
    features: ["Button front", "Long sleeves", "Overshirt fit"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-OS-001", productName: "Heavy Flannel Overshirt – Blue", color: "Blue", sourceImageFolder: "https://drive.google.com/drive/folders/1hdkGls-efjZqYmI80WfbMSbSqDngQ9In", sourceGroupReference: "SET OS-1 · Heavy Flannel Overshirt · Colour 1 of 4" },
      { sku: "EZO-OS-002", productName: "Heavy Flannel Overshirt – Charcoal", color: "Charcoal", features: ["Button front", "Long sleeves", "Overshirt fit", "Single chest pocket"], sourceImageFolder: "https://drive.google.com/drive/folders/13camiDGuUC0yfADYitODhDgvcyO0J6B9", sourceGroupReference: "SET OS-1 · Heavy Flannel Overshirt · Colour 2 of 4" },
      { sku: "EZO-OS-003", productName: "Heavy Flannel Overshirt – Navy Red", color: "Navy Red", features: ["Button front", "Long sleeves", "Overshirt fit", "Single chest pocket"], sourceImageFolder: "https://drive.google.com/drive/folders/1D8knNkReldD-LnAdCkTus90866zbzD-Y", sourceGroupReference: "SET OS-1 · Heavy Flannel Overshirt · Colour 3 of 4" },
      { sku: "EZO-OS-004", productName: "Heavy Flannel Overshirt – Turquoise", color: "Turquoise", features: ["Button front", "Long sleeves", "Overshirt fit", "Two patch pockets"], sourceImageFolder: "https://drive.google.com/drive/folders/1Np3ysgvKxEoCpMTJmR4M3iib3N0Ei8yn", sourceGroupReference: "SET OS-1 · Heavy Flannel Overshirt · Colour 4 of 4" }
    ]
  },
  {
    groupNumber: 10,
    groupReference: "SET OS-2 · Plain Twill / Corduroy Overshirt",
    slug: "twill-corduroy-overshirt",
    displayTitle: "Twill / Corduroy Overshirt",
    categoryId: "overshirts",
    fit: "Relaxed fit (layering)",
    gsm: "280 GSM",
    description:
      "A plain structured corduroy overshirt with two flap chest pockets and a clean button front. Layer it over anything — it sharpens every outfit it touches.",
    features: ["Button front", "Long sleeves", "Two flap chest pockets"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-OS-005", productName: "Twill Overshirt – Brown", color: "Brown", sourceImageFolder: "https://drive.google.com/drive/folders/1Aor4TnCA72XdC4NA5k2x6qs6yO7WL1vw", sourceGroupReference: "SET OS-2 · Plain Twill / Corduroy Overshirt · Colour 1 of 3" },
      { sku: "EZO-OS-006", productName: "Twill Overshirt – Navy", color: "Navy", sourceImageFolder: "https://drive.google.com/drive/folders/1AeDZlixTLrI2xDWsdOr_y0Hvdz6bajIt", sourceGroupReference: "SET OS-2 · Plain Twill / Corduroy Overshirt · Colour 2 of 3" },
      { sku: "EZO-OS-007", productName: "Twill Overshirt – Olive Green", color: "Olive Green", sourceImageFolder: "https://drive.google.com/drive/folders/1gJOcWgLTVfxDkB4Wv3dvkOAqPISGKhIU", sourceGroupReference: "SET OS-2 · Plain Twill / Corduroy Overshirt · Colour 3 of 3" }
    ]
  },
  {
    groupNumber: 11,
    groupReference: "SET OS-3 · Zipper Overshirt",
    slug: "zip-check-overshirt",
    displayTitle: "Zip Check Overshirt",
    categoryId: "overshirts",
    fit: "Relaxed fit (layering)",
    description:
      "Zip it and go: a check overshirt with a full front zip, two flap chest pockets and an easy relaxed fit. Half-zipped over a tee is the move.",
    features: ["Zip front", "Long sleeves", "Two flap chest pockets"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-OS-008", productName: "Zip Check Overshirt – Brown", color: "Brown", sourceImageFolder: "https://drive.google.com/drive/folders/11NDVLiCYMzdYmHUhGtZy4Q6BisepJp_P", sourceGroupReference: "SET OS-3 · Zipper Overshirt · Colour 1 of 2" },
      { sku: "EZO-OS-009", productName: "Zip Check Overshirt – Grey", color: "Grey", gsm: "280 GSM", sourceImageFolder: "https://drive.google.com/drive/folders/1vJ_dRGGdR6f4en4ftyFxuFyiImdjRWDh", sourceGroupReference: "SET OS-3 · Zipper Overshirt · Colour 2 of 2" }
    ]
  },
  {
    groupNumber: 12,
    groupReference: "SET SH-1 · Pique Shorts",
    slug: "pique-shorts",
    displayTitle: "Pique Shorts",
    categoryId: "shorts",
    fit: regularFit,
    fabric: "100% Cotton",
    description:
      "Clean lines, easy fit: textured shorts with an elasticated waist and a minimal, pocket-free profile. Knee-length and endlessly wearable.",
    features: ["Elasticated waist", "Knee-length cut"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-SH-001", productName: "Pique Shorts – Teal Green", color: "Teal Green", sourceImageFolder: "https://drive.google.com/drive/folders/1hdXPVdttHTmvXozEdh2b2BbS6gzMVGSE", sourceGroupReference: "SET SH-1 · Pique Shorts · Single product" }
    ]
  },
  {
    groupNumber: 13,
    groupReference: "SET SH-2 · PJ Shorts",
    slug: "pj-shorts",
    displayTitle: "PJ Shorts",
    categoryId: "shorts",
    fit: regularFit,
    fabric: "100% Cotton",
    description:
      "Plaid, but make it pyjamas: soft shorts with a drawstring waist and side pockets, cut relaxed and knee-length. Too good to only wear to bed.",
    features: ["Elasticated waist with drawstring", "Side-seam pockets", "Knee-length cut"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-SH-002", productName: "PJ Shorts – Plum Plaid", color: "Plum", sourceImageFolder: "https://drive.google.com/drive/folders/1oTxsxqZJuO-4m3NrpTkCf4tIK-oHzYrr", sourceGroupReference: "SET SH-2 · PJ Shorts · Single product" }
    ]
  },
  {
    groupNumber: 14,
    groupReference: "SET SH-3 · Sweat Shorts",
    slug: "sweat-shorts",
    displayTitle: "Sweat Shorts",
    categoryId: "shorts",
    fit: regularFit,
    fabric: "50% Cotton / 50% Polyester",
    description:
      "Minimal effort, maximum comfort: sweat shorts with a wide elasticated waistband and drawstring tie in a clean, pocket-free cut. The off-duty essential.",
    features: ["Wide elasticated waistband with drawstring"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-SH-003", productName: "Sweat Shorts – Black", color: "Black", sourceImageFolder: "https://drive.google.com/drive/folders/1o2WUymyWxyzZEDMzknZjfzTyIJMr1cMG", sourceGroupReference: "SET SH-3 · Sweat Shorts · Colour 1 of 2" },
      { sku: "EZO-SH-004", productName: "Sweat Shorts – Blue", color: "Blue", sourceImageFolder: "https://drive.google.com/drive/folders/1e9tRWGOk5Itsa-OGQlGfzz_7UCNoWOKr", sourceGroupReference: "SET SH-3 · Sweat Shorts · Colour 2 of 2" }
    ]
  },
  {
    groupNumber: 15,
    groupReference: "SET SH-4 · Swim Shorts",
    slug: "swim-shorts",
    displayTitle: "Swim Shorts",
    categoryId: "shorts",
    fit: regularFit,
    fabric: "100% Polyester",
    description:
      "Quick-dry swim shorts in bold tropical prints with a shirred elasticated waist, drawstring and silver eyelets. Bold prints, easy fit, instant statement.",
    features: ["Elasticated shirred waistband", "Drawstring with metal eyelets"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-SH-005", productName: "Swim Shorts – Coral Pineapple", color: "Coral", sourceImageFolder: "https://drive.google.com/drive/folders/1k-8vgUnZbbcMt3PM3_qeh_OeO38p0AGq", sourceGroupReference: "SET SH-4 · Swim Shorts · Colour 1 of 3" },
      { sku: "EZO-SH-006", productName: "Swim Shorts – Navy Palm Leaf", color: "Navy", sourceImageFolder: "https://drive.google.com/drive/folders/1GBO8eSuiBcf566K1aMQ1JdsEseEinEv2", sourceGroupReference: "SET SH-4 · Swim Shorts · Colour 2 of 3" },
      { sku: "EZO-SH-007", productName: "Swim Shorts – Royal Blue Flamingo", color: "Royal Blue", sourceImageFolder: "https://drive.google.com/drive/folders/18kkkrvyfDkW3IFICMt51sG8fjOhaarye", sourceGroupReference: "SET SH-4 · Swim Shorts · Colour 3 of 3" }
    ]
  },
  {
    groupNumber: 16,
    groupReference: "SET SL-1 · Dressing Gown",
    slug: "dressing-gown",
    displayTitle: "Dressing Gown",
    categoryId: "sleepwear-loungewear",
    fit: relaxedFit,
    fabric: "55% Cotton / 45% Polyester",
    description:
      "Main-character mornings: a lightweight dressing gown with a shawl collar, belt tie and two patch pockets in a classic yarn-dyed check. Slow mornings just got stylish.",
    features: ["Shawl collar", "Wrap front with self belt tie", "Two patch pockets", "Long sleeves"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-SL-001", productName: "Dressing Gown – Blue Plaid", color: "Blue", sourceImageFolder: "https://drive.google.com/drive/folders/1S-cE0sb2obbuZShROCf1hBLjjAd7KNOH", sourceGroupReference: "SET SL-1 · Dressing Gown · Colour 1 of 2" },
      { sku: "EZO-SL-002", productName: "Dressing Gown – Navy Check", color: "Navy Blue", sourceImageFolder: "https://drive.google.com/drive/folders/1e4_FV-UL7MZ4ZmrN-WHzN6Ip7arBxB3U", sourceGroupReference: "SET SL-1 · Dressing Gown · Colour 2 of 2" }
    ]
  },
  {
    groupNumber: 17,
    groupReference: "SET SL-2 · PJ Pants",
    slug: "pj-pants",
    displayTitle: "PJ Pants",
    categoryId: "sleepwear-loungewear",
    fit: relaxedFit,
    description:
      "Full-length comfort, zero boring: pyjama pants with a drawstring waist and a relaxed straight leg in brushed and textured checks — select styles come as twin packs, because one pair is never enough.",
    features: ["Elasticated waist with drawstring", "Full-length straight leg"],
    moq,
    production: madeToOrder,
    variants: [
      { sku: "EZO-SL-003", productName: "Flannel PJ Pants – Navy Plaid", color: "Navy", gsm: "180 GSM", sourceImageFolder: "https://drive.google.com/drive/folders/18vtsjVlHQx-5goIyzSLLbBV_6O8PYDTO", sourceGroupReference: "SET SL-2 · PJ Pants · Colour 1 of 5 (Flannel)" },
      { sku: "EZO-SL-004", productName: "Twin Pack Flannel PJ Pants", color: "Navy / Black", gsm: "180 GSM", features: ["Elasticated waist with drawstring", "Full-length straight leg", "Twin pack"], sourceImageFolder: "https://drive.google.com/drive/folders/1TMsElPeawJLV73OIs9oI4MRGHjWWg934", sourceGroupReference: "SET SL-2 · PJ Pants · Colour 2 of 5 (Flannel)" },
      { sku: "EZO-SL-005", productName: "Waffle PJ Pants – Sky Blue Check", color: "Sky Blue", fabric: "50% Cotton / 40% Polyester / 10% Viscose", sourceImageFolder: "https://drive.google.com/drive/folders/1wozRbR_-QzhxZCreBZ-Qz1IcWin3Y-gM", sourceGroupReference: "SET SL-2 · PJ Pants · Colour 3 of 5 (Waffle)" },
      { sku: "EZO-SL-006", productName: "Twin Pack Waffle PJ Pants – Sky Blue & Black", color: "Sky Blue / Black", fabric: "50% Cotton / 40% Polyester / 10% Viscose", features: ["Elasticated waist with drawstring", "Full-length straight leg", "Twin pack"], sourceImageFolder: "https://drive.google.com/drive/folders/1wM4JbjNgZYGOBTC71z3SyZZ29xQts7Ny", sourceGroupReference: "SET SL-2 · PJ Pants · Colour 4 of 5 (Waffle)" },
      { sku: "EZO-SL-007", productName: "Twin Pack Waffle PJ Pants – Burgundy Tartan", color: "Burgundy / Charcoal", features: ["Elasticated waist with drawstring", "Full-length straight leg", "Twin pack"], sourceImageFolder: "https://drive.google.com/drive/folders/1F-H9NQUfHt-G7ElV19o87pkqWJaf-2Tc", sourceGroupReference: "SET SL-2 · PJ Pants · Colour 5 of 5 (Waffle)" }
    ]
  }
];
