import { MenuItem } from '@/types';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MenuPricing } from '@/components/menu-pricing';
// File name kept the same to preserve content naming convention
import MenuPageContent from '@/pages/menu/index.mdx';

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
  const menuDir = path.join(process.cwd(), './src/pages/menu/items');
  const filePaths = fs
    .readdirSync(menuDir)
    .filter((file) => file.endsWith('.mdx'));

  const menuItems = await Promise.all(
    filePaths.map(async (filePath) => {
      const module = await import(`./items/${filePath}`);

      console.log('get static', { module });
      const mdxSource = await serialize(module.default);

      const { metadata } = module;
      const slug = filePath.replace('.mdx', '');

      console.log('get static', {
        // filePath,
        // module,
        // metadata,
        mdxSource,
      });

      return {
        ...metadata,
        mdxSource,
        slug,
      };
    })
  );

  return { props: { menuItems } };
}
