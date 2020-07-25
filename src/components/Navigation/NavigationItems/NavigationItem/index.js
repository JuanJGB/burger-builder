import React from 'react';
import styles from './index.module.css';

export default function NavigationItem({ children, link, active }) {
  return (
    <li className={styles.NavigationItem}>
      <a 
        href={link}
        className={active ? styles.active : null}>{children}</a>
    </li>
  )
}
