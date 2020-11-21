import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Logo from "../components/Logo/Logo";

import React from "react";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const Home = ({ dataAbout, dataSkills, dataTechs, dataProjects }) => {
  return (
    <>
      <Head>
        <title>Mohamemd Alqumairi</title>
      </Head>
      <div id="mainContainer">
        <Logo />
        <About data={dataAbout} />
      </div>
      <Skills skill={dataSkills} tech={dataTechs} />
      <Projects projects={dataProjects} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // Get external data from the file system, API, DB, etc. replace the "data" string
  const resAbout = await fetch("http://portfolio.local/wp-json/wp/v2/about");
  const dataAbout = await resAbout.json();

  const resSkills = await fetch("http://portfolio.local/wp-json/wp/v2/skill");
  const dataSkills = await resSkills.json();

  const resTechs = await fetch("http://portfolio.local/wp-json/wp/v2/tech");
  const dataTechs = await resTechs.json();

  const resProjects = await fetch(
    "http://portfolio.local/wp-json/wp/v2/projects"
  );
  const dataProjects = await resProjects.json();

  return {
    props: {
      dataAbout,
      dataSkills,
      dataTechs,
      dataProjects,
    },
  };
};

export default Home;
