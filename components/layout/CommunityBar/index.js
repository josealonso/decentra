import React from 'react'
import About from '@components/simple/CommunityBar/About'
import styles from './styles.module.scss'



export default function CommunityBar() {
  return (
    <div className={styles.bar}>
      <About />
    </div>
  )
}
