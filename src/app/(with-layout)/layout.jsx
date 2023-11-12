import React from "react";
import Navbar from "../components/Navbar";

const WidthLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <footer>fotter</footer>
    </div>
  );
};

export default WidthLayout;
