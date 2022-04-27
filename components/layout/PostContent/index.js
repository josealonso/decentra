import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.scss'
// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  return (
    <div className={styles.card}>   
      <h1 className={styles.title}>{post?.title}</h1>
      <h3>{post?.subtitle}</h3>
      <ReactMarkdown>{post?.icon}</ReactMarkdown>
      <span className={styles.small_title}>
        Written by{' '}
        <Link href={`/${post.username}/`}>
          <a className={styles.small_title}>{post.username}</a>
        </Link>{' '}
        on {createdAt.toISOString()}
        </span>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
    </div>
  );
}
