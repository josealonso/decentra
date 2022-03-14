// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyCMOjA4qDnoLhiXYMPuQePjWPHKdjtUbhU",

    authDomain: "metrodao-5f654.firebaseapp.com",
  
    projectId: "metrodao-5f654",
  
    storageBucket: "metrodao-5f654.appspot.com",
  
    messagingSenderId: "710630119093",
  
    appId: "1:710630119093:web:7821c65e4774bf6c1ad0fc",
  
    measurementId: "G-Y35DBQY4GQ"
  
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}

const app = initializeApp(clientCredentials);
const db = getFirestore(app);
export { db, initFirebase }