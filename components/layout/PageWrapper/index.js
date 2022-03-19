import React from 'react'
import styles from './styles.module.css'

export default function PageWrapper(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}
