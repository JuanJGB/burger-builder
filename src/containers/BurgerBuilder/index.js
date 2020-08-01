import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../services/api-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler';
const INICIAL_PRICE = 4;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: INICIAL_PRICE,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }
  componentDidMount() {
    axios.get('https://burger-builder-jgb.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data}); 
      })
      .catch(error => {
        this.setState({error: true});
        console.log(error.message);
      })
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
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }
  purchaseContinueHandler = () => {
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      costumer: {
        name: 'Juan',
        address: {
          street: 'Test Street 1',
          zipCode: '41351',
          country: 'Braziliam'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
        console.log(error);
      });
  }
  burgerRender = () => {
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabledIngredients={this.getIngredientsToDisableLessButton()}
              purchasable={this.state.purchasable}
              price={this.state.totalPrice}
              ordered={this.purchaseHandler}
          />
        </Aux>  
      );
    }
    return burger;
  }

  getIngredientsToDisableLessButton = () => {
    const ingredientsToDisableLessButton= {
       ...this.state.ingredients
    }
    for (let ingredient in ingredientsToDisableLessButton) {
      ingredientsToDisableLessButton[ingredient] = ingredientsToDisableLessButton[ingredient] <= 0
    }
    return ingredientsToDisableLessButton;
  }

  renderOrderSummary = () => {
    let orderSummary = null;
    if ( this.state.ingredients) {
      orderSummary = <OrderSummary
                          purchaseContinued={this.purchaseContinueHandler}
                          purchaseCanceled={this.purchaseCancelHandler} 
                          ingredients={this.state.ingredients}
                          price={this.state.totalPrice}  
                        />
    }
    if ( this.state.loading ) {
      orderSummary = <Spinner />;
    } 
    return orderSummary;
  }
  render () {  
    
    return (
      <Aux>
        <Modal 
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {this.renderOrderSummary()}         
        </Modal> 
        {this.burgerRender()} 
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);