import React from 'react'
import styles from './styles.module.scss'

export default function About() {
  return (
    <div className={styles.about_card}>
      <h3>Decentra</h3>

      <hr />
      <p>
        Online communities have increasingly become the place, where people spend the majority of their day. There is too much confusion, and a lack of true townhalls combining this space.
      </p>

      <div>
        <span>
          <img src="https://i.imgur.com/VgBTWqn.png" alt="Online" />
          <h5>Members Online</h5>
        </span>

        <span>
          <img src="https://i.imgur.com/g84cmcH.png" alt="Members" className={styles.community}/>
          <h5>Community Members</h5>
        </span>
      </div>
    </div>
  )
}
