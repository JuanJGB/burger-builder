import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';
import Aux from '../Auxiliary';

export default function withErrorHandler(WrappedComponent, axios) {
  return class extends Component {
    state = {
      error: null
    }
    componentDidMount () {
      axios.interceptors.request.use(request => {
        this.setState({error: null});
        return request;
      },error => {
        return Promise.reject(error);
      });

      axios.interceptors.response.use(response => response, error => {
        this.setState({error: error});
        return Promise.reject(error);
      });
    }
    errorConfirmedHandler = () => {
      this.setState({error: null});
    }
    render () {
      let errorMessage = null;
      if (this.state.error) {
         errorMessage = "Something didn't work! error: \n"+ this.state.error.message;
      }
      return ( 
        <Aux>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
             {errorMessage}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
    
  }
}
