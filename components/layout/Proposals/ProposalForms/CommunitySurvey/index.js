import React from 'react'
import TextField from '@mui/material/TextField';
import styles from './styles.module.scss'

export default function CommunitySurvey() {
  return (
    <div className={styles.form_container}>

      <div>

      </div>

      <form>
        <fieldset className={styles.form}>
          <TextField
            required
            className={styles.form_input}
            id="outlined-required"
            label="Required"
            defaultValue="Email Here"
          />

        <TextField
            required
            className={styles.form_input}
            id="outlined-required"
            label="Required"
            defaultValue="Your Zipcode"
          />

          <TextField
            className={styles.form_input}
            id="outlined-required"
            label="Optional"
            defaultValue="Your Instagram"
          />

          <TextField
            required
            className={styles.form_input}
            id="outlined-required"
            label="Required"
            defaultValue="Email Here"
          />

        <TextField
            required
            className={styles.form_input}
            id="outlined-required"
            label="Required"
            defaultValue="Your Zipcode"
          />

          <TextField
            className={styles.form_input}
            id="outlined-required"
            label="Optional"
            defaultValue="Your Instagram"
          />
        </fieldset>
      </form>
    </div>
  )
}
