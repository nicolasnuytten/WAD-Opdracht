import React from "react";
import add from "./assets/icon/add.png";

const Nav = ({ title }) => (
  <div className="navigation">
    <div className="container">
      <h1 className="title">{title}</h1>
      <a href="" className="add-icon">
        <img src={add} alt="{add}" />
      </a>
    </div>
  </div>
);

export default Nav;
