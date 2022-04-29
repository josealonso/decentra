import React, {useState} from 'react'
import Metatags from '../../components/helpers/metatags'
import UserProfile from '../../components/layout/UserProfile'
import PostFeed from '../../components/layout/PostFeed'
import { getUserWithUsername, postToJSON, awardsToJSON } from '../../lib/firebase'
import AuthCheck from '@components/helpers/AuthCheck';
import styles from './styles.module.scss'

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

  if(userDoc) {
    console.log('working', userDoc)
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);

    posts = (await postsQuery.get()).docs.map(postToJSON);
  }  
  
  return {
    props: {user, posts},
  }
}



export default function UserProfilePage({ user, posts}) {
  return (
    <AuthCheck>
       <main className={styles.main}>
        <Metatags title={user.username} description={`${user.username}'s public profile`} />
        <UserProfile user={user} />
        <PostFeed posts={posts} />
      </main>
    </AuthCheck> 
  )
}
