import Link from 'next/link';
import styles from './footer.module.css';

const links = {
  Facebook: 'https://www.facebook.com/UniquelyYoursCatering',
  Yelp: 'https://www.yelp.com/biz/uniquely-yours-catering-mckinleyville',
  'Wedding Wire':
    'https://www.weddingwire.com/biz/uniquely-yours-mckinleyville/288ffd4cc1c6c6d3.html',
  'The Knot': 'https://www.theknot.com/marketplace/catering',
};

export const FooterLinks = ({}) => {
  return (
    <div className={styles.links}>
      {Object.entries(links).map(([title, href]) => {
        return (
          <Link key={href} href={href} target="_blank" rel="noopener">
            {title}
          </Link>
        );
      })}
    </div>
  );
};
