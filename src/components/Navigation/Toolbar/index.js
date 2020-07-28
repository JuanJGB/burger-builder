import React from 'react';
import styles from './index.module.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

export default function Toolbar ({ drawerToggleClicked }) {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}
