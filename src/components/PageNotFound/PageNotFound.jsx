import React from 'react';
import { StyledIllustration, StyledPageNotFound } from "./PageNotFoundStyles";
import foura from "../../assets/images/404/404-1.svg";
import fourB from "../../assets/images/404/404-2-a.svg";
import fourC from "../../assets/images/404/404-2-b.svg";
import { Link } from 'gatsby';

const PageNotFound = () => {

  return (
    <StyledPageNotFound className="wrapper">
      <p>
        Not all those who wander are lost, <br />
        Unfortunately, you are. <br />
      </p>
      <StyledIllustration>
        <div><img src={foura} alt="404" /></div>
        <Link to='/'>
          <div className='smiley'>
            <img src={fourB} alt="404" />
            <img src={fourC} alt="404" className='abs'/>
          </div>
        </Link>
        <div><img src={foura} alt="404" /></div>
      </StyledIllustration>
    </StyledPageNotFound>
  );
};

export default PageNotFound;