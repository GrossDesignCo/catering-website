import { Header } from './header';
import { Footer } from './footer';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={`page ${geistSans.variable} ${geistMono.variable}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
