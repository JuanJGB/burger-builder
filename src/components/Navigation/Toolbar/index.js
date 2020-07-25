import React from 'react';
import styles from './index.module.css';
import Logo from '../../Logo';

export default function Toolbar () {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
  );
}
