import React from "react";
import SEO from "../components/SEO";

const resume = () => {
  return (
    <>
      <SEO title={"Resume"} />
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100vh"
      >
        <p>
          Unable to display PDF. Please download it{" "}
          <a href="/resume.pdf">here</a>.
        </p>
      </object>
    </>
  );
};

export default resume;