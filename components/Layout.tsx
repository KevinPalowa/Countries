import Head from "next/head";
import NavBar from "../components/NavBar";
import React from 'react'
interface Props {
  children:React.ReactNode
  title:string
}
const Home = ({ children,title ='Title'}:Props) => {
  return (
    <div className="w-full h-full dark:bg-dark bg-light">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main className="px-14">{children}</main>
    </div>
  );
};

export default Home;
