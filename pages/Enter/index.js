import { auth, firestore, googleAuthProvider, serverTimestamp } from '../../lib/firebase';
import { SignInForm, SignUpForm } from '@components/forms/SignInForm';
import { UserContext } from '../../lib/context';
import CommunitySurvey from '@components/forms/CommunitySurvey';
import { useEffect, useState, useCallback, useContext } from 'react';
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

  const [signIn, ToggleSignIn] = useState(false)

  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
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
        <h2 className={styles.header}>Welcome to Metrodao!</h2>
        <p className={styles.para}>
          Over the next few months we will be building a platform to elevate public private relations.
          <br></br>
          <br></br>
          Our goal is simple, we want everyone to get a chance at being heard. 
          And to celebrate your opinions we are offering 1 of our community members <em><b>500$ to for completing the survey</b></em>
          <br></br>
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

  const { user, username } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName, completedSurvey: false });
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

    toast.success('You are now a community member!')
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
          <button type="submit" className={styles.username_btn} disabled={!isValid}>
            Choose
          </button>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>

      <div>
      <div className={styles.announcement}>
        <div className={styles.background_img} />
        <h2 className={styles.header}>Welcome to Metrodao!</h2>
        <p className={styles.para}>
          Over the next few months we will be building a platform to elevate public private relations.
          <br></br>
          <br></br>
          Our goal is simple, we want everyone to get a chance at being heard. 
          And to celebrate your opinions we are offering 1 of our community members <em><b>500$ to for completing the survey</b></em>
          <br></br>
        </p>
      </div>
      
      <iframe className={styles.form} src="https://docs.google.com/forms/d/e/1FAIpQLSeD8uGZ7MiyZubM1WeYb82m1TaHrXPtBjl1GwCuRQ83g7FZXQ/viewform?embedded=true" width="100%" height="100%">Loading…</iframe>
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
