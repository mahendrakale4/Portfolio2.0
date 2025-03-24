import styled from "styled-components";
import squiggly from "../../assets/images/home/squiggly.svg";
import Grainy from "../../assets/images/home/bg-grain.png";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -3rem auto 0 auto;
  font-family: "Fira Code", monospace;
  font-size: var(--fs2);
  background-color: #000;
  background-image: url(${Grainy});
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  border-radius: 10px;
  padding: 2rem;
  @media only screen and (max-width: 600px) {
    //code goes here
    margin: 3rem auto 0 auto;
    font-size: 1.5rem;
  }
`;
export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  width: 60%;
  margin-top: 10rem;
  font-size: 1.5rem;
  font-family: "Space Mono", monospace;
  a {
    border-bottom: 1px dashed var(--base-orange);
    letter-spacing: 0rem;
    position: relative;
    background-position-y: bottom;
    &:hover {
      color: white;
      background-image: url(${squiggly});
      background-size: auto 6px;
      background-repeat: repeat-x;
      text-decoration: none;
      border-bottom: none;
      transition: all 0.2s ease-in-out;
    }
  }
  p {
    margin: 1rem 0;
    line-height: 1.5;
  }
  .city__life {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .about__picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
    filter: grayscale(1);
  }

  .about__arrow {
    width: 50px;
  }

  .type {
    display: flex;
    margin-bottom: -10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutRight = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;    
    margin: 0 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Places = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: white;
  color: black;
  padding: 3rem;
  border-radius: 10px;
  background-image: url(${Grainy});
  margin: 3rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media only screen and (max-width: 600px) {
  //code goes here
    padding: 1rem;
    }
  h3 {
    font-weight: normal;
  }
`;

export const WorkPlaces = styled.div`
    display: flex;
    gap: 2rem;
    a {
        border-bottom: none;

        &:hover {
            background-image: none;
        }
    }
    img {
        width: 150px;
        height: 100px;
        object-fit: contain;
    }
`;