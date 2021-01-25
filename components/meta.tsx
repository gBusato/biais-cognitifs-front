import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta
        name="description"
        content="Optimisez la conversion de votre site graçe aux biais cognitifs"
      />
      <title>Les biais cognitifs</title>
    </Head>
  );
};

export default Meta;
