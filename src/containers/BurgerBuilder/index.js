import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

const INICIAL_PRICE = 4;
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      SALAD: 0,
      BACON: 0,
      CHEESE: 0,
      MEAT: 0,
    },
    totalPrice: INICIAL_PRICE
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
  }
  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
            ingredientAdded={this.addIngredientHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;