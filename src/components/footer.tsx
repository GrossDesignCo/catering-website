import FooterCopyright from './footer-copyright.mdx';
import FooterQuote from './footer-quote.mdx';
import styles from './footer.module.css';
import { FooterLinks } from './footer-links';

export const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.quote}>
        <FooterQuote />
      </div>

      <FooterLinks />

      <div className={styles.copyright}>
        <FooterCopyright />
      </div>
    </footer>
  );
};
