import React from 'react'

import Link from 'next/link'

import styles from './styles.module.css'

export default function Navbar() {

  const user = null;
  const username = null;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.linkList}>
        <li>
          <Link href="/">
            <button className={styles.btnLogo}>Main</button>
          </Link>
        </li>

        {
          username && (
            <>
              <li className={styles.pushLeft}>
                <Link href="/admin">
                  <button className={styles.btnBlue}>Write Posts</button>
                </Link>
              </li>
             
             <li>
                <Link href={`/${username}`}>
                  <img src={user?.photoURL}></img>
                </Link>
             </li>
            </>
          )
        }

        {
          !username && (
            <>
              <li>
                <Link href={`/Enter`}>
                  <button className={styles.btnBlue}>Log In</button>
                </Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  )
}
