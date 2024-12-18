import { ItemQtyMap, MenuItemsByCategory } from '@/types';
import NumberFlow from '@number-flow/react';

import styles from './menu-estimate.module.css';

type MenuEstimateProps = {
  menuItems: MenuItemsByCategory;
  selectedItems: ItemQtyMap;
};

// TODO: https://number-flow.barvian.me

export const MenuEstimate = ({
  menuItems,
  selectedItems,
}: MenuEstimateProps) => {
  const selectedPrices = Object.entries(selectedItems).map(([key, qty = 0]) => {
    const matchingMenuItem = Object.values(menuItems)
      .flat()
      .find((item) => key === item.itemKey);
    const itemTotal = parseFloat(matchingMenuItem?.data.price ?? '0') * qty;

    return itemTotal;
  });

  const totalPrice = selectedPrices.reduce((acc, price) => {
    return acc + price;
  }, 0);

  return (
    <div className={styles.menuQuote}>
      <div>
        <div className={styles.quoteLabel}>Est. Event Quote</div>
        <div className={styles.quotePrice}>
          <NumberFlow
            value={totalPrice}
            format={{
              style: 'currency',
              currency: 'USD',
              trailingZeroDisplay: 'stripIfInteger',
            }}
          />
        </div>
      </div>
    </div>
  );
};
