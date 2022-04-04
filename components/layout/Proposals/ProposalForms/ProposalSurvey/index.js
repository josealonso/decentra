import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { firestore, auth, serverTimestamp } from '@lib/firebase';
import FormLabel from '@mui/material/FormLabel';
import toast from 'react-hot-toast';
import styles from './styles.module.scss'

export default function ProposalSurvey(props) { 
  const [ email, setEmail ] = useState('')
  const [ problem, setProblem ] = useState('')
  const [ identify, setIdentify ] = useState('')
  const [ title, setTitile ] = useState('')
  const [ description, setDescription ] = useState([''])
  const [ summary, setSummary ] = useState('')
  const [ resources, setResources ] = useState([''])
  const [ budget, setBudget ] = useState('')
  const [ time, setTime ] = useState('')
  const [ organisation, setOrganisation ] = useState('')

  const updateSurveyResults = async () => {
    
    const uid = auth.currentUser.uid;
    const surveyRef = firestore.collection('users').doc(uid).collection('surveyResults').doc(props.survey_slug);
    
    await surveyRef.update({
      published: true,
      updatedAt: serverTimestamp(),
      email: email,
      problem: problem,
      identify: identify,
      title: title,
      description: description,
      summary: summary,
      resources: resources,
      bduget: budget,
      time: time,
      organisation: organisation,
      uid: uid,
    });

    toast.success('Survey answered successfully!')
  };

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
            onChange={async(e) => {
              await setEmail(e.target.value)
            }}
          />
             
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>The community problem that I am solving for is</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={async(e) => {
                await setProblem(e.target.value)
              }}
            >
              <FormControlLabel style={{marginTop: '2em'}} value="Violent crimes (gun crimes, armed robberies, violence against women and/or children)" control={<Radio />} label="Violent crimes (gun crimes, armed robberies, violence against women and/or children)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Non-violent crimes (thefts, vandalism)" control={<Radio />} label="Non-violent crimes (thefts, vandalism)" />
              <FormControlLabel style={{marginTop: '1em'}} value="OtherTrash + pests (collection and rodent control)" control={<Radio />} label="OtherTrash + pests (collection and rodent control)" />
              <FormControlLabel style={{marginTop: '2em'}} value="Education (poor quality schools)" control={<Radio />} label="Education (poor quality schools)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Affordable housing (lack of quality and affordable places to live)" control={<Radio />} label="Affordable housing (lack of quality and affordable places to live)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Drugs (addiction and/or selling)" control={<Radio />} label="Drugs (addiction and/or selling)" />
              <FormControlLabel style={{marginTop: '2em'}} value="Transportation (accessible & affordable options to move throughout the region)" control={<Radio />} label="Transportation (accessible & affordable options to move throughout the region)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Neighbor relations (racism, bigotry, social disturbances)" control={<Radio />} label="Neighbor relations (racism, bigotry, social disturbances)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Homelessness / Poverty" control={<Radio />} label="Homelessness / Poverty" />
              <FormControlLabel style={{marginTop: '1em'}} value="Job accessibility and/or training" control={<Radio />} label="Job accessibility and/or training" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>I identify as a(n)</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={async(e) => {
                await setIdentify(e.target.value)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="Individual Leader / Community Member (solo problem solver)" control={<Radio />} label="Individual Leader / Community Member (solo problem solver)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Group of Leaders / Community Members (non-registered team)" control={<Radio />} label="Group of Leaders / Community Members (non-registered team)" />
              <FormControlLabel style={{marginTop: '1em'}} value="Registered Non-profit organization leader / representative" control={<Radio />} label="Registered Non-profit organization leader / representative" />
              <FormControlLabel style={{marginTop: '1em'}} value="Registered private company leader / representative" control={<Radio />} label="Registered private company leader / representative" />
            </RadioGroup>
          </FormControl>


          {/* Title */}

          <TextField
            required="false"
            className={styles.form_input}
            id="outlined-required"
            label="Optional"
            defaultValue="Title of project"
            onChange={async(e) => {
              await setTitile(e.target.value)
            }}
          />

          {/* Description */}

          <FormGroup  className={styles.form_group}>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em', marginBottom: '1.5em'}}> Which description best represents your idea/solution? (select all that apply) </FormLabel>
            <FormControlLabel 
              onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              control={<Checkbox value={"Skills teaching program (classes, workshops, training, apprenticeship, work opportunities)"} />} 
              label="Skills teaching program (classes, workshops, training, apprenticeship, work opportunities)" />
            <FormControlLabel 
               onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              control={<Checkbox value={"Resource program (food bank, clothing drives, housing support, child care, addiction support)"}/>} 
              label="Resource program (food bank, clothing drives, housing support, child care, addiction support)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              value={"3"} 
              control={<Checkbox value={"Investment / infrastructure project (road repairs, trash collection, home repairs, animal control)"}/>} 
              label="Investment / infrastructure project (road repairs, trash collection, home repairs, animal control)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              value={"4"} 
              control={<Checkbox value={"Government / civic support funding  (law changes, access to technology, school reform, public services, public funding)"}/>} 
              label="Government / civic support funding  (law changes, access to technology, school reform, public services, public funding)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              control={<Checkbox value={"Community events / activations (social events, festivals, celebrations, city-wide cleaning days)"}/>} 
              value={"5"} 
              label="Community events / activations (social events, festivals, celebrations, city-wide cleaning days)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              control={<Checkbox value={"Media / promotional campaign (billboards, advertising, marketing, social media strategies)"}/>}
              value={"6"} 
              label="Media / promotional campaign (billboards, advertising, marketing, social media strategies)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setDescription([...description, e.target.value])
              }}
              value={"7"} 
              control={<Checkbox value={"Other"}/>} 
              label="Other" />
          </FormGroup>

          <TextField
            required="false"
            className={styles.form_input}
            id="outlined-required"
            label="Optional"
            onChange={async(e) => {
              await setSummary(e.target.value)
            }}
            defaultValue="Summary of project"
          />

          {/* Resources */}

          <FormGroup  className={styles.form_group}>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em', marginBottom: '1.5em'}}>What resources or support would you need to make your idea successful? (Select all that apply)</FormLabel>
            
            <FormControlLabel 
              onClick={async(e) => {
                await setResources([...resources, e.target.value])
                console.log(description)
              }}
              control={<Checkbox value={"Funding / money for supplies"}/>} 
              label="Funding / money for supplies" />
            <FormControlLabel 
              onClick={async(e) => {
                await setResources([...resources, e.target.value])
                console.log(description)
              }}
              control={<Checkbox value={"Changes in law / policies"}/>} 
              label="Changes in law / policies" />
            <FormControlLabel 
              onClick={async(e) => {
                await setResources([...resources, e.target.value])
                console.log(description)
              }}
              control={<Checkbox value={"Community support / adoption by your community"} />} 
              label="Community support / adoption by your community" />
            <FormControlLabel 
              onClick={async(e) => {
                await setResources([...resources, e.target.value])
                console.log(description)
              }}
              control={<Checkbox  value={"Expertise / professional support  (legal, management, technology, implementation, etc)"} />} 
              label="Expertise / professional support  (legal, management, technology, implementation, etc)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setResources([...resources, e.target.value])
                console.log(description)
              }}
              control={<Checkbox value={"Resources / materials (tools, property, building materials, etc)"}  />} 
              label="Resources / materials (tools, property, building materials, etc)" />
            <FormControlLabel 
              onClick={async(e) => {
                await setResources([...resources, e.target.value])
                console.log(description)
              }}
              control={<Checkbox value={"Other"} />} 
              label="Other" />
          </FormGroup>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}> What is the total estimated budget needed to successfully run your program / project? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={async(e) => {
                await setBudget(e.target.value)
                console.log(budget)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="less than $50,000 per year" control={<Radio />} label="less than $50,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="between $50,000 and $100,000 per year" control={<Radio />} label="between $50,000 and $100,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="between $100,000 and $250,000 per year" control={<Radio />} label="between $100,000 and $250,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="between $250,000 and $500,000 per year" control={<Radio />} label="between $250,000 and $500,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="between $500,000 and $1,000,000 per year" control={<Radio />} label="between $500,000 and $1,000,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="between $50,000 and $100,000 per year" control={<Radio />} label="between $50,000 and $100,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="over 1 million dollars per year" control={<Radio />} label="over 1 million dollars per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="I am not sure and would like assistance estimating the budget" control={<Radio />} label="I am not sure and would like assistance estimating the budget" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>How long do you think it will take for your project to make a noticeable change in your community?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={async(e) => {
                await setTime(e.target.value)
                console.log(time)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="Less than 6 - months" control={<Radio />} label="Less than 6 - months" />
              <FormControlLabel style={{marginTop: '1em'}} value="6 months to 1 year" control={<Radio />} label="6 months to 1 year" />
              <FormControlLabel style={{marginTop: '1em'}} value="1 - 3 years" control={<Radio />} label="1 - 3 years" />
              <FormControlLabel style={{marginTop: '1em'}} value="More than 3 years" control={<Radio />} label="More than 3 years" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}> Do you know of existing organizations, programs, or specific people that do this type of work already – that you would want to help with your solution?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={async(e) => {
                await setOrganisation(e.target.value)
                console.log(organisation)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value={true} control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

        </fieldset>
      </form>

      
      <button className={styles.submit} onClick={() => {updateSurveyResults()}}>Submit</button>
    </div>
  )
}