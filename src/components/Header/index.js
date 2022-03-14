import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
  return (
    <div className={styles.header_wrapper}>
      <h2 className={styles.main_title}>
        Metrodao
      </h2>

      <div className={styles.nav_links}>
        <Link href="/">
          <button className={styles.content_card}>Home</button>
        </Link>
        <Link href="/AuthPage">
          <button className={styles.content_card}>
            Sign In 
          </button>
        </Link>
      </div>
    </div>
  )

}

