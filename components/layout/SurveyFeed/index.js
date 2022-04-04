import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import styles from './styles.module.scss';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function SurveyFeed({surveys, admin}) {
  return surveys ? surveys.map((survey) => <SurveyItem survey={survey} key={survey.title} admin={admin}/>) : null;
}

function SurveyItem({survey, admin = false}) {

  const [expanded, setExpanded] = React.useState(false);  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{marginTop: '0.5em', width: '95%', marginLeft: '2.5%'}}>
      <Link href={`/`}>
        <CardHeader  
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={survey?.title}
          subheader={survey?.title}
        />
      </Link>
     
      <CardMedia
        component="img"
        height="0"
        image=""
        alt=""
      />
      <CardContent>
        <Link href={`/${survey.username}`}>
          <h4 className={styles.post_title}>By {survey?.username}</h4>
        </Link>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
        <h2>{survey?.title}</h2>

        <h3>How would you identify</h3>
        <h4>{survey?.identity}</h4>

        <h3>Do you know of existing organisations that would want to help with your solution?</h3>
        <h4>{survey?.organisation}</h4>

        <h3>What is the problem that your proposal fixes?</h3>
        <h4>{survey?.problem}</h4>

        <h3>Summarize the solution?</h3>
        <h4>{survey?.summary}</h4>

        <h3>How long would it take?</h3>
        <h4>{survey?.time}</h4>

        <h3>What is the expected budget</h3>
        <h4>{survey?.budget}</h4>

        </CardContent>
      </Collapse>
    </Card>
  );
}