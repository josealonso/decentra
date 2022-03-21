import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@lib/firebase';

import React, { useState } from 'react'

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
          </label>
          <input type='email' name='email' onChange={(event) => handleChangeEmail(event)} />
        </div>

        <div>
          <label>
            password
          </label>
          <input type='password' name='password' onChange={(event) => handleChangePassword(event)} />
        </div>
        <button>Sign in</button>
      </form>
      <hr></hr>
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
          </label>
          <input type='email' name='email' onChange={(event) => handleChangeEmail(event)} />
        </div>

        <div>
          <label>
            password
          </label>
          <input type='password' name='password' onChange={(event) => handleChangePassword(event)} />
        </div>
        <button>Sign in</button>
      </form>
      <hr></hr>
      <br></br>
    </div>
  )
}
