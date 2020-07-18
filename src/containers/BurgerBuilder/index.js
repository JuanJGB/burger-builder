import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      SALAD: 0,
      BACON: 0,
      CHEESE: 0,
      MEAT: 0,
    }
  }
  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    )
  }
}

export default BurgerBuilder;