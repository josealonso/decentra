import * as React from 'react';
import Link from 'next/link'
import { styled } from '@mui/material/styles';

import styles from './styles.module.scss'


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

      <img src="https://miro.medium.com/max/1400/1*0nmEea4SDHU8hY0CZyhvxw.png" alt="blog-preview-cover"/>

      <div className={styles.content_preview}>
        <Link href={`/${post.username}/${post.slug}`}>
          <h3>
            <a>{post.title}</a>
          </h3>
        </Link>

        <Link href={`/${post.username}`}>
          <a>
            <strong>By @{post.username}</strong>
          <span className={styles.count}>💗 {post.heartCount || 0}</span>
          </a>
        </Link>

        <span className={styles.preview}>
          {contentPreview.join(' ')}
        </span>
        
      </div>
      

      {/* If admin view, show extra controls for user */}
      {admin && (
        <>
          <Link href={`/Admin/${post.slug}`}>
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
