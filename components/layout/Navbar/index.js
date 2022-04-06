import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../../../lib/context';

import styles from './styles.module.scss'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  
  const {username} = useContext(UserContext)

  return (
    <Box className={styles.navbar}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <Link href="/">
          <BottomNavigationAction label="home" icon={<HomeIcon />} />
        </Link>

        <Link href="/Admin">
          <BottomNavigationAction label="proposals" icon={<AddBoxIcon />} />
        </Link>

        <Link href="/ComingSoon">
          <BottomNavigationAction label="balance" icon={<AccountBalanceWalletIcon />} />
        </Link>

        <Link href={`/${username}`}>
          <BottomNavigationAction label="account" icon={<PersonIcon />} />
        </Link>

      </BottomNavigation>
    </Box>
  );
}