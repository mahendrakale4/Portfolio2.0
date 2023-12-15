import styled from "styled-components";
import Grainy from "../../assets/images/home/bg-grain.png";
import GrainyBlack from "../../assets/images/home/bg-grain-dark.png";
import CursorBlack from "../../assets/images/home/cursorblack.svg";

export const SkillsContainer = styled.div`
  margin: 2rem auto;
  cursor: url(${CursorBlack}), auto;
  background-color: rgb(255, 255, 255);
  background-image: url(${Grainy});
  background-attachment: fixed;
  border-radius: 10px;
  font-family: "Fira Code", monospace;
  padding: 2rem;
  color: #000;

  .skills__title {
    font-size: var(--fs4);
    display: flex;
    align-items: center;
    gap: 2rem;
    font-family: "Space Mono", monospace;
    //On hover rotate the asterik icon
    &:hover {
      img {
        transform: rotate(180deg);
        transition: transform 0.5s ease-in-out;
      }
    }
    &:after {
      content: "";
      width: 50%;
      height: 2px;
      background-color: black;
    }
    img {
      &:after {
        content: "";
        width: 50%;
        height: 2px;
        background-color: white;
      }
    }
  }

  p {
    font-size: var(--fs2);
    line-height: 1.5;
    width: 75%;
    display: flex;
    gap: 2rem;
    .ill {
      opacity: 0;
      display: inline-block;
    }
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    .skills__title {
        font-size: var(--fs2);

        &:after {
            display: none;
        }
        img {
            width: 30px;
        }
    }
    p {
    font-size: 1.5rem;
    width: 100%;

        .ill {
            display: none;
        }
    }
  }
`;

export const Terminal = styled.div`
  border: 2px solid #121212;
  padding: 10px;
  padding-top: 5px;
  -webkit-box-shadow: 4px 4px 0 #121217;
  box-shadow: 4px 4px 0 #121217;
  font-family: "Space Mono", monospace;
  width: 80%;
  min-width: 500px;
  min-height: 250px;
  margin: 2rem 0;
  grid-gap: 2rem;
  margin-left: 10rem;
  &.whiteTerminal {
    border: 1px solid #ffffff;
    box-shadow: 2px 2px 0 #ffffff;
    background-image: url(${GrainyBlack});
    width: 100%;
    margin: 3rem auto;
    .terminal__commands span {
      color: #4e9a06;
    }
  }
  .terminal-window {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    span {
      color: #c4a000;
    }
  }
  .terminal__user {
    color: #4e9a06;
    span {
      color: #c4a000;
    }
  }

  @media only screen and (max-width: 600px) {
    //code goes here
    min-width: 0;
    margin-left: 0;
    width: 100%;
    .terminal__user {
      font-size: 1.2rem;
      gap: 0.5rem;
    }
  }
`;
export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0;
  width: 70%;
  margin: 2rem 0;
  img {
    width: 50px;
    height: 50px;
  }
  .tech-grid__item {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:0;
    p {
        width: 100%;
        justify-content: center;
        font-size: var(--fs1-5);
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    font-size: 1.5rem;
    width: 100%;
    img {
        width: 30px;
        height: 30px;
    }
    .tech-grid__item {
        p {
            font-size: 1.2rem;
        }
    }
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  .terminal-panel {
    display: flex;
    gap: 1rem;
  }
`;
