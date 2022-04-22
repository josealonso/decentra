import React, {useState} from 'react'
import PostFeed from '@components/layout/PostFeed';
import { firestore, fromMillis, postToJSON, auth } from '@lib/firebase';
import AuthCheck from '@components/helpers/AuthCheck';
import { collection, getFirestore, query, orderBy } from 'firebase/firestore';
import CreateLink from '@components/layout/CreateLink';
import LinkItem from '@components/simple/LinkItem';
import { useCollection } from 'react-firebase-hooks/firestore';
import styles from './styles.module.scss'

const LIMIT = 5

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

export default function index({posts}) {
  return (
    <main className={styles.main}>
      <AuthCheck>
        <div className={styles.main_grid}>
          <CreateLink />
          <LinkList />
          </div>
          <div className={styles.long_block}>
            <h3>Latest</h3>
            <hr />
            <PostFeed posts={posts}/>
        </div> 
      </AuthCheck>
    </main>
  )
}



function LinkList() {
  // const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('posts');
  // const query = ref.orderBy('createdAt');

  const ref = collection(getFirestore(), 'users', auth.currentUser.uid, 'links')
  const linkQuery = query(ref, orderBy('createdAt')) 
  const [querySnapshot] = useCollection(linkQuery);

  
  const links = querySnapshot?.docs.map((doc) => doc.data());
  
  return (
    <>
      {
        links != undefined ?
        <Links links={links} />
        :
        ''
      }
    </>
  );
}

function Links({links, admin}){
  return links ? links.map((link) => <LinkItem link={link} key={link.slug} admin={admin} />) : null;
}