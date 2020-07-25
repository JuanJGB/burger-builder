import React from 'react';
import Aux from '../../HOC/Auxiliary';
import styles from './style.module.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';
const Layout = ( props ) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default Layout;

