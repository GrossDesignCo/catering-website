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
        const qty = selectedItems[itemKey];
        const increment = parseInt(data.incrementsOf);
        const minQty = parseInt(data.minQty);

        return (
          <div key={itemKey} className={styles.menuItem}>
            <div className={styles.description}>
              <h3 className={styles.data}>
                <span>{data.title}</span>{' '}
                <span>${parseFloat(data.price).toFixed(2)}</span>
              </h3>
              <span>{content}</span>
            </div>
            <div className={styles.qty}>
              <div>
                {/* Input for direct typing */}
                <label htmlFor={itemKey} className="visually-hidden">
                  Quantity
                </label>
                <input
                  className={styles.qtyInput}
                  type="number"
                  id={itemKey}
                  onChange={onChange}
                  value={qty || ''}
                  placeholder={`min ${minQty}`}
                  min={minQty}
                  step={increment}
                />
              </div>

              {/* Buttons for quick adding */}
              <div className={styles.qtyButtons}>
                {/* + */}
                <button
                  type="button"
                  onClick={() => {
                    const newQty = (qty ?? 0) + increment;
                    onItemSelect(itemKey, newQty >= minQty ? newQty : minQty);
                  }}
                >
                  +{increment}
                </button>
                {/* - */}
                <button
                  type="button"
                  onClick={() => {
                    const newQty = (qty ?? 0) - increment;
                    onItemSelect(itemKey, newQty >= minQty ? newQty : 0);
                  }}
                >
                  -{increment}
                </button>
                {/* x */}
                <button
                  type="button"
                  onClick={() => {
                    onItemSelect(itemKey, 0);
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
