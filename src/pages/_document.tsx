import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="prefetch" href="/floral-divider.svg" />
        <link rel="prefetch" href="/flowers-corner.svg" />
        <link rel="prefetch" href="/flowers.svg" />
        <link rel="prefetch" href="/header-logo.svg" />
        <link rel="prefetch" href="/laurels.svg" />
        <link rel="prefetch" href="/leaves.svg" />

        {/* TODO: Remove before official launch */}
        <meta name="robots" content="noindex" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
