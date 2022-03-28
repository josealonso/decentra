import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@lib/firebase';
import React, { useState } from 'react'
import styles from './styles.module.css'

export function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email, password);
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  const { email, password } = event.target.elements;
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(( userCredential) => {
    console.log('user created');
    console.log(userCredential)
  })
  .catch((error) => {
    alert(error.message)
    console.error(error)
    }); 
    console.log(email.value);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_collection}>
          <label className={styles.form_label}>
            Email
          </label>
          <input type='email' name='email' onChange={(event) => handleChangeEmail(event)} className={styles.form_input}/>
        </div>

        <div className={styles.form_collection}>
          <label className={styles.form_label}>
            password
          </label>
          <input type='password' name='password' onChange={(event) => handleChangePassword(event)} className={styles.form_input}/>
        </div>
        <button className={styles.form_submit}>Sign in</button>
      </form>

      <br></br>
    </div>
  )
}

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email, password);
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  const { email, password } = event.target.elements;
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then(( userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    alert(error.message)
    console.error(error)
    }); 
    console.log(email.value);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_collection}>
          <label className={styles.form_label}>
            Email
          </label>
          <input type='email' name='email' onChange={(event) => handleChangeEmail(event)} className={styles.form_input} />
        </div>

        <div className={styles.form_collection}>
          <label className={styles.form_label}>
            password
          </label>
          <input type='password' name='password' onChange={(event) => handleChangePassword(event)} className={styles.form_input}/>
        </div>
        <button className={styles.form_submit} disabled={email =="" && password ==""}>Sign in</button>
      </form>
      <br></br>
    </div>
  )
}
