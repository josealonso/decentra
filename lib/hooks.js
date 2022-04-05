import {auth, firestore} from './firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [SurveyStatus, setSurveyStatus] = useState(null)

  useEffect(() => {
    let unsubscribe;

    if(user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc)=> {
        setUsername(doc.data()?.username);
        setSurveyStatus(doc.data()?.completedSurvey)
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;

  }, [user]);

  return { user, username, SurveyStatus };
}