import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
