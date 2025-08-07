# Images Directory

This directory contains static images served by the Whistler Trail Gear website.

## Usage

Images placed in this directory can be accessed via URL paths like:
- `/images/logo.png`
- `/images/gear/backpack.jpg`
- `/images/trails/whistler-peak.jpg`

## Recommended Structure

```
public/images/
├── logo.png           # Site logo
├── hero/              # Hero section images
│   └── mountain-bg.jpg
├── gear/              # Product images
│   ├── backpacks/
│   ├── footwear/
│   └── navigation/
└── trails/            # Trail and location images
    └── whistler/
```

## Image Guidelines

- **Format:** Use WebP for best performance, with PNG/JPG fallbacks
- **Size:** Optimize images for web (compress to reasonable file sizes)
- **Naming:** Use descriptive, lowercase filenames with hyphens
- **Alt Text:** Always include proper alt attributes in HTML

## Examples

```html
<!-- Logo -->
<img src="/images/logo.png" alt="Whistler Trail Gear Logo">

<!-- Hero background -->
<div style="background-image: url('/images/hero/mountain-bg.jpg');">

<!-- Product image -->
<img src="/images/gear/backpacks/alpine-pack.jpg" alt="Alpine Hiking Backpack">
``` 