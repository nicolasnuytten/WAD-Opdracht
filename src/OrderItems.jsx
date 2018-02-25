import React, { Component } from "react";

class OrderItems extends Component {
  render = () => {
    const { getal, object } = this.props;
    return (
      <li>
        {getal} keer een {object}
      </li>
    );
  };
}

export default OrderItems;
