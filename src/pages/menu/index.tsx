import { MenuItem } from '@/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MenuPricing } from '@/components/menu-pricing';
// File name kept the same to preserve content naming convention
import MenuPageContent from '@/pages/menu/menu.mdx';

type MenuPageProps = {
  menuItems: MenuItem[];
};

export default function MenuPage({ menuItems }: MenuPageProps) {
  return (
    <div className="menu-items">
      <MenuPageContent />
      {/* Dynamic pricing calculator after content */}
      <MenuPricing menuItems={menuItems} />
    </div>
  );
}

/**
 * Static Props
 * 1. Get `.mdx` files from this folder for each menu item
 * 2. Return array of metadata for each item
 */
export async function getStaticProps() {
  // ITEMS_PATH is useful when you want to get the path to a specific file
  const ITEMS_PATH = path.join(process.cwd(), 'src/pages/menu/items');

  // menuItemFilePaths is the list of all mdx files inside the ITEMS_PATH directory
  const menuItemFilePaths = fs
    .readdirSync(ITEMS_PATH)
    // Only include md(x) files
    .filter((path) => path.endsWith('.mdx'));

  const menuItems = menuItemFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(ITEMS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { menuItems } };
}
