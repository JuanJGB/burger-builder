import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './index.module.css';
export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src={BurgerLogo} alt="Burger Builder"/>
    </div>
  )
}