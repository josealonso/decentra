import styles from './styles.module.css';
import AuthCheck from '../../components/helpers/AuthCheck';

import ImageUploader from '../../components/layout/ImageUploader';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { useForm } from 'react-hook-form'; 

import Link from 'next/link';
import toast from 'react-hot-toast';

export default function AdminPostEdit(props) {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  );
}

function PostManager() {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore.collection('users').doc(auth.currentUser.uid).collection('posts').doc(slug);
  const [post] = useDocumentDataOnce(postRef);

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.slug}>ID: {post.slug}</p>

            <PostForm postRef={postRef} defaultValues={post} preview={preview} />
          </section>

          <aside>
          <h3>Tools</h3>
            <button className={styles.greenBtn} onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button className={styles.greenBtn}>Live view</button>
            </Link>
          </aside>
        </>
      )}
    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {

  const { register, handleSubmit, reset, watch, formState } = useForm({ defaultValues, mode: 'onChange' });

  const { isValid, isDirty } = formState;

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success('Post updated successfully!')
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
        <ReactMarkdown>{watch('content')}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
  
      <ImageUploader />

        <textarea  className={styles.text_area} {...register(
          "content", {
            required: "content is required",
            maxLength: {
              value: 20000,
              message: 'content is too long'
            },
            minLength: {
              value: 10,
              message: 'content is too short'
            }
          })}></textarea>

          <fieldset className={styles.field}>
            <input className={styles.checkbox} name="published" type="checkbox" {...register("published")} />
            <label >Published</label>
          </fieldset>

        <button className={styles.greenBtn} type="submit" disabled={!isDirty || !isValid}>
          Save Changes
        </button>
      </div>
    </form>
  )
}