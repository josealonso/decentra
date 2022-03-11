import FirebaseAuth from '../../components/Auth/FirebaseAuth'
import Link from 'next/link'
import styles from './styles.module.css'

const Auth = () => {
    return (
        <div className={styles.page_wrapper}>
            <div className={styles.auth_holder}>
                <FirebaseAuth />
                <Link href="/mainPage">Go Home</Link>
            </div>
        </div>
    )
}

export default Auth