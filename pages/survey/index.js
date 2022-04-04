import AuthCheck from "../../components/helpers/AuthCheck";
import { useContext, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import SurveyFeed from '../../components/layout/SurveyFeed'
import { UserContext } from "../../lib/context";
import { useRouter } from 'next/router';
import kebabCase from 'lodash.kebabcase';
import toast from 'react-hot-toast';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
import styles from './styles.module.css'

export default function SurveyPage(props) {
  return (
    <main className={styles.wrapper}>
      <AuthCheck>
        <CreateNewSurvey />
        <SurveyList />
      </AuthCheck>
    </main>
  )
}

function SurveyList() {
  const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('surveyResults');
  
  const query = ref.orderBy('createdAt');
  const [querySnapshot] = useCollection(query);

  const surveys = querySnapshot?.docs.map((doc) => doc.data());
  console.log(surveys)
  return (
    <div className={styles.admin_section}>
      <h1 className={styles.postManage}>Manage your Surveys!</h1>
      <SurveyFeed surveys={surveys} admin/>
    </div>
  )
}

function CreateNewSurvey() {
  const router = useRouter();
  const { username } = useContext(UserContext);
  const [title, setTitle] = useState('');

  const slug = encodeURI(kebabCase(title));

  const isValid = title.length > 3 && title.length < 100;

  const createPost = async (e) => {
    e.preventDefault();

    const uid = auth.currentUser.uid;
    const ref = firestore.collection('users').doc(uid).collection('surveyResults').doc(slug);

    const data = {
      slug: slug,
      uid: uid,
      username,
      published: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      upvotes: 0,
      email: '',
      problem: '',
      identify: '',
      title: slug,
      description: [''],
      summary: '',
      resources: [''],
      bduget: '',
      time: '',
      organisation: false,
      uid: uid,
    }

    await ref.set(data);

    toast.success('Survey response created!')
    router.push(`/survey/${slug}`);
  } 

  return (
    <form onSubmit={createPost} className={styles.createPost}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="My Awesome Post"
        className={styles.input}
      />
      <p className={styles.slug}>
        <strong >
          Slug: 
        </strong>
        {slug}
      </p>
      <button type="submit" disabled={!isValid} className={styles.submit}>
        Create New Proposal
      </button>
    </form>
  )
}