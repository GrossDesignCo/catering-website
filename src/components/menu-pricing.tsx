import { MenuItem } from '@/types';
import { MDXRemote } from 'next-mdx-remote';

import styles from './menu-pricing.module.css';

type MenuPageProps = {
  menuItems: MenuItem[];
};

export const MenuPricing = ({ menuItems }: MenuPageProps) => {
  return (
    <ul className={styles.menuPricing}>
      {menuItems?.map(({ title, price, slug, mdxSource }) => (
        <li key={slug}>
          <span>{title}</span> <span>${price.toFixed(2)}</span>{' '}
          <MDXRemote {...mdxSource} />
        </li>
      ))}
    </ul>
  );
};
