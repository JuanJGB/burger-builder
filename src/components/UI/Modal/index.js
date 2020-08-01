import React, { Component } from 'react';
import styles from './index.module.css';
import Aux from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop';

export default class Modal extends Component {
  //will be converted to functional component
  shouldComponentUpdate(nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  componentDidUpdate () {
    console.log('[Modal] DidUpdate');
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div> 
      </Aux> 
      
    )
  };
  
  }
  
