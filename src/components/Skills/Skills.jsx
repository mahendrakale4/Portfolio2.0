import React from "react";
import { SkillsContainer, TechGrid, Terminal } from "./skillsStyles";
import Asterik from "../../assets/images/home/asterik.svg";
import red from "../../assets/images/skills/buttons/red.svg";
import orange from "../../assets/images/skills/buttons/orange.svg";
import green from "../../assets/images/skills/buttons/green.svg";
import html from "../../assets/images/skills/html-5.svg";
import css3 from "../../assets/images/skills/css-3.svg";
import javascript from "../../assets/images/skills/javascript.svg";
import react from "../../assets/images/skills/react.svg";
import gatsbyIcon from "../../assets/images/skills/gatsby.svg";
import wordpress from "../../assets/images/skills/wordpress-icon.svg";
import figma from "../../assets/images/skills/figma.svg";
import gitIcon from "../../assets/images/skills/git-icon.svg";
import tailwindcssIcon from "../../assets/images/skills/tailwindcss-icon.svg";
import Java from "../../assets/images/skills/java-svgrepo-com.svg";
import docker from "../../assets/images/skills/docker-svgrepo-com.svg";
import Node from "../../assets/images/skills/nodejs-svgrepo-com.svg";
import Next from "../../assets/images/skills/nextjs-svgrepo-com.svg";
import Python from "../../assets/images/skills/python-svgrepo-com.svg";
// import jquery from "../../assets/images/skills/jquery.svg";
// import sass from "../../assets/images/skills/sass.svg";
// import styledIcon from "../../assets/images/skills/styled-components-1.svg";
// import bootstrap from "../../assets/images/skills/bootstrap.svg";
// import githubIcon from "../../assets/images/skills/github-icon.svg";
// import netlify from "../../assets/images/skills/netlify.svg";
// import sanity from "../../assets/images/skills/sanity.svg";
// import firebase from "../../assets/images/skills/firebase.svg";

import { useTransform, useViewportScroll } from "framer-motion";
// import {motion, useInView, animate } from "framer-motion";
import {motion} from "framer-motion";

function Skills() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  return (
    <SkillsContainer className="wrapper">
      <div className="skills__title">
        <img src={Asterik} alt="Asterik" />
        Skills & Tools
      </div>
      <p>
        <img src={Asterik} alt="Asterik" className="ill" />
        Programming languages, frameworks, tools &amp; products I&apos;ve had hands-down
        experience with and while I won&apos;t claim mastery in all of them, I&apos;ve
        fearlessly delved into their realm, expanding my skills.
        <br /> I&apos;m always looking to learn new things and improve my skills.
      </p>
      <motion.div style={{ scale }} className="container">
        <Terminal>
          <div className="terminal-window">
            <img src={red} alt="red" title="close" />
            <img src={orange} alt="orange" title="expand" />
            <img src={green} alt="green" title="minimize" />
          </div>
          <p className="terminal__user">
            Mahendra kale @portfolio
            <span>~</span>
          </p>
          <TechGrid>
            <div className="tech-grid__item">
              <img src={html} alt="HTML-5 icon" title="HTML5" />
              <p>HTML5</p>
            </div>

            <div className="tech-grid__item">
              <img src={css3} alt="CSS3 icon" title="CSS3" />
              <p>CSS</p>
            </div>

            <div className="tech-grid__item">
              <img src={tailwindcssIcon} alt="Bootstrap Icon" title="CSS3" />
              <p>Tailwind CSS</p>
            </div>

            <div className="tech-grid__item">
              <img src={gatsbyIcon} alt="Gatsby Icon" title="Gatsby" />
              <p>Gatsby</p>
            </div>

            <div className="tech-grid__item">
              <img src={javascript} alt="Javascript Icon" title="Javascript" />
              <p>Javascript</p>
            </div>

            <div className="tech-grid__item">
              <img src={react} alt="React JS" title="React" />
              <p>React</p>
            </div>

            <div className="tech-grid__item">
              <img src={Next} alt="Next JS" title="Next" />
              <p>Next</p>
            </div>

            <div className="tech-grid__item">
              <img src={Node} alt="Node JS" title="Node" />
              <p>Node</p>
            </div>
            


            <div className="tech-grid__item">
              <img src={gitIcon} alt="Git Icon" title="Git" />
              <p>Git</p>
            </div>
            <div className="tech-grid__item">
              <img src={wordpress} alt="Wordpress Icon" title="Wordpress" />
              <p>Wordpress</p>
            </div>
            <div className="tech-grid__item">
              <img src={docker} alt="Docker Icon" title="Docker" />
              <p>Docker</p>
            </div>

            <div className="tech-grid__item">
              <img src={figma} alt="Figma Icon" title="Figma" />
              <p>Figma</p>
            </div>


            <div className="tech-grid__item">
              <img src={Java} alt="Java Icon" title="Java" />
              <p>Java</p>
            </div>
            <div className="tech-grid__item">
              <img src={Python} alt="Python Icon" title="Python" />
              <p>Python</p>
            </div>
          </TechGrid>
        </Terminal>
      </motion.div>
    </SkillsContainer>
  );
}

export default Skills;

{/* <div className="tech-grid__item">
<img src={firebase} alt="Firebase Icon" title="Firebase" />
<p>Firebase</p>
</div> */}

{/* <div className="tech-grid__item">
<img src={bootstrap} alt="Bootstrap Icon" title="CSS3" />
<p>Bootstrap</p>
</div> */}

{/* <div className="tech-grid__item">
<img src={sanity} alt="Sanity Icon" title="Sanity" />
<p>Sanity</p>
</div> */}

{/* <div className="tech-grid__item">
<img src={jquery} alt="jQuery Icon" title="jQuery" />
<p>jQuery</p>
</div> */}

{/* <div className="tech-grid__item">
<img src={netlify} alt="Netlify Icon" title="Netlify" />
<p>Netlify</p>
</div> */}

{/* <div className="tech-grid__item">
<img
// image size is reducec here --- comment
    src={styledIcon}
    alt="Styled Components"
    title="Styled Components icon"
    />
    <p>Styled Components</p>
  </div>  */}
  
{/* <div className="tech-grid__item">
  <img src={sass} alt="SCSS Icon" title="SASS icon" />
  <p>Sass</p>
</div> */}

{/*  <div className="tech-grid__item">
  <img src={wordpress} alt="Wordpress Icon" title="Wordpress" />
  <p>Wordpress</p>
</div> */}