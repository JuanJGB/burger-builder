import React from 'react';
import Aux from '../../../HOC/Auxiliary';
import Button from '../../../components/UI/Button';
import styles from './index.module.css'
export default function OrderSummary ({ ingredients, purchaseCanceled, purchaseContinued, price }) {
  const ingredientSummary = Object.keys(ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {ingredients[ingredientKey]}
        </li>
      );
    });
  return (
    <div>
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredientes</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p className={styles.TotalPrice}>Total Price: {price.toFixed(2)}</p>
        <p>Continue to Checkout?</p>
        <Button buttonType="Danger" clicked={purchaseCanceled}>CANCEL</Button>
        <Button buttonType="Success" clicked={purchaseContinued}>CONTINUE</Button>
      </Aux>
    </div>
  )
}