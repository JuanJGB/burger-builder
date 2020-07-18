import React from 'react';
import styles from './style.module.css';
import * as burgerConstants from './../burgerConstants';
import PropTypes from 'prop-types';

/** @param {string} type */
function setBurgerIngredient (type) {
  let ingredient = null
  switch(type) {
    case (burgerConstants.BREAD_BOTTOM):
      ingredient = <div className={styles.BreadBottom}></div>
      break
    case (burgerConstants.BREAD_TOP):
      ingredient = (
        <div className={styles.BreadTop}> 
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      )
      break
    case (burgerConstants.MEAT):
      ingredient = <div className={styles.Meat}></div>
      break    
    case (burgerConstants.SALAD):
      ingredient = <div className={styles.Salad}></div>
      break    
    case (burgerConstants.BACON):
      ingredient = <div className={styles.Bacon}></div>
      break    
    case (burgerConstants.CHEESE):
      ingredient = <div className={styles.Cheese}></div>
      break 
    default:
      ingredient = null  
  }
  return ingredient;  
}
/**@param {Object} props
 * @param {string} props.type 
 */
export default function BurgerIngredient(props) {
   return setBurgerIngredient( props.type );
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
