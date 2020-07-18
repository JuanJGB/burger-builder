import React from 'react';
import styles from './style.module.css';

export default function BuildControl({ingredientLabel, added}) {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{ingredientLabel}</div>
      <button className={styles.Less}>Less</button>
      <button className={styles.More} onClick={added}>More</button>
    </div>
  )
}
