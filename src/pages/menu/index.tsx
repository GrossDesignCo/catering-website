import { MenuItem } from '@/types';
import fs from 'fs';
import path from 'path';

type MenuPageProps = {
  menuItems: MenuItem[];
};

export default function MenuPage({ menuItems }: MenuPageProps) {
  return (
    <div className="menu-items">
      <div>Menu</div>
      <ul>
        {menuItems.map(({ title, price }) => {
          return (
            <li>
              {title} {price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Static Props
 * 1. Get `.mdx` files from this folder for each menu item
 * 2. Return array of metadata for each item
 */
export async function getStaticProps() {
  const menuDir = path.join(process.cwd(), './src/pages/menu');
  const filePaths = fs
    .readdirSync(menuDir)
    .filter((file) => file.endsWith('.mdx'));

  const menuItems = await Promise.all(
    filePaths.map(async (filePath) => {
      const module = await import(`./${filePath}`);
      const { metadata } = module;
      const slug = filePath.replace('.mdx', '');

      // console.log({
      //   module,
      //   metadata,
      //   slug,
      // });

      return {
        ...metadata,
        slug,
      };
    })
  );

  console.log({
    menuItems,
  });

  return { props: { menuItems } };
}
