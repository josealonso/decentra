import Navbar from '../components/layout/Navbar/index'
import PageWrapper from '@components/layout/PageWrapper';
import '../theme/global.scss';
import { Toaster } from 'react-hot-toast';
import { WalletEthers } from '@components/helpers/ConnectWallet';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';


function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <>
      <UserContext.Provider value={userData}>
      <Navbar/>
      <WalletEthers />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Toaster/>
      </UserContext.Provider>
    </>
  );
}

export default MyApp
