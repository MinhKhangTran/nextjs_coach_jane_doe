import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Personaltrainer - Jane Doe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Eine Website für einen erfundenen Personaltrainer namens Jane Doe"
        />
        <meta
          name="keywords"
          content="Personaltrainer, Coach, NextJs, Bootstrap"
        />
        <meta name="author" content="MKT" />
      </Head>
      <a className="skip-to-content" href="#main-content">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <main tabIndex={-1} id="main-content">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
