import React from 'react'
import styles from './styles.module.css'

export default function PageWrapper(props) {
  return (
    <div className={styles.container}>

      <div className={styles.inner_container}>
        {props.children}
      </div>

    </div>
  )
}
