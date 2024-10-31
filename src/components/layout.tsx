import { Header } from './header';
import { Footer } from './footer';
import cx from 'classnames';
import styles from './layout.module.css';

export default function Layout({
  children,
  className,
}: React.ComponentProps<'div'>) {
  return (
    <div className={cx(styles.page, className)}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
