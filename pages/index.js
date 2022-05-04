import React, {useState} from 'react'
import PostFeed from '../components/layout/PostFeed';
import Loader from '../components/simple/Loader';
import { firestore, fromMillis, postToJSON } from '../lib/firebase';
import AuthCheck from '@components/helpers/AuthCheck';
import styles from './styles.module.scss'

const LIMIT = 5;

export async function getServerSideProps(context){
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const posts = (await postsQuery.get()).docs.map(postToJSON)

  return {
    props: {posts},
  }
}

export default function Home(props) {

  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const [feed, setFeed] = useState('');

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;
  
    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);
    
    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false)

    if(newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  }

  const feeds = ['Forum', 'Surveys', 'Rewards', 'Wallet'];

  return (
    <main className={styles.main}>
  

      <div className="card-info">
        <h2>Welcome to Decentra</h2>
        <p>A better way to organise your projects.</p>
        <p>Decentra is the future of social collaboration tools, providing users everything they need to create fully functional projects</p>
      </div>
     
      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

      <Loader show={loading} />

      {postsEnd && 'You have reached the end!'}
    </main>
  );
}
