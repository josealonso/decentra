import FirebaseAuth from '../../src/components/Auth/FirebaseAuth'
import PageWrapper from '../../src/layout/PageWrapper'
import styles from './styles.module.css'

const Auth = () => {
    return (
        <div className={styles.page_wrapper}>
            <PageWrapper>

            <div className={styles.hero}>
                <div className={styles.auth_holder}>
                    <h2>Sign In</h2>
                    <FirebaseAuth />
                </div>
            </div>
            
            <div className={styles.rest}>

            </div>
            </PageWrapper>   
        </div>
    )
}

export default Auth