import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EditPorfileModal from './EditProfileModal';
import { UserContext } from "../../../lib/context";
import styles from './styles.module.scss'

// UI component for user profile
export default function UserProfile({ user }) {
  const { username } = useContext(UserContext);
  const router = useRouter();
  const admin = router.query;

  const [editor, setEditor] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  useEffect(() => {
    if(admin.username === username){
      setEditor(true)
    }
  }, [])

  return (
    <div className={styles.profile}>
      <div className={styles.coverPhoto} />
      <img src={user?.photoURL} className={styles.circularImg} />


      <div className={styles.profileGrid}>
        <main>
          <h1>{user.displayName || 'Anonymous User'}</h1>
          <p>
            <i>@{user.username}</i>
          </p>
          <br />
          <p>
            My Name is x, I am y i went to school in this place, here there.
            My Name is x, I am y i went to school in this place, here there.
            My Name is x, I am y i went to school in this place, here there.
            My Name is x, I am y i went to school in this place, here there.
          </p>
        </main>

        <aside>
          <ul>
            <li>
              <a href={"https://www.google.com"} target={"_blank"} rel={"nonreferrer"}><h4>Work 1 here</h4></a>
            </li>
            <li>
              <a href={"https://www.google.com"} target={"_blank"} rel={"nonreferrer"}><h4>Work 1 here</h4></a>
            </li>
            <li>
              <a href={"https://www.google.com"} target={"_blank"} rel={"nonreferrer"}><h4>Work 1 here</h4></a>
            </li>
            <li>
              <a href={"https://www.google.com"} target={"_blank"} rel={"nonreferrer"}><h4>Work 1 here</h4></a>
            </li>
          </ul>  
        </aside>
      </div>
      
      <div className={styles.toolbar}>
        <button>Share</button>
        <button>Connect</button>
        <button>More</button>

        {
          editor ? <button>Edit</button> : ''
        }
      </div>

      {
        editOpen ? 
        <EditPorfileModal />
        :
        ''
      }
    </div>
  );
}