import { Link, graphql } from "gatsby";
import React from "react";
import { ProjectsContainer } from "../components/ProjectsComponent/ProjectStyles";
import ProjectComponent from "../components/ProjectsComponent/ProjectComponent";
import SEO from "../components/SEO";

const Projects = ({ data }) => {
  const ProjectData = data.allSanityProject.nodes;
  return (
    <>
      <SEO title={"Projects"}/>
      <ProjectsContainer className="wrapper">
        <Link to="/" className="backLink">
          Mahendra Kale
        </Link>
        <h1>All Projects</h1>
        <ProjectComponent data={ProjectData} />
      </ProjectsContainer>
    </>
  );
};


export default Projects;
export const projectsQuery = graphql`
  query ProjectsQuery {
    allSanityProject(sort: { Year: DESC }) {
      nodes {
        BuiltWith
        ProjectLink
        Title
        Year
      }
    }
  }
`;
