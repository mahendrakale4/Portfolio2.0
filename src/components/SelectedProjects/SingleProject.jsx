import React, { useEffect } from "react";
import { useState } from "react";
import { ProjectSingle } from "./styledProjects";
import Marquee from "react-fast-marquee";

function SingleProject(props) {
  const [blinky, setBlinky] = useState(false);
  // if screen width < 600 setBlinky to true
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        // Code that uses the window object
        if (window.innerWidth < 1000) {
          setBlinky(true);
        } else {
          setBlinky(false);
        }
      }


    };

    handleResize(); // Call it initially
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize); 
      // Listen for window resize events
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize); 
      // Clean up the event listener
      }
    };
  }, []);

  const {
    ProjectUrl,
    ProjectTitle,
    ProjectDescription,
    ProjectImage,
  } = props;
  return (
    <ProjectSingle
      onMouseEnter={() => setBlinky(true)}
      onMouseLeave={() => setBlinky(false)}
    >
      {/* Rest of the code */}
      <a href={ProjectUrl} target="_blank" rel="noopener noreferrer">
        <div className="block__one">

          <p>{ProjectDescription}</p>
        </div>
        <div className="block__two">
          <img src={ProjectImage} alt="Daily Stoic" />
        </div>
        <div className="block__three">
          <Marquee play={blinky}>
            <p>
              {Array.from({ length: 3 }).map((_, i) => `${ProjectTitle} - `)}
            </p>
          </Marquee>
        </div>
      </a>
    </ProjectSingle>
  );
}

export default SingleProject;
