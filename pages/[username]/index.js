import React from 'react'
import Metatags from '../../components/helpers/metatags'
import UserProfile from '../../components/layout/UserProfile'
import PostFeed from '../../components/layout/PostFeed'
import { getUserWithUsername, postToJSON } from '../../lib/firebase'
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

  if(userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);

    posts = (await postsQuery.get()).docs.map(postToJSON);
    console.log('hi',posts)
  }
  
  return {
    props: {user, posts},
  }
}

export default function UserProfilePage({ user, posts}) {
  return (
    <main className={styles.container}>
      <Metatags title={`${user.username}'s page`}/>
      <UserProfile user={user}/>
      <PostFeed posts={posts}/>
    </main>
  )
}
