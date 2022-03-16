import React from 'react'
import { auth } from '../../../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../../../lib/context';
import Link from 'next/link'

import styles from './styles.module.css'

export default function Navbar() {

  const {user, username} = useContext(UserContext)

  return (
    <nav className={styles.navbar}>
      <ul className={styles.linkList}>
        <li>
          <Link href="/">
            <button className={styles.btnLogo}>Main</button>
          </Link>
        </li>

        {
          user && (
            <>
              <li className={styles.pushLeft}>
                <Link href="/admin">
                  <button className={styles.btnBlue}>Write Posts</button>
                </Link>
              </li>

              <li className={styles.pushLeft}>
                <Link href="/">
                  <button className={styles.btnBlue} onClick={() => auth.signOut()}>Log Out</button>
                </Link>
              </li>
             
             <li>
                <Link href={`/${username}`}>
                  <img style={{height: '5vh'}} src={user.photoURL}></img>
                </Link>
             </li>
            </>
          )
        }

        {
          !user && (
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
