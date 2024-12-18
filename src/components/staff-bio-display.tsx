import Markdown from 'react-markdown';
import { StaffBio } from '@/types';

import styles from './staff-bio-display.module.css';
import Image from 'next/image';

type StaffBioDisplayProps = {
  staffBioList: StaffBio[];
};

export const StaffBioDisplay = ({ staffBioList }: StaffBioDisplayProps) => {
  return (
    <section className={styles.menuPricing}>
      <div className={styles.menuCategory}>
        {staffBioList?.map(({ content, data, itemKey }) => {
          return (
            <div key={itemKey} className={styles.menuItem}>
              <div className={styles.description}>
                <Image
                  className={styles.headshot}
                  src={data.headshot}
                  width="300"
                  height="300"
                  alt=""
                />

                <h3 className={styles.data}>
                  <span>{data.name}</span>
                </h3>

                <div>
                  <span className={styles.jobTitle}>{data.jobTitle}</span>
                </div>

                <span>
                  <Markdown>{content}</Markdown>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
