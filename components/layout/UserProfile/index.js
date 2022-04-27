import styles from './styles.module.scss'

// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className={styles.profile}>
      <img src={user?.photoURL} className={styles.circularImg} />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || 'Anonymous User'}</h1>
    </div>
  );
}