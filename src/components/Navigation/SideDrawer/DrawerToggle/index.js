import React from 'react';
import styles from './style.module.css'

export default function DrawerToggle({ clicked }) {
  return (
    <div className={styles.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
