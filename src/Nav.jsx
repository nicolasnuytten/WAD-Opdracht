import React from "react";

const Nav = ({ title }) => {
  return (
    <div className="navigation">
      <div className="container">
        <h1 className="title">{title}</h1>
      </div>
      
    </div>
  );
};

export default Nav;
