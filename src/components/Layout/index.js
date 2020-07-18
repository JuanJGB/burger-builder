import React from 'react';
import Aux from '../../HOC/Auxiliary';
import styles from './style.module.css';
const Layout = ( props ) => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default Layout;

