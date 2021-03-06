import { AppProps } from 'next/app';
import { VFC } from 'react';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { staticPath } from 'src/lib/$path';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={staticPath.favicon.apple_touch_icon_png}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={staticPath.favicon.favicon_32x32_png}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={staticPath.favicon.favicon_16x16_png}
        />
        <link rel="manifest" href={staticPath.favicon.site_webmanifest} />
        <link
          rel="mask-icon"
          href={staticPath.favicon.safari_pinned_tab_svg}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
