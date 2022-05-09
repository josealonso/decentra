import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import React, { useState } from 'react'
import PostFeed from '../components/layout/PostFeed';
import Loader from '../components/simple/Loader';
import { firestore, fromMillis, postToJSON } from '../lib/firebase';
import AuthCheck from '@components/helpers/AuthCheck';
import styles from './styles.module.scss'

const LIMIT = 5;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const posts = (await postsQuery.get()).docs.map(postToJSON)

  return {
    props: { posts },
  }
}

export default function Home(props) {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

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

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  }

  const feeds = ['Forum', 'Surveys', 'Rewards', 'Wallet'];

  return (
    <main className={styles.main}>


      <div className="card card-info">
        <h2>Welcome to Decentra</h2>
        <p>A better way to organise your projects.</p>
        <p>Decentra is the future of social collaboration tools, providing users everything they need to create fully functional projects</p>
      </div>

      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

      <Loader show={loading} />

      {postsEnd && 'You have reached the end!'}

      <div>
        {address ? (
          <>
            <button onClick={disconnectWallet}>Disconnect Wallet</button>
            <p>Your address: {address}</p>
          </>
        ) : (
          // <button onClick={connectWithMetamask}>Connect with Metamask</button>
          <button className={styles.special_button} onClick={connectWithMetamask}><img src="https://i.ibb.co/FX9hrjH/3845819.png" alt="connect-web3-wallet" /></button>
        )}
      </div>

    </main>
  );
}