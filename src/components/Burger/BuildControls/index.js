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

export default function BuildControls() {
  return (
    <div className={styles.BuildControls}>
      {controls.map(control => (
        <BuildControl key={control.ingredientLabel} ingredientLabel={control.ingredientLabel}/>  
      ))}
    </div>
  )
}
