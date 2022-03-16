import React from 'react'
import styles from './styles.module.css'

export default function UserProfile({user}) {
  return (
    <div className={styles.container}>
      <img src={user.photoURL} className={styles.circularImg} alt={"User Profile"}/>
      <p className={styles.text}>
        <i>@{user.username}</i>  
      </p> 

      <h1 className={styles.text}>
        {user.displayName}
      </h1>
    </div>
  )
}
