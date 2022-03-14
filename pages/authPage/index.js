import FirebaseAuth from '../../src/components/Auth/FirebaseAuth'
import PageWrapper from '../../src/layout/PageWrapper'
import styles from './styles.module.css'

const Auth = () => {
    return (
        <div className={styles.page_wrapper}>
            <PageWrapper>

            <div className={styles.hero}>
                <div className={styles.auth_landing}>

                    <div className={styles.auth_explainer}>

                    </div>

                    <div className={styles.auth_holder}>
                        <h2 className={styles.header_main}>Sign In</h2>
                        <h3 className={styles.header_main2}>Become a part of our community, ensure your voice is <em>heard</em></h3>
                        <FirebaseAuth />
                    </div>
                    
                </div>
            </div>
            
            </PageWrapper>   
        </div>
    )
}

export default Auth