import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import styles from './styles.module.scss'

export default function ProposalSurvey() {

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

  const displayValues = () => {
    console.log(
      'email ', email,
      'problem  ', problem,
      'identify as ', identify,
      'title ', title,
      'description ', description,
      'summary ', summary,
      'resources ', resources,
      'bduget ', budget,
      'time ', time,
      'organisation ', organisation,
    )
  }

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
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
             
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>The community problem that I am solving for is</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={(e) => {
                setProblem(e.target.value)
              }}
            >
              <FormControlLabel style={{marginTop: '2em'}} value="community-problem-1" control={<Radio />} label="Violent crimes (gun crimes, armed robberies, violence against women and/or children)" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-2" control={<Radio />} label="Non-violent crimes (thefts, vandalism)" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-3" control={<Radio />} label="OtherTrash + pests (collection and rodent control)" />
              <FormControlLabel style={{marginTop: '2em'}} value="community-problem-4" control={<Radio />} label="Education (poor quality schools)" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-5" control={<Radio />} label="Affordable housing (lack of quality and affordable places to live)" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-6" control={<Radio />} label="Drugs (addiction and/or selling)" />
              <FormControlLabel style={{marginTop: '2em'}} value="community-problem-7" control={<Radio />} label="Transportation (accessible & affordable options to move throughout the region)" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-8" control={<Radio />} label="Neighbor relations (racism, bigotry, social disturbances)" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-9" control={<Radio />} label="Homelessness / Poverty" />
              <FormControlLabel style={{marginTop: '1em'}} value="community-problem-10" control={<Radio />} label="Job accessibility and/or training" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>I identify as a(n)</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={(e) => {
                setIdentify(e.target.value)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="identify-as-1" control={<Radio />} label="Individual Leader / Community Member (solo problem solver)" />
              <FormControlLabel style={{marginTop: '1em'}} value="identify-as-2" control={<Radio />} label="Group of Leaders / Community Members (non-registered team)" />
              <FormControlLabel style={{marginTop: '1em'}} value="identify-as-3" control={<Radio />} label="Registered Non-profit organization leader / representative" />
              <FormControlLabel style={{marginTop: '1em'}} value="identify-as-4" control={<Radio />} label="Registered private company leader / representative" />
            </RadioGroup>
          </FormControl>

          <TextField
            required="false"
            className={styles.form_input}
            id="outlined-required"
            label="Optional"
            defaultValue="Title of project"
            onChange={(e) => {
              setTitile(e.target.value)
            }}
          />

          <FormGroup  className={styles.form_group}>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em', marginBottom: '1.5em'}}> Which description best represents your idea/solution? (select all that apply) </FormLabel>
            <FormControlLabel 
              onClick={(e) => {
                setDescription(e.target.value)
              }}
              control={<Checkbox defaultChecked />} 
              label="Skills teaching program (classes, workshops, training, apprenticeship, work opportunities)" />
            <FormControlLabel 
               onClick={(e) => {
                setDescription(e.target.value)
              }}
              control={<Checkbox />} 
              label="Resource program (food bank, clothing drives, housing support, child care, addiction support)" />
            <FormControlLabel 
              onClick={(e) => {
                setDescription(e.target.value)
              }}
              control={<Checkbox defaultChecked />} 
              label="Investment / infrastructure project (road repairs, trash collection, home repairs, animal control)" />
            <FormControlLabel 
              onClick={(e) => {
                setDescription(e.target.value)
              }}
              disabled 
              control={<Checkbox />} label="Government / civic support funding  (law changes, access to technology, school reform, public services, public funding)" />
            <FormControlLabel 
              onClick={(e) => {
                setDescription(e.target.value)
              }}
              control={<Checkbox defaultChecked />} 
              label="Community events / activations (social events, festivals, celebrations, city-wide cleaning days)" />
            <FormControlLabel 
              onClick={(e) => {
                setDescription(e.target.value)
              }}
              disabled 
              control={<Checkbox />} 
              label="Media / promotional campaign (billboards, advertising, marketing, social media strategies)" />
            <FormControlLabel 
              onClick={(e) => {
                setDescription(e.target.value)
              }}
              control={<Checkbox defaultChecked />} 
              label="Other" />
          </FormGroup>

          <TextField
            required="false"
            className={styles.form_input}
            id="outlined-required"
            label="Optional"
            onChange={(e) => {
              setSummary(e.target.value)
            }}
            defaultValue="Summary of project"
          />


          <FormGroup  className={styles.form_group}>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em', marginBottom: '1.5em'}}>What resources or support would you need to make your idea successful? (Select all that apply)</FormLabel>
            
            <FormControlLabel 
              onClick={(e) => {
                setResources(e.target.value)
                console.log(description)
              }}
              control={<Checkbox defaultChecked />} 
              label="Funding / money for supplies" />
            <FormControlLabel 
              onClick={(e) => {
                setResources(e.target.value)
                console.log(description)
              }}
              disabled 
              control={<Checkbox />} 
              label="Changes in law / policies" />
            <FormControlLabel 
              onClick={(e) => {
                setResources(e.target.value)
                console.log(description)
              }}
              control={<Checkbox defaultChecked />} 
              label="Community support / adoption by your community" />
            <FormControlLabel 
              onClick={(e) => {
                setResources(e.target.value)
                console.log(description)
              }}
              disabled 
              control={<Checkbox />} 
              label="Expertise / professional support  (legal, management, technology, implementation, etc)" />
            <FormControlLabel 
              onClick={(e) => {
                setResources(e.target.value)
                console.log(description)
              }}
              control={<Checkbox defaultChecked />} 
              label="Resources / materials (tools, property, building materials, etc)" />
            <FormControlLabel 
              onClick={(e) => {
                setResources(e.target.value)
                console.log(description)
              }}
              control={<Checkbox defaultChecked />} 
              label="Other" />
          </FormGroup>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}> What is the total estimated budget needed to successfully run your program / project? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={(e) => {
                setBudget(e.target.value)
                console.log(budget)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-1" control={<Radio />} label="less than $50,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-2" control={<Radio />} label="between $50,000 and $100,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-3" control={<Radio />} label="between $100,000 and $250,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-4" control={<Radio />} label="between $250,000 and $500,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-5" control={<Radio />} label="between $500,000 and $1,000,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-6" control={<Radio />} label="between $50,000 and $100,000 per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-7" control={<Radio />} label="over 1 million dollars per year" />
              <FormControlLabel style={{marginTop: '1em'}} value="budget-estimation-8" control={<Radio />} label="I am not sure and would like assistance estimating the budget" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>How long do you think it will take for your project to make a noticeable change in your community?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={(e) => {
                setTime(e.target.value)
                console.log(time)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="time-estimation-1" control={<Radio />} label="Less than 6 - months" />
              <FormControlLabel style={{marginTop: '1em'}} value="time-estimation-2" control={<Radio />} label="6 months to 1 year" />
              <FormControlLabel style={{marginTop: '1em'}} value="time-estimation-3" control={<Radio />} label="1 - 3 years" />
              <FormControlLabel style={{marginTop: '1em'}} value="time-estimation-4" control={<Radio />} label="More than 3 years" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}> Do you know of existing organizations, programs, or specific people that do this type of work already – that you would want to help with your solution?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              className={styles.form_group}
              onChange={(e) => {
                setOrganisation(e.target.value)
                console.log(organisation)
              }}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="existing-1" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="existing-2" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

        </fieldset>
      </form>

      
      <button className={styles.submit} onClick={() => {displayValues()}}>Submit</button>
    </div>
  )
}