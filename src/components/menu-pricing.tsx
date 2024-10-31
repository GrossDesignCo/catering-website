import { MenuItem } from '@/types';

import styles from './menu-pricing.module.css';

type MenuPageProps = {
  menuItems: MenuItem[];
};

export const MenuPricing = ({ menuItems }: MenuPageProps) => {
  console.log({ menuItems });

  return (
    <ul className={styles.menuPricing}>
      {menuItems?.map(({ content, data, filePath }) => (
        <li key={filePath} className={styles.menuItem}>
          <span className={styles.data}>
            <strong>{data.title}</strong> <span>${data.price}</span>
          </span>
          <span>{content}</span>
        </li>
      ))}
    </ul>
  );
};
