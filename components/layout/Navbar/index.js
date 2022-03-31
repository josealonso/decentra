import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { auth } from '../../../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../../../lib/context';
import FontIcon from '@components/simple/FontIcon';
import Link from 'next/link'
import Paper from '@mui/material/Paper';

import styles from './styles.module.css'

export default function FixedBottomNavigation() {

  const {user, username} = useContext(UserContext)

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref} className={styles.navbar}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
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
                  <button className={styles.btnBlue}>
                    <FontIcon image={"https://i.imgur.com/9m8zvCV.png"}/>
                    Log In
                  </button>
                </Link>
              </li>
            </>
          )
        }
      </ul>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}