import React from 'react';
import styles from './style.module.css';

export default function BuildControl(props) {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.ingredientLabel}</div>
      <button className={styles.Less}>Less</button>
      <button className={styles.More}>More</button>
    </div>
  )
}
