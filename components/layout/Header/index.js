import React from 'react'
import styles from './styles.module.scss'

export default function Header() {

  return (
    <header className={styles.header}>
      <img src={"https://i.imgur.com/nuV2VVm.png"} className={styles.logo_img}></img>
    </header>
  )
}
