import React from 'react';
import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color: var(--base-orange);
//   color: var(--base-black);
//   width: 100%;
//   padding: 1rem 6rem;
//   border-radius: 30px;
//   font-weight: 500;
// `;
const GradientButton = styled.button`
  background-color: var(--base-orange);
  color: var(--base-black);
  border: none;
  outline: none;
  margin-left: auto;
  width: 150px;
  font-weight: 500;
  border-radius: 50px;
  /* border: 2px solid white; */
  display: inline-block;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  position: relative;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .label-up {
    display: block;
    margin: 0px 30px;
    height: 100%;
    position: relative;
    top: 0%;
    transition: 0.3s;
    color: var(--base-black);
  }

  &:hover .label-up {
    top: -100%;
    background-color: transparent;
  }

  @media screen and (max-width: 768px) {
    top: 0%;
    height: 30px;
    line-height: 30px;
    font-size: 1rem;
    text-transform: lowercase;
    .label-up {
      display: block;
      margin: 0px 15px;
      font-weight: normal;
      //remove any animation on parent element
        transition: none;
        animation: alternate 1s infinite;
      
    }
  }
`;
// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <GradientButton type="button">
      <span className="label-up">{children}</span>
      <span className="label-up">{children}</span>
    </GradientButton>
  );
}

export default Button;
