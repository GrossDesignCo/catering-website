# catering-website

Website repo for Uniquely Yours Catering Co.

Friends & family rejoice! Jo's now officially the owner of Uniquely Yours Catering (hopefully soon to be Lost Coast Catering). 

---

# Content Editing

All the pages use markdown for their core content areas.

Syntax Cheat Sheet: https://www.markdownguide.org/cheat-sheet/

## Menu Items

Edit items via the `*.mdx` files under [./src/pages/menu/items](./src/pages/menu/items).

## Top Level Pages

- [Menu](./src/pages/menu.mdx)
- [About](./src/pages/about.mdx)
- [Services](./src/pages/services.mdx)
- [Contact](./src/pages/contact.mdx)

---

# Technical elements:

## Pricing Calculator

Each menu item is laid out in a folder like `/pages/menu/items/lunch/lunch-menu-1.mdx`.

They're just like the regular content pages but with additional metadata about the menu item/tier at the top in a "frontmatter" format.

Eg.

```
---
title: 'Lunch Menu #1'
price: 16.50
minQty: 15
---
```

Make sure to preserve this format, which allows the calculator to read the different fields and use them in code.
