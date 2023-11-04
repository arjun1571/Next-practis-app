import React from "react";

const WidthLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <a href="">home</a>
      </nav>
      {children}
      <footer>fotter</footer>
    </div>
  );
};

export default WidthLayout;
