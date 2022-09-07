import Head from "next/head";
import NavBar from "../components/NavBar";
import React from "react";
interface Props {
  children: React.ReactNode;
  title: string;
}
const Layout = ({ children, title = "Title" }: Props) => {
  return (
    <div className="w-full min-h-screen dark:bg-darker bg-light">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main className="px-14">{children}</main>
    </div>
  );
};

export default Layout;
