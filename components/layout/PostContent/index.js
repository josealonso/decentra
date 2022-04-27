import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.scss'
// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  return (
    <div className={styles.card}>   
      <h1 className={styles.title}>{post?.title}</h1>
      <h3 className={styles.subtitle}>{post?.subtitle}</h3>
      <div className={styles.small_title}>
        <div className={styles.userprofilepicture}><img src="https://i.ibb.co/8KyXHCk/k-LRh4bm-Y-400x400.jpg"></img>
   </div>
      <div>
        <Link href={`/${post.username}/`}>
          <a className={styles.small_title}>{post.username}</a>
        </Link>
        <div className={styles.publicationdate}>{createdAt.toISOString()}</div>
      </div>
</div>
      <ReactMarkdown>{post?.icon}</ReactMarkdown>
      <div className={styles.postcontent}>
      <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
