import styled, { keyframes } from "styled-components";
import squiggly from "../../assets/images/home/squiggly.svg";

// Define the rotation animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
// Blinking effect animation
const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const MenuToggle = styled.div`
  cursor: pointer;

  .hamBox {
    position: relative;
    z-index: 2;
    height: 44px;
    width: 44px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    padding: 0;
    margin: 0 2rem;
    .hamburger__icon {
      animation: none;
      border: 2px solid var(--base-orange);
      border-radius: 50%;
      padding: 1rem;
      transition: all 0.5s ease-in-out;
      &.spin {
        transform: rotate(135deg);
      }
    }
  }

  .hamBoxOpen {
    position: relative;
  }

  /* .lineTop, .lineBottom {
  margin: 0 auto;
  position: absolute;
  display: block;
  width: 24px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  left: 0;
  right: 0; 
  transform: rotate(0deg); 
  transition: all 0.5s ease-in-out;
} */

  /* .lineTop {
  top: 2.2em;

  &.spin {
    transform: rotate(135deg);
    top: 2.35em;
    background-color: #fff;
  };
}
.lineBottom {
  bottom: 2.2em;

  &.spin {
    transform: rotate(225deg);
    background: #fff;
    bottom: 2.35em;
  }
} */
`;

// Apply the animation to the image
export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 12vh;
  z-index: 999;
  transition: all 0.2s ease-in;
  background: #000000 !important;

  &.fixed-navbar {
    position: fixed;
    top: 0;
    background: #000000 !important;
    border-bottom: 4px solid var(--base-orange);
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    z-index: 999;
    transition: all 0.2s ease-in;
  }
  //blur the navbar

  .nav-overlay {
    position: fixed;
    top: -150%;
    background-color: #18181c;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 3rem;
  }
  .logo {
    //no animation
    animation: none;
    opacity: 1;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    height: 9vh;
    background-color: #000000 !important;
    position: fixed;
    .logo {
      margin-left: 2rem;
    }
  }
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  font-family: "Fira Code", monospace;
  font-size: 2rem;
  justify-content: space-between;
  transition: all 0.2s ease-in;
  z-index: 999;
  border-bottom: 4px solid var(--base-orange);
  margin-bottom: 1rem;
  //blur the navbar
  h2 {
    font-weight: 500;
    font-size: 2rem;
    font-family: "Space Mono", monospace;
    /* span {
      color: var(--base-orange);
      animation: ${blinkAnimation} 3s infinite;
    } */
  }
  img {
    width: 80px;
    animation: ${rotateAnimation} 60s infinite linear;
    /* Adjust the duration (10s) for desired speed */
  }

  @media screen and (max-width: 768px) {
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent !important;
    &:hover {
      background: none;
      border: none;
    }
  }
`;
export const StyledNavbarLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 2rem;
    color: var(--base-orange);
    transition: all 0.2s ease-in-out;
    background-position-y: bottom;
    border-bottom: 1px dashed var(--base-orange);
    position: relative;

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
`;

export const StyledHamburgerList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hamburger__link {
    position: relative;
    margin: 0.5em 0;
    padding: 0.5em 0;
    width: 100%;
    text-align: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #2a2a2f;
      border-bottom: 1px solid #2a2a2f;
      transition: all 0.2s ease-in-out;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-size: 2rem;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--base-orange);
        transition: all 0.2s ease-in-out;
      }
    }
    .hamburger__link__wrapper {
      &:after {
        content: "";
        position: absolute;
        top: 120px;
        left: -10%;
        width: 120%;
        height: 100%;
        background: #18181c;
        margin: 0 auto;
        transition: all 2s ease-in-out;
      }
    }
    &:hover .hamburget__link__wrapper {
      width: 100%;
      transition: all 0.2s ease-in-out;
    }
  }
`;
