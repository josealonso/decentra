import React from 'react'
import { useRouter } from 'next/router'
import ProposalSurvey from '@components/layout/Proposals/ProposalForms/ProposalSurvey'
import './styles.module.css'

export default function survey() {

  const router = useRouter()
  const {survey} = router.query

  return (
    <div>
      <ProposalSurvey />
    </div>
  )
}
