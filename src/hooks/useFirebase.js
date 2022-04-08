import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init'
const { useState, useEffect } = require("react")

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        console.log('singing in soon....');
        signInWithPopup(auth, provider)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return { user, signInWithGoogle };
}

export default useFirebase;