  import React from 'react'
  import styles from './style.module.css';
  import BurgerIngredient from './BurgerIngredient';
  import * as constants from './burgerConstants';
  
  export default function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
      .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
          return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />;
        })
      })
      .reduce((values, element) => {
        return values.concat(element);
      }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>;
    }  
    console.log(transformedIngredients);
    return (
      <div className={styles.Burger}>
         <BurgerIngredient type={constants.BREAD_TOP} />
         {transformedIngredients}
         <BurgerIngredient type={constants.BREAD_BOTTOM} />
      </div>
    )
  }
  