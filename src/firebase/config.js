import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDrHzxznJd0aCDbts1N-iz2KydkI7oiIa4",
    authDomain: "rojure-5b74f.firebaseapp.com",
    projectId: "rojure-5b74f",
    storageBucket: "rojure-5b74f.appspot.com",
    messagingSenderId: "1057019296773",
    appId: "1:1057019296773:web:82ec70c838213ba359b06c"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }