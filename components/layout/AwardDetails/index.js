import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss'

export default function AwardDetails(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={props.img}
        alt="Reward"
        className={styles.award}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={styles.head}>
          {props.head}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.para}>
          {props.para}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={styles.details}>Earn {props.points} points</div>
        <div className={styles.details}>Earn {props.award} award</div>
      </CardActions>
    </Card>
  );
}