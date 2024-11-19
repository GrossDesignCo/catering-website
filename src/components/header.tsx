import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import styles from './header.module.css';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useEffect, useState } from 'react';

const routes = {
  Menu: '/menu',
  'About Us': '/about',
  Services: '/services',
  Contact: '/contact',
};

export const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isWide = useIsDesktop();
  const isNarrow = !isWide;

  useEffect(() => {
    if (isWide) setIsOpen(false);
  }, [isWide]);

  const links = Object.entries(routes).map(([title, href]) => {
    return (
      <Link
        key={href}
        href={href}
        className={styles.navLink}
        onClick={() => {
          setIsOpen(false);
        }}
        tabIndex={isOpen ? 0 : -1}
      >
        {title}
      </Link>
    );
  });

  return (
    <nav className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/header-logo.svg"
          width={280}
          height={160}
          alt="Uniquely Yours Catering Company"
        />
      </Link>

      <div
        className={cx(styles.navLinkList, {
          [styles.open]: isOpen,
          [styles.menuIsNarrow]: isNarrow,
        })}
      >
        {isNarrow && (
          <button
            className={styles.narrowMenuTrigger}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? 'Open Menu' : 'Close Menu'}

            <svg
              className={styles.topLine}
              viewBox="0 0 40 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.5748 0H1.93341C0.865616 0 0 0.865616 0 1.93341C0 3.05181 0.946086 3.93693 2.06202 3.86253L29.8337 2.01108C29.9444 2.00371 30.0555 2.00555 30.1658 2.01658L38.433 2.8433C39.272 2.9272 40 2.26836 40 1.42519C40 0.638078 39.3619 0 38.5748 0Z"
                fill="var(--fg)"
              />
            </svg>

            <svg
              className={styles.middleLine}
              viewBox="0 0 40 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.199 5.9801L39.005 4.0995C39.5698 4.04302 40 3.56769 40 3C40 2.43231 39.5698 1.95698 39.005 1.9005L20.199 0.0199007C20.0667 0.00666658 19.9333 0.00666663 19.801 0.0199008L0.995037 1.9005C0.430166 1.95698 0 2.43231 0 3C0 3.56769 0.430167 4.04302 0.995039 4.0995L19.801 5.9801C19.9333 5.99333 20.0667 5.99333 20.199 5.9801Z"
                fill="var(--fg)"
              />
            </svg>

            <svg
              className={styles.bottomLine}
              viewBox="0 0 40 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42519 4H38.0666C39.1344 4 40 3.13438 40 2.06659C40 0.948186 39.0539 0.0630724 37.938 0.137468L10.1663 1.98892C10.0556 1.99629 9.94454 1.99445 9.83421 1.98342L1.567 1.1567C0.728011 1.0728 0 1.73164 0 2.57481C0 3.36192 0.638076 4 1.42519 4Z"
                fill="var(--fg)"
              />
            </svg>
          </button>
        )}
        {isNarrow ? <div className={styles.narrowMenu}>{links}</div> : links}
      </div>
    </nav>
  );
};
