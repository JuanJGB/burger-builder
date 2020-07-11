  import React from 'react'
  import styles from './index.module.css';
  import BurgerIngredient from './BurgerIngredient';
  import * as constants from './burgerConstants';
  
  export default function Burger({ }) {
    return (
      <div className={styles.Burger}>
         <BurgerIngredient type={constants.BREAD_TOP} />
         <BurgerIngredient type={constants.CHEESE} />
         <BurgerIngredient type={constants.MEAT} />
         <BurgerIngredient type={constants.BREAD_BOTTOM} />
      </div>
    )
  }
  