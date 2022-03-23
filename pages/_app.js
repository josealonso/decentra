import Navbar from '../components/layout/Navbar'
import PageWrapper from '@components/layout/PageWrapper';
import { Toaster } from 'react-hot-toast';
import Header from '@components/layout/Header';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <>
      <UserContext.Provider value={userData}>
        <Header />
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
