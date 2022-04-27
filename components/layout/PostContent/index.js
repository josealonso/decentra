import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.scss'
// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  return (
    <div className={styles.card}>
      <div className={styles.kicker}
      <a>Home</a> / <a>Blog</a> / <a>{post?.title}</a>
      </div>
      <h1 className={styles.title}>{post?.title}</h1>
      <span className={styles.small_title}>
        Written by{' '}
        <Link href={`/${post.username}/`}>
          <a  className={styles.small_title}>{post.username}</a>
        </Link>{' '}
        on {createdAt.toISOString()}
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </span>
    </div>
  );
}
