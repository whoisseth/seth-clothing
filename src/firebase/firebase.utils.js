import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyA4pDByzyjMc0kFUfUUFSZtVHMl7Uthy0s",
    authDomain: "seth-clothing-db.firebaseapp.com",
    projectId: "seth-clothing-db",
    storageBucket: "seth-clothing-db.appspot.com",
    messagingSenderId: "3842718601",
    appId: "1:3842718601:web:ca086cb352e0aa62e4ff58",
    measurementId: "G-1MX4Z7XVZS"
};
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firestore.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase