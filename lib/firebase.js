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

export async function getUserWithUsername(username) {
  const userRef = firestore.collection('users');
  const query = userRef.where('username', '==', username).limit(1);

  const userDoc = (await query.get()).docs[0];

  return userDoc;
}


export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  }
}

export const auth = firebase.auth();

export const fromMillis = firebase.firestore.Timestamp.fromMillis;

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();