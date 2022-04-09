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

  const contentPreview = post?.content.trim().split(/\s+/g).map((word, i) => {
    let preview = [];
    if(i < 30 && word.length < 15){
      preview.push(word)
    }
    return preview
  })
  
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className={styles.card}>
    <Link href={`/${post.username}`}>
      <a>
        <strong>By @{post.username}</strong>
      </a>
    </Link>

    <Link href={`/${post.username}/${post.slug}`}>
      <h2>
        <a>{post.title}</a>
      </h2>
    </Link>

    <footer>
      <span>
        {wordCount} words. {minutesToRead} min read
      </span>
      <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
    </footer>

    {/* If admin view, show extra controls for user */}
    {admin && (
      <>
        <Link href={`/admin/${post.slug}`}>
          <h3>
            <button className="btn-blue">Edit</button>
          </h3>
        </Link>

        {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
      </>
    )}
  </div>
  );
}