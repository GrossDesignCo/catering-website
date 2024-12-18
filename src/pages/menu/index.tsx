import { ItemQtyMap, MenuItemsByCategory } from '@/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MenuPricing } from '@/components/menu-pricing';
import { MenuEstimate } from '@/components/menu-estimate';
// File name kept the same to preserve content naming convention
import MenuPageContent from '@/pages/menu/menu.mdx';
import styles from '@/styles/Menu.module.css';
import { useState } from 'react';

type MenuPageProps = {
  menuItems: MenuItemsByCategory;
};

export default function MenuPage({ menuItems }: MenuPageProps) {
  const [selectedItems, setSelectedItems] = useState<ItemQtyMap>({});

  // Update quantity associated with the given menu item
  const onItemSelect = (itemKey: string, qty: number | undefined) => {
    if (selectedItems[itemKey]) {
      const newSelectedItems = { ...selectedItems, [itemKey]: qty };
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems({ ...selectedItems, [itemKey]: qty });
    }
  };

  return (
    <div>
      <MenuPageContent />

      <div className={styles.menu}>
        {/* Dynamic pricing calculator after content */}
        <MenuPricing
          menuItems={menuItems}
          selectedItems={selectedItems}
          onItemSelect={onItemSelect}
        />

        <MenuEstimate menuItems={menuItems} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

/**
 * Static Props
 * 1. Get `.mdx` files from this folder for each menu item
 * 2. Return array of metadata for each item
 */
export async function getStaticProps() {
  // TODO: Recursively search the menu/items dir instead of hard-coded list
  const categories: MenuItemsByCategory = {
    lunch: [],
    dinner: [],
    desserts: [],
  };
  Object.keys(categories).forEach((category) => {
    // ITEMS_PATH is useful when you want to get the path to a specific file
    const ITEMS_PATH = path.join(
      process.cwd(),
      `src/pages/menu/items/${category}`
    );

    // menuItemFilePaths is the list of all mdx files inside the ITEMS_PATH directory
    const menuItemFilePaths = fs
      .readdirSync(ITEMS_PATH)
      // Only include md(x) files
      .filter((path) => path.endsWith('.mdx'));

    categories[category].push(
      ...menuItemFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(ITEMS_PATH, filePath));
        const { content, data } = matter(source);

        return {
          content,
          data,
          filePath,
          itemKey: filePath.replace('.mdx', ''),
        };
      })
    );
  });

  return { props: { menuItems: categories } };
}
