import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Header from "./header";
import Meta from "./meta";

const Layout = ({ children }: AppProps) => {
  return (
    <>
      <Meta />
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-5 max-w-7xl">{children}</div>
      </main>
    </>
  );
};

export default Layout;
