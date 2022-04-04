import React from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styles from './styles.module.scss'

export default function CommunitySurvey() {
  return (
    <div className={styles.form_container}>

      <div>

      </div>

      <form>
        <fieldset className={styles.form}>
          <TextField
            className={styles.form_input}
            id="outlined-required"
            label="Required"
            defaultValue="Email Here"
          />

        <TextField
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
          
          
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>Which would you say is the single biggest PROBLEM in your neighborhood currently? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '2em'}} value="1" control={<Radio />} label="Violent crimes (gun crimes, armed robberies, violence against women and/or children)" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Non-violent crimes (thefts, vandalism)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="OtherTrash + pests (collection and rodent control)" />

              <FormControlLabel style={{marginTop: '2em'}} value="1" control={<Radio />} label="Education (poor quality schools)" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Affordable housing (lack of quality and affordable places to live)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Drugs (addiction and/or selling)" />

              <FormControlLabel style={{marginTop: '2em'}} value="1" control={<Radio />} label="Transportation (accessible & affordable options to move throughout the region)" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Hate crimes / domestic terrorism / racism / homophobia / sexism / etc" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Homelessness / Poverty" />

              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Job accessibility and/or training" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Other..." />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Add Option" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>Do you have ideas of how to solve this problem – if you had the money to do it? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}>Do you currently volunteer with a community group or local non-profit?  </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>






          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>Do you currently attend civic association, town hall meetings, or similar community engagement activities?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}> Do you currently know and/or communicate with your local leaders, council members, or state representatives? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}> In 2022, do you know how much money will be dedicated to community impact projects by your government and local industries?  </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>



          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}>At any point in time, have you participated in deciding how public funds will be dedicated to community impact projects by your government and local industries?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}> Do you believe that public funds scheduled to be spent in 2022 by your local government and industries; will be used to fix some of the problems in your neighborhood? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Yes" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}> If you could vote on how to spend a portion of the public funds, but you had to attend in-person meetings to participate, would you want to?  </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Definitely" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Maybe" />
            </RadioGroup>
          </FormControl>




          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}>If you could vote on how to spend some of the public funds but had to attend video meetings to participate, would you want to?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Definitely" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Maybe" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}> If you could vote on how to spend a portion of the public funds, but you had to use a mobile app to participate, would you want to? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Definitely" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="No" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Maybe" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em',  color: 'black', marginLeft: '1em',}}> If you could be rewarded for your civic engagement, which reward would be most meaningful to you?  </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Money / Cash Rewards" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Coupons / Credits for Retail Stores (Groceries, Electronics, Clothing, etc)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Coupons / Credits for Public Services (Transportation, Utilities, Tax Credits, etc)" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Investment Credits for Savings (Stocks, Bonds, Cryptocurrency, etc.)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Having my voice heard, and seeing real change in my neighborhood is enough of a reward" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Option" />
            </RadioGroup>
          </FormControl>



          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}>If you could vote on how to spend a portion of public funds, what would be the most convenient method of voting for you? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Voting in person (It would be more convenient to meet and vote in person)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Voting via video conference (It would be more convenient using a zoom conference call for voting)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Voting via mobile app (It would be more convenient to vote from my phone using a mobile app)" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Voting by mail (It would be more convenient to fill out and mail in a ballot)" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="Voting online (It would be more convenient to vote on a website from my desktop or laptop)" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}>Are there any barriers currently preventing you from being engaged in community decision-making activities? (Select all that apply)</FormLabel>
            
            <FormControlLabel control={<Checkbox defaultChecked />} label="I don't know when / where meetings happen" />
            <FormControlLabel disabled control={<Checkbox />} label="I don't have time to attend meetings / voting sessions" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="I don't have transportation to attend in-person meetings" />
            <FormControlLabel disabled control={<Checkbox />} label="I don't have reliable internet to attend virtual meetings / voting sessions" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="I don't have any interest in participating in community decision making" />
            <FormControlLabel disabled control={<Checkbox />} label="I feel I am too uninformed to participate in community decision making" />
            <FormControlLabel disabled control={<Checkbox />} label="I don't experience any barriers - I am frequently engaged in community decision making" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Other" />
          </FormControl>



          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em',}}> How old are you? </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className={styles.form_group}
            >
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="17 or under" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="18 - 25" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="26 - 30" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="30 - 41" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="42 - 57" />
              <FormControlLabel style={{marginTop: '1em'}} value="3" control={<Radio />} label="58 - 67" />
              <FormControlLabel style={{marginTop: '1em'}} value="2" control={<Radio />} label="68+" />
            </RadioGroup>
          </FormControl>

          <FormGroup  className={styles.form_group}>
            <FormLabel id="demo-radio-buttons-group-label"  style={{marginTop: '2em', color: 'black', marginLeft: '1em', marginBottom: '1.5em'}}> Which description represents you best? (select all that apply) </FormLabel>
            
            <FormControlLabel control={<Checkbox defaultChecked />} label="I am a student" />
            <FormControlLabel disabled control={<Checkbox />} label="I work full-time" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="I work part-time" />
            <FormControlLabel disabled control={<Checkbox />} label="I am a parent/guardian" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="I have limited mobility (physical disability)" />
            <FormControlLabel disabled control={<Checkbox />} label="I do not work" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Other" />
          </FormGroup>

          <FormGroup>
            <FormLabel id="demo-radio-buttons-group-label" style={{marginTop: '2em', color: 'black', marginLeft: '1em', marginBottom: '1.5em'}}> Please share any questions, comments, or concerns (optional) </FormLabel>

            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 5 rows"
              style={{ width: '100%', marginTop: '1em', padding: '0.5em' }}
            />
          </FormGroup>
          
          
        </fieldset>

        <button className={styles.submit}>Submit</button>
      </form>
    </div>
  )
}
