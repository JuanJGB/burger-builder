import React from 'react';
import styles from './style.module.css';

export default function BuildControl({ingredientLabel, added, removed, disabled}) {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{ingredientLabel}</div>
      <button className={styles.Less} onClick={removed} disabled={disabled}>Less</button>
      <button className={styles.More} onClick={added}>More</button>
    </div>
  )
}
