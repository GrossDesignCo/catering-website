import { ItemQtyMap, MenuItem } from '@/types';

import styles from './menu-estimate.module.css';

type MenuEstimateProps = {
  menuItems: MenuItem[];
  selectedItems: ItemQtyMap;
};

export const MenuEstimate = ({
  menuItems,
  selectedItems,
}: MenuEstimateProps) => {
  const selectedPrices = Object.entries(selectedItems).map(([key, qty = 0]) => {
    const matchingMenuItem = menuItems.find((item) => key === item.itemKey);
    const itemTotal = parseFloat(matchingMenuItem?.data.price ?? '0') * qty;

    return itemTotal;
  });

  const totalPrice = selectedPrices.reduce((acc, price) => {
    return acc + price;
  }, 0);

  return (
    <div className={styles.menuQuote}>
      <div>
        <strong>Est. Event Quote</strong>
        <div>${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};
