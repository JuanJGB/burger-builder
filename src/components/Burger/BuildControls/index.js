import React from 'react';
import styles from './style.module.css';
import * as ingredientsConstants from './../burgerConstants';
import BuildControl from './BuildControl';

const controls = [
  { ingredientLabel: 'Salad', type: ingredientsConstants.SALAD },
  { ingredientLabel: 'Bacon', type: ingredientsConstants.BACON },
  { ingredientLabel: 'Cheese', type: ingredientsConstants.CHEESE },
  { ingredientLabel: 'Meat', type: ingredientsConstants.MEAT },
];

export default function BuildControls({ ingredientAdded, ingredientRemoved, disabledIngredients, price, purchasable }) {
  return (
    <div className={styles.BuildControls}>
      <p>Current price:  
        <span className={styles.CurrentPrice}>
        &nbsp; {price.toFixed(2)}   
        </span>
      </p>
      {controls.map(control => (
        <BuildControl 
          key={control.ingredientLabel} 
          ingredientLabel={control.ingredientLabel}
          added={() => ingredientAdded(control.type)}  
          removed={() => ingredientRemoved(control.type)}  
          disabled={disabledIngredients[control.type]}
        />  
      ))}
      <button 
        className={styles.OrderButton}
        disabled={!purchasable}>ORDER NOW
      </button>
    </div>
  )
}
