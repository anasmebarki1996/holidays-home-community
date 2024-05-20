// src/pages/_app.tsx
// eslint-disable @next/next/no-sync-scripts

import { Footer, Header } from "@/components";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title></title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css"
        />

        {/* Global CSS files */}
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/tiny-slider.css" />
        <link rel="stylesheet" href="/css/glightbox.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* Scripts */}
      {/* eslint-disable @next/next/no-sync-scripts  */}
      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/tiny-slider.js"></script>
      <script src="/js/glightbox.min.js"></script>
      <script src="/js/aos.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=false"></script>
      <script src="/js/google-map.js"></script>
      {/* <script src="/js/main.js"></script> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-23581568-13');
              `,
        }}
      />
    </>
  );
}

export default appWithTranslation(MyApp);
