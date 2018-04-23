import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ title }) => {
  return <div className="navigation">
      <div className="container">
        <h1 className="title">
          <Link to="/" className="title">
            {title}
          </Link>
        </h1>
        <Link to="/event/add" className="title">
          +
        </Link>
      </div>
    </div>;
};

export default Nav;
