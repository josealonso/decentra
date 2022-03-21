import React from 'react'
import { auth } from '../../../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../../../lib/context';
import FontIcon from '@components/simple/FontIcon';
import Link from 'next/link'

import styles from './styles.module.css'

export default function Navbar() {

  const {user, username} = useContext(UserContext)

  return (
    <nav className={styles.navbar}>
      <ul className={styles.linkList}>
        <li>
          <Link href="/">
            <button className={styles.btnBlue}>
              <FontIcon image={"https://i.imgur.com/QfxHQsc.png"}/>
              Dashboard
            </button>
          </Link>
        </li>

        {
          user && (
            <>
              <li className={styles.pushLeft}>
                <Link href='/Admin'>
                  <button className={styles.btnBlue}>
                    <FontIcon image={"https://i.imgur.com/CpqUyRb.png"}/>
                    Write Post
                  </button>
                </Link>
              </li>

             
              <li>
                  <Link href={`/${username}`}>
                    <button className={styles.btnBlue}>
                      <FontIcon image={"https://i.imgur.com/9m8zvCV.png"}/>
                      Profile
                      <img style={{height: '5vh'}} src={user.photoURL} className={styles.img}></img>
                    </button>
                  </Link>
              </li>

             
              <li className={styles.pushLeft}>
                <Link href="/">
                  <button className={styles.btnBlue} onClick={() => auth.signOut()}>
                    <FontIcon image={"https://i.imgur.com/OzNYMwj.png"}/>
                    Log Out
                  </button>
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
