import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';
import { Belleza } from 'next/font/google';
import { useRouter } from 'next/router';

const belleza = Belleza({ weight: '400', subsets: ['latin'] });
const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  weight: '100 900',
});
const brittneySignature = localFont({
  src: '../fonts/BrittneySignature.otf',
  weight: 'regular',
});

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  // Unique class for homepage for styling
  // Other pages get a class where the starting `/` is stripped, then others are `-`
  const pageClass =
    pathname === '/' ? 'home' : pathname.replace('/', '').replaceAll('/', '-');

  return (
    <Layout className={pageClass}>
      <style jsx global>{`
        :root {
          --font-family-belleza: ${belleza.style.fontFamily};
          --font-weight-belleza: ${belleza.style.fontWeight};
          --font-family-geist-sans: ${geistSans.style.fontFamily};
          --font-family-brittney-signature: ${brittneySignature.style
            .fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </Layout>
  );
}
