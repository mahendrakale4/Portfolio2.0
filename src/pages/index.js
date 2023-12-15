import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import "normalize.css";
import FirstFold from "../components/FirstFold/FirstFold";
import Skills from "../components/Skills/Skills";
import Projects from "../components/SelectedProjects/Projects";
// import SpotifyComp from "../components/spotify/SpotifyComp";
import SEO from "../components/SEO";
export default function Home() {
  return (
    <>
      <SEO title={"Home"}/>
      <FirstFold />
      <Skills />
      <Projects />
      {/* <SpotifyComp /> */}
    </>
  );
}
