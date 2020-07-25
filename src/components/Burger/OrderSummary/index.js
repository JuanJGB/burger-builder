import React from 'react';
import Aux from '../../../HOC/Auxiliary';
export default function OrderSummary ({ ingredients }) {
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
        <p>Continue to Checkout?</p>
      </Aux>
    </div>
  )
}