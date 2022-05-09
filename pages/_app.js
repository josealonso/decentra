import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Navbar from '../components/layout/Navbar/index'
import PageWrapper from '@components/layout/PageWrapper';
import '../theme/global.scss';
import { Toaster } from 'react-hot-toast';
import { WalletEthers } from '@components/helpers/ConnectWallet';
import { UserContext, WalletContext } from '../lib/context';
import { useState } from 'react';
import { useUserData } from '../lib/hooks';
import styles from './styles.module.scss'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  // const userData = useUserData();
  // const [web3Active, setWeb3] = useState(false)

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Navbar />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Toaster />
    </ThirdwebProvider >
  );
}

export default MyApp
