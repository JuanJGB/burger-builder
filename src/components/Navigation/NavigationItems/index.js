import React from 'react';
import styles from './index.module.css';
import NavigationItem from './NavigationItem';
export default function NavigationItems() {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem
        link="/" 
        active>
        Burger Builder 
      </NavigationItem>
      <NavigationItem
        link="/">
        Checkout
      </NavigationItem>
    </ul>
  )
}