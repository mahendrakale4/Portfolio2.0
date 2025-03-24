import styled from "styled-components";

export const StyledPageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Fira Code", monospace;
    font-size: var(--fs5);
    @media only screen and (max-width: 768px) {
      //code goes here
      font-size: var(--fs2);
      margin-top: 8rem;
      margin-bottom: 3rem;
      padding: 0 1rem;
    }
`;

export const StyledIllustration = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  img {
    width: 200px;
    height: 200px;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    //code goes here
    max-width: 100px;
    max-height: 100px;

    flex-direction: column-reverse;
    margin-top: 20rem;

    gap: 0;
    img {
      width: 80px;
      height: 80px;
    }
  }

  .smiley {
    position: relative;
    cursor: pointer;
  }
  //rotate animation
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .abs {
    position: absolute;
    left: 0;
    animation: rotate 10s linear infinite;
  }
`;
