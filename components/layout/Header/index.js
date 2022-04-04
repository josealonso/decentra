import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {

  return (
    <header className={styles.header}>
      <img src={"https://i.imgur.com/nuV2VVm.png"} className={styles.logo_img}></img>
      <Link href={"/"} style={{marginLeft: '1em'}} >
        <h4>Posts</h4>
      </Link>
      <Link href={"/survey"}>
        <h4 style={{marginLeft: '1em'}}>Proposals</h4>
      </Link>
    </header>
  )
}
