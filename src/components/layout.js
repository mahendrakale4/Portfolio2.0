import React from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import GlobalStyle from "../styles/globalStyles";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
