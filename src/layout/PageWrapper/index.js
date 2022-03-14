import React from 'react';
import Header from '../../components/Header';
import styles from './styles.module.css';

export default function PageWrapper(props) {
  return (
    <div className={styles.page_wrapper}>
      <Header/>
      {props.children}
    </div>
  )
}
