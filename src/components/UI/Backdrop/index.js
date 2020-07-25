import React from 'react';
import styles from './index.module.css';

export default function Backdrop({ show, clicked }) {
  return (
    show ? <div className={styles.Backdrop} onClick={clicked}></div> : null
  )
}
