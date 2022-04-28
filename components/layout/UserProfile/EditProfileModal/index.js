import React, {useState} from 'react'
import TextField from '@components/forms/assets/TextField'
import styles from './styles.module.scss'

const defaultValues = {
  name: '',
  bio: '',
  website: '',
  organization: '',
};

export default function EditPorfileModal() {

  const [values, setValues] = useState(defaultValues)
  
  const { name, bio, website, organization} = values;

  return (
    <div className={styles.profileModal}>

      <div>
        <div />
        <button>Edit</button>

        <img src="" alt=""/>
        <button>Edit</button>
      </div>

      <form className={styles.form}>
        <div>
          <TextField 
            label={"Your Display Name Here"}
            placeholder={"First Last"}
            onChange={(name) => setValues((prev) => ({
              ...prev,
              name
            }))}
            value={name}
          />

          <TextField 
            label={"Your bio here"}
            placeholder={"Introduce yourself"}
            onChange={(bio) => setValues((prev) => ({
              ...prev,
              bio
            }))}
            value={bio}
          />
        </div>

        <div>
          <TextField 
            type={"url"}
            label={"Your website url here"}
            placeholder={"Introduce yourself"}
            onChange={(bio) => setValues((prev) => ({
              ...prev,
              website
            }))}
            value={website}
          />
        </div>
      </form>

    </div>
  )
}
