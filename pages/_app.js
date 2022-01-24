import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Infinity | Cheat Sheet</title>
        <meta name="msapplication-TileColor" content="#7289DA" />
        <meta name="theme-color" content="#7289DA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API" />
        <meta name="og:description" content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/CheatSheetBanner.png" />
        <meta name="twitter:site:domain" content="temp.botlist.site" />
        <meta name="twitter:url" content="https://temp.botlist.site" />
        <meta name="og:title" content="Infinity Bots | Cheat Sheet" />
        <meta name="og:image" content="/infinity.png" />
        <meta name="apple-mobile-web-app-title" content="Infinity Cheat Sheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/infinity.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/infinity.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/infinity.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/infinity.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/infinity.png" />
        <meta name="msapplication-TileImage" content="/infinity.png" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
