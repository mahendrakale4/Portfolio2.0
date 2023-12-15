/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import SEO from "../components/SEO";

function FourOhFour() {
  return (
    <>
      <SEO title={"404"} />
      <PageNotFound />
    </>
  );
}

export default FourOhFour;
