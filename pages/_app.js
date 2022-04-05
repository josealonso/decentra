import Navbar from '../components/layout/Navbar'
import PageWrapper from '@components/layout/PageWrapper';
import Head from 'next/head'
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import CommunitySurveyContainer from '@components/layout/CommunitySurveyContainer';
import { useUserData } from '../lib/hooks';
import Header from '@components/layout/Header';
import { useEffect } from 'react';
import '../theme/global.scss'

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
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Navbar />
          <Header />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        <Toaster />
        {
          userData.SurveyStatus ? 
          ''
          :
          <CommunitySurveyContainer isUser={userData.user} username={userData.username}/>
        }
      </UserContext.Provider>
    </>
  );
}

export default MyApp
