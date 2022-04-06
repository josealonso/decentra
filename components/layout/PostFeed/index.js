import * as React from 'react';
import Link from 'next/link'
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
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.scss'

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

export default function PostFeed({posts, admin}) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin}/>) : null;
}

function PostItem({post, admin = false}) {
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const [expanded, setExpanded] = React.useState(false);

  const contentPreview = post?.content.trim().split(/\s+/g).map((word, i) => {
    let preview = [];
    if(i < 30 && word.length < 15){
      preview.push(word)
    }
    return preview
  })
  
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{marginTop: '0.5em', width: '95%', marginLeft: '2.5%', border: '1px solid lightgray', backgroundColor: '#DCF7FF'}}>
      <Link href={`/${post.username}/${post.slug}`}>
        <CardHeader  
          avatar={
            <Avatar aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post?.title}
          subheader={minutesToRead + ' Minutes to read'}
        />
      </Link>
     
      <CardMedia
        component="img"
        height="0"
        image=""
        alt=""
      />
      <CardContent>
        <Link href={`/${post.username}`}>
          <h4 className={styles.post_title}>By {post?.username}</h4>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {contentPreview.join(' ')}...
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
          <ReactMarkdown paragraph>
            {post?.content}
          </ReactMarkdown>
        </CardContent>
      </Collapse>
    </Card>
  );
}