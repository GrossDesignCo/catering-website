import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

const links = {
  Menu: '/menu',
  'About Us': '/about',
  Services: '/services',
  Contact: '/contact',
};

export const Header = ({}) => {
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

      <div className={styles.navLinkList}>
        {Object.entries(links).map(([title, href]) => {
          return (
            <Link key={href} href={href} className={styles.navLink}>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
