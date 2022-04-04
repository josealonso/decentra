import React from 'react'
import { useRouter } from 'next/router'
import ProposalSurvey from '@components/layout/Proposals/ProposalForms/ProposalSurvey'
import './styles.module.css'

export default function survey() {

  const router = useRouter()
  const survey_slug = router.query
  console.log(survey_slug)
  return (
    <div>
      <ProposalSurvey survey_slug={survey_slug.slug}/>
    </div>
  )
}
