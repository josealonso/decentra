import Navbar from '../components/layout/Navbar/index'
import PageWrapper from '@components/layout/PageWrapper';
import '@styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';


function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <>
      <UserContext.Provider value={userData}>
      <Navbar />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Toaster/>
      </UserContext.Provider>
    </>
  );
}

export default MyApp
