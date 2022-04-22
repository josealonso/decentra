import React from 'react'
import CommunityBar from '@components/layout/CommunityBar'
import styles from './styles.module.css'

export default function PageWrapper(props) {
  return (
    <div className={styles.container}>

      <div className={styles.inner_container}>
        {props.children}
      </div>

      <div>
        <CommunityBar />
      </div>
    </div>
  )
}
