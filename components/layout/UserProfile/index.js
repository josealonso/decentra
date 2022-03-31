import React from 'react'
import Header from '../Header';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './styles.module.scss'

export default function UserProfile({user}) {

  return (
    <div className={styles.container}>
      <Header />

      <CardHeader
        className={styles.heading}
        avatar={
          <Avatar aria-label="recipe"   sx={{ width: 100, height: 100 }} src={user.photoURL} alt={user.displayName}> 
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.username}
        subheader={user.displayName}
      />

      <div className={styles.badge_container}>

        <div className={styles.scrollable}>
          <div className={styles.badgeBlock}>
            <h3>
              Community Role
            </h3>
            <h5>
              Badge example
            </h5>
          </div>
          <div className={styles.badgeBlock}>
            <h3>
              Community Role
            </h3>
            <h5>
              Badge example
            </h5>
          </div>

          <div className={styles.badgeBlock}>
            <h3>
              Community Role
            </h3>
            <h5>
              Badge example
            </h5>
          </div>
          <div className={styles.badgeBlock}>
            <h3>
              Community Role
            </h3>
            <h5>
              Badge example
            </h5>
          </div>
        </div>
        
      </div>
    </div>
  )
}
