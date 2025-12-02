import React from "react";
// import Header from "../Header/Header";
import HeaderV1 from "../HeaderV1/HeaderV1";
import HeaderV2 from "../HeaderV2/HeaderV2";
import Footer from "../Footer/Footer";

function Template({ children }) {
  return (
    <>
    {/* <Header /> */}
    <HeaderV2 />
      {children}
      <Footer />
    </>
  );
}

export default Template;
