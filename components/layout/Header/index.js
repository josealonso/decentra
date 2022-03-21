import React from 'react'
import { useRouter } from 'next/router';
import styles from './styles.module.css'

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      Metrodao
    </header>
  )
}
