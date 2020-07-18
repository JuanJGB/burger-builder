import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

const INICIAL_PRICE = 4;
const INGREDIENT_PRICES = {
  SALAD: 0.5,
  BACON: 0.4,
  CHEESE: 1.3,
  MEAT: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      SALAD: 0,
      BACON: 0,
      CHEESE: 0,
      MEAT: 0,
    },
    totalPrice: INICIAL_PRICE,
    purchasable: false
  }
  updatePurchaseState (ingredients) {
    const amountIngredientChosen = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((amount, element) => {
        return amount + element;
      }, 0);
      this.setState({purchasable: amountIngredientChosen > 0});
  } 

  /**@param {number} type*/
  removeIngredientHandler = (type) => {   
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  /**@param {number} type*/
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }
  render () {
    const ingredientsToDisableLessButton= {
       ...this.state.ingredients
    }
    for (let ingredient in ingredientsToDisableLessButton) {
      ingredientsToDisableLessButton[ingredient] = ingredientsToDisableLessButton[ingredient] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabledIngredients={ingredientsToDisableLessButton}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;