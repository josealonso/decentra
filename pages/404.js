import Link from 'next/link';
import styles from './styles.module.scss'

export default function Custom404() {
  return (
    <main style={{paddingTop: '7vh'}} className={styles.wrapper}>
      <img src="https://i.imgur.com/RdDmoIA.png" alt="Metrodao" className={styles.img}/>

      <h1 className={styles.header}>Coming Soon</h1>

      <p className={styles.para}>
        Focused on improving public private relations and helping you find your voice.
      </p>
    
      <Link href="/">
        <button className={styles.return}>Go home</button>
      </Link>
    </main>
  );
}
