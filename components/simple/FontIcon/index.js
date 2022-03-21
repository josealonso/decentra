import React from 'react'
import styles from './styles.module.css'

export default function FontIcon(props) {
  return (
    <div style={{backgroundImage: `url('${props.image}')` }} className={styles.fontIcon}>
      
    </div>
  )
}
