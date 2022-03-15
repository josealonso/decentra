import React from 'react'
import Loader from '../components/simple/Loader'
import Link from 'next/link'
import toast from 'react-hot-toast'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username: 'sherif'},
      }}> 
      Sherif's Profile
      </Link>

      <button className={styles.toast_btn} onClick={() => toast.success('Hello!')}>
        Toast me
      </button>

      <Loader show />
    </div>
  )
}
