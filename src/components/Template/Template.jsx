import React from "react";

import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

function Template({ children, lang = "en" }) {
  return (
    <>
    {/* <Header /> */}
    <Menu lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}

export default Template;
