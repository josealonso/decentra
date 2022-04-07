import React, {useState} from 'react'
import CommunitySurveyContainer from '@components/layout/CommunitySurveyContainer'
import CommunitySurveyDetails from '@components/layout/CommunitySurveyDetails'
import { firestore, surveyToJSON } from '../../lib/firebase'
import styles from './styles.module.scss'
import { getDoc } from 'firebase/firestore'

export async function getServerSideProps(context){

  const ref = firestore.collection('Surveys').doc('communitySurveyResults');
  let surveys = (await ref.get())

  surveys = surveyToJSON(surveys)

  return {
    props: {surveys},
  }
}

export default function Community({surveys}) {

  console.log(surveys)

  const [view, toggleView] = useState(false)


  return (
    <div className={styles.community}>
      { 
        view ? 
        <CommunitySurveyDetails />
      :
        <div className={styles.explain}>
          <div className={styles.survey_control}>
            <h2>Join our survey for a chance to win 500$</h2>
            <button onClick={() => {toggleView(true)}} className={styles.results_btn}>View results</button>
          </div>

          <CommunitySurveyContainer />
        </div>
      }
    </div>
  )
}
