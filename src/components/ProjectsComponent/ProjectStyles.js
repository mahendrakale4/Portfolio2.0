import { Link } from "gatsby";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Fira Code", monospace;
@media only screen and (max-width: 600px) {
  //code goes here
  margin-top: 8rem;
  padding: 1rem;
}
  .built__with {
    margin-right: 5px;
    border-radius: 30px;
    background-color: var(--base-orange);
    padding: 1rem;
    opacity: 0.8;
    display: inline-block;
    margin: 1rem;
  }
  .backLink {
    font-size: var(--fs2);
    color: var(--base-orange);
    &:before {
      content: "←";
      margin-right: 0.5rem;
    }
    @media only screen and (max-width: 600px) {
      //code goes here
      font-size: 1.2rem;
    }

  }
  h1 {
    font-size: 3rem;
  }
`;

export const BackLink = styled(Link)`
    font-size: var(--fs2);
    margin-bottom: 4rem;
    color: var(--base-orange);
    &:before {
      content: "←";
      margin-right: 0.5rem;
    }
`;


export const ProjectTable = styled.table`
  font-size: 1.5rem;
  border-collapse: collapse;
  text-align: left;

  thead {
    text-align: left;
  }

  tr {
    padding-bottom: 1rem;
  }

  th,
  td {
    border-bottom: 1px solid white;
    padding: 1.5rem 2rem;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    th,
    td {
      font-size: 1.2rem;
    }
  }
  .project__link {
    position: relative;

    &:after {
      content: "↗";
      position: absolute;
      right: -2rem;
      top: -1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .mobile__hide {
      display: none;
    }
  }
`;

