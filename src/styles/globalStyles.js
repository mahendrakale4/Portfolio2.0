import { createGlobalStyle } from 'styled-components';
import customCursor from "../assets/images/home/icons8-cursor.svg";
import blackCursor from "../assets/images/home/cursorblack.svg";
import Grid from "../assets/images/home/grid.svg";
import Neue from "../assets/fonts/PPMori-Regular.otf";

const GlobalStyle = createGlobalStyle`

:root {
  --base-black:  #000;
  --base-orange: #F9A600;
  --base-gray: #4B5563;
    font-size: 10px;
    --fs5: 5rem;
    --fs4: 4rem;
    --fs3: 3rem; 
    --fs2: 1.5rem;
    --fs1: 1rem;
    --fs1-5: 1.5rem;
    --fs0: 0.5rem;
    --red-orange: #fff;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}
html {
  cursor: url(${customCursor}), auto;
}

#blackCursor {
  cursor: url(${blackCursor}), auto !important;
}

@font-face {
  font-family: 'PPRegular';
  src: url('../../static/fonts/PPNeueMachina/PPRegular.otf');
  font-weight: normal;
  font-style: normal;
}


@font-face {
    font-family: 'Machina';
    src: url(${Neue}) format('opentype');
}
body {
    background-color: var(--base-black);
    background-size: cover;
    color: white;

    &:before {
      content: "";
      background-image: url(${Grid});
      background-size: 100%;
      position: fixed;
      top: 0;
      left: 6rem;
      right: 6rem;
      bottom: 0;
      transform: scaleY(var(--zero));
      transform-origin: 0 0;
      z-index: 1;
      pointer-events: none;
    }

    
}

button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
.gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

 img {
    max-width: 100%;
  }

a {
    text-decoration: none;
    color: inherit;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrapper {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    /* padding-left: 20px;
    padding-right: 20px; */
}
`;

export default GlobalStyle;
