import styled, { keyframes } from "styled-components";
import Grainy from "../../assets/images/home/bg-grain.png";
import CursorBlack from "../../assets/images/home/cursorblack.svg";
// import code2 from "../../assets/images/home/code2.png";
// import code1 from "../../assets/images/home/code1.png";

const backgroundAnimation = keyframes`
100% {
  background-position: 1000px 1000px;
}
`;

export const Init = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    //code goes here
    height: 100%;
    margin: 0 1rem;
  }
`;
export const AsterikIcon = styled.img`
  position: absolute;
  right: 0;
  top: 10px;
`;

export const FirstFoldContainer = styled.div`
  background-color: #ffffff;
  background-image: url(${Grainy});
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  border-radius: 10px;
  width: 98%;
  display: flex;
  padding: 2rem;
  height: 100%;
  z-index: 2;
  height: 70vh;

  @media only screen and (max-width: 768px) {
    //code goes here
    flex-direction: column;
    z-index: -1;
    height: 100%;
    margin-top: 8rem;
    width: 100%;
    padding: 1rem;
    .firstFold__left {
      width: 100% !important;
    }
  }
  @media only screen and (max-width: 600px) {
    background-image: none;
    background-color: #000000;
    
  }
  .firstFold__left {
    width: 60%;
    .body-copy {
      font-size: var(--fs2);
      font-family: "Fira Code";
      color: #000000;
      position: relative;
      cursor: url(${CursorBlack}), auto;
      .rel {
        position: relative;
        display: block;
        width: fit-content;
        margin: 1rem 0;
        font-size: var(--fs4);
        &:hover {
          &::after {
            //rotate the asterik on hover
          }
        }

        img {
          position: absolute;
          left: -15px;
          top: -24px;
          width: 100%;
        }
        @media only screen and (max-width: 600px) {
          .rel {
            color: #000000;
            width: 180px;
            border-bottom: 1px solid var(--base-orange);
          }
          img {
            display: none;
          }
        }
      }
      .relative {
        position: relative;
        display: inline-block;
        margin: 0 1.5rem;
        img {
          position: absolute;
          bottom: -25px;
          left: 0px;
          width: 100%;
        }

        @media only screen and (max-width: 768px) {
          //code goes here
          img {
            bottom: -20px;
          }
        }
      }

      .apple__emojis {
        width: 50px;
      }
    }
    @media only screen and (max-width: 768px) {
      //code goes here

      .body-copy {
        font-size: var(--fs1-5);
        text-align: center;

        .rel {
          font-size: var(--fs2);
          font-weight: bold;
          text-align: center;
          
          img {
            left: 30px;
            top: -16px;
            width: 80%;
          }
        }
      }
    }
    @media only screen and (max-width: 600px) {
      //code goes here

      .body-copy {
        font-size: var(--fs1-5);
        text-align: center;
        color: #ffffff;
        .rel {
          width: 200px;
          text-align: left;
          border-bottom: 2px dashed var(--base-orange);
          
          img {
            left: 30px;
            top: -16px;
            width: 80%;
          }
        }
        p {
          text-align: left;
        }
      }
    }
  }
  .firstFold__right {
    margin-left: auto;
    border-radius: 10px;
    position: relative;
    background-color: black;
    display: flex;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    width: 30%;
    padding: 2rem;
    @media only screen and (max-width: 800px) {
      //code goes here
      margin: auto;
      width: 100%;
    }
    @media only screen and (max-width: 600px) {
      //code goes here
      margin: auto;
      img {
        width: 150px !important;
      }
    }
    .window-pane {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      background-image: radial-gradient(
          ellipse 25% 25% at 25% 25%,
          #00c647 50%,
          #0000 51%
        ),
        radial-gradient(ellipse 25% 25% at 75% 75%, #034524 50%, #0000 51%);
      background-size: 20px 20px;
      border-radius: 10px;
      background-position: 0;
      /* background-size: 200%; */
      animation: ${backgroundAnimation} 30s linear infinite;
    }

    img {
      width: 200px;
      display: flex;
      margin: auto;
    }
  }
  
`;

export const FirstFold = styled.div`
`;
const flightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(850%);
  }
`;

export const FlightPath = styled.div`
  display: flex;
  align-items: center;
  color: #d1cece;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Fira Code", monospace;
  height: min-content;
  width: 50%;
  .flight-path__line {
    width: 100%;
    margin: 0 3rem;
    height: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 4px,
      rgb(209, 206, 206) 4px,
      rgb(209, 206, 206) 6px
    );

    img {
      width: 30px;
      position: absolute;
      left: 0;
      /* animation: ${flightAnimation} 10s linear infinite; */
    }
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    width: 100%;
    font-size: 1.4rem;
    .flight-path__line {
      img {
        width: 20px;
      }
    }
  }
`;
