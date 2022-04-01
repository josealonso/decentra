import * as React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function SurveyFeed({surveys, admin}) {
  return surveys ? surveys.map((survey) => <SurveyItem survey={survey} key={survey.title} admin={admin}/>) : null;
}

function SurveyItem({survey, admin = false}) {

  return (
    <div className={styles.survey_container}>
      <h1>{survey.title}</h1>
      <h4>{survey.description}</h4>
      <h4>{survey.summary}</h4>
      <h4>{survey.uid}</h4>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
  )
}