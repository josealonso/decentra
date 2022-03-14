import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '../../firebase/useUser'
import styles from './styles.module.css'

export default function Home() {
  const { user, logout } = useUser()

  if (user) {
    return (
      <div className={styles.page_wrapper}>
        <div className={styles.content_card}>
          <div>
            <h3 className={styles.title}>{user.name}</h3>
            <h2 className={styles.title}>{user.email}</h2>
            <hr />
            {user.profilePic ? <image src={user.profilePic} height={100} width={100}></image> : <p>No profile pic</p>}
            <hr />
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button onClick={() => logout()} style={{ width: '100px' }}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else return (
    <div className={styles.page_wrapper}>
      <Link href="/AuthPage" className={styles.login_btn}>Log In!</Link>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { ssrWorking: true } };
}