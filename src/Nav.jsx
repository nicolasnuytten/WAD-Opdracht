import React from "react";
import AddEvent from "./AddEvent"

const Nav = ({ title, onAdd }) => {

  const handleAddEvent = (id) => {
    onAdd(id);
  }
  
  return <div className="navigation">
      <div className="container">
        <h1 className="title">{title}</h1>
      </div>
      <section className="addEvent">
        <AddEvent onAdd={id => handleAddEvent(id)} />
      </section>
    </div>;

};

export default Nav;
