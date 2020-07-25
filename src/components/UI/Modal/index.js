import React from 'react'
import styles from './index.module.css'

export default function Modal({ children, show}) {
  return (
    <div 
      className={styles.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>
      {children}
    </div>
  )
}
