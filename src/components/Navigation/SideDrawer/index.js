import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import styles from './index.module.css';

export default function SideDrawer() {

  return (
    <div className={styles.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}
