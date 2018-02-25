import React, { Component } from "react";
import OrderItems from "./OrderItems";

class Order extends Component {
  render = () => {
    return (
      <div>
        <p>Voor mij</p>
        <ul>
          <OrderItems getal="2" object="🥕" />
          <OrderItems getal="3" object=" 🍌" />
          <OrderItems getal="6" object="🥐" />
        </ul>
        <p>aub</p>
      </div>
    );
  };
}

export default Order;
