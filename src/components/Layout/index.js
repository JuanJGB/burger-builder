import React from 'react';
import Aux from '../../HOC/Auxiliary';
import styles from './style.module.css';
import Toolbar from '../Navigation/Toolbar';
const Layout = ( props ) => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default Layout;

