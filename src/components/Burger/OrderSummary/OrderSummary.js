import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[Order Summary] DidUpdate')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey} style={{ color: '#000000' }} >
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3  style={{ color: '#000000' }} >Your Order</h3>
        <p style={{ color: '#000000' }} >Delicious burger with following ingredients:</p>
        <ul style={{ color: '#000000' }} >{ingredientSummary}</ul>
        <p style={{ color: '#000000' }} >Continue to Checkout</p>
        <p style={{ color: '#000000' }} ><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
    </Aux>
    );
  }
}

export default OrderSummary;
