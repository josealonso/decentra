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
           <div className={styles.logo-section}>
            <li className={styles.li}>
              <Link href="/">
                <div className={styles.logo} />
              </Link>
            </li>
           </div>
            <div className={styles.seperator}/>
           <div className={styles.general-section}>
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
           </div> 
            <div className={styles.seperator}/>
           <div className={styles.communities-section}> 
            <div className={styles.communities-section-quicklink}
            <li className={styles.li}>
              <Link href="/404">
                <button className={styles.link_btn}>
                  <img src="https://i.imgur.com/YeqM8du.png" alt="decentra" />
                </button>
              </Link>
            </li>
            </div>
            <div className={styles.communities-section-actions}
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
            </div>
           </div> 
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
