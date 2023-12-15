import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { Link, navigate } from "gatsby";
import primaryButton from "../../assets/images/home/primaryButton.svg";

//redirect using navigate
const redirect = () => {
  navigate("/projects");
};

const StyledOrangeContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-family: "Fira Code", monospace;
  font-size: var(--fs3);
  width: 98%;

  @media only screen and (max-width: 768px) {
    //code goes here
    flex-direction: column-reverse;
  }
`;

const StyledOrangeLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 70%;
  border: 1px solid #fff;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  div:nth-child(2) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
  @media only screen and (max-width: 768px) {
    //code goes here
    width: 100%;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  @media only screen and (max-width: 500px) {
    //code goes here
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const StyledOrangeRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 2rem;
  width: 100%;
  color: #000000;
  background-color: var(--base-orange);
  border-radius: 10px;
  font-weight: 500;
  .projectsBtn {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    @media only screen and (max-width: 600px) {
      //code goes here
      font-size: var(--fs2);
    }
  }
  // on hover extend the button
  &:hover {
    .buttonCircle {
      /* transform: scale(1.01) rotate(320deg); */
      transform: scale(1.2) rotate(320deg);
    }
  }
  .buttonCircle {
    width: 4rem;
    height: 4rem;
    right: 0rem;
    position: relative;
    border-radius: 50%;
    padding: 1rem;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
    img {
      width: 30px;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 768px) {
    //code goes here
    padding: 2rem;
  }
`;
function OrangeContainer() {
  return (
    <StyledOrangeContainer className="wrapper">
      <StyledOrangeLeft>
        <div>
          <a
            href="https://github.com/mahendrakale4"
            target="_blank"
            rel="noopener noreferrer"
            title="Github Profile"
          >
            <AiFillGithub size={50} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mahendra-kale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption size={50} />
          </a>
        </div>
        <div>
          <a
            href="mailto:mahendrakalepr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail size={50} />
          </a>
        </div>
      </StyledOrangeLeft>
      <StyledOrangeRight onClick={redirect}>
        <Link to="/projects" className="projectsBtn">
          All Projects
          <div className="buttonCircle">
            <img src={primaryButton} alt="primaryButton" />
          </div>
        </Link>
      </StyledOrangeRight>
    </StyledOrangeContainer>
  );
}

export default OrangeContainer;
