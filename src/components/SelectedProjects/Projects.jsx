import React from "react";
import { useState } from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
} from "./styledProjects";
// import DailyStoic from "../../../src/assets/images/project-images/1.png";
import Jio from "../../../src/assets/images/project-images/jio.png";
import cncf from "../../../src/assets/images/project-images/cncf.jpg";
import persistent from "../../../src/assets/images/project-images/persistent.png";                                  
// import trent from "../../../src/assets/images/project-images/fresh.png";
import SingleProject from "./SingleProject";

function Projects() {
  const [blinky, setBlinky] = useState(false);

  return (
    <ProjectsContainer className="wrapper">
      <div className="projects__title">Few of my Experience</div>
      <ProjectsWrapper>
        <SingleProject
          ProjectUrl="https://mahendrakale.netlify.app/experience/jio"
          ProjectTitle="Jio, Software Developer"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={Jio}
          //how do I add a linebreak here?
          ProjectDescription=" Jan 2024 , Navi-Mumbai "
        />
        <SingleProject
          ProjectUrl="https://mahendrakale.netlify.app/experience/Cncf"
          ProjectTitle="CNCF:Cloud Native Computing Foundation"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={cncf}
          ProjectDescription="CNCF Zero to Merge Contributor from August 2023 - October 2023"
        />
        <SingleProject
          ProjectUrl="https://mahendrakale.netlify.app/experience/Persistent"
          ProjectTitle="Persistent Systems"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={persistent}
          ProjectDescription="Persistent Systems Martian Internship from April 2022 - July 2022"
        />

      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
