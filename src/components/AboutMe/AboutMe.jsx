import React from "react";
import { Link } from "gatsby";
import { AboutContainer, AboutLeft, Places, WorkPlaces } from "./about-styles";
import Typewriter from "typewriter-effect";
import nerd from "../../assets/images/about/profile-pic.png";
import Arrow from "../../assets/images/about/arrow.svg";
// compony images
import Jio from "../../assets/images/about/orgs/jio.png";
import persistent from "../../assets/images/about/orgs/persistent.png";
import cncf from "../../assets/images/about/orgs/cncf.png";
import mass from "../../assets/images/about/orgs/mass.png";
// import NTSU from "../../assets/images/about/orgs/ntsu.png";
// import TSL from "../../assets/images/about/orgs/tsl.png";
// import Unifynd from "../../assets/images/about/orgs/unifynd.png";
import BashTerminal from "./bashTerminal";

const AboutMe = () => {
  return (
    <AboutContainer className="">
      <AboutLeft>
        <img src={nerd} className="about__picture" />
        <p>Hey! I&apos;m Mahendra.</p>
        <img src={Arrow} className="about__arrow" />
        <p className="type">
          a &nbsp;
          <Typewriter
            options={{
              strings: ["JavaScript Full Stack Developer", "Software Developer", "Perpetual learner"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p>
          I&apos;m a Full-stack developer born in{" "} 
          <a
            href=""
            target=""
            rel="noopener noreferrer"
          >
            {" "}
            Maharashtra
          </a>{" "}
          {" "}raised in   {" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            DADRA & NAGAR HAVELI [D&NH]{" "}
          </a>
          currently in{" "} 
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Navi Mumbai
          </a>{" "}
          {/* pursuing my Masters in Computer Science from NTU, currently on my
          placement year at <a href="https://www.trentstudents.org/">NTSU</a>.
          <br /> I also play football,{" "}
          <a
            href="https://youtu.be/1IKM0uO5Stc"
            target="_blank"
            rel="noopener noreferrer"
          >
            listen to afrobeats
          </a>{" "}
          and go on runs to to get my ass of the computer. */}
        </p>
        <Places>
          <h3>I&apos;ve worked for</h3>
          <WorkPlaces>
            <a
              href="https://www.jio.com/platforms"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Jio} alt="" title="Jio" />
            </a>
            <a
              href="https://www.persistent.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={persistent} alt="" title="This is persistent" />
            </a>
            <a
              href="https://landscape.cncf.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={cncf} alt="" title="Cncf" />
            </a>
            <a
              href="http://masstechnologies.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mass} alt="" title="Mass technologies" />
            </a>
          </WorkPlaces>
        </Places>
        <p>
        I love taking on new challenges and learning new things. 
        I believe in the strength of working together with others, 
        especially in open source projects and community efforts. 
        I enjoy collaborating and helping out non-profit organizations.
          <br />
        </p>
        <BashTerminal />
        <p>Interested in doing something cool? Let&apos;s talk!</p>
      </AboutLeft>
    </AboutContainer>
  );
};

export default AboutMe;