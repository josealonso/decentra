import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCMOjA4qDnoLhiXYMPuQePjWPHKdjtUbhU",
  authDomain: "metrodao-5f654.firebaseapp.com",
  projectId: "metrodao-5f654",
  storageBucket: "metrodao-5f654.appspot.com",
  messagingSenderId: "710630119093",
  appId: "1:710630119093:web:7821c65e4774bf6c1ad0fc",
  measurementId: "G-Y35DBQY4GQ"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();