import Navbar from '../components/layout/Navbar'
import PageWrapper from '@components/layout/PageWrapper';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp
