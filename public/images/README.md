# eazyone Website Images

Add images in this folder using these exact paths and filenames. The website will automatically show the image when the file exists. If a file is missing, the site shows a premium placeholder instead of a broken image.

## Hero Image

```text
public/images/hero/homepage.jpg
```

## Homepage Manufacturing Image

The image beside the "Built around your order" section:

```text
public/images/home/manufacturing.jpg
```

## Services Image

```text
public/images/services/samples-and-customization.jpg
```

## Why Eazyone Images

```text
public/images/why-eazyone/wholesale-retailers.jpg
public/images/why-eazyone/fashion-brands-and-boutiques.jpg
public/images/why-eazyone/corporate-and-uniform-buyers.jpg
```

## About Us Images

```text
public/images/about/manufacturing.jpg
public/images/about/product-collection.jpg
```

## Category Images

```text
public/images/categories/nightwear.jpg
public/images/categories/casual-shirts.jpg
public/images/categories/streetwear.jpg
public/images/categories/sweatshirts.jpg
public/images/categories/formal-shirts.jpg
```

## Product Images

Every product supports a default gallery. Use the product folder name exactly as shown:

```text
public/images/products/premium-heavyweight-oversized-sweatshirt/main.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/secondary.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/detail.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/lifestyle.jpg

public/images/products/essential-oversized-hoodie/main.jpg
public/images/products/premium-cotton-jogger/main.jpg
public/images/products/heavyweight-streetwear-t-shirt/main.jpg
public/images/products/premium-casual-shirt/main.jpg
public/images/products/classic-formal-shirt/main.jpg
public/images/products/premium-pajama-set/main.jpg
public/images/products/luxury-lounge-set/main.jpg
public/images/products/oversized-sweatpants/main.jpg
public/images/products/premium-crewneck-sweatshirt/main.jpg
```

For images that change when a customer selects a color, add a lowercase color folder. Spaces become hyphens:

```text
public/images/products/premium-heavyweight-oversized-sweatshirt/black/main.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/black/secondary.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/black/detail.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/black/lifestyle.jpg

public/images/products/premium-heavyweight-oversized-sweatshirt/grey/main.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/navy/main.jpg
public/images/products/premium-heavyweight-oversized-sweatshirt/cream/main.jpg
```

The same structure works for every product and color listed in `src/backend/catalog/products.ts`. When a color-specific image is missing, the website uses the neutral image placeholder for that gallery position.

Recommended image format: `.jpg`.
Recommended product/category shape: vertical, around 4:5 ratio.
