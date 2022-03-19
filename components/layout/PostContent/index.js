import Link from 'next/link';
import styles from './styles.module.css'
// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  return (
    <div className="card">
      <h1>{post?.title}</h1>
      <span className={styles.small_title}>
        Written by{' '}
        <Link href={`/${post.username}/`}>
          <a  className={styles.small_title}>@{post.username}</a>
        </Link>{' '}
        on {createdAt.toISOString()}
        <p>{post.content}</p>
      </span>
    </div>
  );
}
