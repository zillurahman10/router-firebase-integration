import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init'
const { useState, useEffect } = require("react")

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        console.log('singing in soon....');
        signInWithPopup(auth, provider)
            .then(res => {
                const user = res.user
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, signInWithGoogle, handleSignOut };
}

export default useFirebase;