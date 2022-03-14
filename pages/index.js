import React, {useState } from 'react'
import { firestoreAutoId } from '../src/utils/generateRandomID';
import PageWrapper from '../src/layout/PageWrapper'
import {db} from '../firebase/initfirebase'
import { setDoc, doc } from "firebase/firestore"; 
import LogoImg from '../src/components/LogoImg'
import styles from './styles.module.css'

export default function () {

  const [popUp, togglePopUp] = useState(false)

  const [newEmail, setEmail] = useState('')

  return (
    <PageWrapper>
      <div className={styles.hero}>
      <LogoImg />
      </div>

      <div className={styles.cta}>

        {
          popUp ? 
          <div>
            You have been successfully added to the waiting list!
          </div>
          :
          <div className={styles.cta}>

          <h2 className={styles.main_title}>Be The Change You Want To See</h2>
          <h4 className={styles.main_title2}>A Decentralized Solution For Public-Private Relations</h4>

          <input 
            className={styles.input_field} type={'email'}
            placeholder={'Example@Email.com'} 
            onChange={(e) => {setEmail(e.target.value)}} 
          />

          <button className={styles.link_btn} onClick={async () => {
          let id = await firestoreAutoId()
          await setDoc(doc(db, "waitingList", id), {
            email: newEmail,
            });
            
            togglePopUp(true)
          }}>
            Join The Waiting List
          </button>

          <a className={styles.link_btn} href={"https://metrodao.us/"} target={"_blank"}>
            Read More
          </a>
              
          </div>
        }
        
      </div>

      <div className={styles.sponsor}>
        {
       
        }
      </div>
    </PageWrapper>
  )
}

