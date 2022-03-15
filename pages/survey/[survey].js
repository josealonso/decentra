import React from 'react'
import { useRouter } from 'next/router'
import './styles.module.css'

export default function survey() {

  const router = useRouter()
  const {survey} = router.query

  return (
    <div>
      hi ${survey}
    </div>
  )
}
