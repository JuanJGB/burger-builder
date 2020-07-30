import React, { Component } from 'react';
import Aux from '../../../HOC/Auxiliary';
import Button from '../../../components/UI/Button';
import styles from './index.module.css'
export default class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  }
  ingredientSummary = Object.keys(this.props.ingredients)
  .map(ingredientKey => {
    return (
      <li key={ingredientKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
      </li>
    );
  });
  render() {
    return (
      <div>
        <Aux>
          <h3>Your order</h3>
          <p>A delicious burger with the following ingredientes</p>
          <ul>
            {this.props.ingredientSummary}
          </ul>
          <p className={styles.TotalPrice}>Total Price: {this.props.price.toFixed(2)}</p>
          <p>Continue to Checkout?</p>
          <Button buttonType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
          <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
      </div>
    )
  } 
  
}