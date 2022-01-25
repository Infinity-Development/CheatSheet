import "../css/index.css";
import Head from "next/head";
import Layout from "../components/layout";
import '../library/fontAwesome';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>DBL | Templates</title>
        <meta name="msapplication-TileColor" content="#7289DA" />
        <meta name="theme-color" content="#7289DA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API" />
        <meta name="og:description" content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/TempBanner.png" />
        <meta name="twitter:site:domain" content="temp.botlist.site" />
        <meta name="twitter:url" content="https://temp.botlist.site" />
        <meta name="og:title" content="DBL | Templates" />
        <meta name="og:image" content="/DBL.png" />
        <meta name="apple-mobile-web-app-title" content="DBL Templates" />
        <link rel="apple-touch-icon" sizes="180x180" href="/DBL.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/DBL.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/DBL.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/DBL.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/DBL.png" />
        <meta name="msapplication-TileImage" content="/DBL.png" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
