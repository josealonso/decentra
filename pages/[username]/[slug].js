import React from 'react'
import Link from 'next/link'
import AuthCheck from '../../components/helpers/AuthCheck'
import Heart from '../../components/layout/HeartButton'
import PostContent from '../../components/layout/PostContent'
import {getUserWithUsername, firestore, postToJSON } from '../../lib/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import styles from './styles.module.css'


export async function getStaticProps({ params }) {
  const {username,slug} = params;
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  if(userDoc){
    const postRef = userDoc.ref.collection('posts').doc(slug);
    post = postToJSON(await postRef.get());
  
    path = postRef.path;
  }

  return {
    props: {post, path},
    revalidate: 5000,
  }
}

export async function getStaticPaths() {

  const snapshot = await firestore.collectionGroup('posts').get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();

    return {
      params: {username, slug},
    };
  })

  return {
    paths,
    fallback: true,
  }
}

export default function Post(props) {
  const postRef = firestore.doc(props.path);
  const [realtimePost] = useDocumentData(postRef);

  const post = realtimePost || props.post;

  return (
    <main className={styles.container}>

      <section>
        <PostContent post={post} />
      </section>

      <aside className="card">
        <p>
          <strong>{post.heartCount || 0} 🤍</strong>
        </p>

        <AuthCheck
          fallback={
            <Link href={"/Enter"}>
              <button>Sign Up To Heart</button>
            </Link>
          }
        >
          <Heart postRef={postRef}/>
        </AuthCheck>
      </aside>
    </main>
  );
}
