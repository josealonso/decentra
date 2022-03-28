import React from 'react'
import FontIcon from '@components/simple/FontIcon';
import styles from './styles.module.scss'

export default function DashboardNav(props) {
  return (
    <nav className={styles.nav}>
      <button className={styles.btn} onClick={props.setForum}>
        <FontIcon image={"https://i.imgur.com/ESERqgD.png"}/>
        {props.highlight === "Forum" ?
        <p className={styles.highlight}>Forum</p>
        : 
          ''
        }
      </button>

      <button className={styles.btn} onClick={props.setSurveys}>
        <FontIcon image={"https://i.imgur.com/DmydHwO.png"}/>
        {props.highlight === "Surveys" ?
        <p className={styles.highlight}>Surveys</p>
        : 
          ''
        }
      </button>

      <button className={styles.btn} onClick={props.setRewards}>
        <FontIcon image={"https://i.imgur.com/w57IKny.png"}/>
        {props.highlight === "Rewards" ?
        <p className={styles.highlight}>Rewards</p>
        : 
          ''
        }
      </button>

      <button className={styles.btn} onClick={props.setWallet}>
        <FontIcon image={"https://i.imgur.com/ZweiR2k.png"}/>
        {props.highlight === "Wallet" ?
        <p className={styles.highlight}>Wallet</p>
        : 
          ''
        }
      </button>
    </nav>
  )
}
