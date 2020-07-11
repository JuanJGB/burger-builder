import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger';
class BurgerBuilder extends Component {
  render () {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;