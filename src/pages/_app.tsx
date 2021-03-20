import { AppProps } from 'next/app';
import { VFC } from 'react';
import 'src/styles/styles.css';
import Head from 'next/head';
import { staticPath } from 'src/utils/$path';
import { ScrollEffectProvier } from 'src/components/context/useScrollEffect';
import { ThemeProvider } from 'src/components/context/useTheme';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { useRouter } from 'next/dist/client/router';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  const currLocale = intoTypedLocale(useRouter().locale);
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
        {
          {
            ja: (
              <>
                <meta name="author" content="岡添 郁" />
                <meta
                  name="description"
                  content="岡添 郁 (おかてくのろじー) のサイトです"
                />
              </>
            ),
            en: (
              <>
                <meta name="author" content="Kaoru Okazoe" />
                <meta name="description" content="Kaoru Okazoe's website" />
              </>
            ),
          }[currLocale]
        }
        <meta
          name="keywords"
          content="ポートフォリオ,岡添郁,岡添 郁,岡添,郁,おかてくのろじー,おかてく,Kaoru,Okazoe,Kaoru Okazoe,KaoruOkazoe,OkazoeKaoru,Okazoe Kaoru,okatechnology,oka technology"
        />
      </Head>
      <ScrollEffectProvier>
        <ThemeProvider>
          <div className="text-black dark:text-white font-sans tracking-wider leading-loose pc:overflow-hidden">
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </ScrollEffectProvier>
    </>
  );
};

export default MyApp;
