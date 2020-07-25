import React from 'react';
import styles from './index.module.css';

export default function Button({ children, clicked, buttonType}) {
  return (
    <button 
      onClick={clicked}
      className={[styles.Button, styles[buttonType]].join(' ')}>{children}</button>
  )
}
