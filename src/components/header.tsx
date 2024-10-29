import Image from 'next/image';
import Link from 'next/link';

const links = {
  Menu: '/menu',
  'About Us': '/about',
  Services: '/services',
  Contact: '/contact',
};

export const Header = ({}) => {
  return (
    <div>
      <Link href="/">
        <Image
          className="logo"
          src="/header-logo.png"
          width={280}
          height={160}
          alt="Uniquely Yours Catering Company"
        />
      </Link>

      {Object.entries(links).map(([title, href]) => {
        return (
          <Link key={href} href={href}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};
