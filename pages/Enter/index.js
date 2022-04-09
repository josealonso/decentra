import { auth, firestore, googleAuthProvider, serverTimestamp } from '../../lib/firebase';
import { increment } from "firebase/firestore";
import { SignInForm, SignUpForm } from '@components/forms/SignInForm';
import { UserContext } from '../../lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';
import { useRouter } from 'next/router'
import debounce from 'lodash.debounce';
import toast from 'react-hot-toast';
import styles from './styles.module.scss'

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main className={styles.container}>
      {user ? !username ? <UsernameForm /> 
      : 
      <div className={styles.survey_container}>
        <SignOutButton />
      </div>  
      : 
      <SignInButton />}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const router = useRouter();

  const [signIn, ToggleSignIn] = useState(false)

  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    router.push(`/`);
  };

  return (
    <>
      {signIn? 
        <>
          <h2 className={styles.header}>Sign Up</h2>
            <SignUpForm />
            <button className={styles.sign_up_btn} onClick={() => {ToggleSignIn(!signIn)}}>
              Or {signIn? 'Sign In' : 'Sign Up'}
            </button>
        </>
        :
        <>
          <h2  className={styles.header}>Sign In</h2>
          <SignInForm />
          <button className={styles.sign_up_btn} onClick={() => {ToggleSignIn(!signIn)}}>
            Or {signIn? 'Sign In' : 'Sign Up'}
          </button>
        </>
      }
      
      
      <button className={styles.google_btn} style={{marginTop: '1em'}} onClick={signInWithGoogle}>
        <img src={'/google.jpg'}  width="30px" /> Sign in with Google
      </button>
    </>
      
  );
}

// Sign out button
function SignOutButton() {
  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.background_img} />
        <h2 className={styles.header}>Welcome to Decentra!</h2>
        <p className={styles.para}>
        hu
        </p>
      </div>
      <button style={{marginTop: '2em'}} className={styles.sign_up_btn} onClick={() => auth.signOut()}>Sign Out</button>
    </>

  )
}

// Username form
function UsernameForm() {
  const [formValue, setFormValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, username } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName, completedSurvey: false, points: increment(10)});
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();

    const awardRef = firestore.collection('users').doc(auth.currentUser.uid).collection('awards').doc('communityBadge');

    const data = {
      received: true,
      joinedAt: serverTimestamp(),
      img: "https://i.imgur.com/bvJUIdL.png",
      title: "Community Member"
    }

    await awardRef.set(data);
    router.push(`/`);
    toast.success('You are now a community member!')
    toast.success('You have gained 10 points and a community member badge!')

  };

  const onChange = (e) => {
    // Force form value typed in form to match correct format
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  //

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log('Firestore read executed!');
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );

  return (
    !username && (
      <>
      <section className={styles.username_container}>
        <h3 className={styles.username_header}>Secure your username</h3>
        <form className={styles.username_form} onSubmit={onSubmit}>
          <input className={styles.username_input} name="username" placeholder="myname" value={formValue} onChange={onChange} />
          <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
          <button type="submit" className={styles.username_btn} disabled={!isValid}>
            Choose
          </button>
        </form>
      </section>

      <div>
      
      </div>
      </>
      
    )
  );
}

function UsernameMessage({ username, isValid, loading }) {
  if (loading) {
    return <p>Checking...</p>;
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>;
  } else if (username && !isValid) {
    return <p className="text-danger">That username is taken!</p>;
  } else {
    return <p></p>;
  }
}
