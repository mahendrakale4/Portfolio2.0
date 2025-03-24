import styled, { keyframes } from "styled-components";


const rotateInfinite = keyframes`
  0% { transform: rotate(0deg); }
  to {
    transform: rotate(1turn);
  }
`;
export const SpotifyCompWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .rotate {
    animation: ${rotateInfinite} 20s linear infinite;
    transform-origin: center center;
    transform-box: fill-box;
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .sounds__svg {
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 600px) {
    //code goes here
    .sounds__svg {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export const SpotifyIntro = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 2rem;
  img {
    width: 25px;
    top: 5px;
    position: relative;
  }
  .intro__left {
    width: 60%;
    padding: 2rem;
  }
  .intro__right {
    width: 40%;
    iframe {
      border-radius: 12px;
      width: 100%;
      height: 352px;
      box-shadow: 5px 5px 1px 0px rgba(156, 144, 156, 1);
    }
  }
  @media only screen and (max-width: 768px) {
    //code goes here
    padding: 0.5rem;
    font-size: 1.2rem;
    flex-direction: column;
    .intro__left {
      width: 100%;
    }
    .intro__right {
      width: 100%;
    }
  }

`;
