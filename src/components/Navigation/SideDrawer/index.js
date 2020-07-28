import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import styles from './index.module.css';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../../HOC/Auxiliary';

export default function SideDrawer({ closed, open }) {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  } 
  return (
    <Aux>
      <Backdrop 
        show={open} 
        clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
    
  )
}
