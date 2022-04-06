import AuthCheck from "../../components/helpers/AuthCheck";
import { useContext, useState } from 'react';
import FeedTab from "@components/layout/FeedTab";
import SurveyFeed from '../../components/layout/SurveyFeed'
import { UserContext } from "../../lib/context";
import { useRouter } from 'next/router';
import kebabCase from 'lodash.kebabcase';
import Loader from "@components/simple/Loader";
import toast from 'react-hot-toast';
import { firestore, auth, serverTimestamp, fromMillis, postToJSON } from '../../lib/firebase';
import styles from './styles.module.css'

const LIMIT = 5;


export async function getServerSideProps(context){
  const surveyQuery = firestore
    .collectionGroup('surveyResults')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const surveys = (await surveyQuery.get()).docs.map(postToJSON)

  return {
    props: {surveys},
  }
}

export default function SurveyPage(props) {
  const [surveys, setSurveys] = useState(props.surveys);
  const [loading, setLoading] = useState(false);
  const [surveysEnd, setSurveysEnd] = useState(false);

  const [feed, setFeed] = useState('');

  const getMoreSurveys = async () => {
    setLoading(true);
    const last = surveys[surveys.length - 1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;
  
    const query = firestore
      .collectionGroup('surveyResults')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);
    
    const newSurveys = (await query.get()).docs.map((doc) => doc.data());

    setSurveys(surveys.concat(newSurveys));
    setLoading(false)

    if(newSurveys.length < LIMIT) {
      setSurveysEnd(true);
    }
  }


  return (
    <main className={styles.wrapper}>
      <AuthCheck>
        <FeedTab path={1}/>
        <CreateNewSurvey />
        <SurveyFeed surveys={surveys}/>
        {!loading && !surveysEnd && <button onClick={getMoreSurveys} className={styles.loadBtn}>Load more</button>} 
    
        <Loader show={loading}/>

        {surveysEnd && "You have reached the end."}
      </AuthCheck>
    </main>
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
      <div>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="My Awesome Survey"
        className={styles.input}
      />
      <p className={styles.slug}>
        <strong >
          Proposal title:  
        </strong>
        {slug}
      </p>
      </div>
      
      <button type="submit" disabled={!isValid} className={styles.submit}>
        Create New Proposal
      </button>
    </form>
  )
}