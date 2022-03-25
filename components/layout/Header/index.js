import React from 'react'
import styles from './styles.module.css'

export default function Header() {

  return (
    <header className={styles.header}>
      <img src={"https://i.imgur.com/nuV2VVm.png"} className={styles.logo_img}></img>
      Metrodao
    </header>
  )
}
