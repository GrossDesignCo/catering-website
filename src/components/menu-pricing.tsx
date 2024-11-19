import { ItemQtyMap, MenuItem } from '@/types';

import styles from './menu-pricing.module.css';
import { ChangeEvent } from 'react';

type MenuPricingProps = {
  menuItems: MenuItem[];
  selectedItems: ItemQtyMap;
  onItemSelect: (key: string, qty: number | undefined) => void;
};

export const MenuPricing = ({
  menuItems,
  selectedItems,
  onItemSelect,
}: MenuPricingProps) => {
  console.log({ menuItems });

  return (
    <section className={styles.menuPricing}>
      {menuItems?.map(({ content, data, itemKey }) => {
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
          // If qty entered, update the price per person
          if (e.target?.value) {
            const value = parseInt(e.target?.value);
            onItemSelect(itemKey, value);
          }
          // Otherwise, remove this key, allowing the input to be blank
          else {
            onItemSelect(itemKey, undefined);
          }
        };

        return (
          <div key={itemKey} className={styles.menuItem}>
            <span>
              <h3 className={styles.data}>
                <span>{data.title}</span>{' '}
                <span>${parseFloat(data.price).toFixed(2)}</span>
              </h3>
              <span>{content}</span>
            </span>
            <span className={styles.qty}>
              <label htmlFor={itemKey} className="visually-hidden">
                Quantity
              </label>
              <input
                className={styles.qtyInput}
                type="number"
                id={itemKey}
                onChange={onChange}
                value={selectedItems[itemKey]}
                placeholder="-"
                min={0}
              />
            </span>
          </div>
        );
      })}
    </section>
  );
};
