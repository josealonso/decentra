import React from 'react'
import Metatags from '../../components/helpers/metatags'
import UserProfile from '../../components/layout/UserProfile'
import PostFeed from '../../components/layout/PostFeed'
import AuthCheck from '@components/helpers/AuthCheck'
import { useCollection } from 'react-firebase-hooks/firestore';
import { getUserWithUsername, postToJSON, awardsToJSON, firestore, auth } from '../../lib/firebase'
import styles from './styles.module.css'

export async function getServerSideProps({query}){

  const {username} = query;

  const userDoc = await getUserWithUsername(username)

  if(!userDoc){
    return {
      notFound: true,
    }
  }

  let user = null;
  let posts = null;
  let awards = null;

  if(userDoc) {
    console.log('working', userDoc)
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);

    posts = (await postsQuery.get()).docs.map(postToJSON);

    const awardsQuery = userDoc.ref
      .collection('awards')
    awards = (await awardsQuery.get()).docs.map(awardsToJSON);
  }  
  
  return {
    props: {user, posts, awards},
  }
}



export default function UserProfilePage({ user, posts, awards}) {
  return (
    <main className={styles.container}>
      <Metatags title={`${user.username}'s page`}/>
      <UserProfile user={user} awards={awards}/>
      <div className={styles.posts}>
        <PostFeed posts={posts}/>
      </div>
      <div className={styles.posts}>
        
      </div>
    </main>
  )
}
