import React from "react";
import { Link } from "react-router-dom";
import User from "../components/User";
import { observer } from "mobx-react";
import ProtectedComponent from "./ProtectedComponent";

const Nav = ({ title }) => {
  return <div className="navigation">
      <div className="container">
        <h1 className="title">
          <Link to="/" className="title">
            {title}
          </Link>
        </h1>
        <ProtectedComponent protect={
        <Link to="/events/add" className="title">
          +
        </Link>
        }/>
        
      </div>
      <User />
    </div>;
};

export default observer(Nav);
