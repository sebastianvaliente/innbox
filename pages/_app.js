import "nprogress/nprogress.css";
import "../styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Innbox</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
