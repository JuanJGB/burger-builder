  import React from 'react'
  import styles from './index.module.css';
  import BurgerIngredient from './BurgerIngredient';
  import * as constants from './burgerConstants';
  
  export default function Burger(props) {
    const transformedIngredients = Object.keys(props.ingredients)
      .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
          return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />;
        })
      })
    console.log(transformedIngredients);
    return (
      <div className={styles.Burger}>
         <BurgerIngredient type={constants.BREAD_TOP} />
         {transformedIngredients}
         <BurgerIngredient type={constants.BREAD_BOTTOM} />
      </div>
    )
  }
  