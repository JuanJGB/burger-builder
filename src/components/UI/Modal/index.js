import React from 'react';
import styles from './index.module.css';
import Aux from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop';

export default function Modal({ children, show, modalClosed }) {
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed}/>
      <div 
        className={styles.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}>
        {children}
      </div> 
    </Aux> 
    
  )
}
