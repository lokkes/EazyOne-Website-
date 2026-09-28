# eazyone Website Images

Add images in this folder using these exact paths and filenames. The website will automatically show the image when the file exists. If a file is missing, the site shows a premium placeholder instead of a broken image.

## Hero Image

```text
public/images/hero/homepage.jpg
```

## Homepage Manufacturing Image

The image beside the "Built around your order" section:

```text
public/images/home/manufacturing.png
```

## Services Image

```text
public/images/services/samples-and-customization.png
```

## Why Eazyone Images

```text
public/images/why-eazyone/wholesale-retailers.png
public/images/why-eazyone/fashion-brands-and-boutiques.png
public/images/why-eazyone/corporate-and-uniform-buyers.png
```

## About Us Images

```text
public/images/about/manufacturing.png
public/images/about/product-collection.png
```

## Category Images

```text
public/images/categories/nightwear.png
public/images/categories/casual-shirts.png
public/images/categories/streetwear.jpg
public/images/categories/sweatshirts.jpg
public/images/categories/formal-shirts.png
```

## Product Images

Every product supports a default gallery. Use the product folder name exactly as shown:

```text
public/images/products/premium-heavyweight-oversized-sweatshirt/main.png
public/images/products/premium-heavyweight-oversized-sweatshirt/secondary.png
public/images/products/premium-heavyweight-oversized-sweatshirt/detail.png
public/images/products/premium-heavyweight-oversized-sweatshirt/lifestyle.png

public/images/products/essential-oversized-hoodie/main.png
public/images/products/premium-cotton-jogger/main.png
public/images/products/heavyweight-streetwear-t-shirt/main.png
public/images/products/premium-casual-shirt/main.png
public/images/products/classic-formal-shirt/main.png
public/images/products/premium-pajama-set/main.png
public/images/products/luxury-lounge-set/main.png
public/images/products/oversized-sweatpants/main.png
public/images/products/premium-crewneck-sweatshirt/main.png
```

For images that change when a customer selects a color, add a lowercase color folder. Spaces become hyphens:

```text
public/images/products/premium-heavyweight-oversized-sweatshirt/black/main.png
public/images/products/premium-heavyweight-oversized-sweatshirt/black/secondary.png
public/images/products/premium-heavyweight-oversized-sweatshirt/black/detail.png
public/images/products/premium-heavyweight-oversized-sweatshirt/black/lifestyle.png

public/images/products/premium-heavyweight-oversized-sweatshirt/grey/main.png
public/images/products/premium-heavyweight-oversized-sweatshirt/navy/main.png
public/images/products/premium-heavyweight-oversized-sweatshirt/cream/main.png
```

The same structure works for every product and color listed in `src/backend/catalog/products.ts`. When a color-specific image is missing, the website uses the neutral image placeholder for that gallery position.

Recommended image format: `.png` for product and section images. The homepage hero and existing streetwear/sweatshirt category images remain `.jpg`.
Recommended product/category shape: vertical, around 4:5 ratio.
