import PostFeed from '@components/layout/PostFeed';
import { firestore, fromMillis, postToJSON } from '@lib/firebase';
import CommunityBar from '@components/layout/CommunityBar'
import AuthCheck from '@components/helpers/AuthCheck';
import { LinkList } from '@components/layout/LinkList';
import CreateLink from '@components/layout/CreateLink';
import React, { useContext } from 'react';
import styles from './styles.module.scss'
import WalletContext from '@components/ConnectWallet/ConnectWallet';

const LIMIT = 5

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const posts = (await postsQuery.get()).docs.map(postToJSON)
  const walletState = useContext(WalletContext);
  return {
    props: { posts },
  }
}

export default function index({ posts }) {
  return (
    <main className={styles.main}>
      <div>
        Testing the WalletContext......
        <p>
          The wallet is {walletState.connected}
        </p>
      </div>
      <div className={styles.left_main}>
        <AuthCheck>
          <div className={styles.main_grid}>
            <LinkList />
            <CreateLink />
          </div>
          <PostFeed posts={posts} />
        </AuthCheck>
      </div>
      <CommunityBar />
    </main>
  )
}

