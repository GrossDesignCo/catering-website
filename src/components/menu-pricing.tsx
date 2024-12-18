import { ChangeEvent } from 'react';
import Markdown from 'react-markdown';
import { ItemQtyMap, MenuItemsByCategory } from '@/types';

import styles from './menu-pricing.module.css';

type MenuPricingProps = {
  menuItems: MenuItemsByCategory;
  selectedItems: ItemQtyMap;
  onItemSelect: (key: string, qty: number | undefined) => void;
};

export const MenuPricing = ({
  menuItems,
  selectedItems,
  onItemSelect,
}: MenuPricingProps) => {
  return (
    <section className={styles.menuPricing}>
      {Object.entries(menuItems)?.map(([key, category]) => {
        return (
          <div key={key} className={styles.menuCategory}>
            {category?.map(({ content, data, itemKey }) => {
              if (itemKey === 'description') {
                return (
                  <div
                    key={`${key}-${itemKey}`}
                    className={styles.categoryDescription}
                  >
                    <Markdown>{content}</Markdown>
                  </div>
                );
              }

              // If this entry isn't a description, render all the metadata,
              // including price/qty ui, etc
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
                    <span>
                      <Markdown>{content}</Markdown>
                    </span>
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
                          onItemSelect(
                            itemKey,
                            newQty >= minQty ? newQty : minQty
                          );
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
          </div>
        );
      })}
    </section>
  );
};
