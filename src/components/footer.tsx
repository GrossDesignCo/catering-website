import Link from 'next/link';
import FooterContent from './footer.mdx';

const links = {
  Facebook: 'https://www.facebook.com/UniquelyYoursCatering',
  Yelp: 'https://www.yelp.com/biz/uniquely-yours-catering-mckinleyville',
  'Wedding Wire':
    'https://www.weddingwire.com/biz/uniquely-yours-mckinleyville/288ffd4cc1c6c6d3.html',
};

export const Footer = ({}) => {
  return (
    <div>
      {Object.entries(links).map(([title, href]) => {
        return (
          <Link key={href} href={href} target="_blank" rel="noopener">
            {title}
          </Link>
        );
      })}

      <FooterContent />
    </div>
  );
};
