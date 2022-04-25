import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import { signOut } from 'firebase/auth';

import styles from './styles.module.scss'

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOutNow = () => {
    signOut(auth);
    router.reload();
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        {/* user is signed-in and has username */}
        {username && (
          <div className={styles.links}>
            <li className={styles.li}>
              <Link href="/">
                <div className={styles.logo} />
              </Link>
            </li>
            <div className={styles.seperator}/>
           <ul className={styles.ul_universal}>
            <li className={styles.li_last}>
              <Link href={`/${username}`}>
                <img src={`${user?.photoURL}` || ''} alt={`${username}` || ''}></img>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/Main">
                <button className={styles.link_btn}>
                  <img src="https://i.imgur.com/uWbklNq.png" alt="Home"/>
                </button>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/Admin">
                <button className={styles.link_btn}>
                  <img src="https://i.imgur.com/Y2V8lSk.png" alt="Create"></img>
                </button>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <button className={styles.link_btn}>
                  <img src="https://i.imgur.com/6mFM695.png" alt="Forum"/>
                </button>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/404">
                <button className={styles.link_btn}>
                  <img src="https://i.imgur.com/IiSpU9I.png" alt="resources" />
                </button>
              </Link>
            </li>
           </ul>
            <div className={styles.seperator}/>
           <ul className={styles.ul_decentra_community}> 
           <li className={styles.li}>
              <Link href="/decentra">
                <button className={styles.link_btn}>
                  <img src="https://i.imgur.com/YeqM8du.png" alt="decentra" />
                </button>
              </Link>
            </li>
           </ul>
           <ul className={styles.ul_joined_communities}> 
           </ul>
           <ul className={styles.ul_actions}> 
            <li className={styles.li}>
              <Link href="/404">
                <button className={styles.link_btn}>
                  <img src="https://i.ibb.co/5rWyV5p/sahdasdjhasj.png" alt="createcommunity" />
                </button>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/404">
                <button className={styles.link_btn}>
                  <img src="https://i.ibb.co/37sVsBX/disco.png" alt="discover" />
                </button>
              </Link>
            </li>
           </ul> 
            <li className={styles.li}>
              <button onClick={signOutNow} className={styles.logout}>Log Out</button>
            </li>
          </div>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li className={styles.li_profile}>
            <Link href="/Enter">
              <button>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
