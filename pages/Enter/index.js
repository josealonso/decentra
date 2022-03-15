import React from 'react'
import { auth, googleAuthProvider } from '../../lib/firebase';
import styles from './styles.module.css'

export default function EnterPage() {

  const user = null;
  const username = null;

  return (
    <main className={styles.container}>
      {
        user ?
          !username ? <userNameForm /> : <signOutButton /> 
          :
          <SignInButton />
      }
    </main>
  )
}

function SignInButton() {
  const signInWithGoogle = async () => {
    try{
      await auth.signInWithPopup(googleAuthProvider);
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <button className={styles.google_btn} onClick={signInWithGoogle}>
      <img className={styles.loginLogo} src={'/google.jpg'} alt={'google sign in'}/>
      Sign In with Google
    </button>
  )
}

function signOutButton() {

  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function userNameForm() {
  return (null);
}