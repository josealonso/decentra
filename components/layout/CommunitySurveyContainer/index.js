import React, {useState} from 'react'
import CommunitySurvey from '@components/forms/CommunitySurvey'
import EditIcon from '@mui/icons-material/Edit';
import AwardDetails from '../AwardDetails';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.scss'

const communityPara = "What is the biggest problem in your community? You are the expert in your community. What is the issue that troubles you most? What problem exist, that you believe can be solved with more government or corporate investment?  Use this survey to identify where your local leaders can spend money, to improve your quality of life. Visit METRODAO.us for more information."

export default function CommunitySurveyContainer(props) {

  const [surveyOpen, setSurveyOpen] = useState(false)
  const [surveyResults, toggleResults] = useState(false)

  return (
    <div className={styles.container}>
      
      { 
      props.isUser && props.username ?
      <div onClick={async() => {await setSurveyOpen(!surveyOpen)}} className={styles.community_survey_wrap}>
        <h4 className={styles.announcement}>Complete our community survey for a chance to win 500$</h4>
        {
          surveyOpen ?  <button className={styles.btn}><CloseIcon className={styles.icon}/></button> : <button className={styles.btn}> <EditIcon className={styles.icon}/> </button>
        }
        
      </div>
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
            <AwardDetails 
              head={"Community Survey"} 
              para={communityPara}
              img={'https://i.imgur.com/S9SFd01.png'}
              points={'10'}
              award={'Thinker'}
            />
            <CommunitySurvey />
          </div>
        : 
        ''
      }
    </div>
  )
}

