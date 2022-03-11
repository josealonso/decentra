import { db } from "../../firebase/initFirebase"
import { doc, getDoc } from "firebase/firestore"
import { useUser } from '../../firebase/useUser'

const ReadDataFromCloudFirestore = () => {
    const { user } = useUser()
    const readData = async () => {
        try {
            const userDoc = doc(db, "myCollection", user.id)
            await getDoc(userDoc).then((doc) => {
                if (doc.exists()) {
                    console.log(doc.data())
                    alert(doc.data().string_data)
                }
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <button onClick={readData}  style={{backgroundColor: '#303030', color: 'white', padding: '2em', marginTop: '2em', cursor: 'pointer'}}>Read Data From Cloud Firestore</button>
        </div>
    )
}

export default ReadDataFromCloudFirestore