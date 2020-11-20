import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Logo from "../components/Logo/Logo";

import React from "react";
import Skills from "../components/Skills/Skills";

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Mohamemd Alqumairi</title>
      </Head>
      <div id="mainContainer">
        <Logo />
        <About data={data} />
      </div>
      <Skills />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // Get external data from the file system, API, DB, etc. replace the "data" string
  const res = await fetch("http://portfolio.local/wp-json/wp/v2/about");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
