import Navbar from '../components/layout/Navbar/index'
import PageWrapper from '@components/layout/PageWrapper';
import '../theme/global.scss';
import { Toaster } from 'react-hot-toast';
import { WalletEthers } from '@components/helpers/ConnectWallet';
import { UserContext } from '../lib/context';
import { useState } from 'react';
import { useUserData } from '../lib/hooks';
import styles from './styles.module.scss'

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  const [web3Active, setWeb3] = useState(false)

  return (
    <>
      <UserContext.Provider value={userData}>
      <Navbar/>

      <button className={styles.special_button} onClick={() => {setWeb3(true)}}><img src="https://cdn-icons-png.flaticon.com/512/3845/3845819.png" alt="Connect-Web3-Wallet"/></button>

      {
        web3Active ? 
        <WalletEthers />
        :
        ''
      }
  
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Toaster/>
      </UserContext.Provider>
    </>
  );
}

export default MyApp
