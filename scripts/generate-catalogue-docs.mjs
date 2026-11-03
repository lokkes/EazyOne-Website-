import { createRequire } from "node:module";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const root = process.cwd();
const sourcePath = path.join(root, "src/backend/catalog/catalogue-data.ts");
const source = readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022
  }
}).outputText;
const compiledModule = { exports: {} };

new Function("exports", "module", compiled)(
  compiledModule.exports,
  compiledModule
);

const {
  ALL_CATALOGUE_SIZES,
  catalogueCategorySources,
  catalogueGroupSources
} = compiledModule.exports;
const categoryNames = new Map(
  catalogueCategorySources.map((category) => [category.id, category.name])
);

const rows = catalogueGroupSources.flatMap((group) =>
  group.variants.map((variant) => ({
    category: categoryNames.get(group.categoryId),
    groupNumber: group.groupNumber,
    groupReference: group.groupReference,
    sku: variant.sku,
    productName: variant.productName,
    color: variant.color,
    sizes: ALL_CATALOGUE_SIZES.join(" / "),
    fit: group.fit,
    fabric: variant.fabric === null ? "" : (variant.fabric ?? group.fabric ?? ""),
    gsm: variant.gsm === null ? "" : (variant.gsm ?? group.gsm ?? ""),
    folder: `public/images/products/${variant.sku}/`,
    sourceImageFolder: variant.sourceImageFolder
  }))
);

function csv(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

const imageFiles = ["01.webp", "02.webp", "03.webp", "04.webp"];
const csvHeaders = [
  "category",
  "group_number",
  "group_reference",
  "sku",
  "product_name",
  "color",
  "sizes",
  "fit",
  "fabric",
  "gsm",
  "folder_path",
  "image_1",
  "image_2",
  "image_3",
  "image_4",
  "source_image_folder",
  "images_added"
];
const csvLines = [
  csvHeaders.map(csv).join(","),
  ...rows.map((row) =>
    [
      row.category,
      row.groupNumber,
      row.groupReference,
      row.sku,
      row.productName,
      row.color,
      row.sizes,
      row.fit,
      row.fabric,
      row.gsm,
      row.folder,
      ...imageFiles,
      row.sourceImageFolder,
      "NO"
    ]
      .map(csv)
      .join(",")
  )
];

const guideSections = rows.map(
  (row) => `## ${row.sku} - ${row.productName}

- Category: ${row.category}
- Group: ${row.groupNumber} (${row.groupReference})
- Color: ${row.color}
- Exact folder: \`${row.folder}\`
- Exact filenames: \`${imageFiles.join("\`, \`")}\`
- Original source-image folder: ${row.sourceImageFolder}
`
);
const guide = `# EazyOne Product Image Upload Guide

The catalogue automatically looks for four WebP photographs in each SKU folder. Add the files with the exact names below; no application-code change is needed. Missing files display the website's neutral image state instead of a broken image.

Recommended workflow:

1. Open the SKU folder shown below.
2. Add four WebP images named \`01.webp\`, \`02.webp\`, \`03.webp\`, and \`04.webp\`.
3. Keep the SKU folder name uppercase and unchanged.
4. Use \`01.webp\` as the main catalogue image. The other three images appear in the product gallery.
5. Mark the matching row in \`docs/product-image-manifest.csv\` after uploading.

${guideSections.join("\n")}`;

const missingFabric = rows.filter((row) => !row.fabric).map((row) => row.sku);
const missingGsm = rows.filter((row) => !row.gsm).map((row) => row.sku);
const colorReview = [
  "EZO-FS-009",
  "EZO-FS-012",
  "EZO-FS-013",
  "EZO-FS-014",
  "EZO-FS-015",
  "EZO-FS-016",
  "EZO-FS-017",
  "EZO-FS-018",
  "EZO-FS-019",
  "EZO-FS-020",
  "EZO-FS-021",
  "EZO-FS-022",
  "EZO-FS-023",
  "EZO-FS-025",
  "EZO-HF-005",
  "EZO-OS-003",
  "EZO-OS-007",
  "EZO-SH-001",
  "EZO-SL-002",
  "EZO-SL-004",
  "EZO-SL-006",
  "EZO-SL-007"
];
const review = `# Catalogue Data Review

Source: \`Eazy One - Product Master List - Sheet1.pdf\` (4 pages).

Validated import totals:

- Categories: ${catalogueCategorySources.length}
- Product groups: ${catalogueGroupSources.length}
- Unique SKUs: ${rows.length}

## Missing Source Specifications

These values are blank or shown as a dash in the source. The website intentionally omits them rather than inventing a specification.

- Fabric missing (${missingFabric.length} SKUs): ${missingFabric.join(", ")}
- GSM missing (${missingGsm.length} SKUs): ${missingGsm.join(", ")}

## Color Field Review

The PDF's narrow Colors column overlaps the Sizes column for the compound values below. Their website color labels were normalized from the matching Product Name and visible color text. Verify these labels against the original spreadsheet if exact supplier color terminology is important:

${colorReview.map((sku) => `- ${sku}`).join("\n")}

Descriptions, features, MOQ, production type, group references, SKUs, and supplier Drive folder links were retained from the source. Supplier Drive links are metadata only and are not rendered as public product images.
`;

mkdirSync(path.join(root, "docs"), { recursive: true });
for (const row of rows) {
  mkdirSync(path.join(root, row.folder), { recursive: true });
}
writeFileSync(path.join(root, "docs/PRODUCT_IMAGE_UPLOAD_GUIDE.md"), guide);
writeFileSync(path.join(root, "docs/product-image-manifest.csv"), `${csvLines.join("\n")}\n`);
writeFileSync(path.join(root, "docs/CATALOGUE_DATA_REVIEW.md"), review);

console.log(`Generated catalogue documentation for ${rows.length} SKUs.`);
