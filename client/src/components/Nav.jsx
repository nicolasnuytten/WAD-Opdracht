import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ title, store }) => {
  return <div className="navigation">
    <div className="container">
      <h1 className="title">
        <Link to="/" className="title">
          {title}
        </Link>
      </h1>

      <p className="event-name">Totaal: {store.total}</p>
      <Link to="/events/add" className="title">
        +
        </Link>
    </div>
  </div>;
};

export default Nav;
