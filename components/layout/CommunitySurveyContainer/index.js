import React, {useState} from 'react'
import { FloatingActionButton } from '@components/simple/Button/FloatingAction'
import CommunitySurvey from '@components/forms/CommunitySurvey'
import styles from './styles.module.scss'

export default function CommunitySurveyContainer(props) {

  const [surveyOpen, setSurveyOpen] = useState(false)
  const [surveyResults, toggleResults] = useState(false)

  return (
    <div className={styles.container}>
      
      { 
      props.isUser && props.username ?
      <button onClick={async() => {await setSurveyOpen(!surveyOpen)}}>
        <FloatingActionButton />
      </button>
      :
      ''
      }

      {
        surveyOpen && surveyResults ? 
        '' 
        : 
        ''
      }

      {
        surveyOpen && !surveyResults ? 
          <div className={styles.survey_container}>
            <CommunitySurvey />
          </div>
        : 
        ''
      }
    </div>
  )
}

