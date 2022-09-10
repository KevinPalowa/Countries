import Head from "next/head";
import NavBar from "../components/NavBar";
import React from "react";
import Footer from "./Footer";
interface Props {
  children: React.ReactNode;
  title: string;
}
const Layout = ({ children, title = "Title" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main className="px-14">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
