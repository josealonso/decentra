import { db } from '../../firebase/initFirebase'
import { doc, setDoc, Timestamp, GeoPoint } from "firebase/firestore"
import { useUser } from '../../firebase/useUser'
import 'firebase/firestore'

const WriteToCloudFirestore = () => {
  const { user } = useUser()
  const sendData = async () => {
    try {
        const userDoc = doc(db, "myCollection", user.id)
        await setDoc(userDoc, {
            string_data: 'Hi Dyshaun, hope your day is going well',
            number_data: 2,
            boolean_data: true,
            map_data: { stringInMap: 'Hi', numberInMap: 7 },
            array_data: ['text', 4],
            null_data: null,
            time_stamp: Timestamp.fromDate(new Date('December 17, 1995 03:24:00')),
            geo_point: new GeoPoint(34.714322, -131.468435)
        })
        alert('Data was successfully sent to cloud firestore!')
    } catch (error) {
        console.log(error)
        alert(error)
    }
  }


  return (
    <div>
      <button onClick={() => {sendData()}} style={{backgroundColor: '#303030', color: 'white', padding: '2em', marginTop: '2em', cursor: 'pointer'}}>
        Send data to firestore
      </button>
    </div>
  )
}

export default WriteToCloudFirestore